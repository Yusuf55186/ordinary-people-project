import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { WALK_CYCLE_FRAMES, YUSUF_GROUND_Y, getStreetPlacement } from "./episode3StreetMotion";
import { useCurrentFrame  ,staticFile } from "remotion";
import { Audio} from "@remotion/media"
import { MemoryFlash } from "../../MemoryFlash";
import { Sequence } from "remotion";
import { interpolate , Easing } from "remotion";

const MEMORY_START = 122;
export const Episode3Scene3= () => {
  const frame = useCurrentFrame();
  const GRIN_START = 180;
  const GRIN_PEAK = 192;
  const GRIN_END = 225;
  const DISTORTION_START = 115;
  const BACKGROUND_ZOOM_SPEED = 0.0005;
  const backgroundScale = 1 + frame * BACKGROUND_ZOOM_SPEED;
  const placement = getStreetPlacement(frame);
  const walkingPose = frontWalkCycle(frame,WALK_CYCLE_FRAMES);
  const grinStrength = interpolate(
    frame,
    [GRIN_START, GRIN_PEAK, GRIN_END -5, GRIN_END],
    [0, 1.15,1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.ease),
    }
  )
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
  }
);
const isGrinning = frame >= GRIN_START && frame < GRIN_END;
const distortion = interpolate(
  frame,
  [DISTORTION_START, MEMORY_START],
  [0, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
const isInMemory = frame >= MEMORY_START;
  return (
    
    <>
    <Audio
  src={staticFile("assets/Episode3/egyptian_street_ambience.mp3")}
  volume={ambienceVolume}
/>
<div
  style={{
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  }}
>
  <div
    style={{
      width: "100%",
      height: "100%",
      transform: `scale(${backgroundScale})`,
      transformOrigin: "50% 50%",
    }}
  >
    </div>
    </div>
      {isInMemory ? <MemoryFlash /> : 
           <div
       style={{
         position: "absolute",
         inset: 0,
         transform: `scaleX(${1 + distortion * 0.025}) scaleY(${1 + distortion * 0.015})`,
         filter: `blur(${distortion * }px)`,
       }}
     >
       <EgyptianStreet />
     </div>

           }
    <SceneMaster x={placement.x}
              y={placement.y}
              scale={placement.scale}
              width={500}
              groundY={YUSUF_GROUND_Y}
              integration={{ contactShadow: true, ambientLight:"daylight",keyLight:"sun",castShadow:"streetSun" }}
              zIndex={1}>
       <YusufCharacter
       mouthPose={isGrinning ? "grin" : "rest"}
         grounded
         {...walkingPose}
         {...mischievousActing}
         ></YusufCharacter>
    </SceneMaster>
     <Sequence from={120} durationInFrames={30}>
   
  </Sequence>
    </>
  );
};
