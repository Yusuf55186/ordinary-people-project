import { useId } from "react";
import { useCharacterLighting } from "../scenes/sceneCharacter";

type Props = { shirtColor?: string, skinColor?: string };

const bodyPath = "M46.61,32.45c1.09-8.11,8.67-13.11,14.96-13.57,5.76-.37,11.72,1.17,17.52,2.03,6.77,1,11.53,2.9,14.5,11.41,1.29,3.33,1.33,6.67,1.31,10.36.18,19.17.54,50.77,1.84,66.89.23,2.98.8,6.41,1.06,8.71.33,3.22.28,4.4.69,8.41.59,6.91,1.21,17.21-1.95,23.68-2.2,4.49-5.83,5.93-10.13,7.31-11.41,3.58-27.15,4.35-37.32-.85-6.5-2.89-8.99-10.26-9.35-19.32-.33-5.97.07-10.52.77-15.97,1.1-8.97,3.62-30.36,4.2-43.66.31-6.2-.04-10.97.22-16.92.49-8.84.97-19.68,1.67-28.4v-.11Z";
const shirtPath = "M94.46,34.62s-.06-.27-.18-.73c-.8-2.93-4.4-13.65-13.91-12.11,0,0-27.52-10.51-33.72,3.92,0,0-2.44,41.35-1.69,46.34s-8.27,67.72-4.51,69.68c0,0-2.82,25.66,36.63,18.18,0,0,24.14,3.39,22.35-23.17s-4.98-102.12-4.98-102.12Z";
const neckPath = "M64.08,17.69s1.6-9.09.89-11.05S81.36.94,81.36.94c4.46,11.94,1.07,20.5,1.07,20.5";

export const YusufSideTorso = ({ shirtColor = "#063ac6",skinColor = "#d48455"}: Props) => {
  const id = `football-torso-${useId().replace(/:/g, "")}`;
  const lighting = useCharacterLighting();
  const left = Math.max(0, Math.min(1, lighting.leftLight));
  const right = Math.max(0, Math.min(1, lighting.rightLight));
  const burn = Math.max(0, Math.min(1, lighting.burn));

  const surface = (d: string, fill: string) => (
    <g>
      <path d={d} fill={fill} />
      <path d={d} fill={`url(#${id}-burn)`} opacity={burn} />
      <path d={d} fill={`url(#${id}-left)`} opacity={left} />
      <path d={d} fill={`url(#${id}-right)`} opacity={right} />
      <path d={d} fill="none" stroke="#000" strokeMiterlimit={10} />
    </g>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.6 161.42" style={{ display: "block", width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id={`${id}-burn`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#07152f" stopOpacity="0.08" />
          <stop offset="55%" stopColor="#07152f" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#07152f" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={`${id}-left`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={lighting.leftColor} stopOpacity="0.45" />
          <stop offset="25%" stopColor={lighting.leftColor} stopOpacity="0.15" />
          <stop offset="70%" stopColor={lighting.leftColor} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-right`} x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={lighting.rightColor} stopOpacity="0.42" />
          <stop offset="25%" stopColor={lighting.rightColor} stopOpacity="0.14" />
          <stop offset="70%" stopColor={lighting.rightColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      {surface(bodyPath, skinColor)}
      {surface(shirtPath, shirtColor)}
      {surface(neckPath, skinColor)}
    </svg>
  );
};
