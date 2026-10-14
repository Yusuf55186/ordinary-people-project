type StreetProps = {
  x?: number;
  y?: number;
  scale?: number;
  cameraX?: number;
  cameraY?: number;
  groundBend?: number;
};
import { Img, staticFile, useCurrentFrame } from "remotion";

const streetPath = "assets/Environment/Egyptian_street_assets_v1";
const speed = {
  "01-sky-far-depth.png": 0.05,
  "04-ground-and-walkable-plane.png": 1,
  "02-left-street-wall.png": 0.3,
  "03-right-street-wall.png": 0.3,
  "05-street-props.png": 0.1,
};
const layers: (keyof typeof speed)[] = [
  "01-sky-far-depth.png",
  "02-left-street-wall.png",
  "03-right-street-wall.png",
  "05-street-props.png",
  "04-ground-and-walkable-plane.png",
];

export const EgyptianStreet = ({
  x = 0,
  y = 0,
  scale = 1,
  cameraX = 0,
  groundBend = 0,
}: StreetProps) => {
  const frame = useCurrentFrame();
  const zigzag = Math.sin(frame * 0.12) * 8 * groundBend;

  const heavyWave = Math.sin(frame * 0.06) * 10 * Math.max(0, groundBend - 1);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        inset: 0,
        overflow: "visible",
        zIndex: 0,
      }}
    >
      {layers.map((layer) => {
        const isGround = layer === "04-ground-and-walkable-plane.png";
        const correctionX = cameraX * (1 - speed[layer]);
        const groundTransform = isGround
          ? `
      translateX(${correctionX - 3}px)
      perspective(1200px)
      rotateX(${groundBend * 12 + heavyWave}deg)
      skewX(${groundBend * 8 + zigzag}deg)
      scaleY(${1 + groundBend * 0.18})
      scaleX(${1 + Math.max(0, groundBend - 1) * 0.08})
    `
          : `translateX(${correctionX - 3}px)`;
        return (
          <Img
            key={layer}
            src={staticFile(`${streetPath}/${layer}`)}
            style={{
              position: "absolute",
              top: 0,
              left: "-20%",
              width: "140%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
              transform: groundTransform,
              scale: 1.16,
              translate: "150px 0px",
            }}
            durationInFrames={3494}
          />
        );
      })}
    </div>
  );
};
