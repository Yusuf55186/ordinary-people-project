import { interpolate,} from 'remotion';

type WalkCyclePose = {
leftKneeRotation: number
rightKneeRotation: number
leftHipRotation: number
rightHipRotation: number
bodyY:number
leftArmSwing:number
rightArmSwing:number
}
export type WalkCycleConfig = {
    kneeAmplitude: number;
hipAmplitude: number;
bodyBounce: number;
armSwingAmplitude: number;
}
const DEFAULT_WALK_CYCLE_CONFIG: WalkCycleConfig = {
  kneeAmplitude: 25,
  hipAmplitude: 1,
  bodyBounce: 4,
  armSwingAmplitude: 8,
};
export const walkCycle = (frame:number,cycleFrames:number,config = DEFAULT_WALK_CYCLE_CONFIG):WalkCyclePose => {
     const {
        kneeAmplitude,
        hipAmplitude,
        bodyBounce,
        armSwingAmplitude,
     }=config;
    const middleFrame = cycleFrames/2
    const lastFrame = cycleFrames -1
    const cycleFrame = frame % cycleFrames;
    const leftKneeRotation = interpolate(
        cycleFrame, [0,middleFrame,lastFrame],[kneeAmplitude,0,kneeAmplitude]
    )
    const rightKneeRotation = interpolate(
  cycleFrame,
  [0, middleFrame, lastFrame],
  [0, -kneeAmplitude, 0],
);

const leftHipRotation = interpolate(
  cycleFrame,
  [0, middleFrame, lastFrame],
  [hipAmplitude, -hipAmplitude, hipAmplitude],
);

const rightHipRotation = interpolate(
  cycleFrame,
  [0, middleFrame, lastFrame],
  [-hipAmplitude, hipAmplitude, -hipAmplitude],
);

const bodyY = interpolate(
  cycleFrame,
  [0, middleFrame, lastFrame],
  [0, -bodyBounce, 0],
);

const leftArmSwing = interpolate(
  cycleFrame,
  [0, middleFrame, lastFrame],
  [armSwingAmplitude, -armSwingAmplitude, armSwingAmplitude],
);

const rightArmSwing = interpolate(
  cycleFrame,
  [0, middleFrame, lastFrame],
  [armSwingAmplitude, -armSwingAmplitude, armSwingAmplitude],
);
   
    
    
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
