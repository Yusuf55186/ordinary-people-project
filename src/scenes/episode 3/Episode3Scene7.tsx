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
const OVERLAP_START = 700;
const overlapChaos = interpolate(
  frame,
  [OVERLAP_START, OVERLAP_START + 120],
  [0, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);


const cameraScaleEscalation = interpolate(
    frame,
    [OVERLAP_START + 43,OVERLAP_START + 120],
    [1,1.23],{
     extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
    }
)
const cameraShakeStrength = interpolate(
  frame,
  [OVERLAP_START, OVERLAP_START + 120],
  [0, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);
const cameraShakeX =
  Math.sin(frame * 0.45) *
  6 *
  cameraShakeStrength;

const cameraShakeY =
  Math.sin(frame * 0.62) *
  4 *
  cameraShakeStrength;

  const fullNoodleStrength = interpolate(
  frame,
  [
    OVERLAP_START + 80,
    OVERLAP_START + 150,
    OVERLAP_START + 220,
  ],
  [0, 0.5, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);

const finalGroundDistortion =
  zigzagStrength +
  overlapChaos * 0.8 +
  fullNoodleStrength * 1.2;
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
    <Audio
  src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_09.m4a")}
  from={OVERLAP_START}
/>

<Audio
  src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_10.m4a")}
  from={OVERLAP_START + 18}
/>

<Audio
  src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_11.m4a")}
  from={OVERLAP_START + 34}
/>

<Audio
  src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_12.m4a")}
  from={OVERLAP_START + 48}
/>
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S07_Yusuf_13.m4a")} from={1800} />
<Camera x={cameraShakeX} y={cameraShakeY} scale={cameraScaleEscalation}>
  <EgyptianStreet
  groundBend={finalGroundDistortion}
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