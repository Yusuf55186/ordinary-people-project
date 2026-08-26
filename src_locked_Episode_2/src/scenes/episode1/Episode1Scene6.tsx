import { YusufDeskShot } from "../../shots/DeskShot";
import { YoutubeFeed } from "../../components/YoutubeFeed";
import { UiCursor } from "../../components/UiCursor";
import { Camera } from "../../components/Camera";
import { interpolate, useCurrentFrame } from "remotion";
export const Episode1Scene6 = () => {
    const frame = useCurrentFrame();
    const cursorY = interpolate(frame, [0, 20, 55, 90], [462, 444, 474, 451], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
    });
    const cursorX = interpolate(
        frame,
        [0,20,55,90],
        [726, 742, 818, 910],
        {
            extrapolateLeft:"clamp",
            extrapolateRight:"clamp"
        }
        
    )
    return (
        <Camera x={0} y={0} scale={1}>
        <YusufDeskShot retreat={1}>
        <UiCursor x={cursorX} y={cursorY} scale={0.65}></UiCursor>
        <YoutubeFeed x={645} y={420} scale={0.57} /> 
        </YusufDeskShot>
        </Camera>
         
        
        
    )
}