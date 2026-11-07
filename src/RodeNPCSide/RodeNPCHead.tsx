import { useId } from "react";
import { useCharacterLighting } from "../scenes/sceneCharacter";

// Original red NPC facial artwork, with the empty Illustrator canvas cropped.
export const RodeNPCHead = () => {
  const id = `rode-head-${useId().replace(/:/g, "")}`;
  const lighting = useCharacterLighting();
  const left = Math.max(0, Math.min(1, lighting.leftLight));
  const right = Math.max(0, Math.min(1, lighting.rightLight));
  const burn = Math.max(0, Math.min(1, lighting.burn));

  const skin = (d: string) => (
    <g>
      <path d={d} fill="#d48455" />
      <path d={d} fill={`url(#${id}-burn)`} opacity={burn} />
      <path d={d} fill={`url(#${id}-left)`} opacity={left} />
      <path d={d} fill={`url(#${id}-right)`} opacity={right} />
      <path d={d} fill="none" stroke="#000" strokeMiterlimit={10} />
    </g>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="88 12 60 115" preserveAspectRatio="xMidYMax meet" style={{ display: "block", width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id={`${id}-burn`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1834" stopOpacity="0.06" />
          <stop offset="60%" stopColor="#0a1834" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0a1834" stopOpacity="0.45" />
        </linearGradient>
        <radialGradient id={`${id}-left`} cx="0%" cy="15%" r="100%">
          <stop offset="0%" stopColor={lighting.leftColor} stopOpacity="0.36" />
          <stop offset="40%" stopColor={lighting.leftColor} stopOpacity="0.13" />
          <stop offset="90%" stopColor={lighting.leftColor} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-right`} cx="100%" cy="15%" r="100%">
          <stop offset="0%" stopColor={lighting.rightColor} stopOpacity="0.34" />
          <stop offset="40%" stopColor={lighting.rightColor} stopOpacity="0.12" />
          <stop offset="90%" stopColor={lighting.rightColor} stopOpacity="0" />
        </radialGradient>
      </defs>
      {skin("M112.57,123.64c-9.55-.36-20.97,1.97-18.55-74.92.62-19.69,10.45-33.75,20-33.39s18.8,15.12,19.39,34.88c2.43,81.07-11.29,73.79-20.84,73.42")}
      {skin("M135.42,75.66s3.71,4.67-1.37,5.42")}
      {skin("M131.57,87.94c18.56-8.88,1.52-22.79,1.52-22.79")}
      <path fill="none" stroke="#1b0000" strokeMiterlimit={10} d="M107.18,100.88c-1.89,4.22-6.46,6.44-10.93,6.51" />
      <g>
        <path fill="#fff" stroke="#000" d="M103.7,79.55l-5.02-.07c-2.63-.04-4.7-3.63-4.63-8.02h0c.08-4.39,2.27-7.93,4.9-7.89l5.02.07c2.63.04,4.7,3.63,4.63,8.02h0c-.08,4.39-2.27,7.93-4.9,7.89Z" />
        <ellipse fill="#000" stroke="#000" cx="101.22" cy="73.91" rx="1.38" ry=".83" transform="translate(25.41 173.7) rotate(-88.91)" />
        {skin("M108.27,67.31l-13.84.06s1.14-4.54,5.84-4l4.27.13s3.1.38,3.73,3.82Z")}
      </g>
      {skin("M94.47,84.07s-5.99,10.35,1.01,10.04")}
      <g fill="none" stroke="#000" strokeMiterlimit={10}>
        <line x1="98.95" y1="53.64" x2="119.34" y2="54.02" />
        <path d="M118.98,54.13c.13-.27,2.11-.09,1.96,1.79" />
        <path d="M99.65,53.76c-.12-.27-2.1-.17-2.03,1.73" />
      </g>
      {skin("M135.87,75.26s3.71,4.67-1.37,5.42")}
      <g fill="none" stroke="#000" strokeMiterlimit={10}>
        <path strokeWidth={7} d="M101.36,112.68h0c3.8,8.91,9.88,7.26,15.97,7.94l.73.08" />
        <path strokeWidth={3} d="M95.44,98.38l4.84-1.1c1.75-.4,3.55-.5,5.33-.3l6.3.69" />
      </g>
    </svg>
  );
};
