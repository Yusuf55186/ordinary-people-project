import { Easing, interpolate, staticFile, useCurrentFrame } from "remotion";
import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { Audio } from "@remotion/media";

import {
  WALK_CYCLE_FRAMES,
  YUSUF_GROUND_Y,

} from "./episode3StreetMotion";
import { Camera } from "../../components/Camera";

export const Episode3Scene10 = () => {
  const frame = useCurrentFrame();

   const startPlacement = {
  x: 250,
  y: 650,
  scale: 0.7,
};

const destination = {
  x: 250,
  y: 720,
  scale: 0.82,
};

const travelProgress = interpolate(
  frame,
  [0, 300],
  [0, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const placement = {
  x: interpolate(travelProgress, [0, 1], [
    startPlacement.x,
    destination.x,
  ]),
  y: interpolate(travelProgress, [0, 1], [
    startPlacement.y,
    destination.y,
  ]),
  scale: interpolate(travelProgress, [0, 1], [
    startPlacement.scale,
    destination.scale,
  ]),
};
  const CALL_BACK_START = 200;
const callbackReactionStrength = interpolate(
  frame,
  [
    CALL_BACK_START - 5,
    CALL_BACK_START + 10,
    CALL_BACK_START + 35,
    CALL_BACK_START + 60,
  ],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);
  const walkingPose = frontWalkCycle(
    frame,
    WALK_CYCLE_FRAMES
  );
  const scene10Pose = {
  ...walkingPose,

  headRotation:
    (walkingPose.headRotation ?? 0) +
    callbackReactionStrength * 4,

  eyeLLookX:
    callbackReactionStrength * 2.5,

  eyeRLookX:
    callbackReactionStrength * 2.5,

  leftEyeBrowY:
    callbackReactionStrength * -2,

  rightEyeBrowY:
    callbackReactionStrength * 1.5,
};

  return (
    <>
    <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S010_Yusuf_01.m4a")}></Audio>
        <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S010_Yusuf_02.m4a")} from={136}></Audio>
                <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S010_Yusuf_03.m4a")} from={236}></Audio>


    <Camera x={0} y={0} scale={1}>
      <EgyptianStreet groundBend={0} />

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
          {...scene10Pose}
        />
      </SceneMaster>
    </Camera>
    </>
  );
};