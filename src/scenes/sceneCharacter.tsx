import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

type StadiumLight = {
  x: number;
  y: number;
  intensity: number;
  range: number;
  color: string;
};

type CharacterLighting = {
  leftLight: number;
  rightLight: number;
  burn: number;
  leftColor: string;
  rightColor: string;
};

const CharacterLightingContext = createContext<CharacterLighting>({
  leftLight: 0,
  rightLight: 0,
  burn: 0,
  leftColor: "#b9e4ff",
  rightColor: "#b9e4ff",
});

export const useCharacterLighting = () =>
  useContext(CharacterLightingContext);

type CharacterIntegration = {
  contactShadow?: boolean;
  ambientLight?: "room" | "daylight" | "stadiumNight";
  keyLight?: "deskLamp" | "sun" | "stadium";
  rimLight?: "window";
  castShadow?: "streetSun" | "stadium";

  // Posities in dezelfde scènecoördinaten als x en y.
  stadiumLights?: {
    left: StadiumLight;
    right: StadiumLight;
  };
};

type Props = {
  x: number;
  y: number;
  width: number;
  groundX?: number;
  groundY?: number;
  scale?: number;
  zIndex?: number;
  children: ReactNode;
  integration?: CharacterIntegration;
};

const defaultStadiumLights = {
  left: {
    x: 120,
    y: 150,
    intensity: 0.9,
    range: 1400,
    color: "#b9e4ff",
  },
  right: {
    x: 1800,
    y: 150,
    intensity: 1,
    range: 1400,
    color: "#c8eaff",
  },
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const getLightStrength = (
  light: StadiumLight,
  targetX: number,
  targetY: number,
) => {
  const distance = Math.hypot(
    targetX - light.x,
    targetY - light.y,
  );

  const range = Math.max(light.range, 1);

  return clamp(
    light.intensity / (1 + (distance / range) ** 2),
    0,
    1,
  );
};

export const SceneMaster = ({
  x,
  y,
  width,
  groundX,
  groundY,
  scale = 1,
  zIndex = 0,
  children,
  integration,
}: Props) => {
  const stadiumEnabled =
    integration?.ambientLight === "stadiumNight" ||
    integration?.keyLight === "stadium" ||
    integration?.castShadow === "stadium";

  const lights =
    integration?.stadiumLights ?? defaultStadiumLights;

  const localGroundX = groundX ?? width / 2;
  const localGroundY = groundY ?? width * 2.7;

  // Licht meten bij het midden van de zichtbare persoon.
  const sampleX = x + localGroundX * scale;
  const sampleY = y + localGroundY * 0.45 * scale;

  const leftLight = stadiumEnabled
    ? getLightStrength(lights.left, sampleX, sampleY)
    : 0;

  const rightLight = stadiumEnabled
    ? getLightStrength(lights.right, sampleX, sampleY)
    : 0;

  const lighting: CharacterLighting = {
    leftLight,
    rightLight,
    burn: stadiumEnabled
      ? clamp(0.65 - Math.max(leftLight, rightLight) * 0.35, 0.2, 0.65)
      : 0,
    leftColor: lights.left.color,
    rightColor: lights.right.color,
  };

  const ambientFilter =
    integration?.ambientLight === "stadiumNight"
      ? "brightness(0.9) saturate(0.88)"
      : integration?.ambientLight === "daylight"
        ? "brightness(0.97) saturate(0.92) sepia(0.05)"
        : integration?.ambientLight === "room"
          ? "brightness(0.96) saturate(0.93) sepia(0.12)"
          : "";

  const keyLightFilter =
    integration?.keyLight === "sun"
      ? "brightness(1.04) sepia(0.04)"
      : integration?.keyLight === "deskLamp"
        ? "brightness(1.03) sepia(0.08)"
        : "";

  const filters = [ambientFilter, keyLightFilter]
    .filter(Boolean)
    .join(" ");

  return (
    <CharacterLightingContext.Provider value={lighting}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          zIndex,
          isolation: "isolate",
          transformOrigin: "top left",
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
        }}
      >
        {/* Stadium: elke lichtbron werpt een tegengestelde schaduw. */}
        {integration?.castShadow === "stadium" &&
          [
            { light: lights.left, strength: leftLight },
            { light: lights.right, strength: rightLight },
          ].map(({ light, strength }, index) => {
            const feetWorldX = x + localGroundX * scale;
            const awayFromLight = feetWorldX - light.x;
            const direction = awayFromLight >= 0 ? 1 : -1;

            const shadowLength =
              width * clamp(
                Math.abs(awayFromLight) / Math.max(light.range, 1),
                0.35,
                1.8,
              );

            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: localGroundX,
                  top: localGroundY,
                  width: shadowLength,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: "#061020",
                  opacity: strength * 0.22,
                  filter: "blur(5px)",
                  transformOrigin: "0% 50%",
                  transform: `
                    translateY(-50%)
                    rotate(${direction === 1 ? 12 : 168}deg)
                  `,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
            );
          })}

        {integration?.castShadow === "streetSun" && (
          <div
            style={{
              position: "absolute",
              top: groundY ?? "98.5%",
              left: localGroundX,
              width: "110%",
              height: 12,
              borderRadius: "50%",
              backgroundColor: "rgba(35, 29, 25, 0.22)",
              filter: "blur(5px)",
              transform: "translateY(-50%) rotate(-18deg)",
              transformOrigin: "0% 50%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}

        {integration?.contactShadow && (
          <div
            style={{
              position: "absolute",
              top: groundY ?? "98.5%",
              left: localGroundX,
              width: "42%",
              height: 9,
              borderRadius: "50%",
              backgroundColor: stadiumEnabled
                ? "rgba(4, 10, 22, 0.6)"
                : "rgba(24, 18, 14, 0.48)",
              filter: "blur(3px)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}

        <div
          style={{
            position: "relative",
            zIndex: 1,
            filter: filters || undefined,
          }}
        >
          {children}
        </div>
      </div>
    </CharacterLightingContext.Provider>
  );
};