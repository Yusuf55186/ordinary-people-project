export type CameraProps = {
    x:number;
    y:number;
    scale:number;
    children:React.ReactNode;
};
export const Camera = ({x,y,scale,children}:CameraProps) => {
    return (
  <div
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        transformOrigin: "center center",
        transform: `translate(${-x}px, ${-y}px) scale(${scale})`,
      }}
    >
      {children}
    </div>
  </div>
);

}