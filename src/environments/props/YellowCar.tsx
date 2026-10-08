import { staticFile, Img } from "remotion";
type Props = {
  x: number;
  y: number;
  width?: number;
  scale?: number;
  zIndex?: number;
};
export const YellowCar = ({
  x,
  y,
  width = 700,
  scale = 1,
  zIndex = 0,
}: Props) => {
  const imageUrl = "assets/Episode3/Street/props/yellow_car_front_view_sedan.png";
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${scale})`,
        zIndex,
        transformOrigin: "center center",
      }}
    >
      <Img
        src={staticFile(imageUrl)}
        style={{
          width,
          display: "block",
          translate: "420.1px 511.1px",
        }}
      />
    </div>
  );
};
