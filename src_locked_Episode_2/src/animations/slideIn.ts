import { interpolate } from "remotion"
export type SlideInInput = {
    frame:number,
    startFrame:number,
    endFrame:number,
    fromX:number,
    toX:number
}
export const slideIn = ({
  frame,
  startFrame,
  endFrame,
  fromX,
  toX,
}: SlideInInput) => {
    
    return interpolate(frame, [startFrame, endFrame], [fromX, toX], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
}