import { Sequence } from "remotion";
import { Episode2Scene1 } from "./Episode2Scene1";
import { Episode2Scene2 } from "./Episode2Scene2";
import { Episode2Scene3 } from "./Episode2Scene3";
import { Episode2Scene4 } from "./Episode2Scene4";
import { Episode2Scene5 } from "./Episode2Scene5";
import { Episode2Scene6 } from "./Episode2Scene6";
import { Episode2Scene7 } from "./EpisodeScene7";
export const Episode2Master = () => {
return (
    <>
    <Sequence durationInFrames={2000}>
        
        <Episode2Scene1  />
    </Sequence>
    <Sequence from={2000} durationInFrames={1400}>
        <Episode2Scene2 />
    </Sequence>
    <Sequence from={3400} durationInFrames={2000}>
        <Episode2Scene3 />
    </Sequence>
    <Sequence from={5400} durationInFrames={3000}>
        <Episode2Scene4 />
    </Sequence>
    <Sequence from={8400} durationInFrames={3000}>
        <Episode2Scene5 />
    </Sequence>
    <Sequence from={11400} durationInFrames={3000}>
        <Episode2Scene6 />
    </Sequence>
    <Sequence from={14400} durationInFrames={3000}>
        <Episode2Scene7 />
    </Sequence>
    
    </>
)
}