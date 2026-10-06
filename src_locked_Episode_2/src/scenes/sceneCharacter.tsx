import {ReactNode } from "react";
 type CharacterIntegration = {
  contactShadow?: boolean;

  ambientLight?:
     "room" | "daylight";

  keyLight?:"deskLamp" | "sun";

  rimLight?:
    "window";

  castShadow?:
    "streetSun";
};
type Props = {
    x:number;
    y:number;
    width:number;
    scale?:number;
    zIndex?:number;
    children:ReactNode;
     integration?:CharacterIntegration;
}

export const SceneMaster = ({
    
    x,y
    ,width,scale=1
    ,zIndex=0,children,integration
}:Props) =>{
   const ambientFilter =
  integration?.ambientLight === "daylight"
    ? "brightness(0.98) saturate(0.95) sepia(0.03)"
    : integration?.ambientLight === "room"
    ? "brightness(0.96) saturate(0.93) sepia(0.12)"
    : "";

const filters = [ambientFilter].filter(Boolean).join(" ");
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
        borderRadius: "50%",
        width: "62%",
        height: 12,
        backgroundColor: "rgba(34, 25, 18, 0.32)",
        filter: "blur(5px)",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "multiply",
      }}
    />
  )}
  {integration?.castShadow === "streetSun" && (
  <div
    style={{
      position: "absolute",
      top: "92%",
      left: "48%",
      width: "72%",
      height: 18,
      borderRadius: "50%",
      backgroundColor: "rgba(30, 22, 16, 0.20)",
      filter: "blur(8px)",
      transform:
        "translateX(-50%) rotate(-15deg) skewX(-25deg) scaleX(1.4)",
      transformOrigin: "left center",
      mixBlendMode: "multiply",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />
)}
{integration?.keyLight === "sun" && (
   <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 2,
      pointerEvents: "none",

      background:
        "linear-gradient(115deg, rgba(255, 226, 170, 0.16) 0%, rgba(255, 226, 170, 0.06) 35%, rgba(255, 226, 170, 0) 62%)",

      mixBlendMode: "soft-light",
      opacity: 0.65,
    }}
    />
)}
  

  <div style={{ position: "relative", zIndex: 1,filter:filters  }}>
    {children}
  </div>
</div>
    )
}