import { Img,staticFile,interpolate,Easing,useCurrentFrame } from "remotion";
export const MemoryFlash = () => {
    const frame = useCurrentFrame();
    const HENEDY_APPEAR = 23;
      const henedyStrength = interpolate(
    frame,
    [15,HENEDY_APPEAR,45,60],
    [0, 0.5,0.8,1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );
  
    const imageUrl = staticFile("assets/Flash_Images/henedy_flashback.png");
    return (
        <>
        
            <div
            style={{
            position: "absolute",
            left: 700,
            top: 180,
            }}
            >
           <Img
  src={imageUrl}
  style={{
    width: 500,
    objectFit: "contain",
    opacity: henedyStrength,
    transform: `scale(${0.96 + henedyStrength * 0.04})`,
    transformOrigin: "center center",
    borderRadius: 999,
  }}
/>
   </div>
  
   </>
   )
   }
            
