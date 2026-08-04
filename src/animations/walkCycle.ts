import {interpolate,} from 'remotion';

type WalkCyclePose = {
leftKneeRotation: number
rightKneeRotation: number
leftHipRotation: number
rightHipRotation: number
bodyY:number
leftArmSwing:number
rightArmSwing:number

}
export const walkCycle = (frame:number,cycleFrames:number):WalkCyclePose => {
     
    const middleFrame = cycleFrames/2
    const lastFrame = cycleFrames -1
    const leftKneeRotation = interpolate(frame, [0, middleFrame, lastFrame], [25, 0, 25]);
const rightKneeRotation = interpolate(frame, [0, middleFrame, lastFrame], [0, -25, 0]);
    const leftHipRotation = interpolate(frame,[0,middleFrame,lastFrame],[1,-1,1]);
    const rightHipRotation = interpolate(frame,[0,middleFrame,lastFrame],[-1, 1,-1]);
    const bodyY =interpolate(frame, [0, middleFrame, lastFrame], [0,-4,0]);
    const leftArmSwing= interpolate(frame, [0, middleFrame,lastFrame], [8,-8,8])
    const rightArmSwing = interpolate(frame, [0,middleFrame,lastFrame], [8,-8,8])
    
   
    
    
   return{
    leftKneeRotation,
    rightKneeRotation,
    leftHipRotation,
    rightHipRotation,
    bodyY,
    leftArmSwing,
    rightArmSwing
    
   };
}
