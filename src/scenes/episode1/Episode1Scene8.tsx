import { YusufDeskShot } from "../../shots/DeskShot";
import { adyManPose } from "../../animations/AdyManPose";
import { UiCursor } from "../../components/UiCursor";
import { AdyManCharacter } from "../../adyManCharacter";
import { SceneMaster } from "../sceneCharacter";
import { YoutubeFeed } from "../../components/YoutubeFeed";
import { interpolate, useCurrentFrame } from "remotion";
export const Episode1Scene8 = () => {
    const frame = useCurrentFrame();
    const cursorX = interpolate(
        frame,
        [90,150],[880,990],{
            extrapolateLeft:"clamp",
            extrapolateRight:"clamp"
        }
    )
    const retreatStrength = interpolate(
        frame,
        [45,90] , [1,0],
        {
            extrapolateLeft:"clamp",
            extrapolateRight:"clamp"
        }
    )
    const hesitationStrength = interpolate(
        frame,
        [150,175], [0,1],{
            extrapolateLeft:"clamp",
            extrapolateRight:"clamp"
        }
    )
    return (
        <YusufDeskShot retreat={retreatStrength}
                       hesitation={hesitationStrength}>
        <YoutubeFeed x={645} y={420} scale={0.57} /> 
                <SceneMaster x={80} y={296} width={250} scale={1} zIndex={1}>
                    <AdyManCharacter {...adyManPose({})} />
                    </SceneMaster>
                    <UiCursor x={cursorX} y={471} scale={0.65} />
                    </YusufDeskShot>
    )
}