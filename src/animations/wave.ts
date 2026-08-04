import { interpolate } from "remotion"
type WavePose = {
    leftArmSwing:number
    rightArmSwing:number
    leftElbowRotation:number
    rightElbowRotation:number
}
export function WaveAnimation(frame:number,WaveFrames:number):WavePose{
    
    const rasieEnd = 15;
    const waveEnd = 45;
    const lastFrame = WaveFrames - 1;
    const leftElbowRotation = interpolate(frame,[0,15,22,29,36,43,waveEnd,lastFrame],[0,0,15,-10,-15,-10,0,0]);
    const leftArmSwing = interpolate(frame,[0,rasieEnd,waveEnd,lastFrame],[0,90,90,0]);
    return { 
        leftArmSwing,
        rightArmSwing:0,
        leftElbowRotation,
        rightElbowRotation:0

    }

}
