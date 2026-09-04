import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { SceneMaster } from "../scenes/sceneCharacter";
import { YusufCharacter } from "../YusufCharacter";
import { yusufPose } from "../animations/yusufPose";
import { frontWalkCycle } from "../animations/frontWalkCycle";
import { EgyptianStreet } from "./EgyptianStreet";
import { Camera } from "../components/Camera";

export const Episode3StreetTest = () => {
  const frame = useCurrentFrame();
  const walkfrontPose = frontWalkCycle(frame, 60);
  const yusufX = interpolate(frame, [0, 300], [420, 250], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const yusufY = interpolate(frame, [0, 300], [420, 500], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const yusufScale = interpolate(frame, [0, 300], [0.38, 0.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const streetScale = interpolate(frame, [0, 300], [1, 1.01], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const streetX = interpolate(frame, [0, 300], [0, -18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const streetY = interpolate(frame, [0, 300], [0, -8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Camera x={-100} y={40} scale={1.1}>
      <AbsoluteFill
        style={{
          translate: "-3.6px 14.4px",
        }}
      >
        <EgyptianStreet x={streetX} y={streetY} scale={streetScale} />
        <SceneMaster
          x={yusufX}
          y={yusufY}
          scale={yusufScale}
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
