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
  getTravelDistance,
} from "./episode3StreetMotion";
import { Camera } from "../../components/Camera";
import { yusufPose } from "../../animations/yusufPose";
import { Audio } from "@remotion/media";
export const Episode3Scene5 = () => {
    const frame = useCurrentFrame();
    const Scene5LastFrame = getSceneLastFrame("scene5");
    const Scene4LastFrame = getSceneLastFrame("scene4");
    const scene4EndWalkPhase =
  getSceneLastFrame("scene4"); 
    const scene4EndDistance = getTravelDistance(Scene4LastFrame);
    const scene4EndPlacement = getStreetPlacement(scene4EndDistance);
    const scene4Travel = Math.min(frame,Scene5LastFrame);
    const placement = {
  x: scene4EndPlacement.x - scene4Travel * 0.25,
  y: scene4EndPlacement.y + scene4Travel * 0.13,
  scale:
    scene4EndPlacement.scale +
    scene4Travel * 0.00015,
};
const YusufFrontWalk = frontWalkCycle(scene4EndWalkPhase + frame,WALK_CYCLE_FRAMES);
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
);
  const YusufActingPoseScene5 = {
  ...YusufFrontWalk,

  headRotation:
    (YusufFrontWalk.headRotation ?? 0) +
    hesitationStrength * 4 +
    futureThoughtStrength * 5 +
    uncertaintyStrength * -4,

  eyeLLookX: futureThoughtStrength * 5,
  eyeRLookX: futureThoughtStrength * 5,

  leftEyeBrowY: uncertaintyStrength * -4,
  rightEyeBrowY: uncertaintyStrength * 3,
};

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
        <EgyptianStreet />
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