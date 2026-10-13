import {  Easing, interpolate, staticFile, useCurrentFrame } from "remotion";
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
import { Audio } from "@remotion/media";
export const Episode3Scene7 = () => {
    const frame = useCurrentFrame();

const scene6LastFrame =
  getSceneLastFrame("scene6");

const scene7LastFrame =
  getSceneLastFrame("scene7");

const scene6EndDistance =
  getTravelDistance(scene6LastFrame);

const scene6EndPlacement =
  getStreetPlacement(scene6EndDistance);

const scene7Travel =
  Math.min(frame, scene7LastFrame);

const placement = {
  x: scene6EndPlacement.x - scene7Travel * 0.22,
  y: scene6EndPlacement.y + scene7Travel * 0.12,
  scale:
    scene6EndPlacement.scale +
    scene7Travel * 0.00014,
};

const YusufFrontWalk = frontWalkCycle(
  scene6LastFrame + frame,
  WALK_CYCLE_FRAMES
);

const unstableWalkStrength = interpolate(
  frame,
  [180, 260, 420, 520],
  [0, 0.35, 0.7, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);
const unstableHead =
  Math.sin(frame * 0.18) *
  3 *
  unstableWalkStrength;

const unstableBodyY =
  Math.sin(frame * 0.22) *
  3 *
  unstableWalkStrength;
const scene7ActingPose = {
    ...YusufFrontWalk,
    headRotation:(YusufFrontWalk.headRotation ?? 0) + unstableHead,
    
    bodyY: (YusufFrontWalk.bodyY ?? 0) + unstableBodyY
}
const zigzagStrength = interpolate(
  frame,
  [
    0,
    120,
    220,
    320,
    420,
    520,
    620,
  ],
  [
    0,
    0.1,
    0.2,
    0.35,
    0.5,
    0.7,
    1,
  ],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);

return (
    <>
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_01.m4a")} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_02.m4a")} from={100} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_03.m4a")} from={300} /> 
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_04.m4a")} from={470} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_05.m4a")} from={570} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_06.m4a")} from={670} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_07.m4a")} from={770} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_08.m4a")} from={870} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_09.m4a")} from={1000} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_10.m4a")} from={1200} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_11.m4a")} from={1400} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_12.m4a")} from={1600} />
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_13.m4a")} from={1800} />
<Camera x={0} y={0} scale={1}>
  <EgyptianStreet
  groundBend={zigzagStrength}
   />

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
    <YusufCharacter
      grounded
      {...scene7ActingPose}
    />
  </SceneMaster>
</Camera>
</>
);
};