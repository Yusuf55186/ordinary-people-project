import { interpolate, useCurrentFrame } from "remotion";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot";
export const Episode1Scene3 = () => {
    const frame = useCurrentFrame();
    const pulseFrame = Math.max(0, frame - 20);
    const buttonPopUp = interpolate(
        frame,
        [0,12,20],
        [0.75,1.12,1],
        {
            extrapolateRight : "clamp"
        }
    )
    const glow = interpolate(
        Math.sin(pulseFrame / 5),
  [-1, 1],
  [12, 28],
    )
    return (
        <Camera x={-230} y={-70} scale={1.7}>
        <YusufDeskShot>
            <div
  style={{
    position: "absolute",
    left: 765,
    top: 430,
    padding: "12px 24px",
    backgroundColor: "red",
    color: "white",
    borderRadius: 8,
    fontFamily: "Arial",
    fontWeight: 700,
    transform: `scale(${buttonPopUp})`,
    boxShadow: `0 0 ${glow}px rgba(255,66,66,0.9)`,
    transformOrigin: "center"
  }}
>
  Publish
</div>
        </YusufDeskShot>
        </Camera>
    )
}