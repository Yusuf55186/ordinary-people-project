import {interpolate} from "remotion";

type FrontWalkPose = {
  leftKneeRotation: number;
  rightKneeRotation: number;
  leftHipRotation: number;
  rightHipRotation: number;
  bodyY: number;
  leftArmSwing: number;
  rightArmSwing: number;
  leftLegScaleY: number;
  rightLegScaleY: number;
};

type FrontWalkConfig = {
  kneeAmplitude: number;
  hipAmplitude: number;
  bodyBounce: number;
  armSwingAmplitude: number;
  legScaleDelta: number;
};

const DEFAULT_FRONT_WALK_CONFIG: FrontWalkConfig = {
  kneeAmplitude: 6,
  hipAmplitude: 1,
  bodyBounce: 4,
  armSwingAmplitude: 4,
  legScaleDelta: 0.060,
};

export const frontWalkCycle = (
  frame: number,
  cycleFrames: number,
  config = DEFAULT_FRONT_WALK_CONFIG,
): FrontWalkPose => {
  const cycleFrame = frame % cycleFrames;
  const middleFrame = cycleFrames / 2;
  const lastFrame = cycleFrames - 1;

  const frames = [0, middleFrame, lastFrame];

  return {
    leftKneeRotation: interpolate(
      cycleFrame,
      frames,
      [config.kneeAmplitude, 0, config.kneeAmplitude],
    ),
    rightKneeRotation: interpolate(
      cycleFrame,
      frames,
      [0, -config.kneeAmplitude, 0],
    ),

    leftHipRotation: interpolate(
      cycleFrame,
      frames,
      [config.hipAmplitude, -config.hipAmplitude, config.hipAmplitude],
    ),
    rightHipRotation: interpolate(
      cycleFrame,
      frames,
      [-config.hipAmplitude, config.hipAmplitude, -config.hipAmplitude],
    ),

    bodyY: interpolate(
      cycleFrame,
      frames,
      [0, -config.bodyBounce, 0],
    ),

    leftArmSwing: interpolate(
      cycleFrame,
      frames,
      [config.armSwingAmplitude, -config.armSwingAmplitude, config.armSwingAmplitude],
    ),
    rightArmSwing: interpolate(
      cycleFrame,
      frames,
      [-config.armSwingAmplitude, config.armSwingAmplitude, -config.armSwingAmplitude],
    ),

    // Bent/receding leg becomes slightly shorter.
    // Planted leg stays slightly longer.
    leftLegScaleY: interpolate(
      cycleFrame,
      frames,
      [1 - config.legScaleDelta, 1 + config.legScaleDelta, 1 - config.legScaleDelta],
    ),
    rightLegScaleY: interpolate(
      cycleFrame,
      frames,
      [1 + config.legScaleDelta, 1 - config.legScaleDelta, 1 + config.legScaleDelta],
    ),
  };
};