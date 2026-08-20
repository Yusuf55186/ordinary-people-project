import { Img, staticFile } from "remotion";
const YusufRoomSvg = staticFile(
  "assets/Yusuf_Room/Yusuf_Room_RemotionReady.svg",
);
export const YusufRoom = () => {
  return (
    <Img
      src={YusufRoomSvg}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        objectFit: "cover",
        scale: 1.05,
        translate: "-2px 0px",
      }}
    />
  );
};
export const YusufRoomDeskForeground = () => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <use href={`${YusufRoomSvg}#DESK_TOP_FOREGROND,#MONITORS`} />
      <use href={`${YusufRoomSvg}#CHAIR`} />
    </svg>
  );
};
export const YusufRoomBeanbagForeground = () => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <use href={`${YusufRoomSvg}#BEANBAG`} />
    </svg>
  );
};
