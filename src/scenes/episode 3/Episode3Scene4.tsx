import { useCurrentFrame } from "remotion";
import { interpolate } from "remotion";
import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { UniversityHallway } from "../../UniversityHallway";

import {
  WALK_CYCLE_FRAMES,
  YUSUF_GROUND_Y,
  getStreetPlacement,
} from "./episode3StreetMotion";

// Temporary timings until VO is recorded


const DISTORTION_START = 65;
const MEMORY_START = 90;
const MEMORY_END = 175;

export const Episode3Scene4 = () => {
  const frame = useCurrentFrame();

  const walkingPose = frontWalkCycle(frame, WALK_CYCLE_FRAMES);

  const placement = getStreetPlacement(frame);

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
      {isInMemory ? <UniversityHallway /> : 
      <div
  style={{
    position: "absolute",
    inset: 0,
    transform: `scaleX(${1 + distortion * 0.025}) scaleY(${1 + distortion * 0.015})`,
    filter: `blur(${distortion * 2}px)`,
  }}
>
  <EgyptianStreet />
</div>
      }


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
    </>
  );
};