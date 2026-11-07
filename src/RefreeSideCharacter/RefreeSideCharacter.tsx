import type { YusufCharacterProps } from "../YusufCharacter";
import { FootballSideRig } from "../production/poses/FootballSideRig";
import { RefreeSideArms } from "./RefreeSideArms";
import { RefreeSideHead } from "./RefreeSideHead";

export const RefreeSideFootball = (pose: Partial<YusufCharacterProps>) => (
  <FootballSideRig
    {...pose}
    head={<RefreeSideHead />}
    kit={{
      shirt: "#272b32",
      shorts: "#1b1e24",
      shoe: "#20242a",
      shoeDark: "#14171b",
      shoeLight: "#494f58",
      shoeOutline: "#0c0e11",
      skin:"#603813"
    }}
    ArmComponent={RefreeSideArms }
  />
);