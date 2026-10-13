import { Sequence } from "remotion";
import { Episode3Scene1 } from "./Episode3Scene1";
import { Episode3Scene2 } from "./Episode3Scene2";
import { Episode3Scene3 } from "./Episode3Scene3";
import { Episode3Scene4 } from "./Episode3Scene4";
import { Episode3Scene5}  from "./Episode3Scene5";
export const Episode3Master = () => {
  return (
    <>
      <Sequence durationInFrames={430}>
        <Episode3Scene1 />
      </Sequence>
      <Sequence from={430} durationInFrames={800}>
        <Episode3Scene2 />
      </Sequence>
      <Sequence from={1237} durationInFrames={1080}>
        <Episode3Scene3 />
      </Sequence>
       <Sequence from={2317} durationInFrames={1080}>
        <Episode3Scene4 />
      </Sequence>
     <Sequence from={3400} durationInFrames={800}>
      <Episode3Scene5 />
     </Sequence>
    </>
  );
};
