import { YusufRoom,YusufRoomDeskForeground } from "../scenes/rooms/YusufRoom";
import { SceneMaster } from "../scenes/sceneCharacter";
import { YusufBackCharacter } from "../YusufBackCharacter";
import { yusufPose } from "../animations/yusufPose";
import { YusufBackDeskRestPose } from "../poses/yusufBackDeskRestPose";
import { ShotCamera } from "../ShotCamera";
import  { cameraMove } from "../animations/cameraMove";
import { useCurrentFrame, } from "remotion";
import type { ReactNode } from "react";
type YusufDeskShotProps = {
  children?:ReactNode;
}
export const YusufDeskShot = ({ children }: YusufDeskShotProps) => {
    const frame = useCurrentFrame();
  const breathe = Math.sin(frame / 30);
  const seatedIdle = {
     bodyY: breathe * 2,
     headRotation : breathe* -0.8
  }
  const seatedYusuf = yusufPose({ ...YusufBackDeskRestPose , ...seatedIdle })
  const cameraPose = cameraMove({
    frame,
    startFrame:0,
    endFrame:180,
    
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



   return (
  <ShotCamera {...cameraPose}>
    <YusufRoom />

    <SceneMaster x={880} y={300} width={500} scale={0.7}>
      <YusufBackCharacter {...seatedYusuf}
      lowerBodyPose="deskSeated" />
    </SceneMaster>
    {children}
    <YusufRoomDeskForeground />
    
  </ShotCamera>
);
}