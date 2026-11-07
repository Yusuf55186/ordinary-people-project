import type { YusufCharacterProps } from "../YusufCharacter";
import { FootballSideRig, type FootballKit } from "../production/poses/FootballSideRig";
import { RodeNPCHead } from "./RodeNPCHead";

const redKit: FootballKit = {
  shirt: "#ff0000",
  shorts: "#ff0000",
  shoe: "#ff0000",
  shoeDark: "#c1272d",
  shoeLight: "#ff6868",
  shoeOutline: "#7d0010",
  skin: "#d48455",
};

export const RodeNpcCharacter = (pose: Partial<YusufCharacterProps>) => (
  <FootballSideRig {...pose} head={<RodeNPCHead />} kit={redKit} />
);