import { interpolate } from "remotion"
type PointPose = {
    leftArmSwing:number
    leftElbowRotation:number
    leftHandRotation:number
    leftHandPose: "open" | "point"
}
export const pointAnimation = (frame:number,pointingFrames:number):PointPose=>{
    const raiseEnd = pointingFrames * 0.25;
const holdEnd = pointingFrames * 0.75;
const lastFrame = pointingFrames - 1;
const pointHand = 20;
const pointElbow = -10;
const pointArm = 70;
    const leftArmSwing = interpolate(frame,[0,raiseEnd,holdEnd,lastFrame],[0,pointArm,pointArm,0]);
    const leftHandRotation = interpolate (frame,[0,raiseEnd,holdEnd,lastFrame],[0,pointHand,pointHand,0]);
    const leftElbowRotation = interpolate (frame,[0,raiseEnd,holdEnd,lastFrame],[0,pointElbow,pointElbow,0]);
    
    const leftHandPose: PointPose["leftHandPose"] =
  frame >= raiseEnd && frame <= holdEnd
    ? "point"
    : "open";
    return {
        leftArmSwing,
        leftElbowRotation,
        leftHandRotation,
        leftHandPose,

    }
}