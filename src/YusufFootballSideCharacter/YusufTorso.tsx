import { useId } from "react";
import { useCharacterLighting } from "../scenes/sceneCharacter";
export const YusufSideTorso = () => {
  const id = useId();
  const lighting = useCharacterLighting();
  const bodyPath =
    "M46.61,32.45c1.09-8.11,8.67-13.11,14.96-13.57,5.76-.37,11.72,1.17,17.52,2.03,6.77,1,11.53,2.9,14.5,11.41,1.29,3.33,1.33,6.67,1.31,10.36.18,19.17.54,50.77,1.84,66.89.23,2.98.8,6.41,1.06,8.71.33,3.22.28,4.4.69,8.41.59,6.91,1.21,17.21-1.95,23.68-2.2,4.49-5.83,5.93-10.13,7.31-11.41,3.58-27.15,4.35-37.32-.85-6.5-2.89-8.99-10.26-9.35-19.32-.33-5.97.07-10.52.77-15.97,1.1-8.97,3.62-30.36,4.2-43.66.31-6.2-.04-10.97.22-16.92.49-8.84.97-19.68,1.67-28.4v-.11Z";

  const shirtPath =
    "M94.46,34.62s-.06-.27-.18-.73c-.8-2.93-4.4-13.65-13.91-12.11,0,0-27.52-10.51-33.72,3.92,0,0-2.44,41.35-1.69,46.34s-8.27,67.72-4.51,69.68c0,0-2.82,25.66,36.63,18.18,0,0,24.14,3.39,22.35-23.17s-4.98-102.12-4.98-102.12Z";

  const neckPath =
    "M64.08,17.69s1.6-9.09.89-11.05S81.36.94,81.36.94c4.46,11.94,1.07,20.5,1.07,20.5";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 141.6 161.42"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <defs>
        {/* Burn: schaduw richting onder en rechts */}
        <linearGradient
          id={`${id}-shirt-burn`}
          x1="43"
          y1="35"
          x2="99"
          y2="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#03132f" stopOpacity="0" />
          <stop offset="50%" stopColor="#03132f" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#03132f" stopOpacity="0.55" />
        </linearGradient>

        {/* Dodge: koel licht van boven links */}
        <radialGradient
          id={`${id}-shirt-dodge`}
          cx="48"
          cy="25"
          r="100"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48 25) scale(0.65 1) translate(-48 -25)"
        >
          <stop offset="0%" stopColor="#b9e4ff" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#78bfff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#78bfff" stopOpacity="0" />
        </radialGradient>

        {/* Tweede schijnwerper: smalle lichtrand rechts */}
        <linearGradient
          id={`${id}-shirt-rim`}
          x1="40"
          y1="0"
          x2="100"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#b9e4ff" stopOpacity="0" />
          <stop offset="86%" stopColor="#b9e4ff" stopOpacity="0" />
          <stop offset="100%" stopColor="#b9e4ff" stopOpacity="0.35" />
        </linearGradient>

        {/* Nek: schaduw onder de kin */}
        <linearGradient
          id={`${id}-neck-burn`}
          x1="72"
          y1="2"
          x2="76"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#101d3c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#101d3c" stopOpacity="0.12" />
        </linearGradient>

        <linearGradient
          id={`${id}-neck-dodge`}
          x1="64"
          y1="0"
          x2="83"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#c5e7ff" stopOpacity="0.35" />
          <stop offset="35%" stopColor="#c5e7ff" stopOpacity="0" />
          <stop offset="85%" stopColor="#c5e7ff" stopOpacity="0" />
          <stop offset="100%" stopColor="#c5e7ff" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Lichaam onder het shirt */}
      <path
        d={bodyPath}
        fill="#d48455"
        stroke="#000"
        strokeMiterlimit={10}
      />

      {/* Shirt: basiskleur + Burn + Dodge */}
      <g>
        <path d={shirtPath} fill="#063ac6" />
        <path
  d={shirtPath}
  fill={`url(#${id}-shirt-burn)`}
  opacity={lighting.burn}
/>

<path
  d={shirtPath}
  fill={`url(#${id}-shirt-dodge)`}
  opacity={lighting.leftLight}
/>

<path
  d={shirtPath}
  fill={`url(#${id}-shirt-rim)`}
  opacity={lighting.rightLight}
/>

        <path
          d={shirtPath}
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
        />
      </g>

      {/* Nek */}
      <g>
        <path d={neckPath} fill="#c87749" />
        <path d={neckPath} fill={`url(#${id}-neck-burn)`} />
        <path d={neckPath} fill={`url(#${id}-neck-dodge)`} />

        <path
          d={neckPath}
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
        />
      </g>
    </svg>
  );
};