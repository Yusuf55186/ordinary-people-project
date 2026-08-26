import { Composition } from "remotion";
import { Scene, calculateMetadata } from "./Composition";
import { Episode2Master } from "./scenes/episode 2/Episode2Master";

// import { HandPoseTest } from "./handPoseTest";
const EPISODE_2_SCENE_1_DURATION = 17400;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={Scene}
        durationInFrames={300}
        fps={60}
        width={1920}
        height={1080}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Episode2"
        component={Episode2Master}
        durationInFrames={EPISODE_2_SCENE_1_DURATION}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
    
  );
};
