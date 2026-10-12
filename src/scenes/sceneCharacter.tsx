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
    // Local ground anchor. Omit to preserve existing scenes.
    groundY?:number;
    scale?:number;
    zIndex?:number;
    children:ReactNode;
     integration?:CharacterIntegration;
}

export const SceneMaster = ({
    
    x,y
    ,width,scale=1
    ,zIndex=0,children,integration,groundY
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
      top: groundY ?? "98.5%",
      left: "50%",
      width: "42%",
      height: 7,
      borderRadius: "50%",
      backgroundColor: "rgba(24, 18, 14, 0.48)",
      filter: "blur(4px)",
      transform: "translate(-50%, -50%)",
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
  top: groundY ?? "98.5%",
  left: "50%",
  width: "110%",
  height: 12,
  borderRadius: "50%",
  backgroundColor: "rgba(35, 29, 25, 0.22)",
  filter: "blur(5px)",
  transform: "translateY(-50%) rotate(-18deg)",
  transformOrigin: "0% 50%",
  pointerEvents: "none",
  zIndex: 0,
}}
  />
)}
{/* Character establishes the wrapper height */}
<div
  style={{
    position: "relative",
    zIndex: 1,
    filter: filters || undefined,
  }}
>
  {children}
</div>
</div>

    )
}