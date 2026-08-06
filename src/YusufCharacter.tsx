import { YusufLegs } from "./YusufLegs"
import { YusufTorsoPelvis } from "./YusufTorsoPelvis"
import { YusufHead } from "./YusufHead"
import { YusufArms } from "./YusufArms"
type Props = {
leftKneeRotation: number
rightKneeRotation: number
leftHipRotation: number
rightHipRotation: number
bodyY:number
leftArmSwing:number
rightArmSwing:number
leftElbowRotation:number
rightElbowRotation:number
leftHandRotation:number
headRotation:number
eyeScaleY:number
leftHandPose: "open" | "point"
eyeLLookX: number
eyeLLookY: number
eyeRLookX: number
eyeRLookY: number
leftEyeBrowY:number
rightEyeBrowY:number


}
export function YusufCharacter({leftKneeRotation,rightKneeRotation,leftHipRotation,rightHipRotation,bodyY,leftArmSwing,rightArmSwing,leftElbowRotation,rightElbowRotation,leftHandRotation,headRotation,eyeScaleY,leftHandPose,eyeLLookX,eyeLLookY,eyeRLookX,eyeRLookY,leftEyeBrowY,rightEyeBrowY}:Props){
    return (
        <div style={{position:"relative", width: 500,height: 1050,transform: `translateY(${bodyY}px)`,}} >
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
       
        
         />
         </div>
         
         
         
         <div style={{position:"absolute", left: 135,top: 180,width: 230}}>
        <YusufTorsoPelvis
        
        />
        
        </div>
        <div style={{position: "absolute",left: 160,top: 0,width: 180,}}>
        <div
 
>
  <YusufHead  headRotation={headRotation} eyeScaleY={eyeScaleY} eyeLLookX={eyeLLookX} eyeRLookX={eyeRLookX} eyeRLookY={eyeRLookY}
eyeLLookY={eyeLLookY} leftEyeBrowY={leftEyeBrowY} rightEyebrowY={rightEyeBrowY}
  />
</div>
        
        
        </div>
        <YusufArms leftArmSwing={leftArmSwing} rightArmSwing={rightArmSwing} leftElbowRotation={leftElbowRotation} rightElbowRotation={rightElbowRotation} leftHandRotation={leftHandRotation} leftHandPose={leftHandPose}
        
        />
        
        </div>
    
       
      
        
            
    )
}
