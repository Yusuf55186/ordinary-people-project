import { Sequence } from "remotion";
import { Episode1Scene1 } from "./Episode1Scene1";
import { Episode1Scene2 } from "./Episode1Scene2";
import { Episode1Scene3 } from "./Episode1Scene3";
import { Episode1Scene4 } from "./Episode1Scene4";
import { Episode1Scene5 } from "./Episode1Scene5";
import { Episode1Scene6 } from "./Episode1Scene6";
export const Episode1Master = () => {
return (
  <>
  <Sequence  durationInFrames={120}>
      <Episode1Scene3 />
    </Sequence>

    <Sequence from={120} durationInFrames={630}>
      <Episode1Scene1 />
    </Sequence>

    <Sequence from={710} durationInFrames={120}>
      <Episode1Scene2 />
    </Sequence>
    <Sequence from={830} durationInFrames={630}>
      <Episode1Scene4 />
    </Sequence>
    <Sequence from={1460} durationInFrames={200}>
       <Episode1Scene5 />
    </Sequence>
    <Sequence from={1660} durationInFrames={200}>
      <Episode1Scene6 />
    </Sequence>

   </> 
);
}