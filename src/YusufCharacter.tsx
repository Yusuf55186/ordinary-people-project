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
}
export function YusufCharacter({leftKneeRotation,rightKneeRotation,leftHipRotation,rightHipRotation,bodyY,leftArmSwing,rightArmSwing,leftElbowRotation,rightElbowRotation,leftHandRotation,headRotation}:Props){
    return (
        <div style={{position:"relative", width: 500,height: 1050,transform: `translateY(${bodyY}px)`,}} >
            <div style={{  position: "absolute",
    left: 125,
    top: 560,
    width: 250,
    transform: "scaleY(1.06)",
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
  <YusufHead  headRotation={headRotation}
  />
</div>
        
        
        </div>
        <YusufArms leftArmSwing={leftArmSwing} rightArmSwing={rightArmSwing} leftElbowRotation={leftElbowRotation} rightElbowRotation={rightElbowRotation} leftHandRotation={leftHandRotation}
        />
        </div>
    
       
      
        
            
    )
}
