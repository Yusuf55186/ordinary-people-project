type Props = {
    x:number,
    y:number,
    scale?:number,

}
export const UiCursor = ({x,y,scale=1}:Props) => {
    return (
        <div style={{
            position:"absolute",
            left:x,
            top:y,
            transform:`scale(${scale})`,
            pointerEvents:"none",
            width: "32px",
            height:"40px",
            transformOrigin:"top left",
            zIndex:10,
        }}
        >
            
                <svg
  viewBox="0 0 32 40"
  width="32"
  height="40"
  style={{
    display: "block",
    overflow: "visible",
    filter: "drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.45))",
  }}
>
  <path
    d="M1 1 L1 31 L9 23 L15 39 L20 37 L14 21 L30 21 Z"
    fill="#F7F3E8"
    stroke="#172033"
    strokeWidth="3"
    strokeLinejoin="round"
  />
</svg>
            </div>
    )
}