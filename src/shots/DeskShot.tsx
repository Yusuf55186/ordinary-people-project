import { YusufRoom,YusufRoomBeanbagForeground,YusufRoomDeskForeground } from "../scenes/rooms/YusufRoom";
import { SceneMaster } from "../scenes/sceneCharacter";
import type { YusufBackCharacterProps } from "../YusufBackCharacter";
import { YusufBackCharacter } from "../YusufBackCharacter";
import { yusufPose } from "../animations/yusufPose";
import { YusufBackDeskRestPose } from "../poses/yusufBackDeskRestPose";
import { ShotCamera } from "../ShotCamera";
import  { cameraMove } from "../animations/cameraMove";
import { interpolate, useCurrentFrame, } from "remotion";
import type { ReactNode } from "react";
import {Img,staticFile} from "remotion"

type YusufDeskShotProps = {
  children?:ReactNode;
  hesitation?:number;
  retreat?:number;
  beanbagForeground?: boolean;
  preformanceOffset?:Partial<YusufBackCharacterProps>;
  foregroundChildren?:ReactNode
  yusufMode?: "rest" | "typing";
}
export const YusufBackTypingPose = () => {
  return <Img src={staticFile("assets/Characters/Yusuf/YusufBackTypingPose.svg")}
    style={{
      width:"100%",
      height:"100%",
    }}
     />
}
export const YusufDeskShot = ({yusufMode="rest",children,hesitation = 0 , retreat = 0,beanbagForeground = false,foregroundChildren = false,preformanceOffset = {}}: YusufDeskShotProps,) => {
  const frame = useCurrentFrame();
  const breathe = Math.sin(frame / 30);
  
  const seatedIdle = {
     bodyY: breathe * 2,
     headRotation : breathe * -0.8
  }
  const hesitateIdle = {
    bodyY: seatedIdle.bodyY + hesitation * 2,
    headRotation: seatedIdle.headRotation + hesitation * 3,
  }
 
  const seatedYusuf = yusufPose({ ...YusufBackDeskRestPose , ...seatedIdle, ...hesitateIdle })
  
  const YusufNoticeProgress = interpolate(frame,
          [250,268,296,316],
          [0,1,1,0],
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
   headRotation: seatedIdle.headRotation + interpolate(
  YusufNoticeProgress,
  [0, 1],
  [0, yusufNoticeFarmala.headRotation],
),

bodyY: seatedIdle.bodyY + interpolate(
  YusufNoticeProgress,
  [0, 1],
  [0, yusufNoticeFarmala.bodyY],
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
   const retreatIdle = {
    headRotation: seatedIdle.headRotation
  + interpolate(YusufNoticeProgress, [0, 1], [0, yusufNoticeFarmala.headRotation])
  + retreat * 10,

bodyY: seatedIdle.bodyY
  + interpolate(YusufNoticeProgress, [0, 1], [0, yusufNoticeFarmala.bodyY])
  + retreat * 14,
  }
  
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
      panX:0,
      panY:0,
      zoom:1,
    },
  });
  const finalPose = {
    ...seatedYusuf,
    ...yusufNoticeState,
    ...retreatIdle,
    ...preformanceOffset,
    bodyY:retreatIdle.bodyY + (preformanceOffset.bodyY ?? 0),
    headRotation:retreatIdle.headRotation + (preformanceOffset.headRotation ?? 0),
  }
  

   return (
  <ShotCamera {...cameraPose}>
    <YusufRoom />
    
    {yusufMode === "typing" ? (
  <SceneMaster x={920} y={380} width={500} scale={0.5}>
    <YusufBackTypingPose />
  </SceneMaster>
) : (
  <SceneMaster x={880} y={300} width={500} scale={0.7}>
    <YusufBackCharacter {...finalPose} lowerBodyPose="deskSeated" />
  </SceneMaster>
)}
    {children}
    {beanbagForeground && <YusufRoomBeanbagForeground />}
    <YusufRoomDeskForeground />
    {foregroundChildren}
    
  </ShotCamera>
);
}