import { AbsoluteFill, useCurrentFrame, interpolate, staticFile, Easing } from "remotion";
import { SceneMaster } from "../sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { Camera } from "../../components/Camera";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { yusufPose } from "../../animations/yusufPose";
import { Audio } from "@remotion/media";
import { getMouthPose, type MouthCue } from "../../animations/lipSync";
import { SCENE_1_DURATION, WALK_CYCLE_FRAMES, YUSUF_GROUND_Y, getStreetPlacement,getApproachProgress } from "./episode3StreetMotion";
import { StreetNPC } from "../../environments/props/StreetNpc";
export const Episode3Scene1 = () => {
  const frame = useCurrentFrame();
  const progress = getApproachProgress(frame);
  const scene1Episode3:MouthCue[] = [
    {startFrame:0, endFrame:63,pose:"rest"},
    // "تمام"
  { startFrame: 63, endFrame: 68, pose: "A" },
  { startFrame: 68, endFrame: 73, pose: "MBP" },
  { startFrame: 73, endFrame: 78, pose: "A" },

  // "أنا بس"
  { startFrame: 78, endFrame: 84, pose: "A" },
  { startFrame: 84, endFrame: 89, pose: "N" },
  { startFrame: 89, endFrame: 95, pose: "A" },
  { startFrame: 95, endFrame: 101, pose: "MBP" },
  { startFrame: 101, endFrame: 107, pose: "S" },

  // "هنزل أتمشى"
  { startFrame: 107, endFrame: 114, pose: "E" },
  { startFrame: 114, endFrame: 120, pose: "N" },
  { startFrame: 120, endFrame: 127, pose: "A" },
  { startFrame: 127, endFrame: 134, pose: "L" },
  { startFrame: 134, endFrame: 141, pose: "A" },
  { startFrame: 141, endFrame: 148, pose: "TH" },
  { startFrame: 148, endFrame: 155, pose: "MBP" },
  { startFrame: 155, endFrame: 162, pose: "S" },
  { startFrame: 162, endFrame: 169, pose: "A" },

  // "شوية كده"
  { startFrame: 169, endFrame: 176, pose: "S" },
  { startFrame: 176, endFrame: 183, pose: "O" },
  { startFrame: 183, endFrame: 190, pose: "E" },
  { startFrame: 190, endFrame: 197, pose: "A" },
  { startFrame: 197, endFrame: 204, pose: "E" },
 

  // Thinking pause
  

  // "أفك دماغي"
  { startFrame: 250, endFrame: 256, pose: "A" },
  { startFrame: 256, endFrame: 262, pose: "F" },
  { startFrame: 262, endFrame: 268, pose: "O" },
  { startFrame: 268, endFrame: 274, pose: "G" },
  { startFrame: 274, endFrame: 280, pose: "MBP" },
  { startFrame: 280, endFrame: 286, pose: "A" },
  { startFrame: 286, endFrame: 292, pose: "G" },
  { startFrame: 292, endFrame: 300, pose: "E" },

  // End hold
  { startFrame: 300, endFrame: 420, pose: "rest" },
  ]
  const YusufScene1 = getMouthPose(frame,scene1Episode3)
  const walkfrontPose = frontWalkCycle(frame, WALK_CYCLE_FRAMES);
  const placement = getStreetPlacement(frame);
  const streetScale = interpolate(progress, [0, 1], [1.01, 1.075], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const streetX = interpolate(frame, [0, SCENE_1_DURATION], [0, -18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const streetY = interpolate(frame, [0, SCENE_1_DURATION], [0, -8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });



const cameraX = interpolate(
  placement.x,
  [250, 420],
  [300, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
const cameraY = interpolate(
  placement.y,
  [420,500],
  [0,60],{
    extrapolateLeft:"clamp",
    extrapolateRight:"clamp",
  }
)
const npcBY = interpolate(
  frame,
  [0,300],
  [600,620],{
    extrapolateLeft:"clamp",
    extrapolateRight:"clamp",
    easing:Easing.inOut(Easing.cubic),
  }
)
const npcAY = interpolate(
  frame,
  [0,300],
  [600,620],{
    extrapolateLeft:"clamp",
    extrapolateRight:"clamp",
    easing:Easing.inOut(Easing.cubic),
  }
)

  return (
    
    <Camera x={cameraX} y={cameraY} scale={1.1}>
      <AbsoluteFill
        style={{
          translate: "-3.6px 14.4px",
        }}
      >
              <Audio
              durationInFrames={415}
  src={staticFile("VoiceOver/VO_Episode_3/rest-my-head-scene-1.m4a")}
  from={0}
/>
        <EgyptianStreet x={streetX} y={streetY} scale={streetScale} cameraX={cameraX} cameraY={cameraY} />
        <SceneMaster
          x={placement.x}
          y={placement.y}
          scale={placement.scale}
          width={500}
          groundY={YUSUF_GROUND_Y}
          integration={{contactShadow:true,ambientLight:"daylight",castShadow:"streetSun", keyLight:"sun"
          }}
          zIndex={1}
        >
          <YusufCharacter
            grounded
            {...yusufPose({
              ...walkfrontPose,
              mouthPose:YusufScene1
            })}
          ></YusufCharacter>
        </SceneMaster>
        <StreetNPC
          variant="b"
          x={470}
          y={npcBY}
          width={55}
        />
        
        {/* right sidewalk */}
        <StreetNPC
          variant="a"
          x={1450}
          y={npcAY}
          width={60}
        />
      </AbsoluteFill>
    </Camera>
  );
};
