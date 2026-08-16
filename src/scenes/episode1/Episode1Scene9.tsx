import { YusufDeskShot } from "../../shots/DeskShot";
import { adyManPose } from "../../animations/AdyManPose";
import { UiCursor } from "../../components/UiCursor";
import { AdyManCharacter } from "../../adyManCharacter";
import { SceneMaster } from "../sceneCharacter";
import { YoutubeFeed } from "../../components/YoutubeFeed";
import { Camera } from "../../components/Camera";
import { interpolate, useCurrentFrame } from "remotion";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
export const Episode1Scene9 = () => {
    const frame = useCurrentFrame();
    const cameraScale = interpolate(
        frame,
        [90,150],
        [1,1.08],{
            extrapolateLeft:"clamp",
            extrapolateRight:"clamp"
        }
    )
    return (
        <Camera x={0} y={0} scale={cameraScale}>
        <YusufDeskShot retreat={0}
                       hesitation={1}
                       beanbagForeground={true}
                       >
        <YoutubeFeed x={645} y={420} scale={0.57} /> 
        <SceneMaster x={80} y={200} width={250} scale={1} zIndex={1}>
  <FarmalaCharacter {...farmalaPose({})}
  lowerBodyPose="beanbagSeated"/>
</SceneMaster>

<SceneMaster x={990} y={350} width={250} scale={1} zIndex={1}>
  <AdyManCharacter {...adyManPose({})} />
</SceneMaster>
                    <UiCursor x={990} y={471} scale={0.65} />
                    </YusufDeskShot>
                    </Camera>
    )
}