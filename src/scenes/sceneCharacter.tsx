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
    ? "brightness(0.97) saturate(0.92) sepia(0.05)"
    : integration?.ambientLight === "room"
    ? "brightness(0.96) saturate(0.93) sepia(0.12)"
    : "";
    

const keyLightFilter =
  integration?.keyLight === "sun"
    ? "brightness(1.04) sepia(0.04)"
    : integration?.keyLight === "deskLamp"
    ? "brightness(1.03) sepia(0.08)"
    : "";

const filters = [
  ambientFilter,
  keyLightFilter,
]
  .filter(Boolean)
  .join(" ");
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
      top: "98.5%",
      left: "50%",
      width: "42%",
      height: 7,
      borderRadius: "50%",
      backgroundColor: "rgba(24, 18, 14, 0.48)",
      filter: "blur(4px)",
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
      top: "96%",
      left: "51%",
      width: "95%",
      height: 18,
      borderRadius: "50%",
      backgroundColor: "rgba(30, 22, 16, 0.24)",
      filter: "blur(7px)",
      transform:
        "translateX(-50%) rotate(-12deg) skewX(-24deg) scaleX(1.55)",
      transformOrigin: "left center",
      mixBlendMode: "multiply",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />
)}
<div
  style={{
    position: "relative",
    zIndex: 1,
    width: "100%",
  }}
>
  {/* BASE YUSUF — establishes the size */}
  <div
    style={{
      position: "relative",
      zIndex: 1,
      filter: ambientFilter,
    }}
  >
    {children}
  </div>

  {/* SUNLIGHT COPY — overlays base Yusuf exactly */}
  {integration?.keyLight === "sun" && (
    <div
      style={{
        position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2,
      pointerEvents: "none",

      filter:
        "brightness(0.82) saturate(0.96) blur(0.35px)",

      opacity: 0.14,
      mixBlendMode: "multiply",

      WebkitMaskImage:
        "linear-gradient(295deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.80) 16%, rgba(0,0,0,0.64) 34%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0.26) 68%, rgba(0,0,0,0.12) 84%, rgba(0,0,0,0.04) 94%, transparent 100%)",

      maskImage:
        "linear-gradient(295deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.80) 16%, rgba(0,0,0,0.64) 34%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0.26) 68%, rgba(0,0,0,0.12) 84%, rgba(0,0,0,0.04) 94%, transparent 100%)",
      }}
    >
      {children}
    </div>
  )}
</div>
  

  <div style={{ position: "relative", zIndex: 1,filter:filters  }}>
    
  </div>
</div>
    )
}