import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { getScene2Camera } from "./Episode3Scene2";
import {
  StreetTransform,
  WALK_CYCLE_FRAMES,
  YUSUF_GROUND_Y,
  getSceneLastFrame,
  getStreetPlacement,
  EPISODE3_SCENES,


  
} from "./episode3StreetMotion";
import { useCurrentFrame, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { MemoryFlash } from "../../MemoryFlash";
import { Sequence } from "remotion";
import { interpolate, Easing } from "remotion";
import { Camera } from "../../components/Camera";

export const Episode3Scene3 = () => {
  const frame = useCurrentFrame();
const MEMORY_START = 205;
const GRIN_START = 170;
const GRIN_PEAK = 190;
const GRIN_END = 230;
const WALK_STOP = 180;
const SLOW_START = 130;
const COMPOSITION_TRANSITION_START = 900;
const COMPOSITION_TRANSITION_END = 1019; 

  const Scene2LastFrame = getSceneLastFrame("scene2");
  const LastSceneFrame = getSceneLastFrame("scene1");
  const scene1EndPlacement =
  getStreetPlacement(LastSceneFrame);
    
 const walkProgress = Math.max(
  0,
  Math.min(1, (frame - SLOW_START) / (WALK_STOP - SLOW_START))
);
 const walkStrength =
  1 - walkProgress * walkProgress * (3 - 2 * walkProgress);
  const streetTransform = StreetTransform(LastSceneFrame);
// Scene 3's own forward travel
const scene3WalkPhase = EPISODE3_SCENES.scene2.duration + Math.min(frame,WALK_STOP);
  const startPlacement = scene1EndPlacement;

const placement = {
  x: startPlacement.x,
  y: startPlacement.y ,
  scale: startPlacement.scale,
}
  const walkingPose = frontWalkCycle(scene3WalkPhase, WALK_CYCLE_FRAMES);

const walkingPoseScene3 = {
  ...walkingPose,

  headRotation: (walkingPose.headRotation ?? 0) * walkStrength,
  bodyY: (walkingPose.bodyY ?? 0) * walkStrength,

  leftArmSwing: walkingPose.leftArmSwing * walkStrength,
  rightArmSwing: walkingPose.rightArmSwing * walkStrength,

  leftKneeRotation: walkingPose.leftKneeRotation * walkStrength,
  rightKneeRotation: walkingPose.rightKneeRotation * walkStrength,

  leftHipRotation: walkingPose.leftHipRotation * walkStrength,
  rightHipRotation: walkingPose.rightHipRotation * walkStrength,

  leftLegScaleY: 1 + (walkingPose.leftLegScaleY - 1) * walkStrength,
  rightLegScaleY: 1 + (walkingPose.rightLegScaleY - 1) * walkStrength,

  leftArmScaleY: 1 + (walkingPose.leftArmScaleY - 1) * walkStrength,
  rightArmScaleY: 1 + (walkingPose.rightArmScaleY - 1) * walkStrength,
};
  const grinStrength = interpolate(
    frame,
    [GRIN_START, GRIN_PEAK, GRIN_END - 5, GRIN_END],
    [0, 1.15, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.ease),
    },
  );
  const mischievousActing = {
    headRotation: grinStrength * 7,
    eyeScaleY: 1 - Math.min(grinStrength, 1) * 0.25,
    leftEyeBrowY: -3 * grinStrength,
    rightEyeBrowY: 2 * grinStrength,
  };
  const ambienceVolume = interpolate(
    frame,
    [GRIN_END + 10, GRIN_END + 70],
    [1, 0.25],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const isGrinning = frame >= GRIN_START && frame < GRIN_END;
  const distortion = interpolate(
  frame,
  [130, 205, 505, 535],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
  const MEMORY_DURATION = 300;
    const MEMORY_END = MEMORY_START + MEMORY_DURATION;
  const isInMemory = frame >= MEMORY_START
   && frame < MEMORY_END;


const compositionProgress = interpolate(
  frame,
  [COMPOSITION_TRANSITION_START, COMPOSITION_TRANSITION_END],
  [0, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  }
);

const camera = getScene2Camera(Scene2LastFrame);
const scene3CameraX = interpolate(
  compositionProgress,
  [0, 1],
  [camera.x, 0]
);

const scene3CameraY = interpolate(
  compositionProgress,
  [0, 1],
  [camera.y, 40]
);

const scene3CameraScale = interpolate(
  compositionProgress,
  [0, 1],
  [camera.scale, 1.1]
);
const streetY = interpolate(
  compositionProgress,
  [0, 1],
  [streetTransform.y + 55, 0]
);

const streetScale = interpolate(
  compositionProgress,
  [0, 1],
  [streetTransform.scale + 0.04, 1.2]
);

const streetX = interpolate(
  compositionProgress,
  [0, 1],
  [camera.x, 0]
);

const streetCameraX = interpolate(
  compositionProgress,
  [0, 1],
  [camera.scale, 0]
);
  return (
    <>
    <Camera scale={scene3CameraScale} x={scene3CameraX} y={scene3CameraY} >
      {/* Egyptian Street Ambience */}
      <Audio
        src={staticFile("assets/Episode3/egyptian_street_ambience.mp3")}
        volume={ambienceVolume}
        from={1}
      />
      {/* VO 01 — Estanna */}
      <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S03_Yusuf_01.m4a")} from={0}/>
      {/* VO 02 — Mohamed Henedy */}
      <Audio
        src={staticFile("VoiceOver/VO_Episode_3/EP03_S03_Yusuf_02.m4a")}
        from={145}
      />
        {/* VO 03 — Saeedi Fel Gamea */}
      <Audio
        src={staticFile("VoiceOver/VO_Episode_3/EP03_S03_Yusuf_03.m4a")}
        from={720}
      />
      {/* VO 04 — Ah Sah */}
      <Audio
        src={staticFile("VoiceOver/VO_Episode_3/EP03_S03_Yusuf_04.m4a")}
        from={800}
      />
      <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S03_Yusuf_05.m4a")} from={920} />
    
      
       <div
  style={{
    position: "absolute",
    inset: 0,
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      transform: `
        scaleX(${1 + distortion * 0.025})
        scaleY(${1 + distortion * 0.015})
      `,
      filter: `blur(${distortion * 2}px)`,
    }}
  >
    <EgyptianStreet
      y={streetY}
      cameraX={streetCameraX}
      scale={streetScale}
      x={streetX}
    />
  </div>
</div>
     {isInMemory && (
      
    <Sequence
      from={MEMORY_START}
      durationInFrames={MEMORY_DURATION}
    >
      
      <MemoryFlash />
    </Sequence>
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
        <YusufCharacter
        
          mouthPose={isGrinning ? "grin" : "rest"}
          grounded
          {...walkingPoseScene3}
          {...mischievousActing}
        ></YusufCharacter>
      </SceneMaster>
      </Camera>
    </>
  );
};
