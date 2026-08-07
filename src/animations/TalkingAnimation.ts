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
    { startFrame:5,
    endFrame:7,
    pose:"N"
   },
   { startFrame:8,
    endFrame:10,
    pose:"I"
   },
   { startFrame:11,
    endFrame:12,
    pose:"G"
   },
   { startFrame:13,
    endFrame:14,
    pose:"G"
   },
   { startFrame:15,
    endFrame:17,
    pose:"E"
   },
   { startFrame:18,
    endFrame:20,
    pose:"R"
   },
   { startFrame:46,
    endFrame:48,
    pose:"E"
   },
   { startFrame:49,
    endFrame:51,
    pose:"E"
   },
   { startFrame:52,
    endFrame:54,
    pose:"S"
   },
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
    ,endFrame:89,
    pose:"A"}
    ,{
        startFrame:89,
        endFrame:93,
        pose:"MBP"
    }
    ,{
        startFrame:93,
        endFrame:94,
        pose:"A"
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
const mouthPose:MouthPose = activeCue ? activeCue.pose : "MBP";
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