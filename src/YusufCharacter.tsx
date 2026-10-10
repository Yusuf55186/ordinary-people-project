import { YusufLegs } from "./YusufLegs"
import { YusufTorsoPelvis } from "./YusufTorsoPelvis"
import { MouthPose, YusufHead } from "./YusufHead"
import { YusufArms } from "./YusufArms"

export type YusufCharacterProps = {
grounded?: boolean;
leftKneeRotation: number;
rightKneeRotation: number;
leftHipRotation: number;
rightHipRotation: number;
bodyY:number;
leftArmSwing:number;
rightArmSwing:number;
leftElbowRotation:number;
rightElbowRotation:number;
leftHandRotation:number;
headRotation:number;
eyeScaleY:number;
leftHandPose: "open" | "point";
eyeLLookX: number;
eyeLLookY: number;
eyeRLookX: number;
eyeRLookY: number;
leftEyeBrowY:number;
rightEyeBrowY:number;
leftLegScaleY:number;
rightLegScaleY:number;
leftArmScaleY:number;
rightArmScaleY:number;
mouthPose: MouthPose;
smileStrength?: number;

}
// Approximate sole-edge anchors in the existing leg SVG coordinates.
// Grounding is opt-in, preserving the rig's behaviour in other episodes.
export const YUSUF_GROUND_Y = 1050;
export const getYusufGroundOffset = (
  leftKnee: number, rightKnee: number,
  leftHip: number, rightHip: number,
  leftScale: number, rightScale: number,
): number => {
  const rotate = (x: number, y: number, cx: number, cy: number, degrees: number) => {
    const a = degrees * Math.PI / 180;
    return [cx + (x-cx)*Math.cos(a) - (y-cy)*Math.sin(a),
      cy + (x-cx)*Math.sin(a) + (y-cy)*Math.cos(a)];
  };
  const soleY = (x: number, y: number, left: boolean) => {
    const hipX = left ? 50 : 116;
    const knee = rotate(x, y, left ? 41 : 116, left ? 172 : 173,
      left ? leftKnee : rightKnee);
    const scaledY = 10 + (knee[1] - 10) * (left ? leftScale : rightScale);
    const hip = rotate(knee[0], scaledY, hipX, 10, left ? leftHip : rightHip);
    return 560 + hip[1] * (left ? 1.06 : 1) * (250 / 188.5) * 1.1;
  };
  const lowestSole = Math.max(
    soleY(16, 304.38, true), soleY(64, 303.64, true),
    soleY(123, 301.69, false), soleY(171, 305.13, false),
  );
  return YUSUF_GROUND_Y - lowestSole;
};

export function YusufCharacter({grounded = false,leftKneeRotation,rightKneeRotation,leftHipRotation,rightHipRotation,bodyY,leftArmSwing,rightArmSwing,leftElbowRotation,rightElbowRotation,leftHandRotation,headRotation,eyeScaleY,leftHandPose,eyeLLookX,eyeLLookY,eyeRLookX,eyeRLookY,leftEyeBrowY,rightEyeBrowY,leftLegScaleY,rightLegScaleY,leftArmScaleY,rightArmScaleY,mouthPose,smileStrength}:YusufCharacterProps){
    const groundedOffset = getYusufGroundOffset(
      leftKneeRotation, rightKneeRotation, leftHipRotation, rightHipRotation,
      leftLegScaleY, rightLegScaleY,
    );
    return (
        <div style={{position:"relative", width: 500,height: 1050,transform: `translateY(${grounded ? groundedOffset : bodyY}px)`,}} >
            <div style={{  position: "absolute",
    left: 125,
    top: 560,
    width: 250,
    transform: "scaleY(1.1)",
    transformOrigin: "50% 0%", }}>
               
        <YusufLegs
        leftKneeRotation={leftKneeRotation}
        rightKneeRotation={rightKneeRotation}
        leftHipRotation={leftHipRotation}
        rightHipRotation={rightHipRotation}
        leftLegScaleY={leftLegScaleY}
        rightLegScaleY={rightLegScaleY}
       
        
         />
         </div>
         
         
         
         {/* Grounded scenes keep body acting above the fixed leg anchor. */}
         <div style={{position: "absolute", inset: 0, transform: `translateY(${grounded ? bodyY : 0}px)`}}>
         <div style={{position:"absolute", left: 135,top: 180,width: 230}}>
        <YusufTorsoPelvis
        
        />
        
        </div>
        <div style={{position: "absolute",left: 160,top: 0,width: 180,}}>
        <div
 
>
  <YusufHead  headRotation={headRotation} eyeScaleY={eyeScaleY} eyeLLookX={eyeLLookX} eyeRLookX={eyeRLookX} eyeRLookY={eyeRLookY}
eyeLLookY={eyeLLookY} leftEyeBrowY={leftEyeBrowY} rightEyebrowY={rightEyeBrowY} mouthPose={mouthPose} smileStrength={smileStrength}
  />
</div>
        
        
        </div>
        <YusufArms leftArmSwing={leftArmSwing} rightArmSwing={rightArmSwing} leftElbowRotation={leftElbowRotation} rightElbowRotation={rightElbowRotation} leftHandRotation={leftHandRotation} leftHandPose={leftHandPose} leftArmScaleY={leftArmScaleY} rightArmScaleY={rightArmScaleY}
        
        />
        </div>
        
        </div>
    
       
      
        
            
    )
}
