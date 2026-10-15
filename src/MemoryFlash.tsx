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
 const memoryWarp = interpolate(
  frame,
  [0, 12, 24, 36],
  [0, 1, -0.6, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const memoryBlur = interpolate(
  henedyStrength,
  [0,0.5, 1],
  [40,20,0.4],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const memoryRotation = interpolate(
  memoryWarp,
  [-1, 1],
  [-0.8, 0.8]
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

    transform: `
      scaleX(${1 + memoryWarp * 0.45})
      scaleY(${1 - memoryWarp * 0.25})
      rotate(${memoryRotation}deg)
    `,

    filter: `
      blur(${memoryBlur}px)`,

    transformOrigin: "center center",
    borderRadius: 999,
  }}
/>
   </div>
  
   </>
   )
   }
            
