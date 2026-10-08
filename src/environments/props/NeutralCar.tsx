import { Img,staticFile} from 'remotion';
export const NeutralCar = () => {
    <Img
  src={staticFile(
    "assets/Episode3/Street/traffic/neutral-car.rear.v1.png"
  )}
  style={{
    position: "absolute",
    left: 470,
    top: 245,
    width: 110,
  }}
/>
}