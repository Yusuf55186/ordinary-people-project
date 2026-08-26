import { interpolate } from "remotion"
export type CameraPose = {
    panX:number,
    panY:number,
    zoom:number
}
export type CameraMoveInput = {
    frame:number,
    startFrame:number,
    endFrame:number,
    from:CameraPose,
    to:CameraPose
}
export const cameraMove = ({
    frame,
    startFrame,
    endFrame,
    from,
    to
}:CameraMoveInput):CameraPose => {
    return {
        panX: interpolate(frame, [startFrame, endFrame], [from.panX, to.panX], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        }),
        panY: interpolate(frame, [startFrame, endFrame], [from.panY, to.panY], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        }),
        zoom: interpolate(frame, [startFrame, endFrame], [from.zoom, to.zoom], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        }),
    }
      
}