import { staticFile, useCurrentFrame, interpolate, Easing } from "remotion";
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
import { GymFlash } from "../../GymFlash";
import { WorkFlash } from "../../WorkFlash";

export const Episode3Scene6 = () => {
  const frame = useCurrentFrame();
  const WORK_FLASH_START = 180;
  const WORK_FLASH_END = 240;

  const GYM_FLASH_START = 320;
  const GYM_FLASH_END = 380;

  const isWorkFlash = frame >= WORK_FLASH_START && frame < WORK_FLASH_END;

  const isGymFlash = frame >= GYM_FLASH_START && frame < GYM_FLASH_END;
const scene5LastFrame = getSceneLastFrame("scene5");
const scene6LastFrame = getSceneLastFrame("scene6");

const scene4EndPlacement = getStreetPlacement(
  getSceneLastFrame("scene1")
);

// Gebruik dezelfde startvertraging als Scene 5
const WALK_RESUME_START = 15;

const scene5Travel = Math.max(
  0,
  Math.min(scene5LastFrame - WALK_RESUME_START, scene5LastFrame)
);

const scene5EndPlacement = {
  x: scene4EndPlacement.x - scene5Travel * 0.25,
  y: scene4EndPlacement.y + scene5Travel * 0.13,
  scale: scene4EndPlacement.scale + scene5Travel * 0.00015,
};

const scene6Travel = Math.min(frame, scene6LastFrame);

const placement = {
  x: scene5EndPlacement.x - scene6Travel * 0.25,
  y: scene5EndPlacement.y + scene6Travel * 0.13,
  scale: scene5EndPlacement.scale + scene6Travel * 0.00015,
};
const flashOpacity = (start: number, end: number) =>
  interpolate(
    frame,
    [start, start + 6, end - 6, end],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const YusufFrontWalk = frontWalkCycle(
    scene5LastFrame + frame,
    WALK_CYCLE_FRAMES,
  );
 const scene6BendStrength = interpolate(
  frame,
  [0, 180, 380, scene6LastFrame],
  [0.25, 0.3, 0.45, 0.65],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);
  return (
    <>
      <Audio src={staticFile("VoiceOver/VO_Episode_3/EP03_S06_Yusuf_01.m4a")} />
      <Audio
        src={staticFile("VoiceOver/VO_Episode_3/EP03_S06_Yusuf_02.m4a")}
        from={206}
        durationInFrames={794}
        trimBefore={61}
      />
      <Audio
        src={staticFile("VoiceOver/VO_Episode_3/EP03_S06_Yusuf_03.m4a")}
        from={300}
      />
      {[260, 360, 460, 560, 660, 760].map((start) => (
  <Audio
    key={start}
    src={staticFile("VoiceOver/VO_Episode_3/EP03_S06_Yusuf_04.m4a")}
    from={start}
  />
))}
      <Camera x={0} y={0} scale={1}>
        {isWorkFlash && (
          <div
            style={{
              position: "absolute",
              width: "65%",
height: "65%",
left: "17.5%",
              top: "17.5%",
              zIndex: 10,
              backdropFilter: "blur(2px)",
              filter: "contrast(1.2) saturate(0.85)",
              transform: "scale(1.05)",
              opacity:flashOpacity(WORK_FLASH_START,WORK_FLASH_END),
              overflow: "hidden",
borderRadius: 20,
            }}
          >
            <WorkFlash />
          </div>
        )}

        {isGymFlash && (
          <div
            style={{
              position: "absolute",
              width: "65%",
height: "65%",
left: "17.5%",
top: "17.5%",
              backdropFilter: "blur(1px)",
              filter: "contrast(1.2) saturate(0.85)",
              transform: "scale(1.05)",
              zIndex: 10,
              opacity:flashOpacity(GYM_FLASH_START,GYM_FLASH_END),
              overflow: "hidden",
borderRadius: 20,

            }}
          >
            <GymFlash />
          </div>
        )}

        <EgyptianStreet groundBend={scene6BendStrength} />

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
          <YusufCharacter grounded {...YusufFrontWalk} />
        </SceneMaster>
      </Camera>
    </>
  );
};
