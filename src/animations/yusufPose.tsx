import {type YusufCharacterProps } from "../YusufCharacter";
type YusufAnimationInput = Partial<YusufCharacterProps>;
export const yusufPose = (
  animation: YusufAnimationInput,
): YusufCharacterProps => {
    return {
        headRotation: animation.headRotation ?? 0,
        bodyY: animation.bodyY ?? 0,
        leftArmSwing: animation.leftArmSwing ?? 0,
        rightArmSwing: animation.rightArmSwing ?? 0,
        leftElbowRotation: animation.leftElbowRotation ?? 0,
        rightElbowRotation: animation.rightElbowRotation ?? 0,
        leftHipRotation: animation.leftHipRotation ?? 0,
        rightHipRotation: animation.rightHipRotation ?? 0,
        leftKneeRotation: animation.leftKneeRotation ?? 0,
        rightKneeRotation: animation.rightKneeRotation ?? 0,
        eyeScaleY:animation.eyeScaleY ?? 1,
        eyeLLookX: animation.eyeLLookX ?? 0,
        eyeRLookX: animation.eyeRLookX ?? 0,
        eyeLLookY: animation.eyeLLookY ?? 0,
        eyeRLookY: animation.eyeRLookY ?? 0,
        leftArmScaleY: animation.leftArmScaleY ?? 1,
        rightArmScaleY: animation.rightArmScaleY ?? 1,
        leftHandPose: animation.leftHandPose ?? "open",
        leftHandRotation: animation.leftHandRotation ?? 0,
        leftEyeBrowY:animation.leftEyeBrowY ?? 0,
        rightEyeBrowY:animation.rightEyeBrowY ?? 0,
        rightLegScaleY:animation.rightLegScaleY ?? 1,
        leftLegScaleY: animation.leftLegScaleY ?? 1,
        mouthPose:animation.mouthPose ?? "rest",
        

    }
};
