import { Sequence } from "remotion";
import { Episode3Scene1 } from "./Episode3Scene1";
import { Episode3Scene2 } from "./Episode3Scene2";
import { Episode2Master } from "../episode 2/Episode2Master";
export const Episode3Master = () => {
  return (
    <>
      <Sequence durationInFrames={430}>
        <Episode3Scene1 />
      </Sequence>
      <Sequence from={430}>
        <Episode3Scene2 />
      </Sequence>
    </>
  );
};
