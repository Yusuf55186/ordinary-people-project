import { Composition } from "remotion";
import { Scene, calculateMetadata } from "./Composition";
import { YusufDeskShot } from "./shots/DeskShot";
import { Episode1Master } from "./scenes/episode1/Episode1Master";
import { Episode2Master } from "./scenes/episode 2/Episode2Master";
// import { HandPoseTest } from "./handPoseTest";
const EPISODE_2_SCENE_1_DURATION = 3000;

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
      id="MyDeskShot"
      component={YusufDeskShot}
       durationInFrames={300}
        fps={60} 
        width={1920}
         height={1080}
          />
          <Composition
            id="Episode1"
            component={Episode1Master}
            durationInFrames={2600}
            fps={60}
            width={1920}
            height={1080}
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

