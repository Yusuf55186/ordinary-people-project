import { YusufRoom,YusufRoomDeskForeground } from "../scenes/rooms/YusufRoom";
import { SceneMaster } from "../scenes/sceneCharacter";
import { YusufCharacter } from "../YusufCharacter";
import { yusufPose } from "../animations/yusufPose";
import { yusufDeskRestPose } from "../poses/yusufDeskRestPose";
import { ShotCamera } from "../ShotCamera";
import { useCurrentFrame,interpolate } from "remotion";
export const YusufDeskShot = () => {
  const frame = useCurrentFrame();
  const cameraZoom = interpolate(frame,[0,90],[1,1.2])
  const cameraPanX = interpolate(frame,[0,90],[0,-220])
  const cameraPanY = interpolate(frame,[0,90],[0,-80])
    const seatedYusuf = yusufPose(yusufDeskRestPose);
   return (
  <ShotCamera panX={cameraPanX} panY={cameraPanY} zoom={cameraZoom}>
    <YusufRoom />

    <SceneMaster x={1020} y={300} width={500} scale={0.7}>
      <YusufCharacter {...seatedYusuf} />
    </SceneMaster>
    <YusufRoomDeskForeground />
    
  </ShotCamera>
);
}