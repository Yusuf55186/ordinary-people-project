
import { interpolate, useCurrentFrame } from "remotion";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot";
export const Episode1Scene2 = () => {
const frame = useCurrentFrame();
const hesitation = interpolate(frame,
    [0,18,78,120],
    [0,1,1,0],{
        extrapolateLeft:"clamp",
        extrapolateRight:"clamp"
    }
)
const cameraScale = interpolate(frame, [0, 60, 120], [1.25, 1.25, 1.29], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});

const cameraX = interpolate(frame, [0, 60], [30, 0], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
return (
    <Camera x={cameraX} y={0} scale={cameraScale}>
    <YusufDeskShot
    
     hesitation={hesitation} 
    />
    </Camera>
)
}
