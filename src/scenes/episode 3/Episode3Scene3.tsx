import { SceneMaster } from "../../scenes/sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { SCENE_1_DURATION, WALK_CYCLE_FRAMES, YUSUF_GROUND_Y, getStreetPlacement } from "./episode3StreetMotion";
import { useCurrentFrame } from "remotion";
import { MemoryFlash } from "../../MemoryFlash";
import { Sequence } from "remotion";
const placement = getStreetPlacement(SCENE_1_DURATION);

export const Episode3Scene3= () => {
  const frame = useCurrentFrame();

  const walkingPose = frontWalkCycle(frame,WALK_CYCLE_FRAMES);

  return (
    <>
     <EgyptianStreet />
    <SceneMaster x={placement.x}
              y={placement.y}
              scale={placement.scale}
              width={500}
              groundY={YUSUF_GROUND_Y}
              integration={{ contactShadow: true, ambientLight:"daylight",keyLight:"sun",castShadow:"streetSun" }}
              zIndex={1}>
       <YusufCharacter
         grounded
         {...walkingPose}
         ></YusufCharacter>
    </SceneMaster>
     <Sequence from={120} durationInFrames={30}>
    <MemoryFlash />
  </Sequence>
    </>
  );
};
