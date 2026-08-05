type idlePose = {
    bodyY:number
    leftArmSwing:number
    rightArmSwing:number
    leftElbowRotation:number
    leftHandRotation:number
    headRotation: number
}
export const idleAnimation = (frame:number,idleFrames:number):idlePose =>{
    const phase = (frame / idleFrames) * Math.PI * 2
    const bodyY = Math.sin(phase) * 3
    const leftArmSwing = Math.sin(phase) * 1.5;
const rightArmSwing = Math.sin(phase) * -1.5;
const headRotation = Math.sin(phase) * 1.5;
const leftElbowRotation = 0;
const leftHandRotation = 0;
    return {
       bodyY,
       leftArmSwing,
       rightArmSwing, 
       leftElbowRotation,
       leftHandRotation,
       headRotation
    };
}