import type { MouthCue } from "./lipSync";

type MouthPose = MouthCue["pose"];

export type FarmalaRigPose = {
  headRotation: number;
  bodyY: number;

  leftArmRotation: number;
  rightArmRotation: number;
  leftElbowRotation: number;
  rightElbowRotation: number;

  leftHandRotation: number;
  rightHandRotation: number;

  leftLegRotation: number;
  rightLegRotation: number;
  leftKneeRotation: number;
  rightKneeRotation: number;

  eyeScaleY: number;
  eyeLLookX: number;
  eyeLLookY: number;
  eyeRLookX: number;
  eyeRLookY: number;

  leftEyeBrowY: number;
  rightEyeBrowY: number;

  mouthPose: MouthPose;
};

type FarmalaAnimationInput = Partial<FarmalaRigPose> & {
  leftArmSwing?: number;
  rightArmSwing?: number;
  leftHipRotation?: number;
  rightHipRotation?: number;
};

export const farmalaPose = (
  animation: FarmalaAnimationInput,
): FarmalaRigPose => {
  return {
    headRotation: animation.headRotation ?? 0,
    bodyY: animation.bodyY ?? 0,

    leftArmRotation:
      animation.leftArmRotation ?? animation.leftArmSwing ?? 0,

    rightArmRotation:
      animation.rightArmRotation ?? animation.rightArmSwing ?? 0,

    leftElbowRotation: animation.leftElbowRotation ?? 0,
    rightElbowRotation: animation.rightElbowRotation ?? 0,

    leftHandRotation: animation.leftHandRotation ?? 0,
    rightHandRotation: animation.rightHandRotation ?? 0,

    leftLegRotation:
      animation.leftLegRotation ?? animation.leftHipRotation ?? 0,

    rightLegRotation:
      animation.rightLegRotation ?? animation.rightHipRotation ?? 0,

    leftKneeRotation: animation.leftKneeRotation ?? 0,
    rightKneeRotation: animation.rightKneeRotation ?? 0,

    eyeScaleY: animation.eyeScaleY ?? 1,

    eyeLLookX: (animation.eyeLLookX ?? 0) * 0.6,
    eyeLLookY: (animation.eyeLLookY ?? 0) * 0.6,
    eyeRLookX: (animation.eyeRLookX ?? 0) * 0.6,
    eyeRLookY: (animation.eyeRLookY ?? 0) * 0.6,

    leftEyeBrowY: (animation.leftEyeBrowY ?? 0) * 2,
    rightEyeBrowY: (animation.rightEyeBrowY ?? 0) * 2,

    mouthPose: animation.mouthPose ?? "rest",
  };
};