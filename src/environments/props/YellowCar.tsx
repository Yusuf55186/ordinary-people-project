import { staticFile, Img } from "remotion";
type IntegrationProps = {
  contactShadow?: boolean;
  castShadow?: boolean;
};
type Props = {
  x: number;
  y: number;
  width?: number;
  scale?: number;
  zIndex?: number;
  integration?: IntegrationProps;
};
export const YellowCar = ({
  x,
  y,
  width = 700,
  scale = 1,
  zIndex = 0,
  integration,
}: Props) => {
  const imageUrl =
    "assets/Episode3/Street/props/yellow_car_front_view_sedan.png";
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          transform: `scale(${scale})`,
          zIndex,
          transformOrigin: "center bottom",
        }}
      >
        <div
          style={{
            position: "relative",
            width,
          }}
        >
          {integration?.contactShadow && (
            <>
              {/* Left tire */}
              <div
                style={{
                  position: "absolute",
                  left: width * 0.6,
                  top: 1100,
                  width: width * 0.13,
                  height: 9,
                  borderRadius: "50%",
                  background: "rgba(0, 0, 0, 0.66)",
                  filter: "blur(3px)",
                  zIndex: 10,
                }}
              />

              {/* Right tire */}
              <div
                style={{
                  position: "absolute",
                  left: width * 1.5,
                  top: 1100,
                  width: width * 0.13,
                  height: 9,
                  borderRadius: "50%",
                  background: "rgba(0, 0, 0, 0.66)",
                  filter: "blur(3px)",
                  zIndex: 10,
                }}
              />
            </>
          )}
          {integration?.castShadow && (
            <div
              style={{
                position: "absolute",
                left: width * 0.6,
                top: 1110, // Startpunt: net onder je contact shadows
                width: width * 0.76,
                height: 50,
                borderRadius: "50%",
                background: "rgba(25, 20, 15, 0.22)",
                filter: "blur(18px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        <Img
          src={staticFile(imageUrl)}
          style={{
            width,
            display: "block",
          }}
        />
      </div>
    </div>
  );
};
