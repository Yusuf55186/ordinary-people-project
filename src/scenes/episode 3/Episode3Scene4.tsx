import { Easing, staticFile, useCurrentFrame } from "remotion";
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
  // getTravelDistance,
} from "./episode3StreetMotion";
import { Camera } from "../../components/Camera";


// Temporary timings until VO is recorded


const DISTORTION_START = 65;
const MEMORY_START = 90;
const MEMORY_FULLY_VISIBLE = 120;
const MEMORY_END = 210;
const SCENE3_WALK_STOP = 130;

// const SCENE3_WALK_STOP = 180;

export const Episode3Scene4 = () => {
  const frame = useCurrentFrame();
  const memoryOpacity = interpolate(
  frame,
  [MEMORY_START, MEMORY_FULLY_VISIBLE],
  [0, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);


 const scene3WalkPhase = Math.min(
  frame,
  SCENE3_WALK_STOP
);
  // const scene3EndDistance = getTravelDistance(SCENE3_WALK_STOP);
  
  const scene3EndPlacement = getStreetPlacement(getSceneLastFrame("scene1"));
 
  const isInMemory =
    frame >= MEMORY_START && frame < MEMORY_END;
  const placement = {
  x: scene3EndPlacement.x,
  y: scene3EndPlacement.y ,
  scale:scene3EndPlacement.scale
};


  const walkingPose = frontWalkCycle(scene3WalkPhase, WALK_CYCLE_FRAMES);

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



const distortion = interpolate(
  frame,
  [DISTORTION_START, MEMORY_START],
  [0, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
const memoryReaction = interpolate(
  frame,
  [MEMORY_FULLY_VISIBLE + 20,230,250],
  [0, 1, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
const REACTION_START = 225; // 120
const memoryShock = interpolate(
  frame,
  [REACTION_START,
    REACTION_START + 45,
    REACTION_START + 55,],
  [1, 1.5, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing:Easing.inOut(Easing.cubic)
  }
);
const headRotationDenial = interpolate(
  frame,
  [REACTION_START,
    REACTION_START + 45,
    REACTION_START + 55,
    REACTION_START + 66,
    REACTION_START + 77,
  ],
     [0, -3, 0,-3,0],{
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing:Easing.inOut(Easing.cubic)
     }
)

const memoryActing = {
  headRotation: -3 * memoryReaction * headRotationDenial,
  leftEyeBrowY: -2 * memoryReaction * headRotationDenial,
  rightEyeBrowY: -1 * memoryReaction * headRotationDenial,
  eyeScaleY: memoryShock,
};




const reactionZoom = interpolate(
  frame,
  [
    REACTION_START - 10,
    REACTION_START + 45,
    REACTION_START + 55,
    REACTION_START + 66,
    
  ],
  [1, 3, 3, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
  return (
    
    <>
    <Audio 
    src={staticFile("VoiceOver/VO_Episode_3/EP03_S04_Yusuf_01.m4a")}></Audio>
    <Audio from={MEMORY_FULLY_VISIBLE}
    src={staticFile("VoiceOver/VO_Episode_3/EP03_S04_Yusuf_02.m4a")}></Audio>

    <Camera x={0} y={40} scale={1.1}>
  {!isInMemory && (
    <div
      style={{
        position: "absolute",
        inset: 0,
        transform: `scaleX(${1 + distortion * 0.005}) scaleY(${1 + distortion * 0.015})`,
        filter: `blur(${distortion * 2}px)`,
        
      }}
    >
      <EgyptianStreet
        cameraX={cameraX}
        cameraY={cameraY}
        scale={1}
      />
    </div>
  )}

  
</Camera>

{isInMemory && (
  
  <div
    style={{
      position: "absolute",
      inset: 0,
      opacity: memoryOpacity,
      zIndex: 0,
    }}
  >
    <UniversityHallway />
  </div>
)}
<SceneMaster
    x={placement.x}
    y={placement.y}
    scale={placement.scale * reactionZoom}
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
    <YusufCharacter grounded {...walkingPose} {...memoryActing} />
  </SceneMaster>
    </>
    
  );
};