import { interpolate } from "remotion";

type EyeLookPose = {
    eyeLLookX:number
    eyeLLookY:number
    eyeRLookX:number
    eyeRLookY:number
}
export const eyeLookingAnimation = (frame:number,lookFrames:number):EyeLookPose =>{
    const middleFrame = lookFrames * 0.5;
const lastFrame = lookFrames - 1;
const threeQuarterFrame = lookFrames * 0.75;
const quarterFrame = lookFrames * 0.25
const eyeLLookX = interpolate(frame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,2,2,0,0])
const eyeRLookX = interpolate(frame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,2,2,0,0])
const eyeRLookY = interpolate(frame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,-3,-3,0,0])
const eyeLLookY = interpolate(frame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,-3,-3,0,0])



    return {
        eyeLLookX,
        eyeLLookY,
        eyeRLookX,
        eyeRLookY,
    }
}