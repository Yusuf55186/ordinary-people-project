import { YusufDeskShot } from "../../shots/DeskShot";
import { UiCursor } from "../../components/UiCursor";
import { interpolate, useCurrentFrame } from "remotion";
export const Episode1Scene5 = () => {
    const frame = useCurrentFrame();
    
    const cursorX = interpolate(frame, [0, 36], [817, 940],{
        extrapolateRight:"clamp"
    });
const cursorY = interpolate(frame, [0, 36], [470, 420],{
    extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
const closeProgress = interpolate(
    frame,
    [43,61],
    [0,1],
    {
        extrapolateRight:"clamp",
        extrapolateLeft:"clamp"
    });
    const retreat = interpolate(frame, [61, 96], [0, 1], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
    const pageOpacity = 1 - closeProgress
    const pageScale = 1 - closeProgress * 0.18
    const pageY = closeProgress * -18
const cursorScale = interpolate(
    frame,
    [36,39, 40, 43],
    [0.65, 0.65, 0.54, 0.65],
    {
        extrapolateRight: "clamp"
    }
)

    return (
        
        <YusufDeskShot retreat={retreat}>
           <UiCursor x={cursorX} y={cursorY} scale={cursorScale} />
           

           
         <div
  style={{
    opacity: pageOpacity,
transform: `translateY(${pageY}px) scale(${pageScale})`,
transformOrigin: "170px -20px",
    position: "absolute",
    left: 765,
    top: 430,
    padding: "12px 24px",
    backgroundColor: "red",
    color: "white",
    borderRadius: 8,
    fontFamily: "Arial",
    fontWeight: 700,
    // transform: `scale(20px)`,
    // boxShadow: `0 0 20 rgba(255,66,66,0.9)`,
  }}
  
>
    <div style={{
    position:"absolute",
    top:-20,
    left:170,
    transformOrigin: "170px -20px",
    color:"#9A9AA8",
    opacity:"60%"
  }}
  >
    x
  
</div>
  Publish
  </div>
  

         </YusufDeskShot>
       
    )
}