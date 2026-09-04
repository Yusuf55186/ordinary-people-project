import {ReactNode } from "react";
type Characterintegration = {
    contactShadow?:boolean;
    ambientLight?:"room";
    keyLight?:"deskLamp";
    rimLight?:"window";
   
}
type Props = {
    x:number;
    y:number;
    width:number;
    scale?:number;
    zIndex?:number;
    
    children:ReactNode;
     integration?:Characterintegration;
}

export const SceneMaster = ({
    
    x,y
    ,width,scale=1
    ,zIndex=0,children,integration
}:Props) =>{
    const ambientFilter =
  integration?.ambientLight === "room"
    ? "brightness(0.97) saturate(0.94) sepia(0.04)"
    : undefined;
    return (
        <div
  style={{
    
    position: "absolute",
    top: 0,
    left: 0,
    transformOrigin: "top left",
    width,
    zIndex,
    isolation: "isolate",
    transform: `translate(${x}px, ${y}px) scale(${scale})`,
  }}
>
    
  {integration?.contactShadow && (
    <div
      style={{
        position: "absolute",
        top: "97%",
        left: "50%",
        width: "55%",
        height: 8,
        borderRadius: "50%",
backgroundColor: "rgba(39, 21, 12, 0.30)",
        filter: "blur(3px)",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        zIndex: 1000,
        mixBlendMode: "multiply",
      }}
    />
  )}
  
  

  <div style={{ position: "relative", zIndex: 1,filter:ambientFilter  }}>
    {children}
  </div>
</div>
    )
}