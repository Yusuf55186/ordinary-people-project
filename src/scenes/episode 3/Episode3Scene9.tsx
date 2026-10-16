import { useCurrentFrame, interpolate,Easing, staticFile } from "remotion";
import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { getMouthPose, type MouthCue } from "../../animations/lipSync";
import {
  YUSUF_GROUND_Y,
  
} from "./episode3StreetMotion";
import { Camera } from "../../components/Camera";
import { idleAnimation } from "../../animations/idleAnimation";
import { Audio } from "@remotion/media"
export const Episode3Scene9 = () => {
  const frame = useCurrentFrame();
  
  const idlePose = idleAnimation(frame,60);
  

 const scene8EndPlacement = {
  x: 250,
  y: 650,
  scale: 0.7,
};

    const AH_START = 50;
const I_WAS_GOING_TO_GET_SOMETHING_START = 180;
const WHAT_IS_IT_START = 300;
const INDOMIE_START = 530;

const realizationStrength = interpolate(
  frame,
  [AH_START -5, AH_START + 10, AH_START + 35, AH_START + 60],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);
const innerVoiceReaction = interpolate(
  frame,
  [
    WHAT_IS_IT_START,
    WHAT_IS_IT_START + 15,
    WHAT_IS_IT_START + 55,
    WHAT_IS_IT_START + 80,
  ],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
const recallStrength = interpolate(
  frame,
  [
    I_WAS_GOING_TO_GET_SOMETHING_START - 10,
    I_WAS_GOING_TO_GET_SOMETHING_START + 15,
    WHAT_IS_IT_START - 25,
    WHAT_IS_IT_START,
  ],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);

const indomieConfusionStrength = interpolate(
  frame,
  [
    INDOMIE_START - 8,
    INDOMIE_START + 10,
    INDOMIE_START + 40,
    INDOMIE_START + 70,
  ],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);
const scene9IdlePose = {
    ...idlePose,
headRotation:
  (idlePose.headRotation ?? 0)
  - realizationStrength * 6
  - recallStrength * 4
  + indomieConfusionStrength * 6
  - innerVoiceReaction * 4,
 

bodyY:
  (idlePose.bodyY ?? 0) - realizationStrength * 4,
  leftArmSwing: 0,
  rightArmSwing: 0,

  leftElbowRotation: 0,
  rightElbowRotation: 0,

  leftKneeRotation: 0,
  rightKneeRotation: 0,

  leftHipRotation: 0,
  rightHipRotation: 0,

  leftLegScaleY: 1,
  rightLegScaleY: 1,

  leftArmScaleY: 1,
  rightArmScaleY: 1,

  
     eyeScaleY:
    1 + indomieConfusionStrength * 0.35,

  eyeLLookY:
    indomieConfusionStrength * -0.8,

  eyeRLookY:
    indomieConfusionStrength * -0.8,

  leftEyeBrowY:
    indomieConfusionStrength * -4,

  rightEyeBrowY:
    indomieConfusionStrength * -4,
  mouthPose:"rest",

};
// آه
const scene9Line1MouthCues: MouthCue[] = [
  { startFrame: 0, endFrame: 5, pose: "rest" },
  { startFrame: 5, endFrame: 15, pose: "A" },
  { startFrame: 15, endFrame: 25, pose: "E" },
  { startFrame: 25, endFrame: 35, pose: "rest" },
];

// أنا كنت رايح أجيب حاجة
const scene9Line2MouthCues: MouthCue[] = [
  { startFrame: 0, endFrame: 5, pose: "rest" },

  // أنا كنت
  { startFrame: 5, endFrame: 12, pose: "A" },
  { startFrame: 12, endFrame: 18, pose: "N" },
  { startFrame: 18, endFrame: 25, pose: "A" },
  { startFrame: 25, endFrame: 33, pose: "E" },
  { startFrame: 33, endFrame: 40, pose: "N" },

  // رايح
  { startFrame: 40, endFrame: 48, pose: "R" },
  { startFrame: 48, endFrame: 58, pose: "A" },
  { startFrame: 58, endFrame: 65, pose: "E" },

  // أجيب حاجة
  { startFrame: 65, endFrame: 73, pose: "A" },
  { startFrame: 73, endFrame: 82, pose: "E" },
  { startFrame: 82, endFrame: 89, pose: "MBP" },
  { startFrame: 89, endFrame: 98, pose: "A" },
  { startFrame: 98, endFrame: 110, pose: "rest" },
];

// إيه هي؟
const scene9Line3MouthCues: MouthCue[] = [
  { startFrame: 0, endFrame: 5, pose: "rest" },
  { startFrame: 5, endFrame: 15, pose: "E" },
  { startFrame: 15, endFrame: 25, pose: "A" },
  { startFrame: 25, endFrame: 35, pose: "E" },
  { startFrame: 35, endFrame: 45, pose: "rest" },
];

// إندومي!
const scene9Line4MouthCues: MouthCue[] = [
  { startFrame: 0, endFrame: 5, pose: "rest" },

  // إن
  { startFrame: 5, endFrame: 13, pose: "E" },
  { startFrame: 13, endFrame: 20, pose: "N" },

  // دو
  { startFrame: 20, endFrame: 28, pose: "N" },
  { startFrame: 28, endFrame: 40, pose: "U" },

  // مي
  { startFrame: 40, endFrame: 48, pose: "MBP" },
  { startFrame: 48, endFrame: 60, pose: "I" },

  { startFrame: 60, endFrame: 75, pose: "rest" },
];
const LINE1_START = 0;
const LINE2_START = 120;
const LINE3_START = 262;
const LINE4_START = 462;

const scene9MouthPose =
  frame >= LINE4_START
    ? getMouthPose(frame - LINE4_START, scene9Line4MouthCues)
    : frame >= LINE3_START
      ? getMouthPose(frame - LINE3_START, scene9Line3MouthCues)
      : frame >= LINE2_START
        ? getMouthPose(frame - LINE2_START, scene9Line2MouthCues)
        : getMouthPose(frame - LINE1_START, scene9Line1MouthCues);
  return (
    <>
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S09_Yusuf_01.m4a")}></Audio>
     <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S09_Yusuf_02.m4a")} from={120}></Audio>
      <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S09_Yusuf_03.m4a")} from={262}></Audio>
       <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S09_Yusuf_04.m4a")} from={462}></Audio>
    <Camera x={0} y={0} scale={1}>
      <EgyptianStreet groundBend={0} />

      <SceneMaster
        x={scene8EndPlacement.x}
        y={scene8EndPlacement.y}
        scale={scene8EndPlacement.scale}
        width={500}
        groundY={YUSUF_GROUND_Y}
        integration={{
          contactShadow: true,
          ambientLight: "daylight",
          keyLight: "sun",
          castShadow: "streetSun",
        }}
      >
        <YusufCharacter leftHandPose={"open"} grounded {...scene9IdlePose} mouthPose={scene9MouthPose}/>
      </SceneMaster>
    </Camera>
    </>
  );
};