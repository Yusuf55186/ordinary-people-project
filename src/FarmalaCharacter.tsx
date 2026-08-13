import type { MouthCue } from "./animations/lipSync";

type MouthPose = MouthCue["pose"];

const FarmalaMouth = ({ pose }: { pose: MouthPose }) => {
  const mouthDark = "#2a2418";
  const mouthOutline = "#010101";
  const teeth = "#f5f6f6";
  const tongue = "#b85f63";

  switch (pose) {
    case "A":
      return (
        <ellipse
          id="Mouth_A"
          cx="140"
          cy="368"
          rx="7"
          ry="9"
          fill={mouthDark}
          stroke={mouthOutline}
          strokeWidth="0.8"
        />
      );

    case "U":
      return (
        <ellipse
          id="Mouth_U"
          cx="140"
          cy="368"
          rx="4.5"
          ry="5.5"
          fill={mouthDark}
          stroke={mouthOutline}
          strokeWidth="0.8"
        />
      );

    case "MBP":
      return (
        <path
          id="Mouth_MBP"
          d="M130,368 Q140,365.4 150,368 Q140,370.6 130,368Z"
          fill="#b76a55"
          stroke={mouthOutline}
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      );

    case "S":
      return (
        <g id="Mouth_S">
          <rect
            x="129"
            y="364"
            width="22"
            height="8"
            rx="4"
            fill={mouthDark}
            stroke={mouthOutline}
            strokeWidth="0.8"
          />
          <path
            d="M131.5,365.2 Q140,363.9 148.5,365.2 L148,368.2 Q140,369.1 132,368.1Z"
            fill={teeth}
          />
        </g>
      );

    case "L":
      return (
        <g id="Mouth_L_Pose">
          <ellipse
            cx="140"
            cy="368"
            rx="8"
            ry="6.5"
            fill={mouthDark}
            stroke={mouthOutline}
            strokeWidth="0.8"
          />
          <ellipse cx="140" cy="371" rx="5.2" ry="2.5" fill={tongue} />
        </g>
      );

    case "N":
      return (
        <ellipse
          id="Mouth_N"
          cx="140"
          cy="368"
          rx="9"
          ry="3.5"
          fill={mouthDark}
          stroke={mouthOutline}
          strokeWidth="0.8"
        />
      );

    case "R":
      return (
        <ellipse
          id="Mouth_R_Pose"
          cx="140"
          cy="368"
          rx="6.5"
          ry="6"
          fill={mouthDark}
          stroke={mouthOutline}
          strokeWidth="0.8"
        />
      );

    case "G":
      return (
        <g id="Mouth_G">
          <ellipse
            cx="140"
            cy="368"
            rx="8.5"
            ry="6.5"
            fill={mouthDark}
            stroke={mouthOutline}
            strokeWidth="0.8"
          />
          <path
            d="M135,372 Q140,369.8 145,372 Q140,374.4 135,372Z"
            fill={tongue}
          />
        </g>
      );

    case "E":
      return (
        <g id="Mouth_E">
          <rect
            x="127.5"
            y="363.5"
            width="25"
            height="9"
            rx="4.5"
            fill={mouthDark}
            stroke={mouthOutline}
            strokeWidth="0.8"
          />
          <path
            d="M130,364.8 Q140,363.4 150,364.8 L149.2,368 Q140,369 130.8,367.9Z"
            fill={teeth}
          />
        </g>
      );

    case "I":
      return (
        <rect
          id="Mouth_I"
          x="127"
          y="365"
          width="26"
          height="6"
          rx="3"
          fill={mouthDark}
          stroke={mouthOutline}
          strokeWidth="0.8"
        />
      );

    case "F":
      return (
        <g id="Mouth_F">
          <rect
            x="130"
            y="363.8"
            width="20"
            height="8"
            rx="4"
            fill={mouthDark}
            stroke={mouthOutline}
            strokeWidth="0.8"
          />
          <path
            d="M132,364.8 Q140,363.8 148,364.8 L147.5,368 Q140,369 132.5,368Z"
            fill={teeth}
          />
          <path
            d="M133,370 Q140,367.8 147,370 Q140,372.4 133,370Z"
            fill="#b76a55"
          />
        </g>
      );

    case "TH":
      return (
        <g id="Mouth_TH">
          <rect
            x="130"
            y="363.5"
            width="20"
            height="9"
            rx="4.5"
            fill={mouthDark}
            stroke={mouthOutline}
            strokeWidth="0.8"
          />
          <path
            d="M132,364.6 Q140,363.7 148,364.6 L147.5,367.4 Q140,368.3 132.5,367.4Z"
            fill={teeth}
          />
          <ellipse cx="140" cy="370.2" rx="5.4" ry="2.7" fill={tongue} />
        </g>
      );

    case "O":
      return (
        <ellipse
          id="Mouth_O"
          cx="140"
          cy="368"
          rx="7.5"
          ry="8"
          fill={mouthDark}
          stroke={mouthOutline}
          strokeWidth="0.8"
        />
      );

    case "rest":
    default:
      return (
        <path
          id="Mouth_Outer"
          className="st18"
          d="M122.86,367.99l1.4-.34c1.25-.31,3.18-.41,5.19-.27l22.93,1.6c1.76.12,3.39.46,4.32.88l1.24.57"
        />
      );
  }
};

type Props = {
    headRotation:number
    bodyY:number
    leftArmRotation:number
    rightArmRotation:number
    leftHandRotation:number
    rightHandRotation:number
    leftElbowRotation?:number
    rightElbowRotation?:number
    leftLegRotation:number
    rightLegRotation:number
    leftKneeRotation?:number
    rightKneeRotation?:number
    eyeScaleY:number
    eyeLLookX:number
    eyeLLookY:number
    eyeRLookX:number
    eyeRLookY:number
     leftEyeBrowY:number
    rightEyeBrowY:number
    mouthPose?: MouthPose;

}
export function FarmalaCharacter({ headRotation,bodyY,leftArmRotation,rightArmRotation,leftElbowRotation = 0,rightElbowRotation = 0,leftLegRotation,rightLegRotation,leftKneeRotation = 0,rightKneeRotation = 0,leftHandRotation,rightHandRotation,eyeScaleY,eyeLLookX,eyeLLookY,eyeRLookX,eyeRLookY,leftEyeBrowY,rightEyeBrowY,mouthPose = "rest"}: Props) {  
  const headTransform = `rotate(${headRotation} 140 384)`;
const bodyTransform = `translate(0 ${bodyY})`;
const leftArmTransform = `rotate(${leftArmRotation} 79 417)`;
const rightArmTransform = `rotate(${rightArmRotation} 194 420)`;
const leftElbowTransform = `rotate(${leftElbowRotation} 57 497)`;
const rightElbowTransform = `rotate(${rightElbowRotation} 207 505)`;
const leftLowerArmTransform = `${leftArmTransform} ${leftElbowTransform}`;
const rightLowerArmTransform = `${rightArmTransform} ${rightElbowTransform}`;
const leftLegTransform = `rotate(${leftLegRotation} 100 596)`;
const rightLegTransform = `rotate(${rightLegRotation} 151 596)`;
const leftHandTransform = `rotate(${leftHandRotation} 31 579)`;
const rightHandTransform = `rotate(${rightHandRotation} 220 589)`;
const leftKneeTransform = `rotate(${leftKneeRotation} 89 738)`;
const rightKneeTransform = `rotate(${rightKneeRotation} 169 734)`;
const leftLowerLegTransform = `${leftLegTransform} ${leftKneeTransform}`;
const rightLowerLegTransform = `${rightLegTransform} ${rightKneeTransform}`;
const leftEyeTransform =
  `translate(123 322) scale(1 ${eyeScaleY}) translate(-123 -322) `;

const rightEyeTransform =
  `translate(159 325) scale(1 ${eyeScaleY}) translate(-159 -325)`;
  const leftPupilTransform =
  `${leftEyeTransform} translate(${eyeLLookX} ${eyeLLookY})`;

const rightPupilTransform =
  `${rightEyeTransform} translate(${eyeRLookX} ${eyeRLookY})`;
  const leftEyeBrowTransform = `translate(0 ${leftEyeBrowY})`;
const rightEyeBrowTransform = `translate(0 ${rightEyeBrowY})`;

  return (
    <svg
      id="Farmala_Front_RemotionReady"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 250 887"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        overflow: "visible",
        
      }}
    >
      <defs>
        <linearGradient
          id="FARMALA_HOODIE_LAMP_LIGHT"
          gradientUnits="userSpaceOnUse"
          x1="63"
          y1="0"
          x2="195"
          y2="0"
        >
          <stop offset="0%" stopColor="#E5A45A" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#E5A45A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#E5A45A" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="FARMALA_HOODIE_WINDOW_RIM"
          gradientUnits="userSpaceOnUse"
          x1="195"
          y1="0"
          x2="63"
          y2="0"
        >
          <stop offset="0%" stopColor="#7EA9E6" stopOpacity="0.15" />
          <stop offset="26%" stopColor="#7EA9E6" stopOpacity="0.035" />
          <stop offset="100%" stopColor="#7EA9E6" stopOpacity="0" />
        </linearGradient>
        <clipPath id="CLIP_HOODIE_TORSO">
          <polygon points="70,400 171,400 195,466 188,545 182,586 66,586 63,540 69,458" />
        </clipPath>
        <filter
  id="FARMALA_ROOM_AMBIENT"
  x="-10%"
  y="-5%"
  width="120%"
  height="110%"
  colorInterpolationFilters="sRGB"
