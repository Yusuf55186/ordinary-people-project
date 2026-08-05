import { interpolate } from "remotion"

type BlinkPose = {
    eyeScaleY:number
}
export function BlinkingAnimation(frame:number,blinkFrames:number):BlinkPose{
    const eyeScaleY = interpolate(frame,[0,20,23,26,blinkFrames -1],
        [1,1,0.08,1,1]
    )
    return {
        eyeScaleY,

    }
}