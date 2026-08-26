import {type ReactNode } from "react"

type Props = {
    panX:number,
    panY:number,
    zoom?:number,
    children:ReactNode,
}
export const ShotCamera = ({panX,panY,zoom = 1,children}:Props) => {
    return (
        <div style={{
            position:"absolute",
            inset:0,
            overflow:"hidden",
        }}>
  <div style={{
    position:"absolute",
    inset:0,
    transformOrigin:"top left",
    transform: `translate(${panX}px,${panY}px) scale(${zoom})`
  }}>
    {children}
  </div>
</div>
        
    )
}
