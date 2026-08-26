import { YusufDeskShot } from "../../shots/DeskShot";
import { adyManPose } from "../../animations/AdyManPose";
import { UiCursor } from "../../components/UiCursor";
import { AdyManCharacter } from "../../adyManCharacter";
import { SceneMaster } from "../sceneCharacter";
import { YoutubeFeed } from "../../components/YoutubeFeed";
import { Camera } from "../../components/Camera";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { walkCycle } from "../../animations/walkCycle";

export const Episode1Scene9 = () => {
    const frame = useCurrentFrame();
    const cameraScale = 1.08;
    const farmalaVisible = frame >= 15;

const farmalaScale = interpolate(frame, [15, 23], [0.96, 1], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});

const farmalaY = interpolate(frame, [15, 21,28], [306, 296,292], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
const adyX = interpolate(frame, [15, 165], [80, 900], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
  easing: Easing.inOut(Easing.cubic)
});
const adyWalkFrame = Math.min(Math.max(frame - 15, 0), 120);

const adyWalk = walkCycle(adyWalkFrame, 40, {
  kneeAmplitude: 12,
  hipAmplitude: 0.6,
  bodyBounce: 1.5,
  armSwingAmplitude: 4,
});

    return (
        <Camera x={0} y={0} scale={cameraScale}>
        <YusufDeskShot retreat={0}
                       hesitation={1}
                       beanbagForeground={true}
                       >
        <YoutubeFeed x={645} y={420} scale={0.57} /> 
        
            
        {farmalaVisible && (
        <SceneMaster x={80} y={farmalaY} width={250} scale={farmalaScale} zIndex={1}>
  <FarmalaCharacter {...farmalaPose({})}
  lowerBodyPose="beanbagSeated"/>
  
</SceneMaster>
)}
<SceneMaster x={adyX} y={296} width={250} scale={1} zIndex={1}>
  <AdyManCharacter {...adyManPose({...adyWalk})} />
</SceneMaster>

                    <UiCursor x={990} y={471} scale={0.65} />
                    </YusufDeskShot>
                    </Camera>
    )
}