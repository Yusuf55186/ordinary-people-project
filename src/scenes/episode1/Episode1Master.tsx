import { Sequence } from "remotion";
import { Episode1Scene1 } from "./Episode1Scene1";
import { Episode1Scene2 } from "./Episode1Scene2";
import { Episode1Scene3 } from "./Episode1Scene3";
export const Episode1Master = () => {
return (
  <>
  <Sequence  durationInFrames={80}>
      <Episode1Scene3 />
    </Sequence>
    
    <Sequence from={80} durationInFrames={630}>
      <Episode1Scene1 />
    </Sequence>

    <Sequence from={710} durationInFrames={120}>
      <Episode1Scene2 />
    </Sequence>

   </> 
);
}