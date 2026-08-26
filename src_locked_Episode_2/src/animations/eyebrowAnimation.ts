import { interpolate } from "remotion";

type EyebrowPose = {
    leftEyeBrowY:number
    rightEyeBrowY:number
}
export const eyeBrowAnimation = (frame:number,EyeBrowFrames:number):EyebrowPose => {
    const middleFrame = EyeBrowFrames * 0.5;
const lastFrame = EyeBrowFrames - 1;
const threeQuarterFrame = EyeBrowFrames * 0.75;
const quarterFrame = EyeBrowFrames * 0.25
const leftEyeBrowY = interpolate(frame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,-4,-4,0,0])
const rightEyeBrowY = interpolate(frame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,2,2,0,0])



return {
    leftEyeBrowY,
    rightEyeBrowY
}
}