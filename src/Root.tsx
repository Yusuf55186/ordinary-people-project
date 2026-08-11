import { Composition } from "remotion";
import { Scene, calculateMetadata } from "./Composition";
import { YusufDeskShot } from "./shots/DeskShot";

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

    </>
    
    
  );
};

