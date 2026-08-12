import { interpolate } from "remotion"
type TalkPose = {
    headRotation:number
    bodyY:number
    leftArmSwing:number
    rightArmSwing:number
    leftElbowRotation:number
    rightElbowRotation:number
    leftHandRotation:number
    
}
export const talkingAnimation = (frame:number,talkFrames:number):TalkPose => {
    const localFrame = frame % talkFrames;
const middleFrame = talkFrames * 0.5;
const lastFrame = talkFrames - 1;
const threeQuarterFrame = talkFrames * 0.75;
const quarterFrame = talkFrames * 0.25
const headRotation = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,0,2,2,0]);
const bodyY = interpolate(localFrame,[0,middleFrame,lastFrame],[0,-2,0])
const leftArmSwing = interpolate(localFrame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,10,10,0,0]);
const leftElbowRotation = interpolate(localFrame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,12,12,0,0]);
const leftHandRotation = interpolate(localFrame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame], [0,6,6,0,0]);
const rightArmSwing = interpolate(localFrame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame], [0,-30,-30,0,0]);
const rightElbowRotation = interpolate(localFrame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,-2,-2,0,0])     
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