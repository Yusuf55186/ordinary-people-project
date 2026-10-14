import { staticFile, useCurrentFrame } from "remotion";
import { interpolate } from "remotion";
import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { UniversityHallway } from "../../UniversityHallway";
import { Audio } from "@remotion/media";
import {
  WALK_CYCLE_FRAMES,
  YUSUF_GROUND_Y,
  getSceneLastFrame,
  getStreetPlacement,
  getTravelDistance,
} from "./episode3StreetMotion";
import { Camera } from "../../components/Camera";


// Temporary timings until VO is recorded


const DISTORTION_START = 65;
const MEMORY_START = 90;
const MEMORY_END = 175;


export const Episode3Scene4 = () => {
  const frame = useCurrentFrame();
  const scene3WalkPhase = getSceneLastFrame("scene3");
  const scene3EndDistance = getTravelDistance(scene3WalkPhase);
  const scene4Travel = Math.min(
    frame,scene3WalkPhase
  )
  const scene3EndPlacement = getStreetPlacement(scene3EndDistance);
  const walkingPose = frontWalkCycle(scene3WalkPhase, WALK_CYCLE_FRAMES);
  const placement = {
  x: scene3EndPlacement.x - scene4Travel * 0.25,
  y: scene3EndPlacement.y + scene4Travel * 0.13,
  scale:
    scene3EndPlacement.scale +
    scene4Travel * 0.00015,
};
const cameraProgress = Math.min(frame, MEMORY_START);

const cameraX = interpolate(
  cameraProgress,
  [0, MEMORY_START],
  [0, 100],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const cameraY = interpolate(
  cameraProgress,
  [0, MEMORY_START],
  [0, 30],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
  const isInMemory =
    frame >= MEMORY_START && frame < MEMORY_END;


const distortion = interpolate(
  frame,
  [DISTORTION_START, MEMORY_START],
  [0, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
  return (
    
    <>
    <Audio 
    src={staticFile("VoiceOver/VO_Episode_3/EP03_S04_Yusuf_01.m4a")}></Audio>
    <Audio from={120}
    src={staticFile("VoiceOver/VO_Episode_3/EP03_S04_Yusuf_02.m4a")}></Audio>

    <Camera x={cameraX} y={40 + cameraY} scale={1.1}>
  {!isInMemory && (
    <div
      style={{
        position: "absolute",
        inset: 0,
        transform: `scaleX(${1 + distortion * 0.025}) scaleY(${1 + distortion * 0.015})`,
        filter: `blur(${distortion * 2}px)`,
      }}
    >
      <EgyptianStreet
        cameraX={cameraX}
        cameraY={cameraY}
      />
    </div>
  )}

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
    zIndex={1}
  >
    <YusufCharacter grounded {...walkingPose} />
  </SceneMaster>
</Camera>

{isInMemory && <UniversityHallway />}
    </>
    
  );
};