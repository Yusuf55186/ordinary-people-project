import { YusufDeskShot } from "../../shots/DeskShot";
import { adyManPose } from "../../animations/AdyManPose";
import { UiCursor } from "../../components/UiCursor";
import { AdyManCharacter } from "../../adyManCharacter";
import { SceneMaster } from "../sceneCharacter";
import { YoutubeFeed } from "../../components/YoutubeFeed";
export const Episode1Scene8 = () => {
    return (
        <YusufDeskShot retreat={1}>
        <YoutubeFeed x={645} y={420} scale={0.57} /> 
                <SceneMaster x={80} y={296} width={250} scale={1} zIndex={1}>
                    <AdyManCharacter {...adyManPose({})} />
                    </SceneMaster>
                    <UiCursor x={880} y={471} scale={0.65} />
                    </YusufDeskShot>
    )
}