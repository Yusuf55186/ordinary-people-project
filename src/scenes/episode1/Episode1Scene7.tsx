import { YusufDeskShot } from "../../shots/DeskShot";
import { YoutubeFeed } from "../../components/YoutubeFeed";
import { UiCursor } from "../../components/UiCursor";
import { SceneMaster } from "../sceneCharacter";
import { AdyManCharacter } from "../../adyManCharacter";
import { adyManPose } from "../../animations/AdyManPose";
// import { eyeLookingAnimation } from "../../animations/EyeLookAnimation";
import { interpolate, Sequence, staticFile, useCurrentFrame ,  } from "remotion";
import { Audio } from "@remotion/media";
import { walkCycle } from "../../animations/walkCycle";
import { getMouthPose, type MouthCue } from "../../animations/lipSync";
import { idleAnimation } from "../../animations/idleAnimation";
import { talkingAnimation } from "../../animations/TalkingAnimation";
// import { pointAnimation } from "../../animations/PointingAnimation";
export const Episode1Scene7 = () => {
    const adyTalkingProfile = {
  headRotation: [0, -1, 1, 1, 0],
  bodyY: [0, -1, 0],
  leftArmSwing: [0, 3, 3, 0, 0],
  rightArmSwing: [0, -7, -7, 0, 0],
  leftElbowRotation: [0, 4, 4, 0, 0],
  rightElbowRotation: [0, -3, -3, 0, 0],
  leftHandRotation: [0, 2, 2, 0, 0],
};
    const frame = useCurrentFrame();
    const walkFrame = Math.min(Math.max(frame - 75, 0),79);
    const idlePose = idleAnimation(frame, 120);

const talkFrame = Math.min(Math.max(frame - 60, 0), 427);
const talkingPose = talkingAnimation(talkFrame, 60, adyTalkingProfile);
    const WalkPose = walkCycle(walkFrame,40);
    const adyMouthCues: MouthCue[] = [
  // آه طبعًا
  { startFrame: 60, endFrame: 68, pose: "A" },
  { startFrame: 68, endFrame: 76, pose: "MBP" },
  { startFrame: 76, endFrame: 88, pose: "A" },
  { startFrame: 88, endFrame: 96, pose: "N" },

  // اقفل الشغل وافتح يوتيوب
  { startFrame: 111, endFrame: 116, pose: "A" },
  { startFrame: 116, endFrame: 121, pose: "G" },
  { startFrame: 121, endFrame: 126, pose: "F" },
  { startFrame: 126, endFrame: 131, pose: "L" },
  { startFrame: 131, endFrame: 136, pose: "S" },
  { startFrame: 136, endFrame: 141, pose: "G" },
  { startFrame: 141, endFrame: 146, pose: "L" },
  { startFrame: 146, endFrame: 150, pose: "U" },
  { startFrame: 150, endFrame: 154, pose: "F" },

  // ما تفتح كام فيديو كده
  { startFrame: 162, endFrame: 170, pose: "A" },
  { startFrame: 170, endFrame: 175, pose: "F" },
  { startFrame: 175, endFrame: 181, pose: "A" },
  { startFrame: 181, endFrame: 187, pose: "A" },
  { startFrame: 187, endFrame: 193, pose: "MBP" },
  { startFrame: 193, endFrame: 198, pose: "F" },
  { startFrame: 198, endFrame: 202, pose: "I" },
  { startFrame: 202, endFrame: 204, pose: "O" },

  // يمكن واحد منهم
  { startFrame: 231, endFrame: 240, pose: "I" },
  { startFrame: 240, endFrame: 249, pose: "MBP" },
  { startFrame: 249, endFrame: 258, pose: "A" },
  { startFrame: 258, endFrame: 267, pose: "N" },
  { startFrame: 267, endFrame: 278, pose: "U" },
  { startFrame: 278, endFrame: 289, pose: "A" },
  { startFrame: 289, endFrame: 301, pose: "MBP" },
  { startFrame: 301, endFrame: 319, pose: "N" },

  // يخلّص الفيديو بدالك
  { startFrame: 343, endFrame: 354, pose: "I" },
  { startFrame: 354, endFrame: 365, pose: "A" },
  { startFrame: 365, endFrame: 376, pose: "L" },
  { startFrame: 376, endFrame: 387, pose: "S" },
  { startFrame: 387, endFrame: 397, pose: "A" },
  { startFrame: 397, endFrame: 407, pose: "F" },
  { startFrame: 407, endFrame: 417, pose: "I" },
  { startFrame: 417, endFrame: 427, pose: "O" },
  { startFrame: 427, endFrame: 437, pose: "MBP" },
  { startFrame: 437, endFrame: 447, pose: "A" },
  { startFrame: 447, endFrame: 457, pose: "L" },
  { startFrame: 457, endFrame: 468, pose: "G" },
];
    const mouthPose = getMouthPose(frame,adyMouthCues)
    // const pointFrame = Math.min(Math.max(frame - 175, 0), 29);
// const rawPointPose = pointAnimation(pointFrame, 30);
    const walkStrength = interpolate(frame, [75, 155, 175], [1, 1, 0], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
const talkStrength = interpolate(frame, [175,190,488,510],[0,1,1,0],{
    extrapolateLeft:"clamp",
    extrapolateRight:"clamp"
})
const idleStrength = interpolate(frame,[155,175],[0,1],{
    extrapolateLeft:"clamp",
    extrapolateRight:"clamp"
})
const adyLookX = interpolate(
    frame,
    [175,195,215],
    [0,7,0],{
        extrapolateLeft:"clamp",
        extrapolateRight:"clamp"
    }
)
const adyBasePose = {
  bodyY:
    idlePose.bodyY * idleStrength +
    talkingPose.bodyY * talkStrength,

  headRotation:
    idlePose.headRotation * idleStrength +
    talkingPose.headRotation * talkStrength,

  leftArmSwing:
    idlePose.leftArmSwing * idleStrength +
    talkingPose.leftArmSwing * talkStrength,

  rightArmSwing:
    idlePose.rightArmSwing * idleStrength +
    talkingPose.rightArmSwing * talkStrength,

  leftElbowRotation:
    idlePose.leftElbowRotation * idleStrength +
    talkingPose.leftElbowRotation * talkStrength,

  rightElbowRotation:
    talkingPose.rightElbowRotation * talkStrength,

  leftHandRotation:
    idlePose.leftHandRotation * idleStrength +
    talkingPose.leftHandRotation * talkStrength,
};
const adyWalkPose = {
    bodyY : WalkPose.bodyY * walkStrength,
    LefthipRotation: WalkPose.leftHipRotation * walkStrength,
    RighthipRotation: WalkPose.rightHipRotation * walkStrength,
    leftKneeRotation: WalkPose.leftKneeRotation * walkStrength,
    rightKneeRotation: WalkPose.rightKneeRotation * walkStrength,
    leftArmSwing: WalkPose.leftArmSwing * walkStrength,
    rightArmSwing:WalkPose.rightArmSwing * walkStrength,
    eyeLLookX: adyLookX,
    eyeRLookX: adyLookX,
     idlePose,
    talkingPose,
    mouthPose,
   
}
const screenGestureStrength = interpolate(
  frame,
  [190,200,210,220,230,240],
  [0, 1, 1,1,1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  },
);
const adyScreenGesture = {
  leftArmRotation: -80,
  leftElbowRotation: 18,
  leftHandRotation: -8,
};
const adyScreenAnimated = {
    leftArmRotation:
    adyScreenGesture.leftArmRotation * screenGestureStrength,
      leftElbowRotation:
    adyScreenGesture.leftElbowRotation * screenGestureStrength,
  leftHandRotation:
    adyScreenGesture.leftHandRotation * screenGestureStrength,
}
    // const lookPose = eyeLookingAnimation(frame,60);
    const AdyX = interpolate(frame,[75,155], [-900,80],{
        extrapolateLeft:"clamp",
        extrapolateRight:"clamp"
    })
    // const walkPose = walkCycle(frame,40);
    // const AdyMovement = {
    //     ...lookPose,
    //     ...walkPose
    // }
return (
    
        <YusufDeskShot retreat={1}>
            <Sequence from={60}>
  <Audio src={staticFile("VoiceOver/3adyMan_Takes/3ady-entrance-test.mp3")} />
</Sequence>
        <YoutubeFeed x={645} y={420} scale={0.57} /> 
        <SceneMaster x={AdyX} y={290} width={250} scale={1} zIndex={1}>
            <AdyManCharacter {...adyManPose({...adyWalkPose, ...adyBasePose, ...adyScreenAnimated})} />
            </SceneMaster>
            <UiCursor x={880} y={471} scale={0.65} />
                
            
        
        </YusufDeskShot>
)
}
        
    