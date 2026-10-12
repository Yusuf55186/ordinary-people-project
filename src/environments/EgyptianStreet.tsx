type StreetProps = {
  x?: number;
  y?: number;
  scale?: number;
  cameraX?: number;
  cameraY?: number;
};
import { Img, staticFile } from "remotion";

const streetPath = "assets/Environment/Egyptian_street_assets_v1";
const speed = {
  "01-sky-far-depth.png": 0.05,
  "04-ground-and-walkable-plane.png": 1,
  "02-left-street-wall.png": 0.30,
  "03-right-street-wall.png": 0.30,
  "05-street-props.png": 0.10,
}
const layers : (keyof typeof speed)[] = [
  "01-sky-far-depth.png",
  "02-left-street-wall.png",
  "03-right-street-wall.png",
  "05-street-props.png",
  "04-ground-and-walkable-plane.png"
];


export const EgyptianStreet = ({ x = 0, y = 0, scale = 1, cameraX = 0, cameraY = 0 }: StreetProps) => {
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
      {layers.map((layer, index) => {
         const correctionX = cameraX * (1 - speed[layer]);
         return (
        <Img
          key={layer}
          src={staticFile(`${streetPath}/${layer}`)}
          style={{
            position: "absolute",
            top:0,
            left:"-20%",
            width: "140%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            transform: `translate(${correctionX}px)`
          
          }}
        />
         )
      }
        )}
      
    </div>
  );
};
