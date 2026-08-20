import { Sequence } from "remotion";
import { Episode2Scene1 } from "./Episode2Scene1";
import { Episode2Scene2 } from "./Episode2Scene2";
export const Episode2Master = () => {
return (
    <>
    <Sequence durationInFrames={1680}>
        
        <Episode2Scene1  />
    </Sequence>
    <Sequence from={1680}>
        <Episode2Scene2 />
    </Sequence>
    </>
)
}