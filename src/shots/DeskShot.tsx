import { YusufRoom,YusufRoomDeskForeground } from "../scenes/rooms/YusufRoom";
import { SceneMaster } from "../scenes/sceneCharacter";
import { YusufCharacter } from "../YusufCharacter";
import { yusufPose } from "../animations/yusufPose";
import { yusufDeskRestPose } from "../poses/yusufDeskRestPose";
import { ShotCamera } from "../ShotCamera";
import { useCurrentFrame,interpolate } from "remotion";
export const YusufDeskShot = () => {
  const frame = useCurrentFrame();
  const camerazoom = interpolate(frame,[0,300],[1,1.2],
)
    const seatedYusuf = yusufPose(yusufDeskRestPose);
   return (
  <ShotCamera panX={0} panY={0} zoom={camerazoom}>
    <YusufRoom />

    <SceneMaster x={1020} y={300} width={500} scale={0.7}>
      <YusufCharacter {...seatedYusuf} />
    </SceneMaster>
    <YusufRoomDeskForeground />
    
  </ShotCamera>
);
}