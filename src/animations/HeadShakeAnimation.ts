import { interpolate } from "remotion"

type HeadShakePose = {
    headRotation:number
}
export const HeadShakeAnimation = (frame:number,headShakeFrames:number):HeadShakePose => {
    const middleFrame = headShakeFrames * 0.5;
const lastFrame = headShakeFrames - 1;
const threeQuarterFrame = headShakeFrames * 0.75;
const quarterFrame = headShakeFrames * 0.25
    const headRotation = interpolate(frame,[0,quarterFrame,middleFrame,threeQuarterFrame,lastFrame],[0,-4,4,-4,0])
    return {
        headRotation,
    }
}