
import { interpolate, useCurrentFrame } from "remotion";
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
return (
    <YusufDeskShot
     hesitation={hesitation} 
    />
)
}
