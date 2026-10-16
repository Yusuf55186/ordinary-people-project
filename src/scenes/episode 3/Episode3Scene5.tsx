import {useCurrentFrame,Easing, staticFile } from "remotion";
import { interpolate } from "remotion";
import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import {
  WALK_CYCLE_FRAMES,
  YUSUF_GROUND_Y,
  getSceneLastFrame,
  getStreetPlacement,
  
} from "./episode3StreetMotion";
import { Camera } from "../../components/Camera";
import { yusufPose } from "../../animations/yusufPose";
import { Audio } from "@remotion/media";
export const Episode3Scene5 = () => {
    const frame = useCurrentFrame();
    const Scene5LastFrame = getSceneLastFrame("scene5");
    const WALK_RESUME_START = 15;
const WALK_RESUME_END = 70;

const walkStrength = interpolate(
  frame,
  [WALK_RESUME_START, WALK_RESUME_END],
  [0, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  }
);
    const scene4EndWalkPhase =
  getSceneLastFrame("scene4"); 
    const scene4EndPlacement = getStreetPlacement(getSceneLastFrame("scene1"));
    const scene4Travel = Math.max(Math.min(frame - WALK_RESUME_START,Scene5LastFrame));
    const walkFrame = Math.max(0, frame - WALK_RESUME_START);
    const placement = {
  x: scene4EndPlacement.x - scene4Travel * 0.25,
  y: scene4EndPlacement.y + scene4Travel * 0.13,
  scale:
    scene4EndPlacement.scale +
    scene4Travel * 0.00015,
};
const YusufFrontWalk = frontWalkCycle(scene4EndWalkPhase + walkFrame,WALK_CYCLE_FRAMES);
const TAB_START = 30;
const IF_IT_AFFECTED_ME_START = 145;
const YA3NI_START = 324;
const FUTURE_START = 424;

const hesitationStrength = interpolate(
  frame,
  [
    TAB_START - 5,
    TAB_START + 10,
    TAB_START + 35,
    IF_IT_AFFECTED_ME_START - 10,
  ],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);

const futureThoughtStrength = interpolate(
  frame,
  [
    IF_IT_AFFECTED_ME_START - 5,
    IF_IT_AFFECTED_ME_START + 20,
    FUTURE_START + 50,
    FUTURE_START + 90,
  ],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);

const uncertaintyStrength = interpolate(
  frame,
  [
    YA3NI_START - 5,
    YA3NI_START + 15,
    FUTURE_START + 20,
    FUTURE_START + 60,
  ],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);const YusufActingPoseScene5 = {
  ...YusufFrontWalk,

  // Walking animation gradually resumes
  bodyY: (YusufFrontWalk.bodyY ?? 0) * walkStrength,

  leftArmSwing: YusufFrontWalk.leftArmSwing * walkStrength,
  rightArmSwing: YusufFrontWalk.rightArmSwing * walkStrength,

  leftKneeRotation: YusufFrontWalk.leftKneeRotation * walkStrength,
  rightKneeRotation: YusufFrontWalk.rightKneeRotation * walkStrength,

  leftHipRotation: YusufFrontWalk.leftHipRotation * walkStrength,
  rightHipRotation: YusufFrontWalk.rightHipRotation * walkStrength,

  leftLegScaleY:
    1 + (YusufFrontWalk.leftLegScaleY - 1) * walkStrength,

  rightLegScaleY:
    1 + (YusufFrontWalk.rightLegScaleY - 1) * walkStrength,

  leftArmScaleY:
    1 + (YusufFrontWalk.leftArmScaleY - 1) * walkStrength,

  rightArmScaleY:
    1 + (YusufFrontWalk.rightArmScaleY - 1) * walkStrength,

  // Facial acting stays independent from walking
  headRotation:
    (YusufFrontWalk.headRotation ?? 0) * walkStrength +
    hesitationStrength * 4 +
    futureThoughtStrength * 5 -
    uncertaintyStrength * 4,

  eyeLLookX: futureThoughtStrength * 5,
  eyeRLookX: futureThoughtStrength * 5,

  leftEyeBrowY: uncertaintyStrength * -4,
  rightEyeBrowY: uncertaintyStrength * 3,
};
const OVERTHINK_START = 260;
const THOUGHTS_OVERLAP_START = 424;
const FULL_BEND = 560;

const streetBendStrength = interpolate(
  frame,
  [OVERTHINK_START, THOUGHTS_OVERLAP_START, FULL_BEND],
  [0, 0.08, 0.25],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);
const noodleStrength = interpolate(
  frame,
  [
    FUTURE_START - 10,
    FUTURE_START + 20,
    FUTURE_START + 70,
    FUTURE_START + 120,
    FUTURE_START + 140,
  ],
  [0, 0.2, 0.6,0.8, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);
const noodleBlurStrength = interpolate(
    frame,
    [
    FUTURE_START - 10,
    FUTURE_START + 20,
    FUTURE_START + 70,
    FUTURE_START + 100,

    
    ],
    [0,3,10,0],
    {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
        }
    
)
const bend =
  Math.sin(frame * 0.05) * 2 * noodleStrength;
const YusufResolver =
  yusufPose(YusufActingPoseScene5);

return (
    <>
    <Audio
    src={staticFile("VoiceOver/VO_Episode_3/EP03_S05_Yusuf_01.m4a")}>
    </Audio>
    <Audio
    src={staticFile("VoiceOver/VO_Episode_3/EP03_S05_Yusuf_02.m4a")} from={145}>
    </Audio>
    <Audio
    src={staticFile("VoiceOver/VO_Episode_3/EP03_S05_Yusuf_03.m4a")} from={324}>
    </Audio>
    <Audio
    src={staticFile("VoiceOver/VO_Episode_3/EP03_S05_Yusuf_04.m4a")} from={424}>
    </Audio>
           <Camera x={0} y={0} scale={1}>
        <div
  style={{
    position: "absolute",
    inset: 0,
    transform: `
      perspective(1400px)
      rotateY(${streetBendStrength * 2.2}deg)
      skewX(${bend * 1.5}deg)
      scaleX(${1 + bend * 0.015})
    `,
    filter:`blur${noodleBlurStrength}px`,
    transformOrigin: "50% 75%",
  }}
>
  <EgyptianStreet groundBend={streetBendStrength} />
</div>
    <SceneMaster
    x={placement.x}
    y={placement.y}
    scale={placement.scale}
    width={500}
    groundY={YUSUF_GROUND_Y}
    integration={{
    contactShadow: true,
    ambientLight: "daylight",
    keyLight: "sun",
    castShadow: "streetSun",
    
  }}
        >
<YusufCharacter grounded {...YusufResolver} />
   </SceneMaster>
           </Camera>
           </>
)
}