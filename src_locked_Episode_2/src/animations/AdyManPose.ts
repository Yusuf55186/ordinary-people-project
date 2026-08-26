import {
  humanoidPose,
  type HumanoidAnimationInput,
  type HumanoidRigPose,
} from "../humanoidRig";

export type AdyManRigPose = HumanoidRigPose;
export type AdyManAnimationInput = HumanoidAnimationInput;

// 3ady Man starts with the same calibration. We can tune only this wrapper later.
export const adyManPose = (
  animation: AdyManAnimationInput,
): AdyManRigPose => humanoidPose(animation);