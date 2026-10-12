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
import { useCurrentFrame, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { MemoryFlash } from "../../MemoryFlash";
import { Sequence } from "remotion";
import { interpolate, Easing } from "remotion";
import { Camera } from "../../components/Camera";

const MEMORY_START = 122;
export const Episode3Scene3 = () => {
  const frame = useCurrentFrame();
  const GRIN_START = 180;
  const GRIN_PEAK = 192;
  const GRIN_END = 225;
  const DISTORTION_START = 115;
  const SceneLastFrame = getSceneLastFrame("scene2");
  const distance = getTravelDistance(frame);
  const scene2EndDistance = getTravelDistance(SceneLastFrame);
  const sceneStreet_End = getStreetPlacement(scene2EndDistance);
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
  const walkingPose = frontWalkCycle(scene2EndDistance+ distance, WALK_CYCLE_FRAMES);
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
    rightEyebrowY: 2 * grinStrength,
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
    [DISTORTION_START, MEMORY_START],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const MEMORY_DURATION = 300;
  const isInMemory = frame >= MEMORY_START;
  const MemoryEnd = frame < MEMORY_START + MEMORY_DURATION;
  return (
    <>
    <Camera x={cameraX} y={cameraY} scale={1.1}>
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
          overflow: "hidden",
        }}
      ></div>
      {isInMemory && MemoryEnd ? (
        <Sequence from={MEMORY_START} durationInFrames={300}>
          <MemoryFlash />
        </Sequence>
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `scaleX(${1 + distortion * 0.025}) scaleY(${1 + distortion * 0.015})`,
            filter: `blur(${distortion * 2}px)`,
            
          }}
        >
          <EgyptianStreet cameraX={cameraX} />
        </div>
      )}
      <SceneMaster
        x={sceneStreet_End.x}
        y={sceneStreet_End.y}
        scale={sceneStreet_End.scale}
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
          {...walkingPose}
          {...mischievousActing}
        ></YusufCharacter>
      </SceneMaster>
      </Camera>
    </>
  );
};
