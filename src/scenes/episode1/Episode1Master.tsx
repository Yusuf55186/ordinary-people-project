import { Sequence } from "remotion";
import { Episode1Scene1 } from "./Episode1Scene1";
import { Episode1Scene2 } from "./Episode1Scene2";
import { Episode1Scene3 } from "./Episode1Scene3";
import { Episode1Scene4 } from "./Episode1Scene4";
import { Episode1Scene5 } from "./Episode1Scene5";
import { Episode1Scene6 } from "./Episode1Scene6";
import { Episode1Scene7 } from "./Episode1Scene7";
import { Episode1Scene8 } from "./Episode1Scene8";
import { Episode1Scene9 } from "./Episode1Scene9";
import { Episode1Scene10 } from "./Episode1Scene10";
export const Episode1Master = () => {
return (
  <>
  <Sequence durationInFrames ={120}>
    <Episode1Scene3 />
  </Sequence>

  <Sequence from={120} durationInFrames={630}>
    <Episode1Scene1 />
  </Sequence>

  <Sequence from={750} durationInFrames={120}>
    <Episode1Scene2 />
  </Sequence>

  <Sequence from={870} durationInFrames={300}>
    <Episode1Scene4 />
  </Sequence>

  <Sequence from={1170} durationInFrames={120}>
  <Episode1Scene5 />
</Sequence>

<Sequence from={1290} durationInFrames={120}>
  <Episode1Scene6 />
</Sequence>

<Sequence from={1410} durationInFrames={540}>
  <Episode1Scene7 />
</Sequence>

<Sequence from={1950} durationInFrames={240}>
  <Episode1Scene8 />
</Sequence>
<Sequence from={2190} durationInFrames={240}>
  <Episode1Scene9 />
</Sequence>
<Sequence from={2430} durationInFrames={240}>
  <Episode1Scene10 />
</Sequence>
</>
);
}