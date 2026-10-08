import { interpolate } from "remotion";

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

  leftArmScaleY: number;
  rightArmScaleY: number;

  headRotation: number;
};

type FrontWalkConfig = {
  kneeAmplitude: number;
  hipAmplitude: number;
  bodyBounce: number;

  armSwingAmplitude: number;

  legScaleDelta: number;
  armScaleDelta: number;

  headRotationAmplitude: number;
};

const DEFAULT_FRONT_WALK_CONFIG: FrontWalkConfig = {
  kneeAmplitude: 30,
  hipAmplitude: 2,

  bodyBounce: 3.5,

  armSwingAmplitude: 10,

  legScaleDelta: 0.010,
  armScaleDelta: 0.025,

  headRotationAmplitude: 0.7,
};

export const frontWalkCycle = (
  frame: number,
  cycleFrames: number,
  config = DEFAULT_FRONT_WALK_CONFIG,
): FrontWalkPose => {
  const cycleFrame = frame % cycleFrames;

  const quarter = cycleFrames / 4;
  const half = cycleFrames / 2;
  const threeQuarter = (cycleFrames * 3) / 4;
  const end = cycleFrames - 1;

  const frames = [
    0,
    quarter,
    half,
    threeQuarter,
    end,
  ];

  return {
    /*
     * LEGS
     *
     * 0       = left step
     * quarter = passing position
     * half    = right step
     * 3/4     = passing position
     */

    leftKneeRotation: interpolate(
      cycleFrame,
      frames,
      [
        config.kneeAmplitude,
        8,
        0,
        10,
        config.kneeAmplitude,
      ],
    ),

    rightKneeRotation: interpolate(
      cycleFrame,
      frames,
      [
        0,
        -10,
        -config.kneeAmplitude,
        -8,
        0,
      ],
    ),

    leftHipRotation: interpolate(
      cycleFrame,
      frames,
      [
        config.hipAmplitude,
        0,
        -config.hipAmplitude,
        0,
        config.hipAmplitude,
      ],
    ),

    rightHipRotation: interpolate(
      cycleFrame,
      frames,
      [
        -config.hipAmplitude,
        0,
        config.hipAmplitude,
        0,
        -config.hipAmplitude,
      ],
    ),

    /*
     * BODY
     *
     * Slight dip during passing positions.
     */

    bodyY: interpolate(
      cycleFrame,
      frames,
      [
        0,
        config.bodyBounce,
        0,
        config.bodyBounce,
        0,
      ],
    ),

    /*
     * ARMS
     */

    leftArmSwing: interpolate(
      cycleFrame,
      frames,
      [
        config.armSwingAmplitude,
        0,
        -config.armSwingAmplitude,
        0,
        config.armSwingAmplitude,
      ],
    ),

    rightArmSwing: interpolate(
      cycleFrame,
      frames,
      [
        -config.armSwingAmplitude,
        0,
        config.armSwingAmplitude,
        0,
        -config.armSwingAmplitude,
      ],
    ),

    /*
     * FRONT-VIEW FORESHORTENING
     */

    leftLegScaleY: interpolate(
      cycleFrame,
      frames,
      [
        1 - config.legScaleDelta,
        1,
        1 + config.legScaleDelta,
        1,
        1 - config.legScaleDelta,
      ],
    ),

    rightLegScaleY: interpolate(
      cycleFrame,
      frames,
      [
        1 + config.legScaleDelta,
        1,
        1 - config.legScaleDelta,
        1,
        1 + config.legScaleDelta,
      ],
    ),

    leftArmScaleY: interpolate(
      cycleFrame,
      frames,
      [
        1 - config.armScaleDelta,
        1,
        1 + config.armScaleDelta,
        1,
        1 - config.armScaleDelta,
      ],
    ),

    rightArmScaleY: interpolate(
      cycleFrame,
      frames,
      [
        1 + config.armScaleDelta,
        1,
        1 - config.armScaleDelta,
        1,
        1 + config.armScaleDelta,
      ],
    ),

    /*
     * Keep head relatively stable.
     */

    headRotation: interpolate(
      cycleFrame,
      frames,
      [
        config.headRotationAmplitude,
        0,
        -config.headRotationAmplitude,
        0,
        config.headRotationAmplitude,
      ],
    ),
  };
};