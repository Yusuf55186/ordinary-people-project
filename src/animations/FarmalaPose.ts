import {
  humanoidPose,
  type HumanoidAnimationInput,
  type HumanoidRigPose,
} from "../humanoidRig";
import type { TalkingProfile } from "./TalkingAnimation";
export type FarmalaRigPose = HumanoidRigPose;
export type FarmalaAnimationInput = HumanoidAnimationInput;
export const farmalaTalkingProfile = {
  headRotation: [0, -2, 5, 5, 0],
  bodyY: [0, -4, 0],
  leftArmSwing: [0, 18, 18, 0, 0],
  leftElbowRotation: [0, 28, 28, 0, 0],
  leftHandRotation: [0, 12, 12, 0, 0],
  rightArmSwing: [0, -38, -38, 0, 0],
  rightElbowRotation: [0, -8, -8, 0, 0],
} satisfies TalkingProfile;
// Farmala currently uses the shared default calibration.
export const farmalaPose = (
  animation: FarmalaAnimationInput,
): FarmalaRigPose => humanoidPose(animation);