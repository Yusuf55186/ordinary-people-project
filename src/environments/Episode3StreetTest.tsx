import { AbsoluteFill, useCurrentFrame } from "remotion";
import { RunAnimation } from "../animations/RunAnimation";
import { yusufPose } from "../animations/yusufPose";
import { SceneMaster } from "../scenes/sceneCharacter";
import { Episode4Stadium } from "../Stadium_Landscape/Stadium";
import { YusufSideFootball } from "../YusufFootballSideCharacter/YusufSideFootball";
import { RodeNpcCharacter } from "../RodeNPCSide/RodeNPCSideCharacter";
import { interpolate } from "remotion";
import { Camera } from "../components/Camera";
import { RefreeSideFootball } from "../RefreeSideCharacter/RefreeSideCharacter";
const integration = {
  contactShadow: true,
  ambientLight: "stadiumNight",
  keyLight: "stadium",
  castShadow: "stadium",
} as const;

export const Episode4FootballRunTest = () => {
  const frame = useCurrentFrame();
  // Keep your existing RunAnimation call convention; offset the NPC by 8 frames.
  const yusufRunPose = yusufPose(RunAnimation(frame, 30));
  const npcRunPose = yusufPose(RunAnimation(frame + 20, 30));
  const refreeRunPose = yusufPose(RunAnimation(frame + 70, 30));
  const endPositionXYusuf = 500;
    const endPositionXRodeNPC = 700 ;

 
  const RodeNpcX = interpolate(frame, [0, 120], [1400,endPositionXRodeNPC], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const yusufX = interpolate(frame, [0, 120], [1200,endPositionXYusuf], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const refreeX = interpolate(frame, [0, 120], [1400, 1000], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
// const stopFrame = Math.max(frame,400);
  return (
    <AbsoluteFill>
      <Episode4Stadium />
      <AbsoluteFill style={{ zIndex: 5 }}>
        <Camera x={0} y={0} scale={1}>
        <SceneMaster x={yusufX} y={400} width={200} groundX={40} groundY={492} integration={integration}>
          <YusufSideFootball {...yusufRunPose} />
        </SceneMaster>
        <SceneMaster x={RodeNpcX} y={400} width={200} groundX={40} groundY={492} integration={integration}>
          <RodeNpcCharacter {...npcRunPose} />
        </SceneMaster>
        <SceneMaster x={refreeX} y={400} width={200} groundX={40} groundY={492} integration={integration}>
          <RefreeSideFootball {...refreeRunPose} />
        </SceneMaster>
        </Camera>
      </AbsoluteFill>
    </AbsoluteFill>
    
  );
};
