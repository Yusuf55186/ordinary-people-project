import { interpolate } from "remotion"
import { MouthPose } from "../YusufHead"
type TalkPose = {
    headRotation:number
    bodyY:number
    leftArmSwing:number
    rightArmSwing:number
    leftElbowRotation:number
    rightElbowRotation:number
    leftHandRotation:number
    mouthPose:MouthPose
}
type MouthCue = {
    startFrame: number
    endFrame:number
    pose:MouthPose
    
}
const mouthCues : MouthCue[] =  [
    { startFrame:79,
    endFrame:81,
    pose:"S"
   },
   { startFrame:81,
    endFrame:83,
    pose:"A"
   },
   {
    startFrame:83,
    endFrame:86,
    pose:"L"
   },
   {
    
    startFrame:86
    ,endFrame:88,
    pose:"A"}
    ,{
        startFrame:89,
        endFrame:92,
        pose:"MBP"
    }
    ,{
        startFrame:93,
        endFrame:94,
        pose:"A"
    }
    ,{
        startFrame:94,
        endFrame:97,
        pose:"U"
    }

    

    
    

]

export const talkingAnimation = (frame:number,talkFrames:number):TalkPose => {
const middleFrame = talkFrames * 0.5;
const lastFrame = talkFrames - 1;
const threeQuarterFrame = talkFrames * 0.75;
const quarterFrame = talkFrames * 0.25
const headRotation = interpolate(frame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,0,2,2,0]);
const bodyY = interpolate(frame,[0,middleFrame,lastFrame],[0,-2,0])
const leftArmSwing = interpolate(frame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,10,10,0,0]);
const leftElbowRotation = interpolate(frame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,12,12,0,0]);
const leftHandRotation = interpolate(frame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame], [0,6,6,0,0]);
const rightArmSwing = interpolate(frame, [0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame], [0,-30,-30,0,0]);
const rightElbowRotation = interpolate(frame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,-2,-2,0,0])
const activeCue = mouthCues.find((cue) => {
  return cue.startFrame <= frame && frame < cue.endFrame;
});
const mouthPose:MouthPose = activeCue ? activeCue.pose : "rest";
// interpolate returns a generic value; ensure it's typed as MouthPose
     
    return {
        headRotation,
        bodyY,
        leftArmSwing,
        rightArmSwing,
        leftElbowRotation,
        rightElbowRotation,
        leftHandRotation,
        mouthPose,

    }
}