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

  const scene5EndDistance = getTravelDistance(scene5LastFrame);

  const scene5EndPlacement = getStreetPlacement(scene5EndDistance);

  const scene6Travel = Math.min(frame, scene6LastFrame);

  const placement = {
    x: scene5EndPlacement.x - scene6Travel * 0.25,

    y: scene5EndPlacement.y + scene6Travel * 0.13,

    scale: scene5EndPlacement.scale + scene6Travel * 0.00015,
  };

  const YusufFrontWalk = frontWalkCycle(
    scene5LastFrame + frame,
    WALK_CYCLE_FRAMES,
  );
  const scene6BendStrength = interpolate(
    frame,
    [0, scene6LastFrame],
    [1, 1.35],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    },
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
        from={230}
      />
      <Audio
        src={staticFile("VoiceOver/VO_Episode_3/EP03_S06_Yusuf_04.m4a")}
        from={260}
      />
      <Camera x={0} y={0} scale={1}>
        {isWorkFlash && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              backdropFilter: "blur(2px)",
              filter: "contrast(1.2) saturate(0.85)",
              transform: "scale(1.05)",
            }}
          >
            <WorkFlash />
          </div>
        )}

        {isGymFlash && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: "blur(1px)",
              filter: "contrast(1.2) saturate(0.85)",
              transform: "scale(1.05)",
              zIndex: 10,
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
