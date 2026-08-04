import {interpolate,} from 'remotion';

type WalkCyclePose = {
leftKneeRotation: number
rightKneeRotation: number
leftHipRotation: number
rightHipRotation: number
}
export const walkCycle = (frame:number,cycleFrames:number):WalkCyclePose => {
     
    const middleFrame = cycleFrames/2
    const lastFrame = cycleFrames -1
    const leftKneeRotation = interpolate(frame,[0,middleFrame,lastFrame],[20,0,20]);
    const rightKneeRotation = interpolate(frame,[0,middleFrame,lastFrame],[0,-20,0]);
    const leftHipRotation = interpolate(frame,[0,middleFrame,lastFrame],[2,-2,2]);
    const rightHipRotation = interpolate(frame,[0,middleFrame,lastFrame],[2, -2,2]);
   
    
    
   return{
    leftKneeRotation,
    rightKneeRotation,
    leftHipRotation,
    rightHipRotation,
    
   };
}
