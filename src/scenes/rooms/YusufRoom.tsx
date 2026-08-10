import { Img, staticFile } from "remotion";
const YusufRoomSvg = staticFile("assets/Yusuf_Room/Yusuf_Room_RemotionReady.svg");
export const YusufRoom = () => {
  return (
    <Img src={YusufRoomSvg} style={{
      width:'100%',
      height:'100%',
      display:'block',
      objectFit:'cover'

    }} 
      />
    
  )
 
}