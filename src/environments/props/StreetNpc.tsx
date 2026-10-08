import { Img, staticFile, useCurrentFrame } from "remotion";

type Props = {
  variant: "a" | "b" | "c";
  x: number;
  y: number;
  width?: number;
  frameDuration?: number;
  zIndex?:number;
};

export const StreetNPC = ({
  variant,
  x,
  y,
  width = 100,
  frameDuration = 8,
  zIndex,
}: Props) => {
  const frame = useCurrentFrame();

  const walkFrame = Math.floor(frame / frameDuration) % 4 + 1;

  const frameNumber = `0${walkFrame}`;

  return (
    <>
     <div
      style={{
        position: "absolute",

        // x/y = FEET POSITION
        left: x,
        top: y,

        width,

        // anchor character from bottom-center
        transform: "translate(-50%, -100%)",

        transformOrigin: "bottom center",
        zIndex,
      }}
    ></div>
    <Img
      src={staticFile(
        `assets/Episode3/Street/npcs/npc.walker.${variant}.v1.frame-${frameNumber}.png`
      )}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
      }}
    />
    </>
  );
};