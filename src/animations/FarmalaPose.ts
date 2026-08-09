import {
  humanoidPose,
  type HumanoidAnimationInput,
  type HumanoidRigPose,
} from "../humanoidRig";
export type FarmalaRigPose = HumanoidRigPose;
export type FarmalaAnimationInput = HumanoidAnimationInput;

// Farmala currently uses the shared default calibration.
export const farmalaPose = (
  animation: FarmalaAnimationInput,
): FarmalaRigPose => humanoidPose(animation);