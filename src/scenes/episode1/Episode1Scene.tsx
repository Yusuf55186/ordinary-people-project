import { YusufDeskShot } from "../../shots/DeskShot";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { idleAnimation } from "../../animations/idleAnimation";
import { SceneMaster } from "../sceneCharacter";
import { interpolate, useCurrentFrame } from "remotion";
import { slideIn } from "../../animations/slideIn";
import { walkCycle } from "../../animations/walkCycle";

export const Episode1Scene = () => {
    const frame = useCurrentFrame();
    const idlePose = idleAnimation(frame,120);
    // const walkPose = walkCycle(frame,240)
    const farmalaIdle = farmalaPose(idlePose); 
const farmalaWalk = walkCycle(frame - 240, 60,{
    kneeAmplitude: 12,
  hipAmplitude: 0.6,
  bodyBounce: 2,
  armSwingAmplitude: 5,
});
const settleAmount = interpolate(frame,[330,345],[1,0],{
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
const farmalaSettling = {
  ...farmalaWalk,
  leftKneeRotation: farmalaWalk.leftKneeRotation * settleAmount,
  rightKneeRotation: farmalaWalk.rightKneeRotation * settleAmount,
  leftHipRotation: farmalaWalk.leftHipRotation * settleAmount,
  rightHipRotation: farmalaWalk.rightHipRotation * settleAmount,
  bodyY: farmalaWalk.bodyY * settleAmount,
  leftArmSwing: farmalaWalk.leftArmSwing * settleAmount,
  rightArmSwing: farmalaWalk.rightArmSwing * settleAmount,
};

    const farmalaX = slideIn({
        frame,
        startFrame: 240,
endFrame: 330,
fromX: 1750,
toX: 1180,
    });
    
    return (
        <YusufDeskShot>
            {frame >= 240 && frame < 330 &&(
            <SceneMaster x={farmalaX} y={120} width={260} scale={0.9} zIndex={1}>
                <FarmalaCharacter  {...farmalaPose(farmalaWalk)}  />
            </SceneMaster>
            )}
            {frame >= 330 && 345 && (
  <SceneMaster x={1180} y={120} width={260} scale={0.9} zIndex={1}>
    <FarmalaCharacter {...farmalaPose(farmalaSettling)} />
  </SceneMaster>
)}
{frame >= 345 && (
  <SceneMaster x={1180} y={120} width={260} scale={0.9} zIndex={1}>
    <FarmalaCharacter {...farmalaIdle} />
  </SceneMaster>
)}

        </YusufDeskShot>
    )
}