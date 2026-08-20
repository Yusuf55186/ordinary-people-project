import { useCurrentFrame } from "remotion";
import { farmalaPose } from "../../animations/FarmalaPose";
import { idleAnimation } from "../../animations/idleAnimation";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { YusufDeskShot } from "../../shots/DeskShot";
import { SceneMaster } from "../sceneCharacter";
import { Episode2Phone } from "../../components/Episode2DeviceStates";
export const Episode2Scene2 = () => {
     const frame = useCurrentFrame();
     const phoneState = frame < 45 ? "notification":"scrolling";
     
    return (
       
        <YusufDeskShot>
            <Episode2Phone
            state={phoneState}
            x={1275}
        y={550}
        width={80}
        rotation={90}
        ></Episode2Phone>
        <SceneMaster x={0} y={270} scale={1} width={250}>
          <FarmalaCharacter lowerBodyPose='beanbagSeated' {...farmalaPose(idleAnimation(frame,120))} />
        </SceneMaster>
        </YusufDeskShot>
    )
}