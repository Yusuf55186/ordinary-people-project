import { MouthCue } from "./animations/lipSync";
export type MouthPose = MouthCue["pose"];

/**
 * The shared animation language used by every articulated humanoid character.
 *
 * This type deliberately contains no SVG ids or pivot coordinates. Those belong
 * to each character component because every drawing has different geometry.
 */
export type HumanoidRigPose = {
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

export type HumanoidAnimationInput = Partial<HumanoidRigPose> & {
  leftArmSwing?: number;
  rightArmSwing?: number;
  leftHipRotation?: number;
  rightHipRotation?: number;
};

export type HumanoidRigCalibration = {
  eyeLookScale: number;
  eyebrowMoveScale: number;
};

export const DEFAULT_HUMANOID_CALIBRATION: HumanoidRigCalibration = {
  eyeLookScale: 0.6,
  eyebrowMoveScale: 2,
};

/**
 * Converts reusable animation output into the shared humanoid pose contract.
 * Character-specific adapters only supply calibration; they do not rebuild this
 * fallback and alias logic.
 */
export const humanoidPose = (
  animation: HumanoidAnimationInput,
  calibration: HumanoidRigCalibration = DEFAULT_HUMANOID_CALIBRATION,
): HumanoidRigPose => ({
  headRotation: animation.headRotation ?? 0,
  bodyY: animation.bodyY ?? 0,

  leftArmRotation:
    animation.leftArmRotation ?? (animation.leftArmSwing) ?? 0,
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

  eyeLLookX: (animation.eyeLLookX ?? 0) * calibration.eyeLookScale,
  eyeLLookY: (animation.eyeLLookY ?? 0) * calibration.eyeLookScale,
  eyeRLookX: (animation.eyeRLookX ?? 0) * calibration.eyeLookScale,
  eyeRLookY: (animation.eyeRLookY ?? 0) * calibration.eyeLookScale,

  leftEyeBrowY:
    (animation.leftEyeBrowY ?? 0) * calibration.eyebrowMoveScale,
  rightEyeBrowY:
    (animation.rightEyeBrowY ?? 0) * calibration.eyebrowMoveScale,

  mouthPose: animation.mouthPose ?? "rest",
});