import { useCurrentFrame, interpolate,Easing, staticFile } from "remotion";
import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import {
  YUSUF_GROUND_Y,
  getSceneLastFrame,
  getStreetPlacement,
  getTravelDistance,
} from "./episode3StreetMotion";
import { Camera } from "../../components/Camera";
import { idleAnimation } from "../../animations/idleAnimation";
import { Audio } from "@remotion/media"
export const Episode3Scene9 = () => {
  const frame = useCurrentFrame();
  
  const idlePose = idleAnimation(frame,60);
  

  const scene8LastFrame =
    getSceneLastFrame("scene8");

  const scene8EndDistance =
    getTravelDistance(scene8LastFrame);

  const scene8EndPlacement =
    getStreetPlacement(scene8EndDistance);

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
 headRotation: (
  idlePose.headRotation ?? 0, + realizationStrength * -6
  + recallStrength * -4
  + indomieConfusionStrength * 6
  + innerVoiceReaction * -4

 ),

  bodyY: (idlePose.bodyY ?? 0 + realizationStrength * -4),

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
        <YusufCharacter leftHandPose={"open"} grounded {...scene9IdlePose} />
      </SceneMaster>
    </Camera>
    </>
  );
};