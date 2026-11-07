import type { YusufCharacterProps } from "../YusufCharacter";
import { FootballSideRig } from "../production/poses/FootballSideRig";
import { YusufSideHead } from "./YusufSideHead";

export const YusufSideFootball = (pose: Partial<YusufCharacterProps>) => (
  <FootballSideRig {...pose} head={<YusufSideHead />} />
);
