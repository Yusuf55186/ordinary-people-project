import { YusufLegs } from "./YusufLegs"
import { YusufTorsoPelvis } from "./YusufTorsoPelvis"
type Props = {
leftKneeRotation: number
rightKneeRotation: number
leftHipRotation: number
rightHipRotation: number
}
export function YusufCharacter({leftKneeRotation,rightKneeRotation,leftHipRotation,rightHipRotation}:Props){
    return (
        <div style={{position:"relative", width:500,height:800}}>
            <div style={{position:"absolute",left: 130,top: 500,width: 270}}>
        <YusufLegs
        leftKneeRotation={leftKneeRotation}
        rightKneeRotation={rightKneeRotation}
        leftHipRotation={leftHipRotation}
        rightHipRotation={rightHipRotation}
         />
         </div>
         <div style={{position:"absolute", left: 120, top: 0, width: 260,}}>
        <YusufTorsoPelvis
        />
        </div>
        
        </div>
    
       
      
        
            
    )
}
