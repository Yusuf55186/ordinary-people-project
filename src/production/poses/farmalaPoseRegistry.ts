import type { ComponentProps } from "react";
import { FarmalaCharacter } from "../../FarmalaCharacter";

export type FarmalaPoseId = "pose.farmala.front.beanbag-seated.v1";

export const farmalaPoseRegistry = {
  "pose.farmala.front.beanbag-seated.v1": {
    lowerBodyPose: "beanbagSeated",
  },
} as const satisfies Record<
  FarmalaPoseId,
  Partial<ComponentProps<typeof FarmalaCharacter>>
>;

export const resolveFarmalaPose = (poseId: FarmalaPoseId) =>
  farmalaPoseRegistry[poseId];
