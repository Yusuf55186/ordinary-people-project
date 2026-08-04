import { interpolate } from "remotion"
type WavePose = {
    leftArmSwing:number
    rightArmSwing:number
    leftElbowRotation:number
    rightElbowRotation:number
    leftHandRotation:number
}
export function WaveAnimation(frame:number,WaveFrames:number):WavePose{
    
    const raiseEnd = WaveFrames * 0.25;
const waveEnd = WaveFrames * 0.75;
const lastFrame = WaveFrames - 1;
    const leftElbowRotation = interpolate(frame,[0,15,22,29,36,43,waveEnd,lastFrame],[0,0,25,-15,-25,-15,0,0]);
    const leftArmSwing = interpolate(frame,[0,raiseEnd,waveEnd,lastFrame],[0,90,90,0]);
    const leftHandRotation = interpolate(frame, [0,15,22,29,36,43,45,lastFrame],[0,0,-18,18,-18,18,18,0]);
    return { 
        leftArmSwing,
        rightArmSwing:0,
        leftElbowRotation,
        rightElbowRotation:0,
        leftHandRotation,

    }

}
