import { useCurrentFrame,Easing,interpolate } from "remotion";
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
import { yusufPose } from "../../animations/yusufPose";
import { getMouthPose, type MouthCue } from "../../animations/lipSync";
export const Episode3Scene8 = () => {
  const frame = useCurrentFrame();
  const scene7LastFrame = getSceneLastFrame("scene7");
  const scene7EndDistance =
    getTravelDistance(scene7LastFrame);
  const scene7EndPlacement =
    getStreetPlacement(scene7EndDistance);

    const lookAroundStrength = interpolate(
  frame,
  [20, 45, 80, 110],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);
const settleStrength = interpolate(
  frame,
  [0, 8, 18],
  [1, 0.35, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  }
);
const scene8Line1MouthCues: MouthCue[] = [
  { startFrame: 0, endFrame: 5, pose: "rest" },

  // أنا
  { startFrame: 5, endFrame: 10, pose: "A" },
  { startFrame: 10, endFrame: 15, pose: "N" },
  { startFrame: 15, endFrame: 20, pose: "A" },

  // كنت
  { startFrame: 20, endFrame: 25, pose: "E" },
  { startFrame: 25, endFrame: 30, pose: "U" },
  { startFrame: 30, endFrame: 35, pose: "N" },
  { startFrame: 35, endFrame: 40, pose: "S" },

  // بفكر
  { startFrame: 40, endFrame: 45, pose: "MBP" },
  { startFrame: 45, endFrame: 50, pose: "I" },
  { startFrame: 50, endFrame: 55, pose: "E" },
  { startFrame: 55, endFrame: 60, pose: "R" },

  // في
  { startFrame: 60, endFrame: 65, pose: "F" },
  { startFrame: 65, endFrame: 70, pose: "I" },

  // إيه
  { startFrame: 70, endFrame: 76, pose: "E" },
  { startFrame: 76, endFrame: 82, pose: "A" },

  { startFrame: 82, endFrame: 95, pose: "rest" },
];
const scene8Line2MouthCues: MouthCue[] = [
  { startFrame: 0, endFrame: 5, pose: "rest" },

  // مش
  { startFrame: 5, endFrame: 10, pose: "MBP" },
  { startFrame: 10, endFrame: 15, pose: "I" },
  { startFrame: 15, endFrame: 21, pose: "S" },

  // فاكر
  { startFrame: 21, endFrame: 27, pose: "F" },
  { startFrame: 27, endFrame: 33, pose: "A" },
  { startFrame: 33, endFrame: 39, pose: "E" },
  { startFrame: 39, endFrame: 46, pose: "R" },

  { startFrame: 46, endFrame: 60, pose: "rest" },
];
const LINE1_START = 120;
const LINE2_START = 240;
const scene8Pose = {
  headRotation: lookAroundStrength * 6 + Math.sin(frame * 0.35) * 1.5 * settleStrength,
  bodyY: Math.sin(frame * 0.35) * 1.5 * settleStrength,
  eyeLLookX: lookAroundStrength * 3,
  eyeRLookX: lookAroundStrength * 3,

  leftEyeBrowY: -1.5 * lookAroundStrength,
  rightEyeBrowY: 1 * lookAroundStrength,
};
const line1 = getMouthPose(
    frame - LINE1_START,
    scene8Line1MouthCues
)
const line2 = getMouthPose(
    frame - LINE2_START,
    scene8Line2MouthCues
)
const scene8MouthPose =
  frame >= LINE2_START
    ? line2
    : line1;
const yusufresolver = yusufPose(scene8Pose);

  return (
    <Camera
      x={0}
      y={0}
      scale={1}
    >
      <EgyptianStreet
        groundBend={0}
      />

      <SceneMaster
        x={scene7EndPlacement.x}
        y={scene7EndPlacement.y}
        scale={scene7EndPlacement.scale}
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
        {...yusufresolver}
          grounded
          mouthPose={scene8MouthPose}
        />
      </SceneMaster>
    </Camera>
  );
};