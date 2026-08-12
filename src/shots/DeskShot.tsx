import { YusufRoom,YusufRoomDeskForeground } from "../scenes/rooms/YusufRoom";
import { SceneMaster } from "../scenes/sceneCharacter";
import { YusufBackCharacter } from "../YusufBackCharacter";
import { yusufPose } from "../animations/yusufPose";
import { YusufBackDeskRestPose } from "../poses/yusufBackDeskRestPose";
import { ShotCamera } from "../ShotCamera";
import  { cameraMove } from "../animations/cameraMove";
import { interpolate, useCurrentFrame, } from "remotion";
import type { ReactNode } from "react";

type YusufDeskShotProps = {
  children?:ReactNode;
}
export const YusufDeskShot = ({ children }: YusufDeskShotProps) => {
  const frame = useCurrentFrame();
  
  const YusufNoticeProgress = interpolate(frame,
          [220,300],
          [0,1],
          {
              extrapolateLeft:"clamp",
              extrapolateRight:"clamp",
          },
      );
      const yusufNoticeFarmala = {
           headRotation:6,
    bodyY: -2,
    rightArmSwing: -4,
    rightElbowRotation: 5,
      }
      const yusufNoticeState = {
    headRotation: interpolate(
      YusufNoticeProgress,
      [0, 1],
      [0, yusufNoticeFarmala.headRotation],
    ),
    bodyY: interpolate(
      YusufNoticeProgress,
      [0,1],
      [0,yusufNoticeFarmala.bodyY],
      
    ),
    rightArmSwing: interpolate(
      YusufNoticeProgress,
      [0,1],
      [0,yusufNoticeFarmala.rightArmSwing]
    ),
    rightElbowRotation: interpolate(
      YusufNoticeProgress,
      [0,1],
      [0,yusufNoticeFarmala.rightElbowRotation]
    )
  };
  
  const breathe = Math.sin(frame / 30);
  
  const seatedIdle = {
     bodyY: breathe * 2,
     headRotation : breathe * -0.8
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
      <YusufBackCharacter {...seatedYusuf} {...yusufNoticeState}
      lowerBodyPose="deskSeated" />
      
      
    </SceneMaster>
    {children}
    <YusufRoomDeskForeground />
    
  </ShotCamera>
);
}