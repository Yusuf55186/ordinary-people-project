import { AbsoluteFill, useCurrentFrame } from "remotion";
import { RunAnimation } from "../animations/RunAnimation";
import { yusufPose } from "../animations/yusufPose";
import { SceneMaster } from "../scenes/sceneCharacter";
import { Episode4Stadium } from "../Stadium_Landscape/Stadium";
import { YusufSideFootball } from "../YusufFootballSideCharacter/YusufSideFootball";
import { RodeNpcCharacter } from "../RodeNPCSide/RodeNPCSideCharacter";

export const Episode3StreetTest = () => {
  const frame = useCurrentFrame();

  const run = RunAnimation(frame, 30);
  const pose = yusufPose(run);

  return (
    <AbsoluteFill>
      <Episode4Stadium />

      <AbsoluteFill style={{ zIndex: 5 }}>
        <SceneMaster
          x={800}
          y={300}
          width={200}
          groundX={45}
          groundY={514}
          scale={1}
          integration={{
            contactShadow: true,
            ambientLight: "stadiumNight",
            keyLight: "stadium",
            castShadow: "stadium",
          }}
        >
          <YusufSideFootball {...pose} />
        </SceneMaster>
        <SceneMaster  x={200}
          y={300}
          width={200}
          groundX={45}
          groundY={514}
          scale={1}
          integration={{
            contactShadow: true,
            ambientLight: "stadiumNight",
            keyLight: "stadium",
            castShadow: "stadium"}}
            >
              <RodeNpcCharacter />
            </SceneMaster>
      </AbsoluteFill>
    </AbsoluteFill>
  );
  
};