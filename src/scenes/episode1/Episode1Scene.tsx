import { YusufDeskShot } from "../../shots/DeskShot";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { idleAnimation } from "../../animations/idleAnimation";
import { SceneMaster } from "../sceneCharacter";
import { interpolate, Sequence, useCurrentFrame } from "remotion";
import { slideIn } from "../../animations/slideIn";
import { walkCycle } from "../../animations/walkCycle";
import { talkingAnimation } from "../../animations/TalkingAnimation";
import { staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { getMouthPose, type MouthCue } from "../../animations/lipSync";
import { Camera } from "../../components/Camera";
import { eyeBrowAnimation } from "../../animations/eyebrowAnimation";
import { eyeLookingAnimation } from "../../animations/EyeLookAnimation";
export const Episode1Scene = () => {
    const frame = useCurrentFrame();
    const idlePose = idleAnimation(frame,120);
    const actingFrame = Math.max(0, frame - 345);
const eyebrowPose = eyeBrowAnimation(actingFrame, 60);
const eyeLookPose = eyeLookingAnimation(actingFrame, 60);
const talkTalkMotion = talkingAnimation(actingFrame, 60);
        
const farmalaMouthCues: MouthCue[] = [
  { startFrame: 367, endFrame: 372, pose: "rest" },

  { startFrame: 372, endFrame: 377, pose: "E" },
  { startFrame: 377, endFrame: 382, pose: "N" },
  { startFrame: 382, endFrame: 388, pose: "A" },
  { startFrame: 388, endFrame: 392, pose: "rest" },
  { startFrame: 392, endFrame: 397, pose: "MBP" },
  { startFrame: 397, endFrame: 403, pose: "A" },
  { startFrame: 403, endFrame: 409, pose: "L" },
  { startFrame: 409, endFrame: 415, pose: "E" },
  { startFrame: 415, endFrame: 421, pose: "E" },
  { startFrame: 421, endFrame: 427, pose: "N" },
  { startFrame: 427, endFrame: 433, pose: "A" },
  { startFrame: 433, endFrame: 439, pose: "MBP" },
  { startFrame: 439, endFrame: 445, pose: "E" },
  { startFrame: 445, endFrame: 451, pose: "MBP" },
  { startFrame: 451, endFrame: 457, pose: "O" },
  { startFrame: 457, endFrame: 463, pose: "A" },
  { startFrame: 463, endFrame: 469, pose: "E" },
  { startFrame: 469, endFrame: 474, pose: "MBP" },

  { startFrame: 474, endFrame: 525, pose: "rest" },

  { startFrame: 525, endFrame: 531, pose: "A" },
  { startFrame: 531, endFrame: 536, pose: "G" },
  { startFrame: 536, endFrame: 541, pose: "A" },
  { startFrame: 541, endFrame: 545, pose: "F" },
  { startFrame: 545, endFrame: 549, pose: "TH" },
];
    // const walkPose = walkCycle(frame,240)
    const farmalaIdle = farmalaPose(idlePose); 
    const farmalaMouthPose = getMouthPose(frame,farmalaMouthCues) 
    const farmalaTalking = {
        ...farmalaIdle,
        ...talkTalkMotion,
        ...eyebrowPose,
        ...eyeLookPose,
        mouthPose: farmalaMouthPose,
        
    }
    
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
const scene1Camera = {
  pushIn: {
    startFrame: 0,
    endFrame: 180,
    startScale: 1,
    endScale: 1.08,
  },
  farmalaFocus: {
    startFrame: 240,
    holdStartFrame:180,
    endFrame: 329,
    startX: 0,
    endX: 60,
  },
};
const cameraScale = interpolate(frame, [scene1Camera.pushIn.startFrame, scene1Camera.pushIn.endFrame], [scene1Camera.pushIn.startScale, scene1Camera.pushIn.endScale], {
  extrapolateRight: "clamp",
});
const cameraX = interpolate(
  frame,
 [
  scene1Camera.farmalaFocus.holdStartFrame,
  scene1Camera.farmalaFocus.startFrame,
  scene1Camera.farmalaFocus.endFrame,
  345,
]
  ,[
    scene1Camera.farmalaFocus.startX,
    scene1Camera.farmalaFocus.startX,
    scene1Camera.farmalaFocus.endX,
    scene1Camera.farmalaFocus.endX,
  ],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  },
);
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
        <>
        <Sequence from={345}>
              <Audio
               src={staticFile("VoiceOver/Farmala_Takes/No one cares.m4a")}
              />
            </Sequence>
        <Camera x={cameraX} y={0} scale={cameraScale}>
        <YusufDeskShot>
            
                
            {frame >= 240 && frame < 330 &&(
            <SceneMaster x={farmalaX} y={120} width={260} scale={0.9} zIndex={1}>
                <FarmalaCharacter  {...farmalaPose(farmalaWalk)}  />
            </SceneMaster>
            )}
            {frame >= 330 && frame < 345 && (
  <SceneMaster x={1180} y={120} width={260} scale={0.9} zIndex={1}>
    <FarmalaCharacter {...farmalaPose(farmalaSettling)} />
  </SceneMaster>
)}
{frame >= 345 && (
  <SceneMaster x={1180} y={120} width={260} scale={0.9} zIndex={1}>
    <FarmalaCharacter {...farmalaTalking} />
  </SceneMaster>
)}

        </YusufDeskShot>
        </Camera>
        </>
    )
}