>
  

  <feColorMatrix
    
    type="matrix"
    values="
      0.93 0.02 0.00 0 0.012
      0.01 0.90 0.01 0 0.008
      0.00 0.02 0.88 0 0.004
      0    0    0    1 0
    "
  />
</filter>

        <style>{`
      #Farmala_Front_RemotionReady .st0, #Farmala_Front_RemotionReady .st1, #Farmala_Front_RemotionReady .st2, #Farmala_Front_RemotionReady .st3, #Farmala_Front_RemotionReady .st4, #Farmala_Front_RemotionReady .st5, #Farmala_Front_RemotionReady .st6, #Farmala_Front_RemotionReady .st7 {
        fill: #354ea1;
      }

      #Farmala_Front_RemotionReady .st0, #Farmala_Front_RemotionReady .st8, #Farmala_Front_RemotionReady .st9, #Farmala_Front_RemotionReady .st10, #Farmala_Front_RemotionReady .st11, #Farmala_Front_RemotionReady .st7, #Farmala_Front_RemotionReady .st12, #Farmala_Front_RemotionReady .st13 {
        isolation: isolate;
      }

      #Farmala_Front_RemotionReady .st0, #Farmala_Front_RemotionReady .st2, #Farmala_Front_RemotionReady .st14, #Farmala_Front_RemotionReady .st3, #Farmala_Front_RemotionReady .st4, #Farmala_Front_RemotionReady .st10, #Farmala_Front_RemotionReady .st11, #Farmala_Front_RemotionReady .st6, #Farmala_Front_RemotionReady .st15, #Farmala_Front_RemotionReady .st16, #Farmala_Front_RemotionReady .st17 {
        stroke-miterlimit: 4;
      }

      #Farmala_Front_RemotionReady .st0, #Farmala_Front_RemotionReady .st2, #Farmala_Front_RemotionReady .st14, #Farmala_Front_RemotionReady .st3, #Farmala_Front_RemotionReady .st10, #Farmala_Front_RemotionReady .st11, #Farmala_Front_RemotionReady .st6, #Farmala_Front_RemotionReady .st16, #Farmala_Front_RemotionReady .st17 {
        stroke: #2a2418;
      }

      #Farmala_Front_RemotionReady .st0, #Farmala_Front_RemotionReady .st2, #Farmala_Front_RemotionReady .st14, #Farmala_Front_RemotionReady .st15 {
        stroke-width: 2.5px;
      }

      #Farmala_Front_RemotionReady .st0, #Farmala_Front_RemotionReady .st11, #Farmala_Front_RemotionReady .st13 {
        opacity: .6;
      }

      #Farmala_Front_RemotionReady .st18, #Farmala_Front_RemotionReady .st19, #Farmala_Front_RemotionReady .st20, #Farmala_Front_RemotionReady .st11, #Farmala_Front_RemotionReady .st6, #Farmala_Front_RemotionReady .st21, #Farmala_Front_RemotionReady .st22, #Farmala_Front_RemotionReady .st17, #Farmala_Front_RemotionReady .st23 {
        stroke-width: 1px;
      }

      #Farmala_Front_RemotionReady .st18, #Farmala_Front_RemotionReady .st19, #Farmala_Front_RemotionReady .st20, #Farmala_Front_RemotionReady .st21, #Farmala_Front_RemotionReady .st22, #Farmala_Front_RemotionReady .st23 {
        stroke-miterlimit: 10;
      }

      #Farmala_Front_RemotionReady .st18, #Farmala_Front_RemotionReady .st24, #Farmala_Front_RemotionReady .st25, #Farmala_Front_RemotionReady .st14, #Farmala_Front_RemotionReady .st26, #Farmala_Front_RemotionReady .st11, #Farmala_Front_RemotionReady .st17 {
        fill: none;
      }

      #Farmala_Front_RemotionReady .st18, #Farmala_Front_RemotionReady .st25, #Farmala_Front_RemotionReady .st27, #Farmala_Front_RemotionReady .st28, #Farmala_Front_RemotionReady .st20, #Farmala_Front_RemotionReady .st26, #Farmala_Front_RemotionReady .st21, #Farmala_Front_RemotionReady .st22, #Farmala_Front_RemotionReady .st23 {
        stroke: #010101;
      }

      #Farmala_Front_RemotionReady .st1, #Farmala_Front_RemotionReady .st29, #Farmala_Front_RemotionReady .st30 {
        fill-opacity: 0;
      }

      #Farmala_Front_RemotionReady .st31 {
        fill: #d8d9d8;
      }

      #Farmala_Front_RemotionReady .st31, #Farmala_Front_RemotionReady .st24 {
        stroke-width: 2px;
      }

      #Farmala_Front_RemotionReady .st31, #Farmala_Front_RemotionReady .st24, #Farmala_Front_RemotionReady .st32 {
        stroke: #2a2a2a;
      }

      #Farmala_Front_RemotionReady .st8 {
        fill: #3f2411;
        opacity: .1;
      }

      #Farmala_Front_RemotionReady .st19, #Farmala_Front_RemotionReady .st27, #Farmala_Front_RemotionReady .st20 {
        fill: #d48455;
      }

      #Farmala_Front_RemotionReady .st19, #Farmala_Front_RemotionReady .st33 {
        stroke: #131313;
      }

      #Farmala_Front_RemotionReady .st25, #Farmala_Front_RemotionReady .st27, #Farmala_Front_RemotionReady .st28, #Farmala_Front_RemotionReady .st33, #Farmala_Front_RemotionReady .st26 {
        stroke-miterlimit: 10;
      }

      #Farmala_Front_RemotionReady .st28, #Farmala_Front_RemotionReady .st23 {
        fill: #010101;
      }

      #Farmala_Front_RemotionReady .st32 {
        fill: #f5f6f6;
      }

      #Farmala_Front_RemotionReady .st32, #Farmala_Front_RemotionReady .st34 {
        stroke-width: 2.5px;
      }

      #Farmala_Front_RemotionReady .st33, #Farmala_Front_RemotionReady .st9 {
        fill: #2a2a3a;
      }

      #Farmala_Front_RemotionReady .st3, #Farmala_Front_RemotionReady .st16 {
        stroke-width: 2px;
      }

      #Farmala_Front_RemotionReady .st9 {
        opacity: .4;
      }

      #Farmala_Front_RemotionReady .st4 {
        stroke: #cac0a0;
        stroke-linecap: round;
        stroke-width: 3px;
      }

      #Farmala_Front_RemotionReady .st10 {
        opacity: .7;
        stroke-width: 1.5px;
      }

      #Farmala_Front_RemotionReady .st10, #Farmala_Front_RemotionReady .st16 {
        fill: #33449c;
      }

      #Farmala_Front_RemotionReady .st26 {
        stroke-width: 3px;
      }

      #Farmala_Front_RemotionReady .st35 {
        display: none;
      }

      #Farmala_Front_RemotionReady .st15 {
        fill: #1c2c17;
        stroke: #1c2c17;
      }

      #Farmala_Front_RemotionReady .st29 {
        fill: #df1e2d;
      }

      #Farmala_Front_RemotionReady .st7 {
        opacity: .5;
      }

      #Farmala_Front_RemotionReady .st12 {
        fill: #1e0d0d;
        opacity: .03;
      }

      #Farmala_Front_RemotionReady .st13 {
        fill: #e0e1e0;
      }

      #Farmala_Front_RemotionReady .st34 {
        fill: #1a1a2b;
        stroke: #0f0f14;
      }

      #Farmala_Front_RemotionReady .st30 {
        fill: #c88a2d;
      }

      #Farmala_Front_RemotionReady .st21 {
        fill: #231f20;
      }

      #Farmala_Front_RemotionReady .st22 {
        fill: #fff;
      }
    `}</style>
      </defs>
      <g id="FARMALA_CHARACTER" transform={bodyTransform} data-character="Farmala" filter="url(#FARMALA_ROOM_AMBIENT)">
        <g id="HAIR_AND_HOOD_BASE" transform={headTransform} data-remotion="true" data-rig-group="head">
          <g id="Hood_Root" data-source-index="0">
            <path
              className="st2"
              d="M97.52,356.15c29.07-13.46,57.05-11.5,83.96,5.87,5.68,8.14,5.81,19.76.38,34.86l-12.94,10.7c-20.96-13.07-42.73-14.6-65.3-4.57l-11.32-12.4c-3.27-15.72-1.54-27.2,5.23-34.47h0Z"
            />
            <path
              className="st0"
              d="M103.61,403.03c22.47-8.49,44.23-6.97,65.3,4.57l-5.48,11.23c-18.06-9.78-36.73-11.09-55.97-3.91l-3.86-11.88h0Z"
            />
          </g>
          <g id="Hair">
            <path
              id="Straighthair_side"
              className="st23"
              d="M99.85,336.12l-3.6-27.22s34.77-29.46,65.14-15.1c30.37,14.34,20.93,7.41,27.52,17.22s-7.71,31.21-7.71,31.21l-12.01-12.41-24.95-17.33s-14.8-5.63-26.7-1.43l-8.08,7.74s-.17,16.33-9.61,17.33h0Z"
              data-source-index="1"
            />
            <path
              id="HAIR_AND_HOOD_BASE_02"
              className="st18"
              d="M182.82,304.18"
              data-source-index="2"
            />
            <path
              id="HAIR_AND_HOOD_BASE_03"
              className="st23"
              d="M96.26,308.9l-2.39-31.08c-.14-1.77.88-3.44,2.53-4.12l.24-.09c.3-.12.61-.21.92-.27,5.41-.86,55.42-8.22,89.62,10.05,1.61.86,2.48,2.69,2.1,4.49l-3.35,16.3"
              data-source-index="3"
            />
          </g>
        </g>

        <g id="HEAD_NECK_TORSO"  data-remotion="true" data-rig-group="body">
                    <g id="HEAD" transform={headTransform} data-rig-part="HEAD" data-source-index="4">

            <path
              id="Head"
              className="st20"
              d="M183.4,309.03c.82,81.21-26.94,72.5-46.51,71.13-19.57-1.37-43.11-.25-34.2-76.77,2.28-19.6,23.17-32.6,42.74-31.23s37.78,17.09,37.98,36.88h0Z"
            />
          </g>
          <g id="NECK" data-rig-part="NECK" data-source-index="5">
            <path
              id="neck_component"
              className="st20"
              d="M145.3,383.58l2.37,12.91c.02.13.08.27.15.4,1.26,2.09,11.58,20.3-9.15,19.02-.33-.02-.65-.04-.98-.04-3.07,0-21.92-.8-7.29-20.65.09-.12.16-.25.19-.38l3.25-12.02c.23-.85,1.62-1.51,3.62-1.71.04,0,.09,0,.13-.01,3.57-.33,7.41.92,7.7,2.47h.02s0,.01,0,.01Z"
            />
          </g>
          <g id="TORSO" data-rig-part="TORSO" data-source-index="6">
            <path
              className="st20"
              d="M93.46,420.19c2.44-8.02,16.6-12.33,28.19-12.2,10.6.17,21.46,2.26,32.06,3.67,12.38,1.64,21.02,3.99,26.03,12.78,2.2,3.46,2.09,6.8,1.86,10.5-.66,19.22-1.66,50.92-.12,67.18.26,3.01,1.13,6.49,1.49,8.83.44,3.26.28,4.43.83,8.5.73,6.98,1.32,17.35-4.8,23.54-4.28,4.3-11.02,5.39-18.99,6.38-21.15,2.52-50.09,1.82-68.48-4.33-11.78-3.5-15.97-11.11-16.16-20.22-.29-6.01.67-10.53,2.24-15.93,2.48-8.88,8.23-30.07,9.99-43.35.88-6.18.49-10.99,1.27-16.92,1.36-8.81,2.8-19.62,4.55-28.29l.03-.12h0Z"
            />
          </g>
        </g>
        <g
          id="LOWER_BODY_BASE"
          data-remotion="true"
          data-rig-group="lower-body"
        >
          <path
            id="Pelvis_Base"
            className="st25"
            d="M180.92,558.17h0c-.4-4.26-4.54-7.54-9.5-7.54h-91.89c-4.83,0-8.75,3.38-8.75,7.54h0"
            data-source-index="7"
          />
          <line
            id="Pelvis_Centerline"
            className="st25"
            x1="125.75"
            y1="550.63"
            x2="125.75"
            y2="575.84"
            data-source-index="8"
          />
          <path
            id="PELVIS"
            className="st25"
            d="M84.86,578.8c.89-1.73,20.9-3.17,41.46-3.35,16.09-.14,32.51.48,40.39,2.34,38.23,35.52-5.78,65.59-58.29,59.4-24.59-4.95-54.87-34.37-23.56-58.39h0Z"
            data-rig-part="PELVIS"
            data-source-index="9"
          />
          <path
            id="Calf_Visual_L_Skin"
            className="st27"
            transform={leftLegTransform}
            data-rig-part="CALF_L"
            data-rig-parent="KNEE_L"
            d="M101.35,626.73l-.51,4.57,2.47.48s10.66.47,15.73,8.66c4.66,7.53-14.41,61.05-17.57,69.76-.28.78-.38,1.63-.3,2.46.64,6.11,3.02,32.43-2.65,35.83-6.41,3.85-14.83,3.08-21.45-2.57,0,0-.53-3.34-.81-7.92-.34-5.55.35-11.15,2-16.39,1.05-3.33,2.02-8.24,1.2-13.76-2.62-17.71-7.76-36.76-3.55-54.23,1.86-7.73,3.82-15.11,5.31-18.8,0,0,.34-5.87,19-3.69"
            data-source-index="10"
          />
          <path
            id="Calf_Visual_R_Skin"
            className="st27"
            transform={rightLegTransform}
            data-rig-part="CALF_R"
            data-rig-parent="KNEE_R"
            d="M153.12,626.67l.51,4.57-2.47.48s-10.66.47-15.73,8.66c-4.66,7.53,14.41,61.05,17.57,69.76.28.78.38,1.63.3,2.46-.64,6.11-3.02,32.43,2.65,35.83,6.41,3.85,14.83,3.08,21.45-2.57,0,0,.53-3.34.81-7.92.34-5.55-.35-11.15-2-16.39-1.05-3.33-2.02-8.24-1.2-13.76,2.62-17.71,7.76-36.76,3.55-54.23-1.86-7.73-3.82-15.11-5.31-18.8,0,0-.34-5.87-19-3.69"
            data-source-index="11"
          />
          <g id="Knee_R" transform={rightLowerLegTransform} data-rig-part="KNEE_R" data-rig-parent="PANTS_R" data-source-index="12">
            <path
              id="Knee"
              className="st27"
              d="M162.09,836.44l-3.67-40.53c-.04-.42-.11-.84-.21-1.25-1.57-6.38-14.57-61.97,8.77-62.52.37,0,.73-.04,1.1-.11,3.44-.68,24.63-2.34,9.78,64.05-.09.41-.15.83-.18,1.25l-2.7,38.95c-.19,2.76-1.7,5.18-3.92,6.25-.05.02-.1.05-.15.07-3.97,1.86-8.38-1.28-8.83-6.17h.01Z"
            />
          </g>
          <g id="Knee_L" transform={leftLowerLegTransform} data-rig-part="KNEE_L" data-rig-parent="PANTS_L" data-source-index="13">
            <path
              id="Knee1"
              className="st27"
              d="M94.21,840.52l3.76-40.53c.04-.42.11-.83.21-1.24,1.6-6.34,14.97-61.98-9-62.52-.38,0-.75-.04-1.13-.11-3.53-.68-25.29-2.34-10.04,64.04.09.41.16.84.19,1.26l2.78,39.01c.19,2.62,1.6,4.98,3.75,6.06.09.04.18.09.27.13,4.12,1.94,8.75-1.14,9.21-6.1h0Z"
            />
          </g>
          <path
            id="Ankle_R_Skin"
            className="st27"
            transform={rightLowerLegTransform}
            data-rig-part="ANKLE_R"
            data-rig-parent="KNEE_R"
            d="M163.78,846.92c1.31-5.19,6.57-7.14,11.42-5.7,4.39,1.26,9.04,2.77,13.21,4.63,2.13.95,3.98,1.97,5.92,2.93,6.49,3,16.63,5.13,21.89,9.34,2.01,1.6,2.69,4.02.68,5.31-2.47,1.36-4.82.95-8.34,1-5.05-.07-10.46-.35-15.39-1.05-6.28-.96-12.8-1.55-19.12-1.36-1.66.02-3.26.29-4.87.03-6.28-1.33-6.92-9.96-5.4-15.1v-.04h0Z"
            data-source-index="14"
          />
          <path
            id="Ankle_L_Skin"
            className="st27"
            transform={leftLowerLegTransform}
            data-rig-part="ANKLE_L"
            data-rig-parent="KNEE_L"
            d="M98.07,845.3c-.75-5.3-5.77-7.8-10.75-6.88-4.5.79-9.28,1.79-13.62,3.2-2.22.71-4.17,1.54-6.2,2.28-6.77,2.29-17.08,3.33-22.76,6.96-2.17,1.37-3.11,3.71-1.24,5.21,2.31,1.62,4.69,1.46,8.19,1.88,5.03.47,10.44.76,15.41.59,6.34-.29,12.89-.18,19.16.69,1.64.2,3.21.63,4.84.55,6.38-.65,7.94-9.16,6.97-14.44v-.04h0Z"
            data-source-index="15"
          />
        </g>
        <g id="HAND_L"   transform={`${leftLowerArmTransform} ${leftHandTransform}`}data-remotion="true" data-rig-group="left-hand" data-rig-parent="Forearm_L">
          <path
            id="Hand_L_Palm"
            className="st19"
            d="M38.71,588.87c-2.27,2.57-8.21,7.65-13.18,1.7-4.97-5.94-9.86-3.71-10.03-6.81l1.12-5.05c3.16-2.69,7.2-3.64,12.15-2.85,4.98.64,8.7,3.14,11.15,7.52l-1.21,5.49h0Z"
            data-source-index="16"
          />
          <path
            id="Hand_L_Finger_01"
            className="st19"
            d="M14.78,578.95c-.89.52-1.73,1.23-2.52,2.14-2,2.22-2.86,4.3-2.57,6.27,1.09,1.56,2.51,1.72,4.23.49,2.47-2.33,3-5.35,1.58-9.07l-.71.18Z"
            data-source-index="17"
          />
          <path
            id="Hand_L_Finger_02"
            className="st19"
            d="M34.53,593.66c.56,1.89,1.39,4.12,2.45,6.68.27,1.26.81,1.87,1.63,1.83,1-.09,1.5-.66,1.5-1.68.05-1.56-.42-3.48-1.41-5.75-.75-1.84-1.75-2.57-2.97-2.2-.81.03-1.21.42-1.2,1.13h0Z"
            data-source-index="18"
          />
          <path
            id="Hand_L_Finger_03"
            className="st19"
            d="M29,594.26c-.78,3.06-1.42,6.46-1.93,10.18-.44,1.52-.24,2.47.58,2.86,1.01.42,1.81.05,2.38-1.15.91-2.32,1.68-5.34,2.29-9.04.37-2.14-.07-3.34-1.32-3.62-.92-.41-1.58-.15-1.99.77h0Z"
            data-source-index="19"
          />
          <path
            id="Hand_L_Finger_04"
            className="st19"
            d="M22.01,590.88c-.78,3.06-1.62,7.37-2.54,12.92-.45,1.61-.27,2.62.55,3,1.11.45,1.96.03,2.54-1.26,1.17-3.48,2.13-7.41,2.89-11.79.37-2.14-.07-3.34-1.32-3.62-1.01-.42-1.73-.18-2.14.74h0s0,0,0,0Z"
            data-source-index="20"
          />
          <path
            id="Hand_L_Finger_05"
            className="st19"
            d="M16.86,587.8c-.78,3.06-1.52,6.68-2.23,10.87-.44,1.52-.24,2.47.58,2.86,1.01.42,1.81.05,2.38-1.15,1.02-2.81,1.89-6.04,2.6-9.73.47-2.12.07-3.31-1.18-3.59-1.01-.42-1.73-.18-2.14.74Z"
            data-source-index="21"
          />
        </g>
        <g id="ARM_R" data-remotion="true" transform={rightArmTransform} data-rig-group="right-arm">
          <path
            id="Forearm_R"
            className="st20"
            transform={rightElbowTransform}
            d="M214.47,498.57l-13,1.87c-1.62.24-2.71,3.4-2.9,8.42h0c-.16,4.3.36,9.5,1.43,14.27l12.73,56.8c1.26,5.62,3.27,9.35,4.91,9.11l7.13-1.03c1.45-.21,2.27-3.73,2.02-8.75l-2.63-53.33c-.35-7.09-1.85-14.77-3.99-20.27h0c-1.83-4.75-3.92-7.35-5.69-7.1h0Z"
            data-rig-part="Forearm_R"
            data-source-index="22"
          />
          <path
            id="Upper_arm_R"
            className="st20"
            d="M204.31,425.52l-17.58,2.53c-2.2.32-3.85,3.39-4.38,8.18h0c-.35,3.11-.3,20.81.25,31.14.21,4.1,1.27,8.12,3.06,11.82l11.63,23.93c1.37,5.29,3.85,8.72,6.07,8.4l9.64-1.39c1.96-.28,8.75-7.68,8.71-12.44l-5.97-46.66c-.06-6.74-1.65-13.96-4.19-19.08h0c-2.19-4.42-4.85-6.78-7.24-6.44h0Z"
            data-rig-part="Upper_arm_R"
            data-source-index="23"
          />
          <g id="HAND_R"   transform={`${rightElbowTransform} ${rightHandTransform}`} data-rig-group="right-hand" data-rig-parent="Forearm_R">
          <path
            id="Hand_R_Palm"
            className="st19"
            d="M209.65,591.56c3.01-4.02,7.02-6.02,12.05-5.98,5.01-.12,8.9,1.35,11.67,4.42l.44,5.15c-.57,3.06-4.94.03-10.83,5.43-5.71,5.23-10.93-.58-12.84-3.42l-.47-5.6h0s0,0,0,0Z"
            data-source-index="24"
          />
          <path
            id="Hand_R_Finger_01"
            className="st19"
            d="M234.47,590.22c-1.9,3.5-1.77,6.56.38,9.2,1.55,1.45,2.96,1.48,4.25.08.53-1.91-.04-4.09-1.73-6.55-.67-1-1.41-1.82-2.21-2.45l-.69-.27h0Z"
            data-source-index="25"
          />
          <path
            id="Hand_R_Finger_02"
            className="st19"
            d="M212.6,601.19c-1.17-.52-2.25.07-3.23,1.79-1.28,2.13-1.99,3.97-2.15,5.52-.13,1.02.29,1.64,1.27,1.86.8.15,1.42-.39,1.86-1.6,1.4-2.4,2.5-4.5,3.31-6.29.1-.71-.25-1.14-1.04-1.28h0Z"
            data-source-index="26"
          />
          <path
            id="Hand_R_Finger_03"
            className="st19"
            d="M217.18,602.76c-1.28.11-1.87,1.24-1.79,3.41.12,3.75.48,6.84,1.09,9.26.4,1.25,1.14,1.73,2.2,1.45.87-.27,1.19-1.19.95-2.75-.02-3.76-.22-7.2-.58-10.35-.28-.96-.9-1.31-1.87-1.03h0Z"
            data-source-index="27"
          />
          <path
            id="Hand_R_Finger_04"
            className="st19"
            d="M224.4,600.33c-1.28.11-1.87,1.24-1.79,3.41.18,4.43.62,8.45,1.32,12.06.41,1.35,1.2,1.88,2.37,1.58.87-.27,1.18-1.24.94-2.9-.18-5.63-.45-10.01-.82-13.14-.28-.96-.95-1.3-2.01-1.01,0,0,0,0,0,0Z"
            data-source-index="28"
          />
          <path
            id="Hand_R_Finger_05"
            className="st19"
            d="M229.91,597.97c-1.28.11-1.82,1.25-1.64,3.4.22,3.74.65,7.07,1.3,9.98.4,1.25,1.14,1.73,2.2,1.45.87-.27,1.19-1.19.95-2.75-.16-4.24-.43-7.93-.79-11.06-.28-.96-.95-1.3-2.01-1.01h0s0-.01,0-.01Z"
            data-source-index="29"
          />
          </g>
        </g>
        <g id="ARM_L" data-remotion="true" transform={leftArmTransform} data-rig-group="left-arm">
          <path
            id="Forearm_L"
            className="st20"
            transform={leftElbowTransform}
            d="M49.77,488.01l12.64,3.56c1.58.44,2.25,3.73,1.78,8.73h0c-.41,4.28-1.61,9.37-3.29,13.95l-20.08,54.63c-1.99,5.4-4.47,8.84-6.06,8.39l-6.94-1.96c-1.42-.4-1.76-3.99-.85-8.93l9.62-52.52c1.28-6.99,3.78-14.39,6.61-19.58h0c2.44-4.47,4.85-6.78,6.57-6.29h0Z"
            data-rig-part="Forearm_L"
            data-source-index="30"
          />
          <path
            id="Upper_arm_L"
            className="st20"
            d="M68.79,417.08l17.1,4.81c2.13.6,3.37,3.87,3.27,8.69h0c-.06,2.96.25,15.5-.22,23.91-.23,4.11-1.6,8.09-3.9,11.51l-19.49,28.94c-2.06,5.06-4.96,8.13-7.12,7.53l-9.38-2.64c-1.91-.53-2.74-4.08-2.07-8.8l7.13-50.16c.95-6.67,3.47-13.62,6.66-18.37h0c2.75-4.1,5.7-6.09,8.02-5.43h0Z"
            data-rig-part="Upper_arm_L"
            data-source-index="31"
          />
        </g>
        <g id="SHOULDERS" data-remotion="true" data-rig-group="shoulders" data-rig-parent="TORSO">
          <g id="SHOULDER_L" data-rig-part="SHOULDER_L" data-rig-parent="ARM_L">
            <path
              id="Shoulder_L"
              className="st20"
              d="M87.89,442.37l-15.95-2.41c-2.57-3.18-3.75-6.84-3.54-10.98l.8-10.74c.2-2.47,1.49-4.1,3.86-4.85l16.63-4.17,7.49,1.1-9.28,32.06h0Z"
              data-source-index="32"
            />
            <path
              id="Shoulder_L_Detail"
              className="st20"
              d="M76.93,431.46c-1.06,2.9-3.1,4.12-6.11,3.67l-6.23-.94c-3.4-.51-4.61-2.09-3.61-4.72l6.75-16.74c3.4-3.8,7.85-4.87,13.33-3.21,2.33.9,2.84,1.68,1.52,2.32l-5.65,19.62h0Z"
              data-source-index="33"
            />
          </g>
          <g id="SHOULDER_R" data-rig-part="SHOULDER_R" data-rig-parent="ARM_R">
            <path
              id="Shoulder_R"
              className="st20"
              d="M178.99,417.14l6.26-.04,17.59,6.48c2.48,1.09,3.64,2.87,3.48,5.35l-.81,10.75c-.42,4.13-2.28,7.59-5.62,10.37l-17.88.12-3.02-33.04h0s0,.01,0,.01Z"
              data-source-index="34"
            />
            <path
              id="Shoulder_R_Detail"
              className="st20"
              d="M191.7,420.33c-1.27-.82-.64-1.51,1.9-2.08,5.89-.87,10.32.82,13.29,5.07l4.59,17.53c.65,2.75-.81,4.13-4.39,4.16l-6.56.04c-3.18.02-5.11-1.48-5.78-4.5l-3.04-20.23h-.01Z"
              data-source-index="35"
            />
          </g>
        </g>
        <g id="HOODIE" data-remotion="true" data-rig-group="clothing">
          <g
            id="HOODIE1"
            data-name="HOODIE"
            data-rig-part="HOODIE"
            data-source-index="36"
          >
            <g id="Hoodie_Right">
              <path
                className="st7"
                d="M138.9,410.49l31.82.66,8.4,9.99-31.93.9-8.29-11.55h0Z"
              />
            </g>
            <g id="HOODIE_TORSO" clipPath="url(#CLIP_HOODIE_TORSO)" data-rig-parent="TORSO">
              <path
                className="st2"
                d="M68.2,576.83l-4.47-18.97c-1.41-5.96-1.89-12.88.87-18.3l.09-3.62,4.06-78.21c-3.94,2.51.49,25.35-5.31,49.57-8.18,34.17-25.02,71.87-28.69,69.98l-15.86-1.58c-1.63-10.25,1.1-140.7,37.17-164.65,4.35-2.88,9.3-4.74,14.49-5.42l32.27-4.24,35.15,5.67-19.48,173.28-51.45-3.75"
              />
              <path
                className="st2"
                d="M180.25,582.83l-48.76-3.26,6.52-172.21,32.19.61,29.7,8.44c4.78,1.36,9.18,3.82,12.87,7.21,30.62,28.09,17.11,150.71,14.2,160.44l-11.88,2.56c-3.68,1.35-19.07-36.3-22.16-70.56-2.19-24.3,5.02-45.87,1.67-48.83l-6.68,76.46-.4,3.53c1.86,5.63.48,12.28-1.63,17.89l-6.74,17.8"
              />
            </g>
            <rect
              x="63"
              y="400"
              width="132"
              height="186"
              fill="url(#FARMALA_HOODIE_LAMP_LIGHT)"
              clipPath="url(#CLIP_HOODIE_TORSO)"
              pointerEvents="none"
            />
            <rect
              x="63"
              y="400"
              width="132"
              height="186"
              fill="url(#FARMALA_HOODIE_WINDOW_RIM)"
              clipPath="url(#CLIP_HOODIE_TORSO)"
              pointerEvents="none"
            />
            <g id="SHOULDER_CLOTH_L" fill="#354ea1" data-rig-parent="TORSO">
              <path
                d="M87.89,442.37l-15.95-2.41c-2.57-3.18-3.75-6.84-3.54-10.98l.8-10.74c.2-2.47,1.49-4.1,3.86-4.85l16.63-4.17,7.49,1.1-9.28,32.06h0Z"
              />
              <path
                d="M76.93,431.46c-1.06,2.9-3.1,4.12-6.11,3.67l-6.23-.94c-3.4-.51-4.61-2.09-3.61-4.72l6.75-16.74c3.4-3.8,7.85-4.87,13.33-3.21,2.33.9,2.84,1.68,1.52,2.32l-5.65,19.62h0Z"
              />
            </g>
            <g id="SHOULDER_CLOTH_R" fill="#354ea1" data-rig-parent="TORSO">
              <path
                d="M175,411.5c12.5,.5,25.5,4.5,38,10.5l1.5,18c-4,6-10,9-15.5,12h-21l-3-40.5Z"
              />
            </g>
            <g id="HOODIE_ELBOW_BRIDGES" fill="#354ea1" stroke="#2a2418" strokeWidth="2.5">
              <ellipse
                id="ELBOW_BRIDGE_L"
                cx="57"
                cy="497"
                rx="11"
                ry="10"
                transform={leftArmTransform}
              />
              <ellipse
                id="ELBOW_BRIDGE_R"
                cx="207"
                cy="505"
                rx="11"
                ry="10"
                transform={rightArmTransform}
              />
            </g>
            <g id="UPPER_SLEEVE_L" transform={leftArmTransform} data-rig-parent="ARM_L">
              <path
                className="st2"
                d="M58,410c9-4,20-3,29,4,5,7,6,20,4,33-2,15-11,32-23,50-4,6-14,8-22,4-5-3-7-9-5-15,6-17,9-35,11-51,1-11,2-20,6-25Z"
              />
            </g>
            <g id="FOREARM_SLEEVE_L" transform={leftLowerArmTransform} data-rig-parent="Forearm_L">
              <path
                className="st2"
                d="M45,491c7-4,17-2,23,5,3,5,1,14-3,24l-22,51c-2,7-6,11-11,9l-8-2c-4-2-4-8-2-15l14-54c2-9,4-15,9-18Z"
              />
            </g>
            <g id="UPPER_SLEEVE_R" transform={rightArmTransform} data-rig-parent="ARM_R">
              <path
                className="st2"
                d="M184,416c10-3,21,0,28,6,6,8,7,20,8,34,2,16,3,32-1,47-2,8-10,13-18,10-6-2-10-8-11-15-3-13-9-24-10-37-1-15-1-35,4-45Z"
              />
            </g>
            <g id="FOREARM_SLEEVE_R" transform={rightLowerArmTransform} data-rig-parent="Forearm_R">
              <path
                className="st2"
                d="M200,499c7-4,17-2,22,4,4,5,3,14,4,23l3,51c1,7-3,13-8,14h-7c-4-1-7-7-7-14l-9-54c-1-10-1-19,2-24Z"
              />
            </g>
            <g id="HOODIE_JOINT_SEAM_COVERS" fill="#354ea1" stroke="none">
              <ellipse
                id="SHOULDER_SEAM_COVER_L"
                cx="79"
                cy="422"
                rx="9"
                ry="5"
                transform={leftArmTransform}
              />
              <ellipse
                id="ELBOW_SEAM_COVER_L"
                cx="57"
                cy="497"
                rx="10"
                ry="7"
                transform={leftArmTransform}
              />
              <ellipse
                id="SHOULDER_SEAM_COVER_R"
                cx="194"
                cy="427"
                rx="9"
                ry="5"
                transform={rightArmTransform}
              />
              <ellipse
                id="ELBOW_SEAM_COVER_R"
                cx="207"
                cy="505"
                rx="10"
                ry="7"
                transform={rightArmTransform}
              />
            </g>
            <ellipse
              id="Snap_Collar"
              className="st1"
              cx="224.57"
              cy="9.34"
              rx="2.32"
              ry="2.11"
              transform="translate(199.59 232.71) rotate(-86)"
            />
            <ellipse
              id="Snap_ShoulderR"
              className="st1"
              cx="249.22"
              cy="9.52"
              rx="2.32"
              ry="2.11"
              transform="translate(222.34 257.47) rotate(-86)"
            />
            <ellipse
              id="Snap_ShoulderL"
              className="st1"
              cx="200.14"
              cy="6.09"
              rx="2.32"
              ry="2.11"
              transform="translate(180.1 205.32) rotate(-86)"
            />
            <ellipse
              id="Snap_HemR"
              className="st1"
              cx="245.14"
              cy="239.22"
              rx="2.32"
              ry="2.11"
              transform="translate(-10.6 467.07) rotate(-86)"
            />
            <ellipse
              id="Snap_HemL"
              className="st1"
              cx="172.22"
              cy="234.12"
              rx="2.32"
              ry="2.11"
              transform="translate(-73.34 389.58) rotate(-86)"
            />
            <g id="Cuff_Right" transform={leftLowerArmTransform} data-rig-parent="Forearm_L">
              <line
                className="st17"
                x1="24.19"
                y1="567.6"
                x2="36.5"
                y2="570.43"
              />
              <line
                className="st17"
                x1="22.86"
                y1="574.38"
                x2="35.57"
                y2="576.6"
              />
            </g>
            <g id="Waistband">
              <path
                className="st3"
                d="M64.26,576.01l115.99,6.82.2,15.24c-39.33,1.38-78.39-1.35-117.14-8.19l.97-13.87h0Z"
              />
              <line
                className="st11"
                x1="71.88"
                y1="580.41"
                x2="71.08"
                y2="591.97"
              />
              <line
                className="st11"
                x1="94.3"
                y1="583.53"
                x2="93.44"
                y2="595.86"
              />
              <line
                className="st11"
                x1="122.41"
                y1="586.27"
                x2="121.49"
                y2="599.37"
              />
              <line
                className="st11"
                x1="150.62"
                y1="587.47"
                x2="149.76"
                y2="599.8"
              />
              <line
                className="st11"
                x1="173.26"
                y1="587.5"
                x2="172.45"
                y2="599.06"
              />
            </g>
            <path
              className="st5"
              d="M151.31,582.31s-39.77,1.94-36.46-2.87l21.21-170.62s15.25,173.49,15.25,173.49Z"
            />
            <g id="Drawstrings">
              <path
                className="st4"
                d="M127.68,408.92c-2.48,15.31-5.43,30.6-8.84,45.85"
              />
              <path
                className="st4"
                d="M144.51,410.09c.33,15.51,1.12,31.05,2.37,46.63"
              />
              <ellipse
                className="st6"
                cx="118.84"
                cy="454.75"
                rx="3.09"
                ry="2.81"
                transform="translate(-343.09 541.58) rotate(-86)"
              />
              <ellipse
                className="st6"
                cx="146.89"
                cy="456.71"
                rx="3.09"
                ry="2.81"
                transform="translate(-318.96 571.38) rotate(-86)"
              />
            </g>
            <g id="Kangaroo_Pocket">
              <path
                className="st16"
                d="M91.64,515.25c25.48-4.41,50.53-2.66,75.15,5.25l-7.39,38.2c-22.28,3.6-44.2,2.07-65.76-4.6l-2-38.85h0Z"
              />
              <path
                className="st10"
                d="M91.64,515.25c25.48-4.41,50.53-2.66,75.15,5.25"
              />
            </g>
            <line
              className="st14"
              x1="151.38"
              y1="581.31"
              x2="114.92"
              y2="578.44"
            />
          </g>
        </g>
        <g id="FOOT_R" transform={rightLowerLegTransform} data-remotion="true" data-rig-group="right-foot" data-rig-parent="KNEE_R">
          <g
            id="FOOT_R1"
            data-name="FOOT_R"
            data-rig-part="FOOT_R"
            data-source-index="37"
          >
            <g id="Shoe_Sole">
              <path
                className="st31"
                d="M166.09,856.32l51.04,1.55c.9,1.41,1,3.07.32,4.98-.65,1.33-2.34,1.92-5.06,1.78l-43.69-2.33c-2.89-.54-3.76-2.54-2.6-5.98h-.01Z"
              />
            </g>
            <g id="Shoe_Upper">
              <path
                className="st32"
                d="M166.66,835.03c-4.24-.46-4.34,1.71-5.81,5.47-1.48,3.75-3.67,12.14.37,14.53l59.53,1.03c4.28.07,6.11-1.88,5.46-5.86-.79-2.63-3.27-4.46-7.45-5.5l-16.79-7.34c-1.81-3.13-7.87-2.75-10.84-5.03l-5.89-5.04c-2.02-1.2-3.66-.88-4.93.93-1.31,2.21-1.78,4.6-1.42,7.18l-12.21-.37h-.02,0Z"
              />
              <path
                className="st13"
                d="M168.85,836.83c-3.87-.42-6.52,1.52-7.96,5.82-1.44,4.29-2.45,8.42,1.18,11.04l13.7.58,1.42-17.77-8.34.34h0Z"
              />
            </g>
            <g id="Shoe_Laces">
              <line
                className="st24"
                x1="189.5"
                y1="829.72"
                x2="193.23"
                y2="835.99"
              />
              <line
                className="st24"
                x1="192.56"
                y1="828.59"
                x2="196.19"
                y2="835.73"
              />
              <line
                className="st24"
                x1="195.56"
                y1="828.03"
                x2="198.57"
                y2="835.4"
              />
            </g>
            <circle
              id="Snap_AnkleOpening"
              className="st29"
              cx="189.97"
              cy="825.37"
              r=".88"
            />
            <circle
              id="Snap_GroundContact"
              className="st30"
              cx="176.85"
              cy="851.83"
              r=".88"
            />
          </g>
        </g>
        <g id="FOOT_L" transform={leftLowerLegTransform} data-remotion="true" data-rig-group="left-foot" data-rig-parent="KNEE_L">
          <g
            id="FOOT_L1"
            data-name="FOOT_L"
            data-rig-part="FOOT_L"
            data-source-index="38"
          >
            <g id="Shoe_Sole1">
              <path
                className="st31"
                d="M95.67,866.05l-43.76-.1c-2.72,0-4.37-.69-4.95-2.05-.58-1.95-.38-3.6.59-4.96l51.05,1.28c.96,3.5,0,5.45-2.93,5.83h0Z"
              />
            </g>
            <g id="Shoe_Upper1">
              <path
                className="st32"
                d="M87,838.61c.51-2.56.17-4.97-1.02-7.25-1.17-1.89-2.79-2.29-4.87-1.21l-6.16,4.7c-3.09,2.11-5.63,4.68-7.61,7.7l-20.67,3.12c-4.23.81-6.81,2.5-7.75,5.08-.86,3.94.85,5.99,5.13,6.16l59.5,2.27c4.16-2.16,2.44-10.66,1.17-14.49s-1.24-6-5.5-5.78l-12.22-.31h0Z"
              />
              <path
                className="st13"
                d="M88.61,839.81l.44,17.82,13.71.18c3.77-2.41,3-6.59,1.79-10.95-1.2-4.37-3.74-6.45-7.63-6.25l-8.31-.8h0Z"
              />
            </g>
            <g id="Shoe_Laces1">
              <line
                className="st24"
                x1="72.63"
                y1="838.42"
                x2="76.69"
                y2="832.36"
              />
              <line
                className="st24"
                x1="69.68"
                y1="837.99"
                x2="73.7"
                y2="831.06"
              />
              <line
                className="st24"
                x1="67.32"
                y1="837.52"
                x2="70.75"
                y2="830.34"
              />
            </g>
            <circle
              id="Snap_AnkleOpening1"
              className="st29"
              cx="76.47"
              cy="827.99"
              r=".88"
            />
            <circle
              id="Snap_GroundContact1"
              className="st30"
              cx="88.11"
              cy="855.13"
              r=".88"
            />
          </g>
        </g>
        <g id="BODY_SHADOWS" data-remotion="true" data-rig-group="shadows">
          <path
            id="Shadow_L"
            className="st8"
            d="M21.04,613.42s3.27,1.69,3.7-.72,5.62-11.69,5.62-11.69l-1.69,10.91s1.79,4.33,3.33-.35,1.57-11.16,1.57-11.16l1.92-.96s3.62,10.55,5.01,8.77-.63-8.08-1.8-9.67.97-3.61.97-3.61l.82-5.56-5.28-5.18-8.68,14.22s-2.3-1.73-3.06-1.27-2.74,15.42-2.74,15.42"
            data-source-index="39"
          />
          <path
            id="Shadow_R"
            className="st8"
            d="M216.09,580.76l11.05,12.8s2.39,13.8,2.65,16.1-3.46-.76-3.46-.76l-3.07-14.75-2.71,2.12c1.18,4.64.61,14.07.61,14.07-5.71-3.18-2.48-13.98-2.48-13.98l-3.06-.53-3.09,8.32s-1.89,1.78-3.27-.08,4.12-10.41,4.12-10.41c-7.12-8.59,2.09-13.27,2.09-13.27"
            data-source-index="40"
          />
        </g>
        <g id="FACE" transform={headTransform} data-remotion="true" data-rig-group="face">
          <g id="NOSE" data-source-index="41">
            <path
              className="st18"
              d="M143.45,342.52c.05-.32,1.57-8.91.13-10.6-1.45-1.69-3.14-.22-3.14-.22,0,0-2.46,1.95-1.78,10.24"
            />
            <path
              className="st18"
              d="M143.31,342.27s3.26,3.76-.78,3.21c0,0-2.19,1.29-3.59-.24"
            />
            <path
              className="st18"
              d="M139.04,345.07c-4.06-.02-.32-3.29-.32-3.29"
            />
            <path className="st18" d="M142.52,345.66" />
            <path className="st18" d="M141.9,342.84s-1.05-.95-1.97-.14" />
          </g>
          <path
            id="Face_Hairline"
            className="st23"
            d="M104.32,295.83l77.97,5.69s-5.5-23.49-33.21-29.24c-27.71-5.75-44.66,22.13-44.66,22.13"
            data-source-index="42"
          />
          <path
            id="Eye_L"
            transform={leftEyeTransform}
            className="st22"
            d="M130.59,317.63l-.34,4.86c-.24,3.44-2.25,6.11-4.5,5.95l-9.11-.64c-2.24-.16-3.86-3.08-3.62-6.52l.34-4.86,19.76,1"
            data-source-index="43"
          />
          <path
            id="Eye_R"
            transform={rightEyeTransform}
            className="st22"
            d="M152.26,319.24l-.4,5.74c-.2,2.9,1.22,5.37,3.17,5.5l8.93.62c1.96.14,3.71-2.11,3.91-5.01l.35-5.06-19.46-2.52"
            data-source-index="44"
          />
          <circle
            id="Pupil_R"
            transform={`${rightEyeTransform} ,${rightPupilTransform}`}
            className="st21"
            cx="159.76"
            cy="325.24"
            r="1"
            data-source-index="45"
          />
          <circle
            id="Pupil_L"
            transform={`${leftEyeTransform} ,${leftPupilTransform}`}
            className="st21"
            cx="121.27"
            cy="321.84"
            r="1"
            data-source-index="46"
          />
          <path
            id="Eyebrow_L"
            transform={leftEyeBrowTransform}
            className="st18"
            d="M110.44,315.69l1.42.1c1.92.13,3.84-.64,5.62-2.2,3.15-2.78,9.05-6.09,14.72.98"
            data-source-index="47"
          />
          <path
            id="Eyebrow_R"
            transform={rightEyeBrowTransform}
            className="st18"
            d="M174.99,312.35l-1.49-.1c-2.01-.14-3.91-1.23-5.53-3.12-2.87-3.36-8.53-7.66-15.46-1.14"
            data-source-index="48"
          />
          <FarmalaMouth pose={mouthPose} />
          
          <path
            id="Mouth_R"
            className="st20"
            d="M168.87,322.26c-.12,1.74-3.25.73-8.29.37s-9.02.09-8.9-1.64,4.3-4.98,9.34-4.63,7.97,4.18,7.85,5.91h0Z"
            data-source-index="50"
          />
          <path
            id="Mouth_L"
            className="st20"
            d="M131.44,318.48c-.06.92-3.39.26-8.7-.11s-9.49-.28-9.43-1.2,4.34-2.49,9.66-2.12,8.54,2.51,8.47,3.42h0Z"
            data-source-index="51"
          />
          <g id="EAR_L" data-source-index="52">
            <path className="st20" d="M100.46,336.11s-6.55,8.75,1.07,8.22" />
            <path className="st20" d="M100.09,339.64s-1.4,1.48.3,1.88" />
          </g>
          <g id="EAR_R" data-source-index="53">
            <path className="st20" d="M182.49,340.59s5.91,9.19-1.65,8.12" />
            <path className="st20" d="M182.61,344.14s1.28,1.56-.43,1.85" />
          </g>
        </g>
        <g id="MICRO_DETAILS" data-remotion="true" data-rig-group="details">
          <path
            id="Neckline_Detail"
            className="st15"
            d="M216.54,589.5"
            data-source-index="54"
          />
        </g>
        <g id="PANTS" data-remotion="true" data-rig-group="pants">
          <g id="PANTS_R" transform={rightLegTransform} data-rig-part="PANTS_R" data-rig-parent="LEG_R" data-source-index="55">
            <path
              className="st34"
              d="M134.47,596.12l45.06.02c3.78,0,1.21-4.96,1.64-1.31,3.27,27.39,8.73,61.51,4.93,86.93-.04.24-.06.48-.07.73l-2.88,48.8c-.14,3.88-3.43,6.95-7.42,6.95l-10.12.63c-3.96,0-13.56,7.64-13.75,3.79l-10.03-33.06c-.19-3.84-3.45-6.87-7.41-6.87h0c-4.1,0-6.31-67.39-6.31-71.37l-.11-31.78c0-3.98,2.37-3.46,6.47-3.46h0Z"
            />
            <path
              className="st9"
              d="M132.86,596.32l43.56.02c3.56,0,6.6,2.64,7.08,6.2,1.51,11.11,2.02,21.66,1.54,31.63-.19,3.85-3.33,6.89-7.15,6.88l-45.05-.02c-3.95,0-7.15-3.23-7.15-7.21v-30.29c.02-3.98,3.22-7.21,7.17-7.2h0Z"
            />
          </g>
          <g id="PANTS_L" transform={leftLegTransform} data-rig-part="PANTS_L" data-rig-parent="LEG_L" data-source-index="56">
            <path
              className="st34"
              d="M117.36,594.44l-44.93-.02c-3.77,0-7.72-3.82-8.15-.18-3.28,27.38-2.25,60.36,1.52,85.79.04.24.06.48.07.73l7.51,53.74c.14,3.88,3.41,6.95,7.39,6.95l14.16,2.44c3.95,0,9.58,8.97,10.02-9.29l4.96-26.68c.19-3.84,3.45-6.86,7.4-6.86h0c4.09,0,9.2-59.64,9.2-63.62l1.31-38.95c0-3.98-6.37-4.04-10.46-4.04h0Z"
            />
            <path
              className="st9"
              d="M117.36,594.44l-45.1-.02c-3.68,0-6.83,2.64-7.34,6.19-1.57,11.11-2.11,21.65-1.62,31.63.19,3.85,3.44,6.89,7.4,6.89l46.65.02c4.09,0,7.4-3.22,7.41-7.2v-30.29c.02-3.98-3.3-7.21-7.38-7.21h-.02,0Z"
            />
          </g>
          <ellipse
            id="Pants_Shadow"
            className="st33"
            cx="128.13"
            cy="599.06"
            rx="4.57"
            ry="4.4"
            data-source-index="57"
          />
          <path
            id="Leg_Highlight"
            className="st12"
            transform={rightLowerLegTransform}
            d="M168.92,739.21l-.71,95.5,6.95.18,1.78-24.83,1.07-17.76s8.13-35.18,2.23-53.55c-.09-.27-.18-.54-.27-.81"
            data-source-index="58"
          />
          <path
            id="Leg_Detail"
            className="st28"
            d="M104.59,350.91"
            data-source-index="59"
          />
          <path
            id="Collar_Opening"
            className="st26"
            d="M114.12,367.46l.38-9.31c.13-3.25,2.35-5.8,4.95-5.69l45.65,1.86c2.6.11,4.6,2.83,4.47,6.08l-.38,9.31"
            data-source-index="60"
          />
        </g>
        <g id="RIG_ANCHORS" className="st35" data-remotion="true">
          <circle
            id="CTRL_ROOT"
            cx="324.27"
            cy="-415.78"
            r="2"
            data-controller="root"
            data-parent="PELVIS"
          />
          <circle
            id="CTRL_HEAD"
            cx="288.27"
            cy="119.22"
            r="2"
            data-controller="head"
            data-parent="HEAD"
          />
          <circle
            id="CTRL_TORSO"
            cx="289.27"
            cy="274.22"
            r="2"
            data-controller="torso"
            data-parent="TORSO"
          />
          <circle
            id="CTRL_PELVIS"
            cx="289.27"
            cy="389.22"
            r="2"
            data-controller="pelvis"
            data-parent="PELVIS"
          />
          <circle
            id="CTRL_HAND_R"
            cx="359.27"
            cy="334.22"
            r="2"
            data-controller="ik"
            data-parent="HAND_R"
          />
          <circle
            id="CTRL_HAND_L"
            cx="219.27"
            cy="334.22"
            r="2"
            data-controller="ik"
            data-parent="HAND_L"
          />
          <circle
            id="CTRL_FOOT_R"
            cx="339.27"
            cy="642.22"
            r="2"
            data-controller="ik"
            data-parent="FOOT_R"
          />
          <circle
            id="CTRL_FOOT_L"
            cx="250.27"
            cy="646.22"
            r="2"
            data-controller="ik"
            data-parent="FOOT_L"
          />
        </g>
      </g>
    </svg>
  );
}