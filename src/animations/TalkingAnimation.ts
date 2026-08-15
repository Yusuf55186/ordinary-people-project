import { interpolate } from "remotion"
export type TalkingProfile = {
  headRotation: number[];
  bodyY: number[];
  leftArmSwing: number[];
  rightArmSwing: number[];
  leftElbowRotation: number[];
  rightElbowRotation: number[];
  leftHandRotation: number[];
};
type TalkPose = {
    headRotation:number
    bodyY:number
    leftArmSwing:number
    rightArmSwing:number
    leftElbowRotation:number
    rightElbowRotation:number
    leftHandRotation:number
    
}
const defaultTalkingProfile: TalkingProfile = {
  headRotation: [0, 0, 2, 2, 0],
  bodyY: [0, -2, 0],
  leftArmSwing: [0, 10, 10, 0, 0],
  leftElbowRotation: [0, 12, 12, 0, 0],
  leftHandRotation: [0, 6, 6, 0, 0],
  rightArmSwing: [0, -30, -30, 0, 0],
  rightElbowRotation: [0, -2, -2, 0, 0],
};

export const talkingAnimation = (
  frame: number,
  talkFrames: number,
  profile: TalkingProfile = defaultTalkingProfile,
): TalkPose => {
    
    const localFrame = frame % talkFrames;
const middleFrame = talkFrames * 0.5;
const lastFrame = talkFrames - 1;
const threeQuarterFrame = talkFrames * 0.75;
const quarterFrame = talkFrames * 0.25
const headRotation = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],profile.headRotation);
const bodyY = interpolate(localFrame,[0,middleFrame,lastFrame],profile.bodyY)
const leftArmSwing = interpolate(localFrame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],profile.leftArmSwing);
const leftElbowRotation = interpolate(localFrame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],profile.leftElbowRotation);
const leftHandRotation = interpolate(localFrame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame], profile.leftHandRotation);
const rightArmSwing = interpolate(localFrame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame], profile.rightArmSwing);
const rightElbowRotation = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],profile.rightElbowRotation)     
    return {
        headRotation,
        bodyY,
        leftArmSwing,
        rightArmSwing,
        leftElbowRotation,
        rightElbowRotation,
        leftHandRotation,
        

    }
}

