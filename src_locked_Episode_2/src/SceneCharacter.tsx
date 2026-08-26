import { ReactNode } from "react";
type Props = {
    x:number
    y:number
    width:number
    scale?:number
    zIndex?:number
    children:ReactNode
}
export const SceneMaster = ({
    x,y
    ,width,scale=1
    ,zIndex=0,children
}:Props) =>{
    return (
        <div style={{
            position:"absolute",
            top:0,
            left:0,
            transformOrigin:"top left",
            width,
            zIndex,
            transform: `translate(${x}px,${y}px) scale(${scale})`
            }}>
                {children}
        </div>
        
    )
}