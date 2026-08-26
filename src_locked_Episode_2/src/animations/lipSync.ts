import type { MouthPose } from "../YusufHead";
export type MouthCue = {
    startFrame:number
    endFrame:number
    pose:MouthPose
}
export const getMouthPose = (
    frame:number,
    mouthCues:MouthCue[]
):MouthPose => {
    const activeCue = mouthCues.find((cue) => {
      return cue.startFrame <= frame && frame < cue.endFrame;
    });
    const mouthPose:MouthPose = activeCue ? activeCue.pose : "rest";
    
    return mouthPose
}