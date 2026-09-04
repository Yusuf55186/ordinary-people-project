import { AbsoluteFill, useCurrentFrame } from "remotion";
import { SceneMaster } from "../sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { Camera } from "../../components/Camera";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { yusufPose } from "../../animations/yusufPose";
export const Episode3Scene2 = () => {
  const frame = useCurrentFrame();
  const walkfrontPose = frontWalkCycle(frame,60);
  
  return (
    
    <Camera x={-100} y={40} scale={1.1}>
      <AbsoluteFill
        style={{
          translate: "-3.6px 14.4px",
        }}
      >
        <EgyptianStreet x={-18} y={-8} scale={1.01} />
        <SceneMaster
          x={250}
          y={500}
          scale={0.5}
          width={250}
          integration={{ contactShadow: true }}
          zIndex={1}
        >
          <YusufCharacter
            {...yusufPose({
              ...walkfrontPose,
             
            })}
          ></YusufCharacter>
        </SceneMaster>
      </AbsoluteFill>
    </Camera>
  );
};
