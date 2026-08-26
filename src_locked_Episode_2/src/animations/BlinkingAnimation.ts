import { interpolate } from "remotion"

type BlinkPose = {
    eyeScaleY:number
}
export function BlinkingAnimation(frame:number,blinkFrames:number):BlinkPose{
    const localFrame = frame % blinkFrames;
    const eyeScaleY = interpolate(localFrame,[0,20,23,26,blinkFrames -1],
        [1,1,0.08,1,1]
    )
    return {
        eyeScaleY,

    }
}