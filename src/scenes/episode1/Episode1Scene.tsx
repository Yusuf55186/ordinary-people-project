import { YusufDeskShot } from "../../shots/DeskShot";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
// import { idleAnimation } from "../../animations/idleAnimation";
import { SceneMaster } from "../sceneCharacter";
import { useCurrentFrame } from "remotion";
import { slideIn } from "../../animations/slideIn";
import { walkCycle } from "../../animations/walkCycle";

export const Episode1Scene = () => {
    const frame = useCurrentFrame();
    // const idlePose = idleAnimation(frame,120);
    // const walkPose = walkCycle(frame,240)
    // const farmalaIdle = farmalaPose(idlePose); 
const farmalaWalk = walkCycle(frame - 240, 60);   
    const farmalaX = slideIn({
        frame,
        startFrame: 240,
        endFrame: 300,
        fromX:1500,
        toX:1180,
    });
    
    return (
        <YusufDeskShot>
            {frame >= 240 &&(
            <SceneMaster x={farmalaX} y={120} width={260} scale={0.9} zIndex={1}>
                <FarmalaCharacter  {...farmalaPose(farmalaWalk)}  />
            </SceneMaster>
            )}
        </YusufDeskShot>
    )
}