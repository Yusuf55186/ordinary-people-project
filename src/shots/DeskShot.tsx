import { YusufRoom,YusufRoomDeskForeground } from "../scenes/rooms/YusufRoom";
import { SceneMaster } from "../scenes/sceneCharacter";
import { YusufBackCharacter } from "../YusufBackCharacter";
import { yusufPose } from "../animations/yusufPose";
import { YusufBackDeskRestPose } from "../poses/yusufBackDeskRestPose";
import { ShotCamera } from "../ShotCamera";
import  { cameraMove } from "../animations/cameraMove";
import { useCurrentFrame, } from "remotion";
export const YusufDeskShot = () => {
  const frame = useCurrentFrame();
  const cameraPose = cameraMove({
    frame,
    startFrame:0,
    endFrame:90,
    
    from:{
      panX:0,
      panY:0,
      zoom:1,
    },
    to:{
      panX:-220,
      panY:-80,
      zoom:1.2,
    },
  });


  const seatedYusuf = yusufPose(YusufBackDeskRestPose);
   return (
  <ShotCamera {...cameraPose}>
    <YusufRoom />

    <SceneMaster x={880} y={300} width={500} scale={0.7}>
      <YusufBackCharacter {...seatedYusuf} />
    </SceneMaster>
    <YusufRoomDeskForeground />
    
  </ShotCamera>
);
}