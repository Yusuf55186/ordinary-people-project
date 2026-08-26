import { Audio  } from "@remotion/media";
import {  staticFile, useCurrentFrame } from "remotion";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { SceneMaster } from "../sceneCharacter";
import { idleAnimation } from "../../animations/idleAnimation";
import { BlinkingAnimation } from "../../animations/BlinkingAnimation";
import { farmalaPose } from "../../animations/FarmalaPose";
import { talkingAnimation } from "../../animations/TalkingAnimation";
import { getMouthPose, type MouthCue } from "../../animations/lipSync";
import { farmalaTalkingProfile } from "../../animations/FarmalaPose";
import { eyeBrowAnimation } from "../../animations/eyebrowAnimation";
import { eyeLookingAnimation } from "../../animations/EyeLookAnimation";



export const Episode1Scene4 = () => {
    const scene4MouthCues: MouthCue[] = [
  { startFrame: 76, endFrame: 79, pose: "MBP" },
  { startFrame: 79, endFrame: 85, pose: "A" },
  { startFrame: 85, endFrame: 90, pose: "MBP" },
  { startFrame: 90, endFrame: 96, pose: "A" },
  { startFrame: 96, endFrame: 99, pose: "L" },

  { startFrame: 104, endFrame: 109, pose: "E" },

  { startFrame: 113, endFrame: 117, pose: "F" },
  { startFrame: 117, endFrame: 122, pose: "E" },
  { startFrame: 125, endFrame: 129, pose: "N" },
  { startFrame: 129, endFrame: 134, pose: "A" },
  { startFrame: 134, endFrame: 139, pose: "F" },
  { startFrame: 139, endFrame: 147, pose: "A" },
];
    const frame = useCurrentFrame();
//     const talkPose = {
//         headRotation: [0, -2, 5, 5, 0],
// bodyY: [0, -4, 0],

// leftArmSwing: [0, 18, 18, 0, 0],
// leftElbowRotation: [0, 28, 28, 0, 0],
// leftHandRotation: [0, 12, 12, 0, 0],

// rightArmSwing: [0, -38, -38, 0, 0],
// rightElbowRotation: [0, -8, -8, 0, 0],
//     }
    const mouthPose = getMouthPose(frame,scene4MouthCues)
    
    const farmalaActing = farmalaPose({
         ...idleAnimation(frame, 120),
  ...talkingAnimation(frame, 60,farmalaTalkingProfile),
  ...BlinkingAnimation(frame,60),
  mouthPose,
  ...eyeBrowAnimation(frame,60),
  ...eyeLookingAnimation(frame,60)

});
    return (
        <>
        <Audio src={staticFile("VoiceOver/Farmala_Takes/What are you doing to yourself.m4a")}
       />
       
       <Camera x={-230} y={-70} scale={1.75}>
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
    transform: `scale(20px)`,
    boxShadow: `0 0 20 rgba(255,66,66,0.9)`,
    transformOrigin: "center"
  }}
>
  Publish
</div>
        </YusufDeskShot>
<SceneMaster x={1250} y={120} width={260} scale={0.9} zIndex={2}>
        <FarmalaCharacter {...farmalaActing} />
        </SceneMaster>
       </Camera>
       </>
    )
}