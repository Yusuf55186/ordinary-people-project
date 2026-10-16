import { Sequence } from "remotion";
import { Episode3Scene1 } from "./Episode3Scene1";
import { Episode3Scene2 } from "./Episode3Scene2";
import { Episode3Scene3 } from "./Episode3Scene3";
import { Episode3Scene4 } from "./Episode3Scene4";
import { Episode3Scene5 } from "./Episode3Scene5";
import { Episode3Scene6 } from "./Episode3Scene6";
import { Episode3Scene7 } from "./Episode3Scene7";
import { Episode3Scene8 } from "./Episode3Scene8";
import { Episode3Scene9 } from "./Episode3Scene9";
import { Episode3Scene10 } from "./Episode3Scene10";
export const Episode3Master = () => {
  return (
    <>
      <Sequence durationInFrames={430}>
        <Episode3Scene1 />
      </Sequence>
      <Sequence from={430} durationInFrames={807}>
        <Episode3Scene2 />
      </Sequence>
      <Sequence from={1237} durationInFrames={1080}>
        <Episode3Scene3 />
      </Sequence>
      <Sequence from={2317} durationInFrames={400}>
        <Episode3Scene4 />
      </Sequence>
      <Sequence from={2720} durationInFrames={1000}>
        <Episode3Scene5 />
      </Sequence>
      <Sequence from={4406} durationInFrames={1000}>
        <Episode3Scene6 />
      </Sequence>
      <Sequence from={5406} durationInFrames={1000}>
        <Episode3Scene6 />
      </Sequence>
      <Sequence from={6400} durationInFrames={2000}>
        <Episode3Scene7 />
      </Sequence>
      <Sequence from={8400} durationInFrames={2000}>
        <Episode3Scene8 />
      </Sequence>
      <Sequence from={10400} durationInFrames={1000}>
        <Episode3Scene9 />
      </Sequence>
      <Sequence from={11400} durationInFrames={1000}>
        <Episode3Scene10 />
      </Sequence>
    </>
  );
};
