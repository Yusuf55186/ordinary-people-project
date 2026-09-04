import { Composition } from "remotion";
import { Scene, calculateMetadata } from "./Composition";
import { Episode2Master } from "./scenes/episode 2/Episode2Master";
import { Episode3Master } from "./scenes/episode 3/Episode3Master";
import {Episode3StreetTest} from "./environments/Episode3StreetTest"
// import { HandPoseTest } from "./handPoseTest";
const EPISODE_2_SCENE_1_DURATION = 17400;
const EPISODE3_SCENE1_DURATION = 2000;

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
      <Composition
      id="Episode3"
      component={Episode3Master}
      durationInFrames={EPISODE3_SCENE1_DURATION}
      fps={60}
      width={1920}
      height={1080}
      />
      <Composition
      id="StreetTest"
      component={Episode3StreetTest}
      durationInFrames={EPISODE3_SCENE1_DURATION}
      fps={60}
      width={1920}
      height={1080}
      />
    </>
    
  );
};
