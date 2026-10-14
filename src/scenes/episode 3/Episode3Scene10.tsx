import { Easing, interpolate, staticFile, useCurrentFrame } from "remotion";
import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { Audio } from "@remotion/media";

import {
  WALK_CYCLE_FRAMES,
  YUSUF_GROUND_Y,
  getSceneLastFrame,
  getStreetPlacement,
  getTravelDistance,
} from "./episode3StreetMotion";
import { Camera } from "../../components/Camera";

export const Episode3Scene10 = () => {
  const frame = useCurrentFrame();

  const scene9LastFrame = getSceneLastFrame("scene9");
  const scene10LastFrame = getSceneLastFrame("scene10");

  const scene9EndDistance =
    getTravelDistance(scene9LastFrame);

  const scene9EndPlacement =
    getStreetPlacement(scene9EndDistance);

  const scene10Travel =
    Math.min(frame, scene10LastFrame);

  const placement = {
    x: scene9EndPlacement.x - scene10Travel * 0.2,
    y: scene9EndPlacement.y + scene10Travel * 0.1,
    scale:
      scene9EndPlacement.scale +
      scene10Travel * 0.00012,
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
    scene9LastFrame + frame,
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