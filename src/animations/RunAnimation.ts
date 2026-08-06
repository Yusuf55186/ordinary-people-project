import { interpolate } from "remotion"

type RunPose = {
    leftHipRotation:number
    rightHipRotation:number
    leftKneeRotation:number
    rightKneeRotation:number
    bodyY:number
    leftArmSwing:number
    rightArmSwing:number
    leftElbowRotation:number
    rightElbowRotation:number
    headRotation:number
    leftLegScaleY:number
    rightLegScaleY:number
    leftArmScaleY:number
    rightArmScaleY:number
}

export const RunAnimation = (frame:number,runFrames:number):RunPose => {
const localFrame = frame % runFrames;
const middleFrame = runFrames * 0.5;
const lastFrame = runFrames - 1;
const threeQuarterFrame = runFrames * 0.75;
const quarterFrame = runFrames * 0.25;
const leftHipRotation = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[22, 5, -22, -5, 22])
const rightHipRotation = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[-20, -5, 20, 5, -20])
const leftKneeRotation = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[5, 65, 15, 10, 5])
const rightKneeRotation = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[-15, -10, -5, -65, -15])
const leftArmSwing = interpolate(
  localFrame,
  [0, 7, 15, 22, 29],
[0, -5, 0, 5, 0]
);

const rightArmSwing = interpolate(
  localFrame,
  [0, 7, 15, 22, 29],
[0, 5, 0, -5, 0]
);
const leftElbowRotation = interpolate(
  localFrame,
  [0, 7, 15, 22,25,27,29],
[0, -18, -14, -16,-12,-10,0]
);

const rightElbowRotation = interpolate(
  localFrame,
  [0, 7, 15, 22,25,27, 29],
[0, 18, 14, 16,12,10,0]);
const bodyY = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0, -16, 0, -16, 0])
const headRotation = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0, -2, 0, 2, 0])
const leftLegScaleY = interpolate(localFrame, [0,middleFrame,lastFrame],[1,0.82,1])
const rightLegScaleY = interpolate(localFrame, [0,middleFrame,lastFrame],[0.82,1,0.82])
const leftArmScaleY = interpolate(localFrame, [0,middleFrame,lastFrame], [1, 0.8, 1])
const rightArmScaleY = interpolate(localFrame, [0,middleFrame,lastFrame],[0.8,1,0.8])



return {
leftHipRotation,

rightHipRotation,

leftKneeRotation,

rightKneeRotation,

bodyY,

leftArmSwing,

rightArmSwing,

leftElbowRotation,

rightElbowRotation,
headRotation,
leftLegScaleY,
rightLegScaleY,
leftArmScaleY,
rightArmScaleY,

}
}