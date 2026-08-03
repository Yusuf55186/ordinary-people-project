import {interpolate,} from 'remotion';

type WalkCyclePose = {
leftKneeRotation: number;
rightKneeRotation: number;
};
export const walkCycle = (frame:number):WalkCyclePose => {
    const leftKneeRotation = interpolate(frame,[0,30,59],[20,0,20]);
    const rightKneeRotation = interpolate(frame,[0,30,59],[0,20,0]);
   return{
    leftKneeRotation,
    rightKneeRotation
   };
}
