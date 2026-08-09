import type {
  HumanoidRigPose,
  MouthPose,
} from "./humanoidRig";

const AdyManMouth = ({ pose }: { pose: MouthPose }) => {
  const mouthDark = "#2a1814";
  const outline = "#000000";
  const teeth = "#f5f6f6";
  const tongue = "#b85f63";

  switch (pose) {
    case "A":
      return (
        <ellipse
          id="Mouth_A"
          cx={1318.3}
          cy={449.5}
          rx={12}
          ry={14}
          fill={mouthDark}
          stroke={outline}
          strokeWidth={1.4}
        />
      );
    case "U":
      return (
        <ellipse
          id="Mouth_U"
          cx={1318.3}
          cy={449.5}
          rx={7}
          ry={8.5}
          fill={mouthDark}
          stroke={outline}
          strokeWidth={1.4}
        />
      );
    case "MBP":
      return (
        <path
          id="Mouth_MBP"
          d="M1300 449.5 Q1318.3 445 1336.6 449.5 Q1318.3 454 1300 449.5Z"
          fill="#b76a55"
          stroke={outline}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      );
    case "S":
      return (
        <g id="Mouth_S">
          <rect
            x={1297}
            y={443}
            width={42}
            height={13}
            rx={6.5}
            fill={mouthDark}
            stroke={outline}
            strokeWidth={1.4}
          />
          <path
            d="M1301 445 Q1318.3 442.8 1335 445 L1334 450 Q1318.3 451.5 1302 450Z"
            fill={teeth}
          />
        </g>
      );
    case "L":
      return (
        <g id="Mouth_L_Pose">
          <ellipse
            cx={1318.3}
            cy={449.5}
            rx={14}
            ry={11}
            fill={mouthDark}
            stroke={outline}
            strokeWidth={1.4}
          />
          <ellipse cx={1318.3} cy={454} rx={9} ry={4} fill={tongue} />
        </g>
      );
    case "N":
      return (
        <ellipse
          id="Mouth_N"
          cx={1318.3}
          cy={449.5}
          rx={15}
          ry={6}
          fill={mouthDark}
          stroke={outline}
          strokeWidth={1.4}
        />
      );
    case "R":
      return (
        <ellipse
          id="Mouth_R_Pose"
          cx={1318.3}
          cy={449.5}
          rx={11}
          ry={10}
          fill={mouthDark}
          stroke={outline}
          strokeWidth={1.4}
        />
      );
    case "G":
      return (
        <g id="Mouth_G">
          <ellipse
            cx={1318.3}
            cy={449.5}
            rx={15}
            ry={11}
            fill={mouthDark}
            stroke={outline}
            strokeWidth={1.4}
          />
          <path
            d="M1309 454 Q1318.3 450.5 1327.5 454 Q1318.3 458 1309 454Z"
            fill={tongue}
          />
        </g>
      );
    case "E":
      return (
        <g id="Mouth_E">
          <rect
            x={1296}
            y={442.5}
            width={44.5}
            height={14}
            rx={7}
            fill={mouthDark}
            stroke={outline}
            strokeWidth={1.4}
          />
          <path
            d="M1300 444.5 Q1318.3 442 1336.5 444.5 L1335 450 Q1318.3 451.5 1301 450Z"
            fill={teeth}
          />
        </g>
      );
    case "I":
      return (
        <rect
          id="Mouth_I"
          x={1295}
          y={445}
          width={46.5}
          height={9}
          rx={4.5}
          fill={mouthDark}
          stroke={outline}
          strokeWidth={1.4}
        />
      );
    case "F":
      return (
        <g id="Mouth_F">
          <rect
            x={1300.5}
            y={443}
            width={35.5}
            height={14}
            rx={7}
            fill={mouthDark}
            stroke={outline}
            strokeWidth={1.4}
          />
          <path
            d="M1304 445 Q1318.3 443 1332.5 445 L1331.5 450 Q1318.3 451.5 1305 450Z"
            fill={teeth}
          />
          <path
            d="M1306 453 Q1318.3 449.5 1330.5 453 Q1318.3 457 1306 453Z"
            fill="#b76a55"
          />
        </g>
      );
    case "TH":
      return (
        <g id="Mouth_TH">
          <rect
            x={1300.5}
            y={442.5}
            width={35.5}
            height={15}
            rx={7.5}
            fill={mouthDark}
            stroke={outline}
            strokeWidth={1.4}
          />
          <path
            d="M1304 444.5 Q1318.3 443 1332.5 444.5 L1331.5 449 Q1318.3 450.5 1305 449Z"
            fill={teeth}
          />
          <ellipse cx={1318.3} cy={453.5} rx={9.5} ry={4.2} fill={tongue} />
        </g>
      );
    case "O":
      return (
        <ellipse
          id="Mouth_O"
          cx={1318.3}
          cy={449.5}
          rx={13}
          ry={14}
          fill={mouthDark}
          stroke={outline}
          strokeWidth={1.4}
        />
      );
    case "rest":
    default:
      return null;
  }
};

export type AdyManCharacterProps = Partial<HumanoidRigPose>;

export function AdyManCharacter({
  headRotation = 0,
  bodyY = 0,
  leftArmRotation = 0,
  rightArmRotation = 0,
  leftElbowRotation = 0,
  rightElbowRotation = 0,
  leftHandRotation = 0,
  rightHandRotation = 0,
  leftLegRotation = 0,
  rightLegRotation = 0,
  leftKneeRotation = 0,
  rightKneeRotation = 0,
  eyeScaleY = 1,
  eyeLLookX = 0,
  eyeLLookY = 0,
  eyeRLookX = 0,
  eyeRLookY = 0,
  leftEyeBrowY = 0,
  rightEyeBrowY = 0,
  mouthPose = "rest",
}: AdyManCharacterProps = {}) {
  const bodyTransform = `translate(0 ${bodyY})`;
  const headTransform = `rotate(${headRotation} 1320 470)`;

  const leftArmTransform = `rotate(${leftArmRotation} 1399 535)`;
  const rightArmTransform = `rotate(${rightArmRotation} 1248 535)`;
  const leftElbowTransform = `rotate(${leftElbowRotation} 1437 630)`;
  const rightElbowTransform = `rotate(${rightElbowRotation} 1203 630)`;
  const leftHandTransform = `rotate(${leftHandRotation} 1459 730)`;
  const rightHandTransform = `rotate(${rightHandRotation} 1189 736)`;

  const leftLegTransform = `rotate(${leftLegRotation} 1363 760)`;
  const rightLegTransform = `rotate(${rightLegRotation} 1276 760)`;
  const leftKneeTransform = `rotate(${leftKneeRotation} 1377 895)`;
  const rightKneeTransform = `rotate(${rightKneeRotation} 1257 895)`;

  const leftEyeTransform =
    `translate(1347.43 401.1) scale(1 ${eyeScaleY}) translate(-1347.43 -401.1)`;
  const rightEyeTransform =
    `translate(1294.92 400.96) scale(1 ${eyeScaleY}) translate(-1294.92 -400.96)`;
  const leftPupilTransform = `translate(${eyeLLookX} ${eyeLLookY})`;
  const rightPupilTransform = `translate(${eyeRLookX} ${eyeRLookY})`;
  const leftEyeBrowTransform = `translate(0 ${leftEyeBrowY})`;
  const rightEyeBrowTransform = `translate(0 ${rightEyeBrowY})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg1"
      width={2560}
      height={1440}
      viewBox="0 0 2560 1440"
    >
      <defs id="defs1">
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-957.9097,-725.29952)"
            id="path2"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath3">
          <path
            d="m 965.427,704.909 h 52.623 v -9.912 h -52.623 z"
            transform="translate(-965.42695,-701.00402)"
            id="path3"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath5">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path5"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath7">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1025.077,-794.18522)"
            id="path7"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath9">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1000.6212,-789.81352)"
            id="path9"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath11">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1018.8846,-789.70452)"
            id="path11"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath13">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1001.2578,-789.71722)"
            id="path13"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath15">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-963.2164,-789.47112)"
            id="path15"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath17">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-961.86602,-789.59822)"
            id="path17"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath19">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-995.21005,-726.20002)"
            id="path19"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath21">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-937.66172,-689.59312)"
            id="path21"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath23">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-991.2022,-630.95932)"
            id="path23"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath25">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-991.71895,-623.44211)"
            id="path25"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath27">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1037.6932,-519.86602)"
            id="path27"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath29">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-987.41545,-526.73782)"
            id="path29"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath31">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-937.60832,-501.41002)"
            id="path31"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath33">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1023.8596,-453.41651)"
            id="path33"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath35">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-952.07882,-451.54191)"
            id="path35"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath37">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1033.9128,-266.60551)"
            id="path37"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath39">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-945.94615,-264.78451)"
            id="path39"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath41">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1024.8732,-252.51428)"
            id="path41"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath43">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-955.1569,-251.11508)"
            id="path43"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath45">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-953.18335,-755.72152)"
            id="path45"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath47">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1020.4035,-799.86032)"
            id="path47"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath49">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-993.2389,-765.28262)"
            id="path49"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath51">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-993.27032,-765.27662)"
            id="path51"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath53">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-993.09122,-752.81022)"
            id="path53"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath55">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-971.5234,-739.36462)"
            id="path55"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath57">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-974.30485,-771.00072)"
            id="path57"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath59">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1013.6827,-770.89592)"
            id="path59"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath61">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1021.9612,-779.51012)"
            id="path61"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath63">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-982.5832,-779.27912)"
            id="path63"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath65">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1011.1296,-776.77702)"
            id="path65"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath67">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-975.2551,-776.58342)"
            id="path67"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath69">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-951.5125,-767.44792)"
            id="path69"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath71">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1026.0378,-768.68842)"
            id="path71"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath73">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-975.20072,-730.00312)"
            id="path73"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath75">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-976.1044,-745.06512)"
            id="path75"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath77">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-978.58112,-732.11722)"
            id="path77"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath79">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-981.05822,-731.80932)"
            id="path79"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath81">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-984.6151,-731.17632)"
            id="path81"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath83">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-988.17902,-730.78822)"
            id="path83"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath85">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-993.27122,-730.28012)"
            id="path85"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath87">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-982.10942,-779.70862)"
            id="path87"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath89">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1021.4445,-779.70862)"
            id="path89"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath91">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1084.3836,-612.44002)"
            id="path91"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath93">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1069.9513,-678.51752)"
            id="path93"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath95">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1082.4072,-527.57101)"
            id="path95"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath97">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1104.9447,-529.83311)"
            id="path97"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath99">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1085.4895,-518.92901)"
            id="path99"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath101">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1089.7254,-517.68352)"
            id="path101"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath103">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1096.1991,-520.19791)"
            id="path103"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath105">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1101.1179,-522.58582)"
            id="path105"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath107">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-902.4145,-517.36732)"
            id="path107"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath109">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-879.70255,-523.81651)"
            id="path109"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath111">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-899.13422,-512.58281)"
            id="path111"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath113">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-894.19225,-511.45222)"
            id="path113"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath115">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-887.512,-513.78541)"
            id="path115"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath117">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-882.5239,-516.02512)"
            id="path117"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath119">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-899.2513,-609.83452)"
            id="path119"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath121">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-911.8903,-676.54522)"
            id="path121"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath123">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-911.8903,-676.54522)"
            id="path123"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath124">
          <path
            d="m 996.812,805.958 h 27.968 V 727.56 h -27.968 z"
            transform="translate(-1024.7788,-779.53852)"
            id="path124"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath126">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path126"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath128">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-937.08932,-691.33391)"
            id="path128"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath130">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-924.7228,-689.44871)"
            id="path130"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath132">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1046.6145,-689.92541)"
            id="path132"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath134">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1058.9808,-688.04021)"
            id="path134"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath136">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1063.9122,-413.01121)"
            id="path136"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath138">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1006.5006,-412.98891)"
            id="path138"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath139">
          <path
            d="m 988.055,523.445 h 73.855 v -46.412 h -73.855 z"
            transform="translate(-988.0552,-523.44472)"
            id="path139"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath141">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path141"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath143">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-969.5557,-411.14721)"
            id="path143"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath145">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-918.48692,-412.97091)"
            id="path145"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath146">
          <path
            d="m 917.719,523.445 h 70.336 v -46.32 h -70.336 z"
            transform="translate(-988.0552,-523.44472)"
            id="path146"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath148">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path148"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath149">
          <path
            d="m 1059.2,525.583 h 7.91 v -4.276 h -7.91 z"
            transform="translate(-1063.1539,-525.58252)"
            id="path149"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath151">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path151"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath152">
          <path
            d="m 909.004,525.583 h 7.905 v -4.276 h -7.905 z"
            transform="translate(-912.95642,-525.58252)"
            id="path152"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath154">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path154"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath155">
          <path
            d="m 984.103,415.127 h 7.905 v -4.276 h -7.905 z"
            transform="translate(-988.0552,-415.12671)"
            id="path155"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath157">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path157"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath158">
          <path
            d="m 1051.3,261.914 h 7.9 v -4.276 h -7.9 z"
            transform="translate(-1055.2488,-261.91388)"
            id="path158"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath160">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path160"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath161">
          <path
            d="m 916.909,261.914 h 7.905 v -4.276 h -7.905 z"
            transform="translate(-920.8615,-261.91388)"
            id="path161"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath163">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path163"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath165">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1058.4435,-502.06841)"
            id="path165"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath166">
          <path
            d="m 981.391,519.336 h 14.628 v -14.788 h -14.628 z"
            transform="translate(-994.76912,-511.94212)"
            id="path166"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath168">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path168"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath169">
          <path
            d="m 983.123,517.846 h 10.622 v -10.729 h -10.622 z"
            transform="translate(-992.49512,-512.48152)"
            id="path169"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath171">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path171"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath173">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1032.0738,-236.04301)"
            id="path173"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath175">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1029.736,-259.45418)"
            id="path175"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath176">
          <path
            d="m 1024.98,260.129 h 19.37 v -19.887 h -19.37 z"
            transform="translate(-1035.0333,-259.86211)"
            id="path176"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath178">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path178"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath180">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1057.6342,-266.96228)"
            id="path180"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath182">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1061.134,-268.46213)"
            id="path182"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath184">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1064.6011,-269.29808)"
            id="path184"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath185">
          <path
            d="m 1056.85,272.937 h 2.06 v -1.994 h -2.06 z"
            transform="translate(-1057.9299,-272.93573)"
            id="path185"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath187">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path187"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath188">
          <path
            d="m 1043.33,241.969 h 2.05 v -1.993 h -2.05 z"
            transform="translate(-1044.4069,-241.96801)"
            id="path188"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath190">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path190"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath192">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-946.15412,-227.63708)"
            id="path192"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath194">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-935.70565,-258.92198)"
            id="path194"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath195">
          <path
            d="m 937.667,257.556 h 20.597 v -20.568 h -20.597 z"
            transform="translate(-937.6672,-257.55563)"
            id="path195"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath197">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path197"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath199">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-918.17035,-259.21478)"
            id="path199"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath201">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-914.5798,-259.71893)"
            id="path201"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath203">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-911.70062,-260.25488)"
            id="path203"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath204">
          <path
            d="m 921.838,272.066 h 2.137 v -1.994 h -2.137 z"
            transform="translate(-923.97332,-271.11691)"
            id="path204"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath206">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path206"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath207">
          <path
            d="m 935.91,241.098 h 2.136 v -1.994 h -2.136 z"
            transform="translate(-938.04505,-240.14911)"
            id="path207"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath209">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path209"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath211">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1051.7047,-690.99071)"
            id="path211"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath213">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-933.3934,-691.97111)"
            id="path213"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath215">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1051.2582,-691.07402)"
            id="path215"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath217">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-941.15342,-639.61682)"
            id="path217"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath219">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-928.08655,-537.97271)"
            id="path219"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath220">
          <path
            d="m 936.321,534.247 h 1 V 523.07 h -1 z"
            transform="translate(-936.8209,-534.24691)"
            id="path220"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath222">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path222"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath223">
          <path
            d="m 961.276,532.757 h 1 v -11.923 h -1 z"
            transform="translate(-961.77602,-532.75672)"
            id="path223"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath225">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path225"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath226">
          <path
            d="m 992.47,532.011 h 1 v -12.667 h -1 z"
            transform="translate(-992.96995,-532.01152)"
            id="path226"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath228">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path228"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath229">
          <path
            d="m 1023.66,532.757 h 1 v -11.923 h -1 z"
            transform="translate(-1024.1638,-532.75672)"
            id="path229"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath231">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path231"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath232">
          <path
            d="m 1048.62,534.247 h 1 V 523.07 h -1 z"
            transform="translate(-1049.119,-534.24691)"
            id="path232"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath234">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path234"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath236">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-980.27852,-681.03701)"
            id="path236"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath238">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-998.3197,-681.03701)"
            id="path238"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath240">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-974.26472,-639.30821)"
            id="path240"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath242">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1004.3335,-639.30821)"
            id="path242"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath244">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-952.75285,-598.28201)"
            id="path244"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath245">
          <path
            d="m 952.59,603.503 h 80.89 v -5.953 h -80.89 z"
            transform="translate(-952.75285,-598.28201)"
            id="path245"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath247">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path247"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath249">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-960.48295,-821.08252)"
            id="path249"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath251">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1022.1969,-811.74902)"
            id="path251"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath253">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1025.931,-789.31152)"
            id="path253"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath255">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-959.212,-813.20812)"
            id="path255"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath257">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-956.43542,-842.36512)"
            id="path257"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath259">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-955.73612,-816.14572)"
            id="path259"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath261">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-986.24575,-816.03362)"
            id="path261"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath263">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-963.26462,-818.48412)"
            id="path263"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath265">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-958.8331,-820.64882)"
            id="path265"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath267">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-959.73865,-819.69352)"
            id="path267"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath269">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-958.9231,-819.09802)"
            id="path269"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath271">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-959.18612,-821.96182)"
            id="path271"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath273">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-956.0656,-836.21082)"
            id="path273"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath275">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-961.56872,-802.14992)"
            id="path275"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath277">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-965.11082,-798.81262)"
            id="path277"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath279">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-955.3537,-797.07892)"
            id="path279"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath281">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-956.296,-800.57322)"
            id="path281"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath283">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-960.23155,-801.68962)"
            id="path283"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath285">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-958.77062,-811.23362)"
            id="path285"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath287">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-958.04545,-810.22652)"
            id="path287"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath289">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-960.40052,-806.70562)"
            id="path289"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath291">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-957.6967,-801.03742)"
            id="path291"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath293">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-954.31165,-804.19332)"
            id="path293"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath295">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-952.7386,-799.17832)"
            id="path295"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath297">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1008.7039,-802.44512)"
            id="path297"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath299">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1017.9984,-806.62072)"
            id="path299"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath301">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1026.0408,-791.27272)"
            id="path301"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath303">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1019.2953,-796.93882)"
            id="path303"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath305">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-953.1358,-789.81352)"
            id="path305"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath307">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-953.6179,-789.94642)"
            id="path307"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath309">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1017.0939,-803.62622)"
            id="path309"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath311">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1017.4476,-803.27262)"
            id="path311"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath313">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-952.27442,-767.66642)"
            id="path313"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath315">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-952.75652,-767.79932)"
            id="path315"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath317">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-947.3077,-795.83222)"
            id="path317"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath319">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1025.931,-775.86552)"
            id="path319"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath321">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1026.4309,-775.86552)"
            id="path321"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath323">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1030.8828,-797.71292)"
            id="path323"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath325">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-961.09645,-802.76752)"
            id="path325"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath327">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-961.45,-803.12112)"
            id="path327"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath329">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1026.2007,-800.74292)"
            id="path329"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath331">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1034.022,-795.15012)"
            id="path331"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath333">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1041.843,-795.41272)"
            id="path333"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath334">
          <path
            d="m 990.355,802.214 h 35.415 v -72.466 h -35.415 z"
            transform="translate(-990.35462,-777.61462)"
            id="path334"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath336">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path336"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath338">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="translate(-1024.1367,-538.57582)"
            id="path338"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath339">
          <path
            d="m 951.212,485.84 h 5.692 v -4.259 h -5.692 z"
            transform="translate(-954.05912,-485.83991)"
            id="path339"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath341">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path341"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath342">
          <path
            d="m 897.087,375.855 h 5.692 v -4.258 h -5.692 z"
            transform="translate(-899.93365,-375.85501)"
            id="path342"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath344">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path344"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath345">
          <path
            d="m 945.397,223.238 h 5.692 v -4.259 h -5.692 z"
            transform="translate(-948.24415,-223.23751)"
            id="path345"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath347">
          <path
            d="M 0,1080 H 1920 V 0 H 0 Z"
            transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
            id="path347"
          />
        </clipPath>
        <clipPath id="path32_motion_clip" clipPathUnits="userSpaceOnUse">
          <path d="M -18.859575,-39.416498 L 36.640426,-39.416498 L 36.640426,-41.666499 L -18.859575,-41.666499 Z" />
        </clipPath>
        <clipPath id="path34_motion_clip" clipPathUnits="userSpaceOnUse">
          <path d="M -37.078801,-37.541903 L -18.328800,-37.541903 L -18.328800,-39.791903 L -37.078801,-39.791903 Z" />
          <path d="M -22.078801,-38.291903 L 4.171200,-38.291903 L 4.171200,-40.541904 L -22.078801,-40.541904 Z" />
          <path d="M -1.828800,-39.041903 L 20.671201,-39.041903 L 20.671201,-41.291904 L -1.828800,-41.291904 Z" />
        </clipPath>
        <clipPath id="path36_motion_clip" clipPathUnits="userSpaceOnUse">
          <path d="M 22.087201,67.894502 L 31.087201,67.894502 L 31.087201,52.894501 L 22.087201,52.894501 Z" />
        </clipPath>
        <clipPath id="path90_motion_clip" clipPathUnits="userSpaceOnUse">
          <path d="M -4.383525,-66.440004 L 24.116476,-66.440004 L 24.116476,-92.690005 L -4.383525,-92.690005 Z" />
        </clipPath>
        <clipPath id="path118_motion_clip" clipPathUnits="userSpaceOnUse">
          <path d="M -18.001275,-63.834504 L 8.248725,-63.834504 L 8.248725,-90.084505 L -18.001275,-90.084505 Z" />
          <path d="M 14.248725,-15.084503 L 23.248726,-15.084503 L 23.248726,-24.084503 L 14.248725,-24.084503 Z" />
        </clipPath>
        <clipPath id="path129_motion_clip" clipPathUnits="userSpaceOnUse">
          <path d="M -15.722775,4.301303 L -3.722775,4.301303 L -3.722775,-2.448698 L -15.722775,-2.448698 Z" />
        </clipPath>
        <clipPath id="path133_motion_clip" clipPathUnits="userSpaceOnUse">
          <path d="M 6.019200,4.209803 L 9.769200,4.209803 L 9.769200,1.959803 L 6.019200,1.959803 Z" />
        </clipPath>
      </defs>
      <g id="layer-MC0">
        <g
          id="CHARACTER_3ADY_MAN"
          transform={bodyTransform}
          data-character="3ady_man"
          data-rig="yusuf-body-architecture-v1"
          data-source="3ady man front(1).ai"
          data-part="body_root"
          data-rig-hierarchy="articulated-dom-v1"
        >
          <g
            id="TORSO"
            data-part="torso"
            data-pivot-x={1318}
            data-pivot-y={735}
            data-parent="CHARACTER_3ADY_MAN"
          >
            <g id="SHOULDER_COVERS" data-role="joint-covers">
              <ellipse
                id="R_shoulder_cover"
                cx={1248}
                cy={538}
                rx={18}
                ry={18}
                style={{
                  fill: "#4a4234",
                  fillOpacity: 1,
                  stroke: "none",
                }}
                data-role="joint-cover"
                data-joint="shoulder"
                data-side="R"
              />
              <ellipse
                id="L_shoulder_cover"
                cx={1399}
                cy={538}
                rx={18}
                ry={18}
                style={{
                  fill: "#4a4234",
                  fillOpacity: 1,
                  stroke: "none",
                }}
                data-role="joint-cover"
                data-joint="shoulder"
                data-side="L"
              />
            </g>
            <g id="TORSO_ART" data-role="art">
              <g id="hood" data-role="hood" data-selector="true">
                <path
                  id="path1"
                  d="m 0,0 c 22.552,8.009 45.103,8.009 67.655,0 5.011,-4.005 5.763,-10.012 2.255,-18.021 l -9.772,-6.007 c -17.541,6.007 -35.081,6.007 -52.621,0 l -9.772,6.007 C -5.763,-10.012 -5.011,-4.005 0,0"
                  style={{
                    fill: "#4a4234",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#2a2418",
                    strokeWidth: 2.5,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1277.2129,472.934)"
                  clipPath="url(#clipPath2)"
                />
                <g opacity={0.600006} id="g4" clipPath="url(#clipPath5)">
                  <path
                    d="m 0,0 c 17.54,5.206 35.08,5.206 52.62,0 l -3.758,-6.007 c -15.035,4.405 -30.069,4.405 -45.103,0 z"
                    style={{
                      fill: "#3a3428",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1287.2359,505.328)"
                    clipPath="url(#clipPath3)"
                    id="path4"
                  />
                </g>
              </g>
              <g id="torso_skin" data-role="skin">
                <path
                  id="path20"
                  d="M 0,0 C 2.281,3.75 19.189,6.174 33.324,6.488 46.268,6.75 59.682,6.14 72.732,5.837 c 15.23,-0.352 25.97,-1.15 32.83,-5.016 2.978,-1.512 3.125,-3.046 3.166,-4.746 0.832,-8.82 2.326,-23.358 5.591,-30.753 0.574,-1.37 1.929,-2.937 2.571,-3.993 0.822,-1.478 0.725,-2.02 1.733,-3.861 1.479,-3.172 3.095,-7.901 -3.854,-10.93 -4.853,-2.104 -12.981,-2.823 -22.609,-3.529 -25.564,-1.832 -60.908,-2.438 -83.872,-0.21 -14.668,1.224 -20.428,4.575 -21.425,8.739 -0.864,2.744 -0.082,4.843 1.372,7.363 2.265,4.144 7.466,14.027 8.481,20.161 0.552,2.858 -0.341,5.047 0.114,7.788 0.91,4.074 1.74,9.073 3.14,13.097 z"
                  style={{
                    fill: "#d48455",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#000000",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1250.2156,520.54253)"
                  clipPath="url(#clipPath21)"
                  display="none"
                  data-role="hidden-construction-artifact"
                />
              </g>
              <g id="hoodie_body" data-role="clothing" data-selector="true">
                <path
                  id="path26"
                  d="m 0,0 v 0 c -0.368,3.883 -4.134,6.872 -8.657,6.872 h -83.749 c -4.406,0 -7.978,-3.077 -7.978,-6.872"
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1383.5909,746.84533)"
                  clipPath="url(#clipPath27)"
                />
                <path
                  id="path28"
                  d="M 0,0 V -22.972"
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1316.5539,737.68293)"
                  clipPath="url(#clipPath29)"
                />
                <path
                  id="path210"
                  d="m 0,0 -41.713,7.434 c -0.191,0.034 -0.385,0.038 -0.577,0.012 L -61.286,4.855 c -0.928,-0.126 -1.617,-0.924 -1.607,-1.861 l 1.798,-164.085 c 0.012,-1.162 1.077,-2.027 2.217,-1.802 l 61.653,12.163 c 0.911,0.18 2.984,0.545 2.928,1.473 l -6.416,83.584"
                  style={{
                    fill: "#4a4234",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#2a2418",
                    strokeWidth: 2.5,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1402.2729,518.67907)"
                  clipPath="url(#clipPath211)"
                />
                <path
                  id="path212"
                  d="m 0,0 29.279,7.387 c 0.7,0.176 1.428,0.207 2.139,0.091 L 50.429,4.369 c 2.519,-0.412 4.38,-2.57 4.418,-5.122 l 2.312,-157.954 c 0.044,-3.035 -2.479,-5.48 -5.155,1.433 l -57.985,2.686"
                  style={{
                    fill: "#4a4234",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#2a2418",
                    strokeWidth: 2.5,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1244.5245,517.37187)"
                  clipPath="url(#clipPath213)"
                />
              </g>
              <g id="waist_band" data-role="waist_band" data-selector="true">
                <path
                  id="path218"
                  d="m 0,0 128.379,1.244 1.388,-14.657 C 86.511,-17.387 43.256,-17.387 0,-13.413 Z"
                  style={{
                    fill: "#38321f",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#2a2418",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1237.4487,722.70307)"
                  clipPath="url(#clipPath219)"
                />
                <g opacity={0.600006} id="g221" clipPath="url(#clipPath222)">
                  <path
                    d="M 0,0 V -11.177"
                    style={{
                      fill: "none",
                      stroke: "#2a2418",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1249.0945,727.6708)"
                    clipPath="url(#clipPath220)"
                    id="path221"
                  />
                </g>
                <g opacity={0.600006} id="g224" clipPath="url(#clipPath225)">
                  <path
                    d="M 0,0 V -11.922"
                    style={{
                      fill: "none",
                      stroke: "#2a2418",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1282.368,729.65773)"
                    clipPath="url(#clipPath223)"
                    id="path224"
                  />
                </g>
                <g opacity={0.600006} id="g227" clipPath="url(#clipPath228)">
                  <path
                    d="M 0,0 V -12.668"
                    style={{
                      fill: "none",
                      stroke: "#2a2418",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1323.9599,730.65133)"
                    clipPath="url(#clipPath226)"
                    id="path227"
                  />
                </g>
                <g opacity={0.600006} id="g230" clipPath="url(#clipPath231)">
                  <path
                    d="M 0,0 V -11.922"
                    style={{
                      fill: "none",
                      stroke: "#2a2418",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1365.5517,729.65773)"
                    clipPath="url(#clipPath229)"
                    id="path230"
                  />
                </g>
                <g opacity={0.600006} id="g233" clipPath="url(#clipPath234)">
                  <path
                    d="M 0,0 V -11.177"
                    style={{
                      fill: "none",
                      stroke: "#2a2418",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1398.8253,727.6708)"
                    clipPath="url(#clipPath232)"
                    id="path233"
                  />
                </g>
              </g>
              <g id="drawstrings" data-role="drawstrings">
                <path
                  id="path235"
                  d="M 0,0 C -1.503,-14.903 -3.508,-29.806 -6.014,-44.709"
                  style={{
                    fill: "none",
                    stroke: "#c9bfa0",
                    strokeWidth: 3,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1307.038,531.95067)"
                  clipPath="url(#clipPath236)"
                />
                <path
                  id="path237"
                  d="M 0,0 C 1.503,-14.903 3.508,-29.806 6.014,-44.709"
                  style={{
                    fill: "none",
                    stroke: "#c9bfa0",
                    strokeWidth: 3,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1331.0929,531.95067)"
                  clipPath="url(#clipPath238)"
                />
                <path
                  id="path239"
                  d="m 0,0 c 1.661,0 3.007,-1.334 3.007,-2.981 0,-1.646 -1.346,-2.98 -3.007,-2.98 -1.661,0 -3.007,1.334 -3.007,2.98 C -3.007,-1.334 -1.661,0 0,0"
                  style={{
                    fill: "#a89870",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#2a2418",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1299.0196,587.58907)"
                  clipPath="url(#clipPath240)"
                />
                <path
                  id="path241"
                  d="m 0,0 c 1.661,0 3.007,-1.334 3.007,-2.981 0,-1.646 -1.346,-2.98 -3.007,-2.98 -1.661,0 -3.007,1.334 -3.007,2.98 C -3.007,-1.334 -1.661,0 0,0"
                  style={{
                    fill: "#a89870",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#2a2418",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1339.1113,587.58907)"
                  clipPath="url(#clipPath242)"
                />
              </g>
              <g id="pocket" data-role="pocket" data-selector="true">
                <path
                  id="path243"
                  d="m 0,0 c 26.856,5.961 53.712,5.961 80.567,0 l -5.035,-37.258 c -23.499,-4.968 -46.998,-4.968 -70.497,0 z"
                  style={{
                    fill: "#3f3929",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#2a2418",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1270.3371,642.29067)"
                  clipPath="url(#clipPath244)"
                />
                <g opacity={0.699997} id="g246" clipPath="url(#clipPath247)">
                  <path
                    d="M 0,0 C 26.856,5.961 53.712,5.961 80.567,0"
                    style={{
                      fill: "none",
                      stroke: "#2a2418",
                      strokeWidth: 1.5,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1270.3371,642.29067)"
                    clipPath="url(#clipPath245)"
                    id="path246"
                  />
                </g>
              </g>
              <g id="hoodie_seams" data-role="clothing-detail">
                <path
                  id="path337"
                  d="m 0,0 -95.812,-1.435 2.103,92.632"
                  style={{
                    fill: "none",
                    stroke: "#2a2418",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1365.5155,721.89893)"
                  clipPath="url(#clipPath338)"
                />
              </g>
            </g>
            <g
              id="NECK"
              data-part="neck"
              data-pivot-x={1318}
              data-pivot-y={505}
              data-parent="TORSO"
            >
              <g
                id="HEAD"
                transform={headTransform}
                data-part="head"
                data-pivot-x={1320}
                data-pivot-y={470}
                data-parent="NECK"
              >
                <g id="HEAD_ART" data-role="art">
                  <g id="head_base" data-role="head-base">
                    <path
                      id="path6"
                      d="m 0,0 c 5.863,-73.794 -19.754,-67.63 -37.512,-67.63 -17.758,0 -38.942,-2.518 -35.726,67.63 0.823,17.968 18.861,31.117 36.619,31.117 C -18.861,31.117 -1.429,17.987 0,0"
                      style={{
                        fill: "#d48455",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1366.7693,381.0864)"
                      clipPath="url(#clipPath7)"
                    />
                  </g>
                  <g
                    id="L_eyebrow"
                    transform={leftEyeBrowTransform}
                    data-role="eyebrow"
                    data-side="L"
                  >
                    <path
                      id="path8"
                      d="M 0,0 H 18.588"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1334.1615,386.91533)"
                      clipPath="url(#clipPath9)"
                    />
                    <path
                      id="path10"
                      d="M 0,0 C 0.116,0.246 1.919,0.115 1.818,-1.602"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1358.5127,387.06067)"
                      clipPath="url(#clipPath11)"
                    />
                    <path
                      id="path12"
                      d="M 0,0 C -0.116,0.248 -1.919,0.116 -1.818,-1.615"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1335.0103,387.04373)"
                      clipPath="url(#clipPath13)"
                    />
                  </g>
                  <g
                    id="R_eyebrow"
                    transform={rightEyeBrowTransform}
                    data-role="eyebrow"
                    data-side="R"
                  >
                    <path
                      id="path14"
                      d="M 0,0 C -0.116,0.214 -2.615,0.336 -2.514,-1.154"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1284.2885,387.37187)"
                      clipPath="url(#clipPath15)"
                    />
                    <path
                      id="path16"
                      d="m 0,0 h 18.626 c 0,0 1.763,-0.087 1.92,-2.036"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1282.488,387.2024)"
                      clipPath="url(#clipPath17)"
                    />
                  </g>
                  <g id="head_details" data-role="head-detail">
                    <path
                      id="path44"
                      d="M 0,0 -1.671,23.453"
                      style={{
                        fill: "#d48455",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1270.9111,432.37133)"
                      clipPath="url(#clipPath45)"
                    />
                    <path
                      id="path46"
                      d="m 0,0 c 0.036,-0.585 0.127,-1.173 0.316,-1.729 0.241,-0.713 0.882,-1.177 1.645,-1.075 0.763,0.103 1.255,0.719 1.301,1.473 C 3.287,-0.917 3.233,-0.506 3.16,-0.099 3.099,0.237 2.767,0.641 2.471,0.797 2.168,0.957 1.855,1.021 1.514,0.975 0.765,0.874 0.242,0.255 0.214,-0.498 0.182,-1.341 0.348,-2.164 0.956,-2.789 1.204,-3.044 1.522,-3.241 1.814,-3.443 2.224,-3.725 2.617,-3.991 3.143,-3.982 4.565,-3.957 5.112,-2.287 4.717,-1.131 4.601,-0.789 4.446,-0.476 4.246,-0.177 4.097,0.044 3.943,0.261 3.833,0.506 3.884,0.386 3.934,0.267 3.985,0.147 3.923,0.297 3.884,0.448 3.862,0.608 3.88,0.475 3.898,0.342 3.915,0.209 3.882,0.516 3.939,0.817 3.898,1.121 3.838,1.568 3.637,1.929 3.279,2.206 2.791,2.583 2.097,2.652 1.56,2.314 1.234,2.109 0.974,1.793 0.871,1.418 0.772,1.059 0.816,0.581 1.022,0.262 1.228,-0.058 1.536,-0.34 1.918,-0.428 2.305,-0.516 2.729,-0.493 3.074,-0.276 3.083,-0.271 3.092,-0.265 3.101,-0.26 2.715,-0.31 2.33,-0.36 1.945,-0.411 1.954,-0.413 1.963,-0.416 1.972,-0.418 1.751,-0.29 1.53,-0.161 1.31,-0.033 1.318,-0.041 1.326,-0.05 1.334,-0.058 L 1.099,0.245 C 1.106,0.233 1.112,0.22 1.119,0.208 L 0.967,0.566 C 0.971,0.551 0.975,0.537 0.979,0.523 0.961,0.656 0.943,0.789 0.925,0.921 0.93,0.693 0.89,0.471 0.912,0.239 0.96,-0.25 1.055,-0.617 1.266,-1.06 1.454,-1.455 1.761,-1.78 1.936,-2.182 1.886,-2.062 1.835,-1.943 1.785,-1.823 1.834,-1.946 1.87,-2.068 1.891,-2.198 1.873,-2.065 1.855,-1.932 1.837,-1.799 1.848,-1.89 1.85,-1.977 1.842,-2.068 1.86,-1.935 1.878,-1.802 1.896,-1.669 1.885,-1.74 1.87,-1.806 1.846,-1.874 l 0.151,0.358 C 1.975,-1.566 1.952,-1.611 1.922,-1.658 l 0.235,0.304 C 2.146,-1.368 2.135,-1.381 2.125,-1.395 2.226,-1.316 2.327,-1.238 2.428,-1.16 2.414,-1.169 2.4,-1.178 2.386,-1.187 2.638,-1.119 2.891,-1.05 3.143,-0.982 3.126,-0.983 3.11,-0.984 3.093,-0.984 3.226,-1.002 3.359,-1.02 3.492,-1.038 3.476,-1.032 3.46,-1.026 3.443,-1.02 3.563,-1.07 3.682,-1.121 3.802,-1.171 3.505,-0.991 3.215,-0.786 2.938,-0.576 L 3.242,-0.811 C 3.155,-0.742 3.077,-0.67 3.006,-0.586 3.084,-0.687 3.162,-0.788 3.24,-0.89 3.185,-0.816 3.142,-0.741 3.105,-0.658 3.155,-0.777 3.206,-0.897 3.256,-1.016 3.217,-0.914 3.192,-0.812 3.175,-0.705 3.193,-0.838 3.211,-0.971 3.229,-1.104 3.203,-0.902 3.206,-0.701 3.214,-0.498 2.231,-0.631 1.249,-0.764 0.267,-0.897 0.279,-0.96 0.289,-1.024 0.297,-1.087 0.28,-0.954 0.262,-0.822 0.244,-0.689 0.269,-0.903 0.275,-1.116 0.262,-1.331 1.244,-1.198 2.226,-1.065 3.208,-0.932 3.104,-0.624 3.029,-0.31 2.983,0.012 3.001,-0.121 3.019,-0.254 3.037,-0.387 3.02,-0.258 3.008,-0.13 3,0 2.975,0.399 2.85,0.772 2.561,1.061 2.301,1.321 1.874,1.517 1.5,1.5 1.112,1.483 0.71,1.355 0.439,1.061 0.18,0.778 -0.025,0.396 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1360.538,373.5196)"
                      clipPath="url(#clipPath47)"
                    />
                  </g>
                  <g id="nose" data-role="nose">
                    <path
                      id="path48"
                      d="m 0,0 c 0,0 -2.388,1.059 -5.908,0 0,0 2.403,-7.336 0,-10.118 -2.402,-2.782 1.509,-4.233 1.509,-4.233"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1324.3185,419.6232)"
                      clipPath="url(#clipPath49)"
                    />
                    <path
                      id="path50"
                      d="m 0,0 c 0,0 -2.403,-7.336 0,-10.118 2.403,-2.782 -1.509,-4.233 -1.509,-4.233"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1324.3604,419.6312)"
                      clipPath="url(#clipPath51)"
                    />
                    <path
                      id="path52"
                      d="m 0,0 c -0.453,0.062 -1.049,0.014 -1.544,-0.367 -0.545,-0.409 -0.79,-0.888 -1.237,-0.891 -0.499,-0.04 -1.025,0.273 -1.502,0.791 -0.503,0.655 -1.111,0.56 -1.7,0.517"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1324.1216,436.25307)"
                      clipPath="url(#clipPath53)"
                    />
                  </g>
                  <g
                    id="mouth"
                    data-role="mouth"
                    data-mouth-pose={mouthPose}
                  >
                    <path
                      id="path54"
                      d="m 0,0 1.336,0.786 c 1.203,0.707 3.069,1.122 5.048,1.122 h 22.485 c 1.724,0 3.331,-0.392 4.272,-1.042 L 34.397,0"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        display: mouthPose === "rest" ? "inline" : "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1295.3645,454.18053)"
                      clipPath="url(#clipPath55)"
                    />
                  </g>
                  <g
                    id="animated_mouth"
                    data-role="animated-mouth"
                    transform="translate(0 5) translate(1318.3 449.5) scale(0.72) translate(-1318.3 -449.5)"
                  >
                    <AdyManMouth pose={mouthPose} />
                  </g>
                  <g id="mustache" data-role="mustache">
                    <path
                      id="path74"
                      d="M 0,0 H 23.165"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 3,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1301.4725,446.57987)"
                      clipPath="url(#clipPath75)"
                    />
                  </g>
                  <g
                    id="R_eye"
                    transform={rightEyeTransform}
                    data-role="eye"
                    data-side="R"
                  >
                    <g id="R_eye_white" data-role="eye-white" data-side="R">
                      <path
                        id="path56"
                        d="m 0,0 h -6.229 c -4.572,0 -8.279,3.706 -8.279,8.278 0,4.572 3.707,8.279 8.279,8.279 H 0 c 4.572,0 8.278,-3.707 8.278,-8.279 C 8.278,3.706 4.572,0 0,0"
                        style={{
                          fill: "#ffffff",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#000000",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1299.0731,411.99907)"
                        clipPath="url(#clipPath57)"
                      />
                    </g>
                    <g id="R_eye_outline" data-role="eye-outline" data-side="R">
                      <path
                        id="path62"
                        d="M 0,0 H -22.786"
                        style={{
                          fill: "none",
                          stroke: "#000000",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1310.1109,400.9612)"
                        clipPath="url(#clipPath63)"
                      />
                    </g>
                    <g
                      id="R_pupil"
                      transform={rightPupilTransform}
                      data-role="pupil"
                      data-side="R"
                    >
                      <path
                        id="path66"
                        d="m 0,0 c 0,-0.503 -0.408,-0.911 -0.911,-0.911 -0.504,0 -0.912,0.408 -0.912,0.911 0,0.503 0.408,0.911 0.912,0.911 C -0.408,0.911 0,0.503 0,0"
                        style={{
                          fill: "#000000",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#000000",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1300.3401,404.55547)"
                        clipPath="url(#clipPath67)"
                      />
                    </g>
                    <g id="R_eyelid" data-role="eyelid" data-side="R">
                      <path
                        id="path86"
                        d="m 0,0 c 0,0 0.277,6.964 -7.614,7.391 -7.891,0.427 -7.878,-0.061 -7.878,-0.061 0,0 -5.824,-0.521 -6.366,-7.289 z"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "none",
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1309.4792,400.38853)"
                        clipPath="url(#clipPath87)"
                      />
                    </g>
                  </g>
                  <g
                    id="L_eye"
                    transform={leftEyeTransform}
                    data-role="eye"
                    data-side="L"
                  >
                    <g id="L_eye_white" data-role="eye-white" data-side="L">
                      <path
                        id="path58"
                        d="m 0,0 h -6.229 c -4.572,0 -8.279,3.706 -8.279,8.278 0,4.572 3.707,8.279 8.279,8.279 H 0 c 4.572,0 8.278,-3.707 8.278,-8.279 C 8.278,3.706 4.572,0 0,0"
                        style={{
                          fill: "#ffffff",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#000000",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1351.5769,412.1388)"
                        clipPath="url(#clipPath59)"
                      />
                    </g>
                    <g id="L_eye_outline" data-role="eye-outline" data-side="L">
                      <path
                        id="path60"
                        d="M 0,0 H -22.786"
                        style={{
                          fill: "none",
                          stroke: "#000000",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1362.6149,400.6532)"
                        clipPath="url(#clipPath61)"
                      />
                    </g>
                    <g
                      id="L_pupil"
                      transform={leftPupilTransform}
                      data-role="pupil"
                      data-side="L"
                    >
                      <path
                        id="path64"
                        d="m 0,0 c 0,-0.503 -0.408,-0.911 -0.911,-0.911 -0.504,0 -0.912,0.408 -0.912,0.911 0,0.503 0.408,0.911 0.912,0.911 C -0.408,0.911 0,0.503 0,0"
                        style={{
                          fill: "#000000",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#000000",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1348.1727,404.29733)"
                        clipPath="url(#clipPath65)"
                      />
                    </g>
                    <g id="L_eyelid" data-role="eyelid" data-side="L">
                      <path
                        id="path88"
                        d="m 0,0 c 0,0 0.277,6.964 -7.614,7.391 -7.891,0.427 -7.878,-0.061 -7.878,-0.061 0,0 -5.824,-0.521 -6.366,-7.289 z"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "none",
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1361.9259,400.38853)"
                        clipPath="url(#clipPath89)"
                      />
                    </g>
                  </g>
                  <g id="R_ear" data-role="ear" data-side="R">
                    <path
                      id="path68"
                      d="m 0,0 c -4.841,-2.453 -2.993,-6.383 -0.54,-11.224 0.658,-1.299 1.595,-2.437 2.743,-3.332"
                      style={{
                        fill: "#d48455",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1268.6833,416.73613)"
                      clipPath="url(#clipPath69)"
                    />
                  </g>
                  <g id="L_ear" data-role="ear" data-side="L">
                    <path
                      id="path70"
                      d="m 0,0 c 4.841,-2.453 3.874,-6.294 1.422,-11.135 -0.658,-1.299 -1.595,-2.437 -2.744,-3.332"
                      style={{
                        fill: "#d48455",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1368.0503,415.08213)"
                      clipPath="url(#clipPath71)"
                    />
                  </g>
                  <g id="facial_hair" data-role="facial-hair">
                    <path
                      id="path72"
                      d="M 0,0 H 30.665"
                      style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: 7,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1300.2676,466.66253)"
                      clipPath="url(#clipPath73)"
                    />
                    <path
                      id="path76"
                      d="M 0,0 C -0.07,-0.036 -0.137,-0.076 -0.203,-0.119 -0.372,-0.233 -0.534,-0.36 -0.69,-0.492 -0.907,-0.676 -1.072,-0.906 -1.243,-1.133 -1.352,-1.305 -1.412,-1.491 -1.421,-1.69 c -0.044,-0.2 -0.036,-0.399 0.027,-0.599 0.046,-0.195 0.136,-0.365 0.268,-0.51 0.106,-0.163 0.246,-0.292 0.421,-0.386 0.12,-0.05 0.239,-0.101 0.359,-0.151 0.265,-0.072 0.531,-0.072 0.797,0 0.12,0.05 0.239,0.101 0.358,0.151 0.226,0.133 0.405,0.313 0.539,0.538 0.004,0.006 0.009,0.013 0.014,0.019 L 1.127,-2.932 c 0.108,0.14 0.234,0.266 0.373,0.374 L 1.197,-2.792 c 0.1,0.076 0.206,0.144 0.317,0.202 0.175,0.094 0.315,0.223 0.421,0.386 0.133,0.145 0.222,0.315 0.268,0.51 0.063,0.199 0.072,0.399 0.027,0.598 -0.009,0.2 -0.068,0.386 -0.178,0.558 L 1.818,-0.234 C 1.631,-0.049 1.41,0.08 1.156,0.151 1.023,0.169 0.89,0.187 0.757,0.205 0.486,0.204 0.234,0.136 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1304.7748,463.84373)"
                      clipPath="url(#clipPath77)"
                    />
                    <path
                      id="path78"
                      d="m 0,0 c -0.04,-0.136 -0.087,-0.27 -0.142,-0.401 0.05,0.119 0.101,0.239 0.151,0.358 -0.125,-0.295 -0.286,-0.572 -0.48,-0.826 l 0.234,0.304 c -0.103,-0.134 -0.215,-0.26 -0.335,-0.379 -0.146,-0.136 -0.249,-0.297 -0.31,-0.483 -0.094,-0.179 -0.137,-0.371 -0.129,-0.578 -0.008,-0.206 0.035,-0.399 0.129,-0.578 0.061,-0.186 0.164,-0.346 0.31,-0.482 0.286,-0.263 0.661,-0.458 1.061,-0.44 0.399,0.018 0.772,0.153 1.061,0.44 0.113,0.112 0.219,0.231 0.318,0.357 0.175,0.223 0.352,0.444 0.498,0.688 0.081,0.137 0.154,0.28 0.218,0.426 0.113,0.262 0.229,0.523 0.309,0.797 0.062,0.199 0.071,0.398 0.027,0.598 C 2.911,0 2.851,0.186 2.742,0.358 2.647,0.533 2.519,0.673 2.355,0.779 2.21,0.912 2.04,1.001 1.845,1.048 1.712,1.066 1.579,1.083 1.446,1.101 1.176,1.1 0.923,1.032 0.689,0.896 0.357,0.682 0.113,0.385 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1308.0776,464.25427)"
                      clipPath="url(#clipPath79)"
                    />
                    <path
                      id="path80"
                      d="m 0,0 c -0.452,-0.415 -0.903,-0.829 -1.355,-1.244 -0.146,-0.136 -0.249,-0.297 -0.31,-0.483 -0.094,-0.179 -0.137,-0.371 -0.129,-0.578 -0.008,-0.206 0.035,-0.399 0.129,-0.578 0.061,-0.186 0.164,-0.347 0.31,-0.482 L -1.051,-3.6 c 0.234,-0.136 0.486,-0.204 0.757,-0.205 0.133,0.018 0.266,0.036 0.399,0.054 0.254,0.071 0.474,0.2 0.662,0.386 0.451,0.414 0.903,0.829 1.354,1.244 0.147,0.136 0.25,0.296 0.31,0.482 0.094,0.179 0.137,0.372 0.13,0.578 0.007,0.207 -0.036,0.4 -0.13,0.578 C 2.371,-0.297 2.268,-0.136 2.121,0 2.02,0.078 1.919,0.156 1.818,0.235 1.584,0.37 1.331,0.438 1.061,0.439 0.928,0.421 0.795,0.404 0.662,0.386 0.408,0.315 0.187,0.186 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1312.8201,465.09827)"
                      clipPath="url(#clipPath81)"
                    />
                    <path
                      id="path82"
                      d="M 0,0 C -0.007,-0.017 -0.014,-0.034 -0.021,-0.052 L 0.13,0.307 c -0.114,-0.269 -0.261,-0.521 -0.439,-0.751 0.078,0.101 0.156,0.202 0.234,0.303 -0.076,-0.098 -0.157,-0.191 -0.243,-0.28 -0.146,-0.136 -0.25,-0.297 -0.31,-0.483 -0.094,-0.178 -0.137,-0.371 -0.129,-0.578 -0.008,-0.206 0.035,-0.399 0.129,-0.578 0.06,-0.185 0.164,-0.346 0.31,-0.482 l 0.303,-0.235 c 0.234,-0.136 0.487,-0.204 0.758,-0.205 0.132,0.018 0.265,0.036 0.398,0.054 0.254,0.071 0.475,0.2 0.662,0.386 0.078,0.08 0.151,0.163 0.221,0.251 0.144,0.181 0.292,0.364 0.419,0.559 0.189,0.292 0.32,0.612 0.45,0.935 0.062,0.199 0.071,0.398 0.027,0.598 C 2.911,0 2.851,0.186 2.742,0.358 2.647,0.533 2.519,0.673 2.355,0.779 2.21,0.912 2.04,1.001 1.845,1.048 1.712,1.066 1.579,1.083 1.446,1.101 1.176,1.1 0.923,1.032 0.689,0.896 L 0.386,0.662 C 0.2,0.475 0.071,0.254 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1317.572,465.61573)"
                      clipPath="url(#clipPath83)"
                    />
                    <path
                      id="path84"
                      d="m 0,0 c -0.595,-0.452 -1.19,-0.904 -1.785,-1.357 -0.108,-0.082 -0.192,-0.162 -0.229,-0.298 -0.033,-0.12 -0.018,-0.279 0.05,-0.386 0.069,-0.106 0.171,-0.2 0.299,-0.229 0.122,-0.028 0.281,-0.029 0.385,0.05 0.595,0.452 1.19,0.904 1.785,1.356 0.108,0.083 0.192,0.163 0.229,0.299 0.033,0.12 0.019,0.279 -0.05,0.386 C 0.615,-0.073 0.513,0.021 0.385,0.05 0.263,0.078 0.104,0.079 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1324.3616,466.2932)"
                      clipPath="url(#clipPath85)"
                    />
                  </g>
                  <g id="face_shading_back" data-role="face-shading">
                    <g
                      opacity={0.100006}
                      id="g125"
                      clipPath="url(#clipPath126)"
                    >
                      <path
                        d="M 0,0 C -0.216,0.542 -0.352,1.108 -0.366,1.67 -0.61,2.247 -0.772,2.87 -0.854,3.528 -1.025,4.904 -0.927,6.357 -0.534,7.705 -0.663,8.11 -0.739,8.534 -0.775,8.966 -0.933,8.503 -1.099,8.016 -1.281,7.483 l -1.2,1.828 c 0,0 1.237,8.779 -6.879,12.201 l 0.643,4.908 -19.25,-1.531 c 0,0 18.657,-10.927 23.135,-27.744 -5.703,-16.515 -14.372,-41.197 -17.93,-49.124 0.631,0.376 1.404,0.599 2.321,0.599 0.075,0 0.142,-0.011 0.215,-0.014 0.338,0.165 0.715,0.285 1.124,0.36 0.734,0.585 1.641,0.985 2.588,1.144 0.051,0.035 0.097,0.069 0.133,0.099 0.679,0.568 1.378,0.986 2.164,1.375 0.093,0.046 0.164,0.08 0.226,0.109 0.012,0.023 0.041,0.059 0.096,0.114 0.307,0.308 0.564,0.557 0.912,0.836 0.399,0.319 0.824,0.543 1.243,0.792 0.218,0.193 0.451,0.361 0.69,0.515 1.572,1.812 3.139,3.993 4.609,6.62 0,0.063 -0.007,0.123 -0.005,0.186 0.056,0.448 0.119,0.973 0.209,1.416 0.008,0.039 0.016,0.078 0.027,0.116 0.146,0.467 0.387,0.95 0.621,1.355 0.034,0.058 0.069,0.111 0.111,0.166 0.112,0.131 0.224,0.262 0.335,0.394 0.158,1.022 0.458,1.996 1.018,2.854 0.138,0.65 0.369,1.279 0.762,1.877 -0.281,1.617 -0.062,3.233 1.054,4.807 0.017,0.025 0.038,0.05 0.056,0.074 -0.107,0.857 0.021,1.739 0.357,2.544 -0.069,0.344 -0.104,0.71 -0.096,1.101 0.075,3.776 0.214,7.573 0.352,11.346 0.053,1.427 -0.028,4.095 0.935,5.305 0.06,0.308 0.117,0.528 0.173,0.683 -0.104,0.243 -0.228,0.48 -0.321,0.727 C -1.599,-2.605 -1.101,-1.07 0,0"
                        style={{
                          fill: "#412104",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "none",
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1366.3717,400.61533)"
                        clipPath="url(#clipPath124)"
                        id="path125"
                      />
                    </g>
                  </g>
                  <g id="hair" data-role="hair">
                    <path
                      id="path248"
                      d="m 0,0 c -0.416,4.789 5.768,7.274 6.457,6.105 l 4.039,3.328 4.686,12.426 3.2,-10.75 h 7.886 v 15.549 l 5.983,-14.753 5.166,-0.398 3.331,20.889 2.652,-19.839 h 6.798 l 1.904,21.94 2.991,-22.592 6.711,0.986 -2.854,-14.587 5.66,-14.995"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1280.6439,345.22333)"
                      clipPath="url(#clipPath249)"
                    />
                    <path
                      id="path250"
                      d="M 0,0 C 0,0 -4.451,-2.794 -4.273,-3.812 -3.882,-6.05 -9.131,-8.84 -9.78,-8.294 l -4.535,0.485 -4.408,-5.806 -3.01,5.023 h -7.418 v -7.265 l -5.627,6.893 -4.86,0.186 -3.133,-9.76 -2.495,9.269 h -6.395 l -1.79,-10.25 -2.814,10.555 -6.313,-0.46 2.685,6.815 -5.324,7.006"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1362.9291,357.668)"
                      clipPath="url(#clipPath251)"
                    />
                    <path
                      id="path252"
                      d="M 0,0 -18.494,14.042"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1367.9079,387.58467)"
                      clipPath="url(#clipPath253)"
                    />
                    <path
                      id="path254"
                      d="M 0,0 -7.925,-24.534 7.014,-13.19"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1278.9493,355.72253)"
                      clipPath="url(#clipPath255)"
                    />
                    <path
                      id="path256"
                      d="M 0,0 2.991,-22.592"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1275.2472,316.84653)"
                      clipPath="url(#clipPath257)"
                    />
                    <path
                      id="path258"
                      d="M 0,0 0.699,26.219"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1274.3148,351.80573)"
                      clipPath="url(#clipPath259)"
                    />
                    <path
                      id="path260"
                      d="m 0,0 c -1.778,-0.528 -3.579,-0.357 -5.391,-0.098 -1.926,0.275 -3.806,0.511 -5.755,0.542 -3.755,0.058 -7.48,1.489 -11.234,0.997 -1.849,-0.242 -1.99,-3.056 0,-3 2.727,0.077 5.454,0.153 8.181,0.214 1.313,0.029 2.626,0.063 3.939,0.074 1.136,0.009 2.193,-0.007 3.149,-0.688 0.385,0.914 0.771,1.828 1.156,2.742 -1.251,0.376 -2.506,0.756 -3.794,0.98 -1.264,0.221 -2.546,0.174 -3.806,0.366 -2.354,0.359 -4.196,1.58 -6.573,0.506 -1.405,-0.635 -0.64,-2.8 0.757,-2.795 1.697,0.007 3.395,0.004 5.092,0.02 1.394,0.013 2.91,0.275 3.292,1.851 0.367,1.513 -0.895,2.469 -2.238,2.663 -0.806,0.117 -1.573,-0.029 -2.368,-0.171 -0.412,-0.074 -1.171,-0.312 -1.529,-0.003 -1.454,1.257 -3.585,-0.856 -2.121,-2.121 0.707,-0.612 1.47,-0.947 2.413,-0.997 0.825,-0.043 2.049,0.054 2.818,0.348 0.719,-0.126 0.881,0.354 0.486,1.44 -0.251,-0.009 -0.502,-0.013 -0.753,-0.01 -0.566,-0.006 -1.132,-0.005 -1.697,-0.007 -1.132,-0.004 -2.263,-0.009 -3.395,-0.013 0.253,-0.932 0.505,-1.863 0.757,-2.795 0.804,0.363 1.877,-0.146 2.648,-0.384 0.922,-0.286 1.822,-0.494 2.786,-0.575 2.242,-0.189 4.264,-0.546 6.427,-1.196 1.72,-0.517 2.476,1.802 1.156,2.742 -2.171,1.545 -5.212,1.094 -7.717,1.042 -3.022,-0.063 -6.044,-0.148 -9.066,-0.233 v -3 c 2.006,0.263 3.923,-0.086 5.892,-0.444 1.933,-0.351 3.821,-0.526 5.785,-0.56 3.836,-0.067 7.71,-1.455 11.501,-0.33 C 2.644,-2.345 1.858,0.552 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1314.9943,351.9552)"
                      clipPath="url(#clipPath261)"
                    />
                    <path
                      id="path262"
                      d="M 0,0 C 0.044,-0.19 0.056,-0.157 0.035,0.097 0.053,0.353 0.042,0.385 0.002,0.194 0.01,0.265 0.04,0.325 0.091,0.371 0.162,0.451 0.146,0.436 0.044,0.328 0.229,0.443 0.055,0.359 -0.04,0.3 -0.159,0.224 0.119,0.328 -0.13,0.273 -0.736,0.14 -1.338,-0.021 -1.942,-0.161 c -0.54,-0.125 -1.287,-0.349 -1.722,-0.383 0.111,0.008 -0.256,0.001 -0.296,0.004 0.264,-0.016 -0.075,0.031 -0.133,0.05 0.144,-0.063 0.169,-0.069 0.074,-0.016 -0.092,0.057 -0.073,0.04 0.056,-0.05 0.163,-0.173 0.023,-0.037 -0.039,0.099 -0.299,-0.734 -0.598,-1.469 -0.897,-2.203 1.265,0.434 2.64,0.775 3.712,1.604 1.395,1.077 1.585,3.082 0.063,4.138 C -1.509,2.168 -1.895,1.254 -2.28,0.34 c 0.602,-0.2 1.204,-0.399 1.806,-0.601 0.072,-0.023 0.144,-0.047 0.215,-0.073 0.104,-0.037 0.068,-0.023 -0.107,0.04 -0.16,0.292 -0.32,0.584 -0.48,0.876 0.001,-0.103 0.011,-0.206 0.031,-0.308 0.07,-0.522 0.342,-0.989 0.797,-1.273 0.688,-0.429 1.416,-0.257 2.161,-0.135 0.644,0.107 1.288,0.217 1.931,0.329 0.775,0.136 1.281,1.126 1.048,1.846 C 4.852,1.874 4.107,2.234 3.277,2.088 2.809,2.006 2.341,1.925 1.872,1.847 1.638,1.808 1.403,1.775 1.169,1.73 0.953,1.699 0.935,1.693 1.115,1.714 0.845,1.714 0.972,1.673 1.497,1.591 L 2.035,1.053 C 2.137,0.543 2.174,0.422 2.145,0.691 2.15,0.847 2.127,0.996 2.074,1.138 2,1.4 1.89,1.576 1.732,1.78 1.431,2.169 1.042,2.373 0.59,2.541 -0.092,2.794 -0.793,3.003 -1.482,3.233 -2.192,3.469 -2.977,3.017 -3.252,2.365 -3.556,1.645 -3.26,0.923 -2.638,0.492 c -0.396,0.274 -0.317,0.393 -0.367,0.765 0.073,0.154 0.067,0.155 -0.019,0.005 0.022,0.033 0.044,0.066 0.066,0.1 -0.129,-0.115 -0.129,-0.123 0,-0.026 C -3.042,1.276 -3.129,1.219 -3.218,1.166 -3.307,1.114 -3.397,1.065 -3.49,1.019 -3.643,0.95 -3.678,0.932 -3.594,0.966 -3.748,0.897 -4.242,0.732 -4.525,0.634 -4.915,0.501 -5.306,0.367 -5.696,0.233 -6.679,-0.104 -7.01,-1.056 -6.593,-1.971 c 0.45,-0.986 1.523,-1.479 2.55,-1.561 1.012,-0.082 2.09,0.291 3.068,0.518 0.875,0.203 1.856,0.334 2.628,0.824 0.992,0.629 1.588,1.824 1.24,2.987 C 2.668,1.548 1.83,2.098 1.048,1.845 0.288,1.599 -0.241,0.805 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1284.3528,348.68787)"
                      clipPath="url(#clipPath263)"
                    />
                    <path
                      id="path264"
                      d="m 0,0 v -0.108 c -0.008,-0.207 0.035,-0.399 0.129,-0.578 0.061,-0.186 0.164,-0.347 0.31,-0.483 0.136,-0.146 0.297,-0.25 0.483,-0.31 0.179,-0.094 0.371,-0.137 0.578,-0.129 0.133,0.018 0.266,0.035 0.399,0.053 0.254,0.072 0.474,0.2 0.662,0.386 0.078,0.101 0.156,0.202 0.234,0.304 0.136,0.234 0.204,0.486 0.205,0.757 V 0 C 3.008,0.206 2.965,0.399 2.871,0.578 2.81,0.764 2.707,0.925 2.561,1.061 2.425,1.207 2.264,1.31 2.078,1.371 1.899,1.465 1.706,1.508 1.5,1.5 1.367,1.482 1.234,1.464 1.101,1.446 0.847,1.375 0.626,1.247 0.439,1.061 L 0.205,0.757 C 0.069,0.523 0.001,0.271 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1278.4441,345.8016)"
                      clipPath="url(#clipPath265)"
                    />
                    <path
                      id="path266"
                      d="m 0,0 c 0,0 -0.063,-0.113 -0.024,-0.056 0.036,0.055 -0.03,-0.029 -0.04,-0.04 0.042,0.047 0.04,0.023 -0.01,-0.005 -0.03,-0.017 -0.059,-0.033 -0.09,-0.047 0.065,0.029 0.027,0.011 -0.018,0 -0.035,-0.009 -0.07,-0.02 -0.105,-0.027 -0.029,-0.006 -0.058,-0.011 -0.087,-0.016 0.112,0.021 -0.03,-0.001 -0.045,-0.002 -0.303,-0.023 -0.607,0.009 -0.91,-0.004 -0.692,-0.03 -1.442,-0.201 -1.903,-0.761 -0.171,-0.208 -0.204,-0.503 0,-0.707 0.177,-0.177 0.535,-0.21 0.707,0 0.05,0.061 0.104,0.114 0.161,0.169 0.097,0.095 -0.039,-0.023 0.024,0.02 0.032,0.021 0.064,0.042 0.096,0.062 0.04,0.023 0.081,0.043 0.122,0.064 0.035,0.017 0.056,0.022 0.008,0.004 0.073,0.027 0.147,0.051 0.223,0.071 0.077,0.02 0.155,0.036 0.234,0.05 0.153,0.028 -0.097,-0.007 0.059,0.008 0.033,0.003 0.065,0.007 0.098,0.009 0.17,0.014 0.341,0.018 0.512,0.015 0.667,-0.011 1.507,-0.006 1.851,0.688 0.12,0.242 0.065,0.542 -0.179,0.684 C 0.463,0.309 0.12,0.243 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1279.6515,347.07533)"
                      clipPath="url(#clipPath267)"
                    />
                    <path
                      id="path268"
                      d="M 0,0 C 0.066,0.364 0.132,0.727 0.197,1.091 L -0.638,0.871 C -0.3,0.595 -0.005,0.005 0.497,0.133 0.9,0.236 1.101,0.715 0.984,1.094 0.839,1.569 0.406,1.631 0.005,1.782 -0.312,1.902 -0.511,2.198 -0.518,2.533 -0.529,3.034 -1.187,3.207 -1.45,2.785 -1.91,2.049 -2.156,1.219 -2.192,0.353 -1.865,0.398 -1.537,0.442 -1.21,0.486 -1.323,1.231 -1.435,1.976 -1.547,2.721 -1.634,3.297 -1.624,4.133 -2.318,4.318 -2.645,4.406 -2.932,4.159 -2.95,3.836 -2.964,3.6 -3.008,3.381 -3.077,3.155 h 0.964 c -0.098,0.287 -0.123,0.551 -0.09,0.853 h -1 C -3.208,3.777 -3.213,3.545 -3.218,3.314 h 1 c 0.021,1.057 0.041,2.114 0.062,3.171 -0.327,-0.045 -0.655,-0.089 -0.982,-0.133 0.299,-2.047 0.604,-4.096 1.154,-6.093 0.153,-0.558 0.953,-0.422 0.982,0.132 0.058,1.119 0.117,2.237 0.175,3.355 L -1.809,3.613 c 0.231,-0.731 0.374,-1.476 0.416,-2.242 0.035,-0.64 0.981,-0.647 1,0 0.007,0.256 0.015,0.512 0.022,0.767 C -0.698,2.094 -1.026,2.05 -1.353,2.006 -1.279,1.501 -1.365,0.972 -1.581,0.512 -1.271,0.428 -0.96,0.344 -0.65,0.26 c -0.065,1.405 -0.027,2.81 0.114,4.21 0.027,0.269 -0.249,0.5 -0.5,0.5 -0.293,0 -0.473,-0.23 -0.5,-0.5 -0.141,-1.4 -0.179,-2.805 -0.114,-4.21 0.022,-0.456 0.707,-0.732 0.932,-0.253 0.342,0.727 0.445,1.472 0.329,2.264 C -0.472,2.846 -1.355,2.68 -1.371,2.138 -1.378,1.883 -1.386,1.627 -1.393,1.371 h 1 C -0.44,2.224 -0.587,3.065 -0.845,3.879 -1.017,4.423 -1.797,4.312 -1.827,3.746 -1.885,2.628 -1.944,1.51 -2.002,0.391 -1.675,0.436 -1.347,0.48 -1.02,0.524 -1.57,2.521 -1.875,4.571 -2.174,6.617 -2.258,7.19 -3.146,7.029 -3.156,6.485 -3.177,5.428 -3.197,4.371 -3.218,3.314 c -0.012,-0.644 0.987,-0.643 1,0 0.005,0.231 0.01,0.463 0.015,0.694 0.013,0.657 -0.932,0.625 -1,0 -0.042,-0.379 0.003,-0.758 0.126,-1.119 0.157,-0.463 0.816,-0.486 0.964,0 0.094,0.309 0.144,0.625 0.163,0.947 -0.211,-0.161 -0.422,-0.321 -0.633,-0.482 -0.072,0.082 -0.098,0.095 -0.079,0.039 0.014,-0.05 0.024,-0.101 0.032,-0.152 0.022,-0.12 0.036,-0.242 0.054,-0.363 0.046,-0.302 0.092,-0.604 0.137,-0.906 0.088,-0.584 0.176,-1.168 0.265,-1.752 0.087,-0.578 0.959,-0.404 0.982,0.133 0.029,0.693 0.239,1.34 0.606,1.928 C -0.897,2.365 -1.208,2.449 -1.518,2.533 -1.507,2.036 -1.312,1.56 -0.945,1.218 -0.77,1.054 -0.569,0.933 -0.346,0.849 -0.244,0.81 -0.109,0.755 0.001,0.748 0.096,0.701 0.111,0.707 0.046,0.766 0.006,0.846 0.011,0.921 0.06,0.989 0.134,1.032 0.207,1.075 0.281,1.118 L 0.307,1.114 C 0.451,1.031 0.595,0.949 0.739,0.866 0.537,1.129 0.326,1.368 0.069,1.578 -0.193,1.791 -0.693,1.764 -0.767,1.357 L -0.964,0.266 C -1.078,-0.363 -0.115,-0.633 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1278.5641,347.86933)"
                      clipPath="url(#clipPath269)"
                    />
                    <path
                      id="path270"
                      d="m 0,0 c -0.07,0.185 -0.124,0.369 -0.164,0.562 -0.1,0.475 -0.867,0.479 -0.965,0 -0.084,-0.415 -0.134,-0.834 -0.143,-1.257 -0.012,-0.548 0.903,-0.701 0.982,-0.133 0.049,0.359 0.076,0.708 0.057,1.071 -0.035,0.638 -1.001,0.648 -1,0 0,-0.438 0.044,-0.87 0.119,-1.301 0.1,-0.578 0.956,-0.404 0.982,0.133 0.026,0.54 -0.122,1.07 -0.245,1.591 -0.118,0.496 -0.241,0.991 -0.349,1.49 -0.22,1.013 -0.362,2.032 -0.276,3.07 h -1 c -0.021,-0.825 0.274,-1.692 0.446,-2.494 0.179,-0.833 0.357,-1.666 0.536,-2.499 0.118,-0.551 0.999,-0.428 0.982,0.133 -0.016,0.513 -0.209,0.967 -0.353,1.451 -0.152,0.514 -0.254,1.04 -0.357,1.565 -0.1,0.51 -0.826,0.44 -0.964,0 -0.402,-1.281 -0.545,-2.619 -0.683,-3.95 -0.026,-0.247 0.21,-0.461 0.433,-0.491 0.259,-0.035 0.46,0.122 0.549,0.358 0.305,0.815 0.362,1.688 0.377,2.55 h -1 C -2.032,1.708 -2.029,1.566 -2.025,1.424 -1.698,1.468 -1.37,1.513 -1.043,1.557 -1.125,2.124 -1.207,2.691 -1.289,3.259 -1.371,3.828 -2.266,3.672 -2.271,3.126 -2.286,1.506 -2.378,-0.11 -2.548,-1.72 h 1 c 0.101,1.033 -0.071,2.059 -0.238,3.076 -0.08,0.488 -0.188,0.976 -0.051,1.463 0.128,0.457 0.308,0.872 0.326,1.354 h -1 C -2.513,4.019 -2.515,3.866 -2.517,3.713 h 1 c -0.018,0.465 -0.036,0.929 -0.054,1.394 -0.024,0.642 -1.024,0.645 -1,0 0.018,-0.465 0.036,-0.929 0.054,-1.394 0.025,-0.641 0.991,-0.647 1,0 0.002,0.153 0.004,0.306 0.006,0.46 0.009,0.645 -0.975,0.641 -1,0 -0.017,-0.456 -0.258,-0.868 -0.345,-1.312 -0.1,-0.508 -0.018,-1.006 0.064,-1.51 0.164,-1.02 0.345,-2.034 0.244,-3.071 -0.027,-0.271 0.249,-0.498 0.5,-0.5 0.294,-0.003 0.472,0.232 0.5,0.5 0.17,1.61 0.262,3.226 0.277,4.846 -0.327,-0.045 -0.655,-0.089 -0.982,-0.133 0.082,-0.567 0.164,-1.135 0.246,-1.702 0.081,-0.561 0.996,-0.422 0.982,0.133 -0.004,0.142 -0.007,0.284 -0.011,0.425 -0.017,0.643 -0.989,0.646 -1,0 -0.013,-0.781 -0.065,-1.546 -0.342,-2.284 0.328,-0.044 0.655,-0.089 0.983,-0.133 0.129,1.244 0.271,2.486 0.647,3.684 h -0.964 c 0.094,-0.481 0.188,-0.963 0.32,-1.436 0.12,-0.431 0.34,-0.862 0.354,-1.314 0.327,0.045 0.654,0.089 0.982,0.133 -0.169,0.788 -0.338,1.576 -0.506,2.364 -0.082,0.382 -0.164,0.765 -0.246,1.148 -0.086,0.401 -0.204,0.802 -0.194,1.215 0.017,0.651 -0.947,0.633 -1,0 -0.086,-1.033 0.049,-2.064 0.257,-3.076 0.102,-0.5 0.223,-0.995 0.342,-1.491 0.124,-0.517 0.296,-1.048 0.271,-1.584 l 0.982,0.133 c -0.06,0.343 -0.083,0.686 -0.083,1.035 h -1 c 0.014,-0.268 0.015,-0.538 -0.021,-0.805 0.327,-0.044 0.654,-0.089 0.982,-0.133 0.007,0.336 0.041,0.662 0.108,0.991 H -1.129 C -1.088,0.103 -1.034,-0.081 -0.964,-0.266 -0.739,-0.862 0.228,-0.604 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1278.9148,344.05093)"
                      clipPath="url(#clipPath271)"
                    />
                    <path
                      id="path272"
                      d="m 0,0 c 0,-1.438 0.385,-2.819 0.657,-4.221 0.287,-1.487 0.346,-2.999 0.209,-4.507 0.311,0.085 0.622,0.169 0.932,0.253 -0.272,0.639 -0.201,1.396 -0.342,2.069 -0.157,0.751 -0.435,1.464 -0.435,2.241 0,0.65 -0.952,0.635 -1,0 -0.154,-2.036 -0.141,-4.078 -0.123,-6.118 0.004,-0.385 0.421,-0.615 0.753,-0.432 0.243,0.134 0.583,0.26 0.73,0.518 0.161,0.283 0.095,0.687 0.093,1 -0.006,0.841 -0.011,1.682 -0.019,2.522 -0.016,1.664 -0.08,3.326 -0.4,4.963 -0.123,0.631 -1.087,0.364 -0.964,-0.266 0.271,-1.388 0.337,-2.799 0.358,-4.211 0.01,-0.679 0.013,-1.359 0.018,-2.038 0.002,-0.323 0.004,-0.646 0.007,-0.97 -0.001,0.041 0.039,-0.546 0.091,-0.424 -0.034,-0.08 -0.35,-0.192 -0.419,-0.23 l 0.752,-0.432 c -0.018,2.04 -0.031,4.082 0.123,6.118 h -1 c 0,-0.87 0.297,-1.666 0.471,-2.507 C 0.654,-7.456 0.615,-8.23 0.935,-8.98 1.15,-9.485 1.827,-9.159 1.866,-8.728 2,-7.256 1.94,-5.782 1.689,-4.326 1.441,-2.883 1,-1.476 1,0 1,0.643 0,0.645 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1274.7541,325.05227)"
                      clipPath="url(#clipPath273)"
                    />
                    <path
                      id="path274"
                      d="m 0,0 c -0.522,-0.21 -1.042,-0.436 -1.59,-0.57 0.649,-1.114 1.298,-2.228 1.946,-3.342 0.066,0.061 0.128,0.126 0.185,0.196 0.154,0.188 0.312,0.38 0.444,0.585 0.048,0.076 0.092,0.155 0.13,0.237 0.18,0.39 0.357,0.758 0.339,1.203 C 1.449,-1.577 1.409,-1.243 1.378,-1.133 1.355,-1.049 1.211,-0.709 1.167,-0.634 1.121,-0.557 0.903,-0.275 0.84,-0.211 0.776,-0.147 0.641,-0.055 0.61,-0.031 0.497,0.056 0.439,0.118 0.326,0.167 0.13,0.252 -0.066,0.337 -0.265,0.415 -0.448,0.487 -0.636,0.547 -0.827,0.596 -1.093,0.68 -1.358,0.692 -1.624,0.632 -1.89,0.62 -2.138,0.541 -2.368,0.395 -2.601,0.269 -2.788,0.097 -2.929,-0.12 -3.106,-0.313 -3.225,-0.54 -3.287,-0.8 c -0.024,-0.178 -0.048,-0.355 -0.071,-0.532 10e-4,-0.361 0.092,-0.698 0.273,-1.01 0.104,-0.135 0.208,-0.269 0.312,-0.404 0.25,-0.248 0.544,-0.42 0.883,-0.515 0.224,-0.058 0.444,-0.132 0.658,-0.221 -0.159,0.068 -0.318,0.135 -0.477,0.202 0.034,-0.014 0.066,-0.029 0.098,-0.048 -0.135,0.104 -0.27,0.208 -0.405,0.312 0.013,-0.009 0.025,-0.019 0.035,-0.032 -0.104,0.135 -0.208,0.27 -0.312,0.405 0.004,-0.007 0.008,-0.013 0.012,-0.02 -0.067,0.16 -0.134,0.319 -0.202,0.478 0.003,-0.007 0.005,-0.015 0.008,-0.022 -0.024,0.177 -0.048,0.354 -0.072,0.531 0.001,-0.01 0.001,-0.02 0.001,-0.031 0.024,0.177 0.048,0.355 0.072,0.532 -0.009,-0.042 -0.025,-0.08 -0.041,-0.12 0.067,0.159 0.134,0.318 0.202,0.478 -0.068,-0.157 -0.154,-0.302 -0.257,-0.438 0.104,0.135 0.208,0.27 0.313,0.405 -0.066,-0.083 -0.138,-0.161 -0.215,-0.234 -0.104,-0.135 -0.209,-0.27 -0.313,-0.405 -0.146,-0.229 -0.225,-0.477 -0.237,-0.743 -0.048,-0.178 -0.048,-0.355 0,-0.532 0.012,-0.266 0.091,-0.514 0.237,-0.744 0.104,-0.135 0.209,-0.269 0.313,-0.404 0.135,-0.105 0.27,-0.209 0.405,-0.313 0.229,-0.146 0.477,-0.225 0.743,-0.237 0.266,-0.06 0.532,-0.048 0.798,0.035 0.548,0.134 1.068,0.359 1.589,0.57 0.261,0.062 0.487,0.181 0.681,0.358 0.217,0.141 0.389,0.328 0.515,0.561 0.146,0.23 0.225,0.477 0.237,0.744 0.059,0.265 0.048,0.531 -0.036,0.797 -0.067,0.159 -0.134,0.319 -0.201,0.478 -0.178,0.3 -0.417,0.54 -0.718,0.717 C 1.382,-0.134 1.223,-0.067 1.063,0 0.709,0.095 0.354,0.095 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1282.0916,370.4668)"
                      clipPath="url(#clipPath275)"
                    />
                    <path
                      id="path276"
                      d="M 0,0 C 0.138,0.173 0.278,0.336 0.448,0.479 0.313,0.374 0.178,0.27 0.043,0.166 0.12,0.222 0.193,0.266 0.278,0.309 L -0.2,0.108 C -0.079,0.154 0.038,0.18 0.165,0.198 -0.012,0.174 -0.189,0.15 -0.366,0.126 -0.033,0.167 0.311,0.181 0.63,0.289 1.58,0.61 2.199,1.467 2.063,2.484 1.927,3.492 1.103,4.168 0.098,4.218 -0.317,4.238 -0.732,4.259 -1.147,4.28 -1.501,4.297 -1.821,4.313 -2.178,4.22 -2.662,4.092 -2.998,3.852 -3.374,3.534 -3.851,3.132 -4.184,2.578 -4.356,1.981 -4.443,1.674 -4.454,1.354 -4.567,1.054 -4.5,1.213 -4.432,1.372 -4.365,1.532 -4.402,1.452 -4.44,1.384 -4.49,1.312 c 0.104,0.135 0.209,0.27 0.313,0.404 -0.082,-0.096 -0.17,-0.175 -0.27,-0.252 0.135,0.104 0.27,0.208 0.405,0.312 C -4.403,1.508 -4.762,1.242 -5.075,0.918 -5.296,0.689 -5.514,0.466 -5.763,0.267 c 0.135,0.105 0.269,0.209 0.404,0.313 -0.653,-0.504 -1.384,-0.923 -1.954,-1.526 -0.719,-0.761 -0.812,-2.084 0,-2.829 0.78,-0.715 2.061,-0.812 2.828,0 0.159,0.168 0.329,0.318 0.51,0.46 -0.135,-0.104 -0.27,-0.208 -0.405,-0.312 0.49,0.373 1.004,0.708 1.484,1.097 0.377,0.306 0.678,0.69 1.053,0.998 -0.135,-0.105 -0.269,-0.209 -0.404,-0.313 0.269,0.205 0.566,0.391 0.805,0.63 0.361,0.36 0.562,0.735 0.732,1.206 0.129,0.354 0.135,0.735 0.266,1.088 C -0.511,0.92 -0.578,0.761 -0.645,0.602 -0.606,0.687 -0.566,0.758 -0.513,0.835 -0.617,0.7 -0.721,0.565 -0.826,0.43 c 0.086,0.103 0.177,0.191 0.28,0.276 -0.135,-0.104 -0.27,-0.208 -0.405,-0.313 0.088,0.067 0.162,0.118 0.262,0.164 L -1.167,0.355 c 0.035,0.005 0.07,0.01 0.105,0.015 C -1.239,0.346 -1.417,0.323 -1.594,0.299 -1.03,0.287 -0.465,0.246 0.098,0.218 -0.079,1.527 -0.256,2.837 -0.433,4.146 -0.526,4.115 -0.612,4.095 -0.708,4.079 -0.531,4.103 -0.354,4.126 -0.177,4.15 -0.783,4.072 -1.326,4.025 -1.862,3.698 -2.239,3.467 -2.555,3.17 -2.828,2.828 -3.172,2.399 -3.414,1.986 -3.414,1.414 -3.414,0.924 -3.196,0.338 -2.828,0 -2.447,-0.35 -1.947,-0.61 -1.414,-0.586 -0.918,-0.564 -0.325,-0.405 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1286.8144,374.91653)"
                      clipPath="url(#clipPath277)"
                    />
                    <path
                      id="path278"
                      d="m 0,0 c -0.282,-0.272 -0.601,-0.496 -0.87,-0.783 -0.25,-0.267 -0.476,-0.555 -0.713,-0.833 -0.238,-0.279 -0.487,-0.543 -0.768,-0.778 -0.145,-0.121 -0.288,-0.24 -0.412,-0.383 -0.233,-0.269 -0.399,-0.556 -0.605,-0.837 0.104,0.135 0.209,0.27 0.313,0.405 -0.1,-0.12 -0.213,-0.218 -0.336,-0.313 0.135,0.104 0.27,0.209 0.405,0.313 -0.268,-0.204 -0.573,-0.387 -0.791,-0.646 -0.258,-0.307 -0.446,-0.599 -0.567,-0.986 -0.135,-0.436 -0.06,-0.812 0.006,-1.244 0.067,0.513 0.135,1.027 0.202,1.541 -0.006,-0.01 -0.012,-0.02 -0.019,-0.03 0.399,0.306 0.797,0.612 1.196,0.919 -0.011,-0.002 -0.021,-0.004 -0.032,-0.006 -0.465,-0.078 -0.966,-0.528 -1.195,-0.919 -0.251,-0.428 -0.357,-1.06 -0.202,-1.541 0.157,-0.484 0.457,-0.951 0.919,-1.195 0.16,-0.067 0.319,-0.135 0.478,-0.202 0.355,-0.095 0.709,-0.095 1.063,0 0.123,0.021 0.402,0.144 0.51,0.207 0.282,0.165 0.575,0.451 0.726,0.733 0.132,0.245 0.21,0.485 0.247,0.758 0.048,0.178 0.048,0.355 0,0.532 -0.014,0.112 -0.029,0.224 -0.046,0.336 0.024,-0.178 0.047,-0.355 0.071,-0.532 -0.002,0.019 -0.003,0.038 -0.005,0.057 -0.024,-0.178 -0.047,-0.355 -0.071,-0.532 0.002,0.038 0.013,0.074 0.031,0.108 l -0.202,-0.478 c 0.01,0.017 0.021,0.033 0.031,0.05 -0.104,-0.135 -0.209,-0.27 -0.313,-0.405 0.067,0.084 0.145,0.148 0.228,0.214 -0.135,-0.105 -0.269,-0.209 -0.404,-0.313 0.272,0.208 0.572,0.399 0.812,0.647 0.256,0.265 0.439,0.581 0.648,0.88 -0.104,-0.135 -0.209,-0.27 -0.313,-0.405 0.204,0.261 0.482,0.445 0.72,0.672 0.238,0.228 0.452,0.481 0.663,0.734 0.211,0.253 0.42,0.509 0.651,0.745 0.242,0.246 0.525,0.443 0.772,0.682 0.366,0.351 0.586,0.911 0.586,1.414 0,0.49 -0.218,1.076 -0.586,1.414 C 2.447,0.35 1.947,0.61 1.414,0.586 0.878,0.562 0.392,0.378 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1273.8049,377.22813)"
                      clipPath="url(#clipPath279)"
                    />
                    <path
                      id="path280"
                      d="m 0,0 c -0.135,-0.408 -0.271,-0.816 -0.406,-1.224 1.286,-0.355 2.571,-0.709 3.857,-1.063 0.168,0.86 0.29,1.732 0.38,2.604 C 3.807,0.494 3.783,0.671 3.76,0.848 3.698,1.109 3.578,1.335 3.402,1.529 3.313,1.679 3.193,1.798 3.043,1.887 2.85,2.064 2.623,2.183 2.363,2.245 2.011,2.325 1.651,2.325 1.299,2.245 1.039,2.183 0.812,2.064 0.619,1.887 0.401,1.746 0.23,1.559 0.104,1.326 -0.053,0.983 -0.211,0.64 -0.368,0.296 H 3.086 C 3.079,0.306 3.072,0.315 3.065,0.325 3.132,0.166 3.199,0.007 3.267,-0.153 3.263,-0.141 3.26,-0.129 3.257,-0.118 3.281,-0.295 3.304,-0.472 3.328,-0.649 3.32,-0.5 3.351,-0.342 3.367,-0.193 3.385,-0.032 3.405,0.128 3.426,0.289 3.437,0.564 3.379,0.821 3.254,1.059 3.174,1.307 3.036,1.522 2.841,1.703 2.706,1.807 2.571,1.911 2.436,2.016 2.124,2.196 1.787,2.287 1.426,2.289 1.241,2.31 1.056,2.287 0.871,2.22 0.611,2.158 0.384,2.038 0.191,1.862 -0.077,1.654 -0.131,1.593 -0.361,1.26 -0.422,1.172 -0.478,1.081 -0.529,0.988 -0.637,0.792 -0.734,0.59 -0.834,0.391 0.385,-0.123 1.603,-0.636 2.822,-1.15 2.943,-0.618 3.103,-0.096 3.303,0.412 2.017,0.766 0.731,1.121 -0.554,1.475 -0.598,1.304 -0.654,1.137 -0.721,0.974 -0.654,1.133 -0.587,1.292 -0.52,1.451 -0.532,1.422 -0.545,1.392 -0.558,1.363 -0.704,1.134 -0.783,0.886 -0.795,0.62 -0.855,0.354 -0.843,0.088 -0.76,-0.178 c 0.062,-0.26 0.181,-0.487 0.358,-0.68 0.141,-0.218 0.328,-0.39 0.561,-0.515 0.465,-0.245 1.027,-0.368 1.542,-0.202 l 0.477,0.202 c 0.301,0.178 0.54,0.417 0.718,0.717 0.155,0.348 0.312,0.698 0.407,1.068 C 3.433,0.92 3.368,1.497 3.101,1.953 2.975,2.186 2.804,2.373 2.586,2.514 2.393,2.691 2.166,2.81 1.906,2.872 1.394,2.989 0.819,2.964 0.365,2.671 0.23,2.566 0.095,2.462 -0.04,2.358 -0.288,2.108 -0.459,1.814 -0.554,1.475 c -0.2,-0.508 -0.36,-1.029 -0.481,-1.562 -0.113,-0.497 -0.085,-1.097 0.201,-1.541 0.105,-0.135 0.209,-0.27 0.313,-0.405 0.181,-0.195 0.396,-0.332 0.644,-0.413 0.156,-0.091 0.324,-0.136 0.505,-0.137 0.265,-0.059 0.531,-0.047 0.797,0.036 0.478,0.155 0.963,0.455 1.195,0.919 0.152,0.302 0.292,0.613 0.487,0.89 -0.104,-0.135 -0.208,-0.27 -0.313,-0.405 0.008,0.007 0.016,0.013 0.023,0.02 -0.471,-0.195 -0.943,-0.391 -1.414,-0.586 0.008,-10e-4 0.016,-0.002 0.023,-0.002 -0.666,0.666 -1.333,1.333 -2,2 -0.089,-0.669 -0.222,-1.416 0.206,-2.012 0.178,-0.3 0.417,-0.539 0.717,-0.717 0.312,-0.181 0.649,-0.272 1.01,-0.273 0.361,10e-4 0.697,0.092 1.009,0.273 0.301,0.178 0.54,0.417 0.718,0.717 0.157,0.344 0.315,0.687 0.472,1.03 l -3.727,1.01 c -0.025,-0.244 -0.054,-0.486 -0.086,-0.729 0.024,0.177 0.048,0.355 0.071,0.532 -0.061,-0.45 -0.135,-0.898 -0.222,-1.344 -0.084,-0.266 -0.095,-0.532 -0.036,-0.798 0.012,-0.266 0.091,-0.514 0.237,-0.743 0.126,-0.233 0.298,-0.42 0.516,-0.561 0.193,-0.177 0.419,-0.296 0.68,-0.358 0.512,-0.117 1.086,-0.092 1.541,0.201 0.135,0.104 0.27,0.209 0.405,0.313 0.247,0.25 0.419,0.544 0.514,0.883 0.135,0.408 0.271,0.816 0.406,1.224 0.083,0.266 0.095,0.531 0.036,0.797 C 3.881,0 3.802,0.248 3.656,0.478 3.53,0.711 3.358,0.898 3.14,1.039 2.947,1.216 2.721,1.335 2.46,1.397 1.948,1.513 1.374,1.488 0.919,1.195 0.784,1.091 0.649,0.987 0.514,0.883 0.266,0.633 0.095,0.339 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1275.0613,372.56907)"
                      clipPath="url(#clipPath281)"
                    />
                    <path
                      id="path282"
                      d="M 0,0 C 0.615,1.59 1.086,3.229 1.409,4.904 0.1,5.081 -1.21,5.258 -2.519,5.435 -2.53,5.34 -2.542,5.245 -2.553,5.15 -2.516,5.42 -2.508,5.478 -2.53,5.325 -2.554,5.159 -2.578,4.993 -2.605,4.827 -2.764,3.831 -2.431,2.883 -1.447,2.468 -0.611,2.115 0.64,2.377 1.051,3.286 1.653,4.621 2.447,5.986 2.336,7.492 2.277,8.302 1.763,9.266 0.868,9.42 0.374,9.505 -0.016,9.524 -0.482,9.328 -0.616,9.271 -0.741,9.205 -0.873,9.15 -0.359,9.217 0.155,9.284 0.668,9.351 0.654,9.356 0.639,9.36 0.625,9.365 L 2.022,7.968 C 1.944,8.225 1.87,8.489 1.729,8.722 1.49,9.117 1.218,9.313 0.858,9.59 0.476,9.883 -0.244,9.912 -0.683,9.791 -1.147,9.664 -1.65,9.305 -1.879,8.872 -2.124,8.408 -2.247,7.846 -2.08,7.331 -1.909,6.802 -1.598,6.472 -1.161,6.136 -1.747,7.065 -1.971,7.321 -1.835,6.904 -1.768,6.745 -1.701,6.586 -1.634,6.427 -1.391,5.967 -0.907,5.636 -0.417,5.501 0.229,5.322 0.732,5.515 1.298,5.773 0.785,5.706 0.271,5.639 -0.243,5.571 c 0.016,-0.002 0.032,-0.005 0.048,-0.008 -0.49,0.643 -0.979,1.286 -1.469,1.929 0.009,-0.125 0.02,-0.25 0.021,-0.374 0.002,-0.062 0,-0.125 -0.005,-0.187 C -1.658,6.773 -1.649,6.849 -1.621,7.157 -1.647,7.15 -1.711,6.895 -1.723,6.865 -1.744,6.812 -1.934,6.36 -1.812,6.649 -1.692,6.932 -1.856,6.548 -1.88,6.49 -1.937,6.358 -1.995,6.226 -2.052,6.094 -2.168,5.83 -2.285,5.567 -2.403,5.305 -1.185,4.791 0.034,4.278 1.252,3.764 1.341,4.319 1.416,4.877 1.481,5.435 1.533,5.891 1.223,6.548 0.895,6.85 0.564,7.153 0.193,7.34 -0.254,7.4 -1.169,7.523 -2.259,6.947 -2.448,5.967 -2.771,4.293 -3.242,2.654 -3.857,1.063 -4.033,0.608 -3.893,-0.073 -3.656,-0.478 -3.413,-0.893 -2.937,-1.288 -2.46,-1.397 -1.315,-1.658 -0.405,-1.047 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1280.3087,371.08053)"
                      clipPath="url(#clipPath283)"
                    />
                    <path
                      id="path284"
                      d="m 0,0 c -0.039,-0.032 -0.075,-0.069 -0.107,-0.108 -0.114,-0.142 -0.225,-0.285 -0.333,-0.431 -0.007,-0.01 -0.014,-0.02 -0.021,-0.031 -0.013,-0.02 -0.024,-0.042 -0.038,-0.061 0.104,0.135 0.208,0.27 0.312,0.405 -0.005,-0.007 -0.01,-0.013 -0.016,-0.018 0.134,0.104 0.269,0.208 0.404,0.313 C 0.197,0.066 0.193,0.063 0.188,0.061 L 0.666,0.263 C 0.664,0.262 0.662,0.261 0.659,0.261 c 0.177,0.024 0.355,0.047 0.532,0.071 -0.004,0 -0.007,0 -0.011,0 C 1.357,0.309 1.535,0.285 1.712,0.261 1.709,0.261 1.707,0.262 1.705,0.263 1.864,0.196 2.023,0.129 2.182,0.062 2.18,0.063 2.178,0.064 2.176,0.065 2.311,-0.039 2.446,-0.143 2.581,-0.247 2.578,-0.245 2.576,-0.243 2.573,-0.24 2.677,-0.375 2.782,-0.51 2.886,-0.644 2.883,-0.64 2.881,-0.636 2.878,-0.631 L 3.08,-1.109 C 3.073,-1.091 3.07,-1.072 3.066,-1.053 3.061,-1.03 3.056,-1.007 3.051,-0.984 2.989,-0.724 2.87,-0.497 2.693,-0.304 2.552,-0.086 2.365,0.085 2.132,0.211 1.902,0.357 1.654,0.436 1.388,0.448 1.122,0.508 0.857,0.496 0.591,0.412 0.432,0.345 0.272,0.278 0.113,0.211 c -0.3,-0.178 -0.54,-0.417 -0.717,-0.718 -0.068,-0.159 -0.135,-0.318 -0.202,-0.477 -0.095,-0.355 -0.095,-0.709 0,-1.064 0.008,-0.037 0.014,-0.077 0.025,-0.113 0.052,-0.17 0.123,-0.337 0.207,-0.493 0.002,-0.003 0.004,-0.006 0.006,-0.009 0.104,-0.135 0.209,-0.27 0.313,-0.405 0.001,-0.002 0.002,-0.003 0.003,-0.004 0.002,-0.002 0.003,-0.003 0.004,-0.004 0.135,-0.104 0.27,-0.208 0.405,-0.313 0.159,-0.091 -0.362,0.05 0.484,-0.205 0.092,-0.027 0.032,-0.005 0.273,-0.038 0.157,-0.021 0.181,-0.032 0.275,-0.036 0.179,-0.007 0.366,0.017 0.537,0.072 0.083,0.027 0.164,0.061 0.242,0.102 0.081,0.034 0.162,0.068 0.243,0.103 0.152,0.086 0.289,0.202 0.417,0.321 0.062,0.057 0.191,0.245 0.17,0.218 0.027,0.035 0.122,0.143 0.168,0.22 0.019,0.031 0.038,0.061 0.06,0.09 -0.104,-0.135 -0.208,-0.27 -0.312,-0.404 0.033,0.043 0.072,0.083 0.114,0.118 0.195,0.181 0.333,0.395 0.414,0.643 0.125,0.239 0.183,0.495 0.172,0.771 0.011,0.275 -0.047,0.532 -0.172,0.77 C 3.161,-0.396 3.023,-0.181 2.828,0 2.693,0.104 2.559,0.208 2.424,0.313 2.112,0.494 1.775,0.585 1.414,0.586 1.237,0.562 1.06,0.538 0.883,0.514 0.544,0.419 0.25,0.248 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1278.3608,358.3552)"
                      clipPath="url(#clipPath285)"
                    />
                    <path
                      id="path286"
                      d="m 0,0 c -0.113,-0.209 -0.222,-0.422 -0.345,-0.625 0.104,0.135 0.209,0.27 0.313,0.405 -0.002,-0.002 -0.003,-0.003 -0.004,-0.005 0.135,0.104 0.27,0.209 0.404,0.313 C 0.367,0.087 0.365,0.085 0.363,0.084 0.7,0.175 1.036,0.266 1.373,0.357 1.37,0.357 1.368,0.357 1.365,0.356 1.542,0.333 1.72,0.309 1.897,0.285 1.895,0.286 1.892,0.287 1.89,0.288 2.184,0.116 2.478,-0.055 2.772,-0.227 2.768,-0.224 2.764,-0.22 2.761,-0.215 2.865,-0.35 2.969,-0.485 3.073,-0.62 3.065,-0.605 3.058,-0.589 3.051,-0.573 3.118,-0.732 3.185,-0.892 3.252,-1.051 3.233,-1.004 3.221,-0.956 3.214,-0.906 3.237,-1.083 3.261,-1.26 3.285,-1.438 c -0.006,0.051 -0.006,0.1 10e-4,0.15 -0.024,-0.177 -0.048,-0.354 -0.072,-0.531 0.003,0.018 0.006,0.035 0.01,0.053 0.084,0.265 0.095,0.531 0.036,0.797 C 3.248,-0.703 3.169,-0.455 3.023,-0.225 2.897,0.008 2.725,0.195 2.507,0.336 2.314,0.513 2.088,0.632 1.827,0.694 1.65,0.718 1.473,0.742 1.296,0.765 0.935,0.764 0.598,0.673 0.286,0.492 0.151,0.388 0.016,0.284 -0.119,0.18 -0.366,-0.07 -0.538,-0.364 -0.633,-0.703 -0.678,-0.898 -0.695,-1.101 -0.716,-1.298 -0.718,-1.323 -0.72,-1.348 -0.72,-1.373 c 0.001,-0.015 0.001,-0.029 0.003,-0.043 0,-0.007 0.001,-0.015 0.002,-0.022 0.024,-0.177 0.048,-0.354 0.072,-0.531 0.003,-0.025 0.008,-0.05 0.014,-0.074 0.007,-0.024 0.015,-0.048 0.024,-0.071 0.01,-0.024 0.136,-0.351 0.215,-0.507 0.003,-0.006 0.006,-0.012 0.009,-0.017 0.105,-0.135 0.209,-0.27 0.313,-0.405 0.257,-0.254 0.546,-0.429 0.894,-0.527 0.177,-0.049 0.364,-0.073 0.547,-0.073 0.715,0.002 1.386,0.392 1.742,1.01 0.117,0.203 0.228,0.409 0.339,0.614 0.146,0.23 0.225,0.478 0.237,0.744 0.06,0.266 0.048,0.531 -0.035,0.797 C 3.594,-0.217 3.474,0.009 3.298,0.202 3.156,0.42 2.969,0.592 2.736,0.718 L 2.259,0.919 C 1.904,1.014 1.55,1.014 1.195,0.919 1.036,0.852 0.877,0.785 0.718,0.718 0.417,0.54 0.178,0.301 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1277.3939,359.698)"
                      clipPath="url(#clipPath287)"
                    />
                    <path
                      id="path288"
                      d="M 0,0 C -0.005,0.189 -0.007,0.379 -0.005,0.568 -0.004,0.751 -0.007,0.939 0.012,1.121 -0.012,0.944 -0.036,0.767 -0.059,0.59 -0.058,0.601 -0.055,0.613 -0.05,0.624 L -0.252,0.146 c 0.003,0.005 0.006,0.01 0.009,0.015 -0.104,-0.135 -0.209,-0.27 -0.313,-0.405 0.02,0.023 0.045,0.04 0.067,0.061 0.104,0.135 0.209,0.27 0.313,0.405 0.104,0.143 0.174,0.306 0.209,0.489 C 0.084,0.89 0.094,1.081 0.111,1.268 0.122,1.544 0.064,1.8 -0.061,2.039 -0.142,2.287 -0.28,2.501 -0.475,2.682 -0.656,2.877 -0.87,3.015 -1.118,3.096 -1.357,3.221 -1.613,3.279 -1.889,3.268 -2.066,3.244 -2.243,3.221 -2.421,3.197 -2.759,3.102 -3.054,2.93 -3.303,2.682 -3.407,2.547 -3.512,2.412 -3.616,2.278 -3.797,1.966 -3.888,1.629 -3.889,1.268 L -3.89,1.254 c 0.024,0.178 0.047,0.355 0.071,0.532 C -3.82,1.782 -3.822,1.778 -3.824,1.774 -3.756,1.933 -3.689,2.092 -3.622,2.252 -3.625,2.248 -3.627,2.244 -3.63,2.241 -3.526,2.376 -3.422,2.51 -3.317,2.645 -3.332,2.631 -3.348,2.62 -3.363,2.606 -3.371,2.6 -3.378,2.593 -3.384,2.585 -3.489,2.45 -3.593,2.315 -3.697,2.18 -3.916,1.842 -3.965,1.476 -3.991,1.086 -3.999,0.964 -4.001,0.841 -4.003,0.72 -4.008,0.48 -4.007,0.24 -4,0 c -0.01,-0.275 0.047,-0.532 0.172,-0.771 0.081,-0.247 0.219,-0.462 0.414,-0.643 0.181,-0.195 0.396,-0.333 0.643,-0.414 C -2.532,-1.953 -2.275,-2.01 -2,-2 c 0.177,0.024 0.354,0.048 0.532,0.071 0.338,0.095 0.633,0.267 0.882,0.515 0.104,0.135 0.209,0.27 0.313,0.405 C -0.092,-0.698 -0.001,-0.361 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1280.534,364.39253)"
                      clipPath="url(#clipPath289)"
                    />
                    <path
                      id="path290"
                      d="M 0,0 C 0.043,0.143 0.09,0.285 0.13,0.429 0.184,0.623 0.219,0.845 0.228,1.046 0.24,1.319 0.128,1.82 -0.052,2.064 -0.317,2.426 -0.583,2.703 -1.008,2.883 -1.4,3.048 -1.895,3.126 -2.31,2.983 -2.314,2.982 -2.318,2.981 -2.322,2.979 -2.926,2.772 -3.368,2.414 -3.618,1.821 -3.743,1.583 -3.801,1.326 -3.79,1.051 -3.789,0.69 -3.698,0.353 -3.517,0.041 l 0.01,-0.023 c 0.104,-0.134 0.208,-0.269 0.313,-0.404 0.134,-0.105 0.269,-0.209 0.404,-0.313 0.389,-0.228 0.834,-0.297 1.276,-0.237 0.359,0.048 0.658,0.171 0.946,0.393 0.322,0.25 0.635,0.626 0.716,1.039 0.057,0.289 0.155,0.563 0.267,0.835 L 0.214,0.853 C 0.422,1.343 0.66,1.824 0.826,2.33 1.002,2.865 1.002,3.418 1.051,3.97 1.027,3.793 1.003,3.616 0.979,3.439 1.022,3.687 1.124,3.92 1.221,4.151 1.153,3.992 1.086,3.832 1.019,3.673 1.125,3.92 1.24,4.162 1.364,4.4 1.612,4.873 1.71,5.417 1.566,5.941 1.438,6.405 1.08,6.908 0.647,7.136 -0.275,7.623 -1.571,7.408 -2.089,6.419 -2.342,5.936 -2.559,5.432 -2.753,4.924 -2.948,4.416 -2.916,3.886 -2.982,3.358 -2.958,3.535 -2.934,3.712 -2.91,3.889 -2.961,3.574 -3.065,3.278 -3.186,2.985 -3.119,3.144 -3.052,3.303 -2.985,3.463 -3.248,2.841 -3.578,2.227 -3.709,1.56 l 3.656,0.477 C -0.057,2.045 -0.06,2.053 -0.063,2.06 -0.462,1.081 -0.86,0.102 -1.258,-0.878 c 0.003,0.002 0.007,0.003 0.011,0.004 C -2,-0.567 -2.753,-0.261 -3.505,0.045 -3.503,0.042 -3.501,0.04 -3.499,0.037 -3.566,0.55 -3.633,1.064 -3.701,1.578 -3.753,1.406 -3.805,1.235 -3.857,1.063 -4.162,0.062 -3.494,-1.161 -2.46,-1.397 -1.38,-1.643 -0.326,-1.072 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1276.9289,371.95013)"
                      clipPath="url(#clipPath291)"
                    />
                    <path
                      id="path292"
                      d="M 0,0 C -0.142,-0.299 -0.365,-0.544 -0.501,-0.848 -0.716,-1.33 -0.874,-1.816 -1.024,-2.32 -1.131,-2.682 -1.231,-3.047 -1.305,-3.417 -1.378,-3.777 -1.401,-4.149 -1.513,-4.5 c -0.153,-0.484 -0.05,-1.11 0.202,-1.542 0.243,-0.414 0.719,-0.81 1.195,-0.919 1.091,-0.248 2.122,0.329 2.461,1.397 0.077,0.245 0.107,0.497 0.147,0.75 0.045,0.286 0.107,0.568 0.179,0.848 0.136,0.528 0.281,1.07 0.483,1.577 -0.067,-0.159 -0.134,-0.319 -0.201,-0.478 0.132,0.306 0.359,0.549 0.501,0.848 0.234,0.495 0.352,0.996 0.202,1.541 C 3.528,-0.014 3.169,0.489 2.736,0.717 2.272,0.963 1.71,1.086 1.195,0.919 0.724,0.767 0.22,0.465 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1272.4155,367.74227)"
                      clipPath="url(#clipPath293)"
                    />
                    <path
                      id="path294"
                      d="m 0,0 c -0.174,-0.354 -0.322,-0.722 -0.436,-1.099 -0.07,-0.231 -0.136,-0.463 -0.226,-0.687 0.067,0.16 0.134,0.319 0.201,0.478 -0.193,-0.458 -0.427,-0.893 -0.604,-1.36 -0.121,-0.319 -0.124,-0.665 -0.244,-0.983 0.067,0.16 0.134,0.319 0.202,0.478 -0.008,-0.017 -0.015,-0.033 -0.022,-0.05 -0.147,-0.229 -0.226,-0.477 -0.238,-0.743 -0.059,-0.266 -0.047,-0.532 0.036,-0.798 0.128,-0.464 0.486,-0.967 0.919,-1.195 0.464,-0.245 1.027,-0.368 1.541,-0.202 0.463,0.15 0.991,0.454 1.195,0.919 0.157,0.355 0.278,0.659 0.341,1.033 0.036,0.211 0.096,0.409 0.179,0.606 L 2.642,-4.081 c 0.2,0.457 0.432,0.894 0.604,1.365 0.123,0.336 0.2,0.686 0.337,1.018 -0.068,-0.16 -0.135,-0.319 -0.202,-0.478 0.023,0.053 0.047,0.105 0.073,0.157 0.146,0.23 0.225,0.478 0.237,0.744 0.06,0.266 0.048,0.531 -0.035,0.797 C 3.528,-0.014 3.169,0.489 2.736,0.717 2.272,0.963 1.71,1.086 1.195,0.919 0.719,0.765 0.229,0.464 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1270.3181,374.42893)"
                      clipPath="url(#clipPath295)"
                    />
                    <path
                      id="path296"
                      d="m 0,0 c 2.381,-1.218 4.458,-2.559 6.558,-4.201 0.848,-0.662 1.528,-1.192 2.19,-2.02 0.601,-0.752 1.507,-1.346 2.049,-2.114 2.211,-3.129 7.416,-0.135 5.181,3.029 C 12.765,-0.758 7.964,2.656 3.028,5.181 -0.403,6.936 -3.442,1.761 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1344.9385,370.0732)"
                      clipPath="url(#clipPath297)"
                    />
                    <path
                      id="path298"
                      d="M 0,0 C -0.06,-0.024 -0.114,-0.058 -0.162,-0.101 0.077,0 0.316,0.101 0.555,0.202 L 0.472,0.186 C 1.445,-0.071 2.418,-0.329 3.391,-0.586 3.371,-0.57 3.351,-0.555 3.331,-0.539 3.487,-0.741 3.643,-0.944 3.8,-1.146 3.788,-1.122 3.776,-1.097 3.764,-1.072 3.865,-1.311 3.966,-1.55 4.067,-1.789 3.614,-0.558 3.112,0.793 1.655,1.125 0.131,1.472 -1.401,0.775 -2.151,-0.602 -2.88,-1.939 -2.814,-3.729 -1.636,-4.818 -0.939,-5.462 -0.113,-5.795 0.787,-6.04 0.548,-5.939 0.31,-5.839 0.071,-5.738 0.107,-5.756 0.144,-5.774 0.18,-5.793 l -0.607,0.469 c 0.035,-0.034 0.07,-0.068 0.104,-0.101 l -0.469,0.607 c 0.318,-0.475 0.461,-0.959 0.886,-1.381 0.83,-0.824 1.976,-1.194 3.13,-0.88 1.32,0.36 2.278,1.592 2.293,2.964 0.007,0.597 -0.192,1.207 -0.337,1.783 -0.383,1.523 -2.172,2.587 -3.69,2.096 -1.575,-0.51 -2.506,-2.059 -2.095,-3.691 0.074,-0.293 0.148,-0.587 0.222,-0.881 -0.036,0.266 -0.072,0.531 -0.108,0.797 l 0.008,-0.104 0.879,2.121 -0.05,-0.061 C 0.787,-1.798 1.229,-1.541 1.67,-1.284 1.643,-1.29 1.615,-1.296 1.588,-1.303 H 3.183 C 3.155,-1.294 3.127,-1.286 3.1,-1.278 3.541,-1.535 3.982,-1.792 4.423,-2.05 4.395,-2.019 4.366,-1.988 4.337,-1.957 l 0.469,-0.607 c -0.269,0.546 -0.537,1.048 -0.99,1.483 -0.441,0.422 -0.964,0.701 -1.554,0.859 -0.2,0.054 -0.389,0.095 -0.583,0.175 0.239,-0.1 0.478,-0.201 0.717,-0.302 C 2.252,-0.276 2.128,-0.203 2,-0.106 2.202,-0.263 2.404,-0.419 2.607,-0.575 2.577,-0.539 2.548,-0.503 2.518,-0.466 2.775,-0.908 3.032,-1.349 3.29,-1.79 L 3.248,-1.657 C 3.283,-1.923 3.319,-2.189 3.355,-2.455 3.357,-2.408 3.358,-2.36 3.36,-2.313 3.324,-2.579 3.289,-2.845 3.253,-3.111 3.267,-3.065 3.282,-3.02 3.296,-2.975 3.196,-3.214 3.095,-3.453 2.994,-3.691 3.018,-3.651 3.041,-3.61 3.065,-3.569 2.908,-3.772 2.752,-3.974 2.596,-4.176 2.651,-4.1 2.712,-4.027 2.778,-3.959 2.576,-4.115 2.373,-4.271 2.171,-4.428 c 0.032,0.025 0.065,0.05 0.097,0.075 -0.505,-0.136 -1.009,-0.273 -1.514,-0.409 0.034,-0.002 0.069,-0.004 0.103,-0.006 -0.863,0.496 -1.727,0.991 -2.59,1.486 0.014,-0.024 0.028,-0.047 0.042,-0.071 -0.101,0.239 -0.202,0.478 -0.303,0.716 0.279,-0.758 0.496,-1.605 1.112,-2.168 0.711,-0.65 1.591,-0.977 2.55,-0.849 0.508,0.069 0.903,0.241 1.36,0.473 1.403,0.711 1.918,2.799 1.077,4.105 C 3.181,0.356 1.5,0.761 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1357.3311,364.50573)"
                      clipPath="url(#clipPath299)"
                    />
                    <path
                      id="path300"
                      d="m 0,0 c -0.019,0.47 -0.133,0.908 -0.301,1.343 -0.077,0.201 -0.159,0.399 -0.227,0.603 -0.026,0.076 -0.049,0.151 -0.07,0.228 -0.013,0.051 -0.025,0.102 -0.036,0.154 -0.02,0.113 -0.02,0.102 0,-0.034 -0.037,0.085 -0.004,0.237 -0.002,0.326 -0.005,-0.211 0.014,0.043 0.024,0.087 0.052,0.232 0.128,0.459 0.173,0.693 0.115,0.605 0.096,1.183 -0.202,1.737 -0.165,0.307 -0.521,0.495 -0.864,0.495 -0.38,0 -0.649,-0.202 -0.863,-0.495 C -2.595,4.825 -2.71,4.441 -2.772,4.064 -2.799,3.901 -2.818,3.736 -2.852,3.573 -2.867,3.504 -2.885,3.434 -2.906,3.366 -2.913,3.343 -2.921,3.32 -2.928,3.298 -2.967,3.194 -2.961,3.209 -2.909,3.341 -2.925,3.31 -2.942,3.28 -2.96,3.251 -3,3.188 -2.981,3.21 -2.903,3.315 -2.889,3.259 -3.172,3.145 -2.906,3.298 -2.712,3.41 -2.852,3.319 -2.935,3.295 -3.005,3.275 -3.077,3.259 -3.146,3.236 -3.369,3.164 -3.683,3.034 -3.837,2.846 -4.104,2.6 -3.833,2.608 -3.024,2.871 -2.835,2.755 -2.728,2.603 -2.705,2.415 -2.691,2.363 -2.692,2.311 -2.708,2.258 c 0.013,0.054 0.028,0.108 0.045,0.16 -0.655,0.089 -1.31,0.178 -1.965,0.266 0.042,-0.469 0.106,-0.923 0.369,-1.327 0.215,-0.329 0.505,-0.596 0.784,-0.869 0.565,-0.554 1.131,-1.108 1.696,-1.663 0.374,-0.366 1.046,-0.401 1.414,0 0.364,0.396 0.399,1.023 0,1.414 C -0.858,0.723 -1.351,1.207 -1.844,1.69 -2.067,1.909 -2.3,2.121 -2.511,2.351 -2.56,2.404 -2.615,2.53 -2.532,2.367 -2.544,2.39 -2.643,2.583 -2.595,2.462 -2.546,2.336 -2.614,2.567 -2.62,2.593 -2.578,2.421 -2.621,2.609 -2.628,2.684 -2.671,3.185 -2.975,3.596 -3.495,3.666 -3.988,3.733 -4.449,3.431 -4.592,2.95 -4.694,2.604 -4.744,2.225 -4.619,1.878 c 0.148,-0.412 0.491,-0.783 0.935,-0.875 0.266,-0.056 0.515,-0.038 0.766,0.068 0.123,0.052 0.179,0.091 0.284,0.172 0.057,0.044 0.143,0.156 0.211,0.189 -0.015,-0.008 -0.19,-0.12 -0.192,-0.124 0.011,0.025 0.152,0.042 0.176,0.049 0.163,0.045 0.333,0.104 0.481,0.182 0.532,0.28 0.863,0.831 1.01,1.399 0.057,0.221 0.078,0.449 0.118,0.673 0.021,0.117 0.05,0.23 0.081,0.345 0.043,0.16 -0.02,-0.018 -0.015,-0.024 -0.013,0.016 0.114,0.183 0.123,0.196 H -2.368 C -2.315,4.026 -2.316,4.031 -2.372,4.141 -2.347,4.028 -2.345,4.036 -2.366,4.165 -2.341,4.136 -2.368,3.951 -2.368,3.915 -2.366,4.158 -2.391,3.823 -2.405,3.762 -2.426,3.675 -2.451,3.588 -2.474,3.501 -2.612,2.981 -2.674,2.484 -2.589,1.951 -2.53,1.58 -2.394,1.235 -2.258,0.887 -2.19,0.712 -2.123,0.537 -2.07,0.357 -2.047,0.281 -2.033,0.203 -2.011,0.126 -1.991,0.012 -1.99,0.023 -2.01,0.158 -2.004,0.106 -2.001,0.053 -2,0 c 0.021,-0.522 0.445,-1.025 1,-1 0.524,0.023 1.022,0.44 1,1"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1368.0544,384.96973)"
                      clipPath="url(#clipPath301)"
                    />
                    <path
                      id="path302"
                      d="M 0,0 C -0.101,0.032 -0.185,0.078 -0.267,0.139 -0.348,0.2 -0.5,0.353 -0.6,0.455 c -0.238,0.243 -0.46,0.501 -0.721,0.72 -0.372,0.312 -0.777,0.526 -1.194,0.768 -0.365,0.212 -0.669,0.495 -1,0.755 -1.483,1.166 -3.051,2.346 -4.707,3.255 -1.13,0.619 -2.14,-1.107 -1.01,-1.727 0.831,-0.456 1.608,-0.995 2.377,-1.547 0.764,-0.55 1.552,-1.078 2.276,-1.68 0.378,-0.314 0.757,-0.618 1.188,-0.858 0.339,-0.188 0.643,-0.35 0.919,-0.623 0.596,-0.592 1.111,-1.183 1.94,-1.447 0.515,-0.163 1.091,0.193 1.23,0.699 C 0.847,-0.691 0.516,-0.164 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1359.0604,377.41493)"
                      clipPath="url(#clipPath303)"
                    />
                    <path
                      id="path304"
                      d="m 0,0 -4.967,28.166 c 0,0 4.82,5.591 12.049,3.094 2.21,-0.763 0.32,3.759 0.209,5.64 0.136,-1.031 0.676,-2.027 1.531,-2.821"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1270.8477,386.91533)"
                      clipPath="url(#clipPath305)"
                    />
                    <path
                      id="path306"
                      d="m 0,0 c -0.558,3.164 -1.116,6.328 -1.674,9.492 -0.893,5.066 -1.787,10.133 -2.68,15.199 -0.204,1.158 -0.408,2.317 -0.613,3.475 -0.043,-0.162 -0.085,-0.324 -0.128,-0.487 1.28,1.477 3.165,2.574 5.013,3.139 1.883,0.576 3.872,0.585 5.77,0.068 0.593,-0.161 1.321,-0.56 1.92,-0.191 0.459,0.282 0.558,0.85 0.559,1.348 0,1.612 -0.742,3.128 -0.858,4.724 C 6.982,36.722 6.654,36.678 6.327,36.634 6.51,35.447 7.129,34.418 7.986,33.593 8.45,33.146 9.158,33.852 8.693,34.3 7.944,35.022 7.451,35.865 7.291,36.9 7.206,37.453 6.269,37.327 6.309,36.767 6.385,35.717 6.701,34.694 6.926,33.67 7.003,33.317 7.456,31.707 7.023,31.543 6.844,31.475 6.408,31.718 6.244,31.767 5.837,31.889 5.425,31.99 5.008,32.068 4.289,32.201 3.556,32.274 2.825,32.269 1.536,32.26 0.245,32.021 -0.964,31.574 c -1.668,-0.617 -3.229,-1.59 -4.502,-2.837 -0.259,-0.254 -0.5,-0.454 -0.463,-0.848 0.018,-0.192 0.068,-0.386 0.101,-0.575 L -4.339,18.873 -2.23,6.909 c 0.276,-1.562 0.551,-3.124 0.827,-4.687 0.138,-0.782 0.214,-1.61 0.419,-2.379 0.01,-0.035 0.013,-0.073 0.02,-0.109 C -0.853,-0.898 0.111,-0.63 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1271.4905,386.73813)"
                      clipPath="url(#clipPath307)"
                    />
                    <path
                      id="path308"
                      d="M 0,0 C 0.855,0.794 1.395,1.79 1.531,2.82 1.42,0.94 -0.47,-3.582 1.74,-2.819 8.969,-0.322 13.789,-5.913 13.789,-5.913 L 8.822,-34.079 c 0,0 22.132,28.324 21.238,32.674 -0.893,4.35 -16.567,15.469 -16.567,15.469"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1356.1252,368.4984)"
                      clipPath="url(#clipPath309)"
                    />
                    <path
                      id="path310"
                      d="M 0,0 C 0.857,0.826 1.476,1.855 1.659,3.041 1.332,3.085 1.005,3.13 0.677,3.174 0.587,1.931 -1.585,-3.831 1.52,-2.947 c 2,0.569 3.921,0.838 5.972,0.332 1.421,-0.351 2.749,-0.997 3.938,-1.847 0.59,-0.422 1.174,-0.901 1.652,-1.451 -0.043,0.162 -0.086,0.324 -0.129,0.486 -0.558,-3.164 -1.116,-6.328 -1.674,-9.492 -0.893,-5.066 -1.786,-10.132 -2.68,-15.199 -0.204,-1.158 -0.408,-2.316 -0.613,-3.475 -0.075,-0.429 0.494,-0.924 0.836,-0.486 1.644,2.105 3.258,4.234 4.86,6.371 3.241,4.322 6.427,8.69 9.459,13.161 1.442,2.125 2.854,4.274 4.163,6.484 0.951,1.603 1.901,3.252 2.545,5.008 0.193,0.528 0.373,1.096 0.383,1.664 0.013,0.69 -0.33,1.359 -0.681,1.933 -1.269,2.076 -3.174,3.804 -4.963,5.42 -3.467,3.133 -7.186,6.009 -10.981,8.733 -0.071,0.051 -0.143,0.103 -0.215,0.154 -0.526,0.373 -1.026,-0.494 -0.505,-0.864 3.187,-2.262 6.288,-4.67 9.259,-7.208 2.011,-1.718 4.034,-3.504 5.702,-5.565 0.517,-0.639 1.077,-1.365 1.317,-2.164 0.091,-0.305 0.081,-0.229 0.061,-0.556 -0.008,-0.125 -0.065,-0.401 -0.133,-0.646 -0.437,-1.565 -1.29,-3.034 -2.089,-4.437 -1.197,-2.1 -2.508,-4.135 -3.848,-6.146 -2.981,-4.473 -6.137,-8.83 -9.347,-13.141 -1.235,-1.658 -2.48,-3.309 -3.736,-4.953 -0.415,-0.542 -0.831,-1.084 -1.248,-1.625 -0.143,-0.186 -0.454,-0.511 -0.621,-0.802 -0.023,-0.04 -0.06,-0.077 -0.089,-0.114 0.279,-0.162 0.557,-0.324 0.836,-0.486 0.341,1.935 0.682,3.871 1.024,5.807 0.697,3.954 1.394,7.909 2.092,11.863 0.548,3.113 1.097,6.226 1.646,9.338 0.084,0.475 0.374,1.257 0.051,1.671 -0.798,1.024 -2.098,1.845 -3.22,2.445 -2.323,1.243 -4.969,1.69 -7.565,1.209 C 2.595,-1.596 2.215,-1.687 1.84,-1.797 1.653,-1.851 1.161,-2.125 0.963,-2.05 0.792,-1.985 0.817,-1.692 0.82,-1.499 0.838,-0.405 1.213,0.688 1.446,1.749 1.55,2.219 1.642,2.693 1.677,3.174 1.717,3.728 0.781,3.867 0.695,3.307 0.535,2.272 0.043,1.429 -0.707,0.707 -1.171,0.26 -0.464,-0.447 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1356.5967,368.96987)"
                      clipPath="url(#clipPath311)"
                    />
                    <path
                      id="path312"
                      d="m 0,0 -4.967,28.166 c 0,0 4.82,5.591 12.049,3.094 2.21,-0.763 0.32,3.759 0.209,5.64 0.136,-1.031 0.676,-2.027 1.531,-2.821"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1269.6992,416.4448)"
                      clipPath="url(#clipPath313)"
                    />
                    <path
                      id="path314"
                      d="m 0,0 c -0.558,3.164 -1.116,6.328 -1.674,9.492 -0.893,5.066 -1.787,10.133 -2.68,15.199 -0.204,1.158 -0.408,2.317 -0.613,3.475 -0.043,-0.162 -0.085,-0.324 -0.128,-0.487 1.28,1.477 3.165,2.574 5.013,3.139 1.883,0.576 3.872,0.585 5.77,0.068 0.593,-0.161 1.321,-0.56 1.92,-0.191 0.459,0.282 0.558,0.85 0.559,1.348 0,1.612 -0.742,3.128 -0.858,4.724 L 6.327,36.634 C 6.51,35.447 7.129,34.418 7.986,33.593 8.45,33.146 9.158,33.852 8.693,34.3 7.944,35.022 7.451,35.865 7.291,36.9 7.206,37.453 6.269,37.327 6.309,36.767 6.385,35.717 6.701,34.694 6.926,33.67 7.003,33.317 7.456,31.707 7.023,31.543 6.844,31.475 6.408,31.718 6.243,31.767 5.837,31.889 5.425,31.99 5.008,32.068 4.289,32.201 3.556,32.274 2.825,32.269 1.536,32.26 0.245,32.021 -0.964,31.574 c -1.668,-0.617 -3.229,-1.59 -4.502,-2.837 -0.259,-0.254 -0.5,-0.454 -0.463,-0.848 0.018,-0.192 0.068,-0.386 0.101,-0.575 L -4.339,18.873 -2.23,6.909 c 0.276,-1.562 0.551,-3.124 0.827,-4.687 0.138,-0.782 0.214,-1.61 0.419,-2.379 0.01,-0.035 0.013,-0.073 0.02,-0.109 C -0.853,-0.898 0.111,-0.63 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1270.342,416.2676)"
                      clipPath="url(#clipPath315)"
                    />
                    <path
                      id="path316"
                      d="M 0,0 -4.03,21.257 0.437,27.388 3.491,3.82 V 2.337 L 0,-0.523"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1263.0769,378.8904)"
                      clipPath="url(#clipPath317)"
                    />
                    <path
                      id="path318"
                      d="m 0,0 -0.311,13.658 1.706,9.674 3.261,18.492 c 0,0 -4.82,5.591 -12.048,3.095 -2.211,-0.764 -0.32,3.759 -0.21,5.639 -0.135,-1.031 -0.676,-2.027 -1.531,-2.821"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1367.9079,405.51267)"
                      clipPath="url(#clipPath319)"
                    />
                    <path
                      id="path320"
                      d="m 0,0 c -0.094,4.113 -0.187,8.227 -0.281,12.34 -0.007,0.332 -0.015,0.664 -0.022,0.996 -0.003,0.101 0.008,0.484 -0.022,0.208 0.077,0.712 0.252,1.428 0.376,2.133 0.414,2.346 0.827,4.691 1.241,7.037 0.597,3.387 1.194,6.774 1.791,10.161 0.416,2.354 0.831,4.708 1.246,7.063 0.097,0.547 0.219,1.097 0.291,1.648 0.063,0.485 -0.202,0.708 -0.529,1.022 -1.913,1.831 -4.416,3.074 -7.051,3.38 -0.929,0.108 -1.863,0.088 -2.789,-0.041 -0.505,-0.07 -1.005,-0.171 -1.497,-0.305 -0.201,-0.055 -0.913,-0.425 -1.116,-0.308 -0.217,0.126 -0.08,0.885 -0.052,1.095 0.099,0.736 0.293,1.459 0.462,2.181 0.15,0.642 0.302,1.289 0.35,1.948 0.04,0.554 -0.896,0.693 -0.982,0.133 -0.16,-1.035 -0.652,-1.878 -1.402,-2.6 -0.465,-0.447 0.243,-1.154 0.707,-0.707 0.857,0.826 1.476,1.855 1.659,3.041 l -0.982,0.133 c -0.09,-1.243 -2.262,-7.005 0.843,-6.121 2,0.569 3.921,0.838 5.972,0.332 1.421,-0.351 2.749,-0.998 3.938,-1.847 0.59,-0.422 1.174,-0.901 1.651,-1.451 L 3.674,41.957 C 2.63,36.036 1.586,30.115 0.542,24.194 0.122,21.814 -0.297,19.435 -0.717,17.055 -0.914,15.942 -1.242,14.776 -1.31,13.645 -1.374,12.581 -1.261,11.474 -1.237,10.41 -1.158,6.94 -1.079,3.47 -1,0 -0.985,-0.643 0.015,-0.645 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1368.5745,405.51267)"
                      clipPath="url(#clipPath321)"
                    />
                    <path
                      id="path322"
                      d="m 0,0 -4.322,-22.41 c 0,0 -1.251,14.433 -0.94,14.221 0.31,-0.212 1.913,10.128 1.913,10.128 z"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1374.5103,376.3828)"
                      clipPath="url(#clipPath323)"
                    />
                    <path
                      id="path324"
                      d="M 0,0 C -0.855,0.794 -1.395,1.79 -1.531,2.82 -1.42,0.94 0.47,-3.582 -1.74,-2.819 -8.969,-0.322 -13.789,-5.913 -13.789,-5.913 l 4.967,-28.166 c 0,0 -22.132,28.324 -21.238,32.674 0.893,4.35 16.567,15.469 16.567,15.469"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1281.4619,369.64333)"
                      clipPath="url(#clipPath325)"
                    />
                    <path
                      id="path326"
                      d="m 0,0 c -0.75,0.722 -1.242,1.565 -1.402,2.6 -0.086,0.554 -1.023,0.427 -0.982,-0.133 0.076,-1.05 0.392,-2.073 0.616,-3.097 0.078,-0.353 0.53,-1.963 0.098,-2.127 -0.179,-0.068 -0.616,0.175 -0.78,0.224 -0.406,0.122 -0.819,0.223 -1.236,0.301 -0.719,0.133 -1.451,0.206 -2.183,0.201 -1.288,-0.009 -2.58,-0.247 -3.788,-0.695 -1.669,-0.617 -3.23,-1.59 -4.502,-2.837 -0.259,-0.254 -0.501,-0.453 -0.463,-0.848 0.018,-0.192 0.068,-0.386 0.101,-0.575 l 1.488,-8.441 2.11,-11.963 c 0.275,-1.563 0.551,-3.125 0.827,-4.688 0.133,-0.755 0.162,-1.653 0.419,-2.379 0.012,-0.033 0.013,-0.074 0.019,-0.109 0.279,0.163 0.557,0.325 0.836,0.487 -1.514,1.938 -3.103,4.035 -4.64,6.083 -3.174,4.231 -6.294,8.506 -9.272,12.878 -1.431,2.099 -2.832,4.221 -4.142,6.398 -0.958,1.59 -1.93,3.221 -2.612,4.953 -0.117,0.297 -0.226,0.598 -0.312,0.906 -0.068,0.246 -0.125,0.52 -0.133,0.646 -0.02,0.329 -0.032,0.247 0.061,0.556 0.106,0.352 0.286,0.677 0.477,0.989 1.246,2.038 3.148,3.725 4.907,5.308 3.377,3.039 6.988,5.838 10.678,8.486 0.072,0.052 0.144,0.103 0.216,0.154 0.52,0.37 0.021,1.237 -0.505,0.864 -3.293,-2.338 -6.499,-4.827 -9.565,-7.454 -2.023,-1.733 -4.065,-3.538 -5.724,-5.634 -0.921,-1.164 -1.796,-2.422 -1.435,-3.955 0.372,-1.577 1.227,-3.076 2.009,-4.477 1.187,-2.126 2.503,-4.181 3.848,-6.21 3.028,-4.569 6.246,-9.013 9.518,-13.41 1.265,-1.7 2.541,-3.392 3.827,-5.075 0.66,-0.863 1.288,-1.78 2.003,-2.599 0.032,-0.036 0.059,-0.076 0.089,-0.114 0.341,-0.437 0.911,0.057 0.836,0.486 l -1.674,9.492 c -0.894,5.066 -1.787,10.133 -2.68,15.199 -0.205,1.158 -0.409,2.317 -0.613,3.475 -0.043,-0.162 -0.086,-0.324 -0.129,-0.486 1.281,1.476 3.166,2.574 5.014,3.138 1.883,0.576 3.871,0.586 5.769,0.068 0.594,-0.161 1.322,-0.56 1.92,-0.191 0.46,0.282 0.559,0.85 0.559,1.348 0,1.612 -0.742,3.128 -0.857,4.724 L -2.366,2.334 C -2.183,1.148 -1.564,0.119 -0.707,-0.707 -0.243,-1.154 0.465,-0.448 0,0"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1281.9333,369.17187)"
                      clipPath="url(#clipPath327)"
                    />
                    <path
                      id="path328"
                      d="M 0,0 -4.03,21.257 0.437,27.388 3.491,3.82 V 2.337 L 0,-0.523"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1368.2676,372.3428)"
                      clipPath="url(#clipPath329)"
                    />
                    <path
                      id="path330"
                      d="M 0,0 -4.03,21.257 0.437,27.388 3.491,3.82 V 2.337 L 0,-0.523"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1378.6959,379.79987)"
                      clipPath="url(#clipPath331)"
                    />
                    <path
                      id="path332"
                      d="M 0,0 -4.03,18.961 0.437,24.43 3.491,3.407 V 2.084 L 0,-0.467"
                      style={{
                        fill: "#000000",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1389.124,379.44973)"
                      clipPath="url(#clipPath333)"
                    />
                  </g>
                  <g id="face_shading_front" data-role="face-shading">
                    <g
                      opacity={0.100006}
                      id="g335"
                      clipPath="url(#clipPath336)"
                    >
                      <path
                        d="m 0,0 c 0,13.782 1.895,24.599 13.82,24.599 11.924,0 21.591,-11.173 21.591,-24.955 0,-13.783 -5.443,-47.511 -17.368,-47.511 C 6.119,-47.867 0,-13.783 0,0"
                        style={{
                          fill: "#1b0000",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "none",
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1320.4728,403.18053)"
                        clipPath="url(#clipPath334)"
                        id="path335"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g id="NECK_ART" data-role="art">
                <path
                  id="path18"
                  d="m 0,0 2.974,-13.151 c 0.031,-0.137 0.086,-0.272 0.168,-0.404 1.272,-2.069 11.82,-20.109 -7.114,-20.286 -0.299,-0.003 -0.596,-0.013 -0.891,-0.036 -2.79,-0.22 -19.981,-0.76 -7.934,20.782 0.075,0.133 0.125,0.27 0.149,0.407 l 2.19,12.638 c 0.156,0.894 1.376,1.679 3.181,2.028 0.039,0.008 0.078,0.015 0.118,0.023 C -3.937,2.604 -0.359,1.586 0,0"
                  style={{
                    fill: "#d48455",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#000000",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1326.9467,471.73333)"
                  clipPath="url(#clipPath19)"
                />
                <path
                  id="path22"
                  d="M 0,0 V -2.96"
                  style={{
                    fill: "#d48455",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#000000",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1321.6029,598.72093)"
                  clipPath="url(#clipPath23)"
                />
                <path
                  id="path24"
                  d="m 0,0 c -1.427,-0.213 -2.815,0.477 -3.1,1.541 -0.286,1.065 0.64,2.1 2.067,2.313 C 0.393,4.066 1.782,3.376 2.067,2.312 2.352,1.248 1.427,0.213 0,0"
                  style={{
                    fill: "#d48455",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#000000",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1322.2919,608.74387)"
                  clipPath="url(#clipPath25)"
                />
              </g>
            </g>
            <g
              id="L_shoulder"
              data-part="shoulder"
              data-side="L"
              data-parent="TORSO"
              data-pivot-x={1399}
              data-pivot-y={535}
            >
              <g
                id="L_upper_arm"
                transform={leftArmTransform}
                data-part="upper_arm"
                data-pivot-x={1399}
                data-pivot-y={535}
                data-side="L"
                data-parent="L_shoulder"
              >
                <ellipse
                  id="L_elbow_cover"
                  cx={1437}
                  cy={630}
                  rx={18}
                  ry={21}
                  style={{
                    fill: "#4a4234",
                    fillOpacity: 1,
                    stroke: "none",
                  }}
                  data-role="joint-cover"
                  data-joint="elbow"
                  data-side="L"
                />
                <g
                  id="L_forearm"
                  transform={leftElbowTransform}
                  data-part="forearm"
                  data-pivot-x={1437}
                  data-pivot-y={630}
                  data-side="L"
                  data-parent="L_upper_arm"
                >
                  <g id="L_FOREARM_ART" data-role="art">
                    <path
                      id="path90"
                      d="m 0,0 -13.791,-2.247 c -1.723,-0.281 -2.733,-3.209 -2.686,-7.787 0.04,-3.921 0.852,-8.636 2.227,-12.933 L 2.125,-74.149 c 1.622,-5.067 3.946,-8.375 5.686,-8.091 l 7.564,1.232 c 1.54,0.251 2.232,3.489 1.722,8.048 l -5.428,48.444 c -0.722,6.445 -2.706,13.363 -5.246,18.29 v 0 C 4.232,-1.977 1.877,0.306 0,0"
                      style={{
                        fill: "#d48455",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1445.8447,623.41333)"
                      clipPath="url(#path90_motion_clip)"
                      data-role="exposed-skin-fragment"
                    />
                    <g id="L_forearm_sleeve" data-part="sleeve">
                      <path
                        id="L_forearm_sleeve_fill"
                        d="M 1402.649,610.088 1402.728,610.335 1402.806,610.583 1402.884,610.831 1402.963,611.081 1403.041,611.332 1403.119,611.583 1403.198,611.835 1403.276,612.088 1403.354,612.342 1403.433,612.597 1403.511,612.853 1403.589,613.109 1403.667,613.366 1403.746,613.624 1403.824,613.883 1403.902,614.143 1403.980,614.403 1404.058,614.664 1404.136,614.926 1404.214,615.189 1404.292,615.452 1404.370,615.717 1404.448,615.982 1404.525,616.247 1404.603,616.514 1404.681,616.781 1404.759,617.049 1404.836,617.318 1404.914,617.587 1404.991,617.857 1405.068,618.128 1405.146,618.400 1405.223,618.672 1405.300,618.945 1405.377,619.218 1405.454,619.492 1405.531,619.767 1405.608,620.043 1405.685,620.319 1405.762,620.596 1405.838,620.874 1405.915,621.152 1405.991,621.430 1406.068,621.710 1406.144,621.990 1406.220,622.271 1406.296,622.552 1406.372,622.834 1406.448,623.116 1406.524,623.399 1406.599,623.683 1406.675,623.967 1406.750,624.252 1406.826,624.537 1406.901,624.823 1406.976,625.109 1407.051,625.396 1407.126,625.684 1407.200,625.972 1407.275,626.260 1407.349,626.549 1407.424,626.839 1407.498,627.129 1407.572,627.420 1407.646,627.711 1407.720,628.002 1407.793,628.294 1407.867,628.587 1407.940,628.880 1408.013,629.173 1408.086,629.467 1408.159,629.762 1408.231,630.057 1408.304,630.352 1408.376,630.648 1408.449,630.944 1408.521,631.240 1408.592,631.537 1408.664,631.835 1408.736,632.132 1408.807,632.431 1408.878,632.729 1408.949,633.028 1409.020,633.327 1409.090,633.627 1409.161,633.927 1409.231,634.228 1409.301,634.528 1409.371,634.830 1409.441,635.131 1409.510,635.433 1409.579,635.735 1409.648,636.038 1409.717,636.340 1409.786,636.643 1409.854,636.947 1409.922,637.250 1409.990,637.554 1410.058,637.859 1410.126,638.163 1410.193,638.468 1410.260,638.773 1410.327,639.079 1410.394,639.384 1410.460,639.690 1410.526,639.996 1410.592,640.303 1410.658,640.609 1410.723,640.916 1410.789,641.223 1410.854,641.530 1410.918,641.838 1410.983,642.145 1411.047,642.453 1411.111,642.761 1411.175,643.069 1411.238,643.378 1411.302,643.686 1411.364,643.995 1411.427,644.304 1411.490,644.613 1411.552,644.922 1411.614,645.231 1411.675,645.541 1411.737,645.850 1411.798,646.160 1411.858,646.470 1411.919,646.780 1411.979,647.090 1412.039,647.400 1412.099,647.710 1412.158,648.020 1412.217,648.331 1412.276,648.641 1412.334,648.952 1412.393,649.262 1412.450,649.573 1412.508,649.883 1412.565,650.194 1412.622,650.505 1412.679,650.816 1412.735,651.126 1412.791,651.437 1412.847,651.748 1412.926,652.186 1413.006,652.623 1413.088,653.060 1413.170,653.497 1413.254,653.932 1413.339,654.367 1413.425,654.802 1413.513,655.235 1413.602,655.668 1413.692,656.101 1413.783,656.533 1413.875,656.964 1413.968,657.394 1414.063,657.824 1414.158,658.253 1414.255,658.682 1414.353,659.109 1414.452,659.536 1414.552,659.963 1414.653,660.388 1414.755,660.813 1414.858,661.237 1414.963,661.661 1415.068,662.083 1415.174,662.505 1415.282,662.927 1415.390,663.347 1415.500,663.767 1415.610,664.186 1415.722,664.604 1415.834,665.021 1415.948,665.438 1416.062,665.854 1416.177,666.269 1416.294,666.683 1416.411,667.096 1416.529,667.509 1416.648,667.921 1416.768,668.332 1416.889,668.742 1417.011,669.151 1417.134,669.559 1417.257,669.967 1417.382,670.373 1417.507,670.779 1417.633,671.184 1417.760,671.588 1417.888,671.991 1418.017,672.394 1418.146,672.795 1418.277,673.195 1418.408,673.595 1418.540,673.994 1418.672,674.391 1418.806,674.788 1418.940,675.184 1419.075,675.579 1419.210,675.973 1419.347,676.366 1419.484,676.758 1419.622,677.149 1419.760,677.539 1419.900,677.928 1420.040,678.316 1420.180,678.703 1420.322,679.089 1420.464,679.474 1420.606,679.858 1420.749,680.241 1420.893,680.623 1421.038,681.004 1421.183,681.384 1421.329,681.763 1421.475,682.141 1421.622,682.518 1421.770,682.894 1421.918,683.268 1422.066,683.642 1422.215,684.014 1422.365,684.386 1422.515,684.756 1422.666,685.125 1422.818,685.493 1422.969,685.860 1423.122,686.226 1423.275,686.591 1423.428,686.955 1423.582,687.317 1423.736,687.678 1423.891,688.039 1424.046,688.398 1424.201,688.755 1424.357,689.112 1424.514,689.468 1424.671,689.822 1424.828,690.175 1424.986,690.527 1425.144,690.878 1425.302,691.227 1425.461,691.575 1425.620,691.923 1425.779,692.268 1425.939,692.613 1426.099,692.956 1426.260,693.298 1426.420,693.639 1426.581,693.979 1426.743,694.317 1426.904,694.654 1427.066,694.990 1427.228,695.325 1427.391,695.658 1427.554,695.990 1427.716,696.320 1427.880,696.650 1428.043,696.978 1428.206,697.304 1428.370,697.630 1428.534,697.954 1428.698,698.276 1428.863,698.597 1429.027,698.917 1429.192,699.236 1429.357,699.553 1429.522,699.869 1429.687,700.183 1429.852,700.497 1430.017,700.808 1430.183,701.118 1430.348,701.427 1430.514,701.735 1430.679,702.041 1430.845,702.345 1431.011,702.649 1431.177,702.950 1431.342,703.251 1431.508,703.550 1431.674,703.847 1431.840,704.143 1432.006,704.437 1432.172,704.730 1432.338,705.022 1432.504,705.312 1432.670,705.600 1432.836,705.887 1433.001,706.173 1433.167,706.457 1433.333,706.739 1433.498,707.020 1433.664,707.300 1433.829,707.578 1433.995,707.854 1434.160,708.129 1434.325,708.402 1434.490,708.674 1434.654,708.944 1434.819,709.212 1434.984,709.479 1435.148,709.745 1435.312,710.009 1435.476,710.271 1435.640,710.531 1435.803,710.790 1435.967,711.047 1436.130,711.303 1436.293,711.557 1436.455,711.810 1436.618,712.060 1436.780,712.310 1436.942,712.557 1437.103,712.803 1437.265,713.047 1437.426,713.289 1437.586,713.530 1437.747,713.769 1437.907,714.007 1438.067,714.242 1438.226,714.476 1438.385,714.709 1438.544,714.939 1438.702,715.168 1438.860,715.395 1439.018,715.620 1439.175,715.844 1439.332,716.066 1439.488,716.286 1439.644,716.504 1439.800,716.721 1439.955,716.935 1440.109,717.148 1440.264,717.360 1440.417,717.569 1440.571,717.777 1440.723,717.982 1440.876,718.186 1441.027,718.388 1441.179,718.589 1441.330,718.787 1441.480,718.984 1441.629,719.179 1441.779,719.372 1441.927,719.563 1442.075,719.752 1442.223,719.939 1442.370,720.125 1442.516,720.308 1442.662,720.490 1442.807,720.670 1442.951,720.847 1443.095,721.023 1443.238,721.197 1443.381,721.370 1443.523,721.540 1443.664,721.708 1443.804,721.874 1443.944,722.039 1444.084,722.201 1444.222,722.361 1444.360,722.520 1444.497,722.676 1444.633,722.831 1444.769,722.983 1444.904,723.134 1445.038,723.283 1445.171,723.429 1445.304,723.574 1445.436,723.716 1445.567,723.857 1445.697,723.995 1445.826,724.131 1445.955,724.266 1446.083,724.398 1446.210,724.528 1446.336,724.657 1446.461,724.783 1446.585,724.907 1446.709,725.029 1446.831,725.149 1446.953,725.266 1447.074,725.382 1447.194,725.496 1447.313,725.607 1447.431,725.716 1447.548,725.824 1447.664,725.929 1447.780,726.032 1447.894,726.133 1448.007,726.231 1448.120,726.328 1448.231,726.422 1448.342,726.514 1448.451,726.604 1448.559,726.692 1448.667,726.778 1448.773,726.861 1448.878,726.942 1448.982,727.021 1449.086,727.098 1449.188,727.173 1449.289,727.245 1449.389,727.315 1449.488,727.383 1449.585,727.449 1449.682,727.512 1449.777,727.573 1449.872,727.632 1449.965,727.689 1450.057,727.743 1450.148,727.795 1450.238,727.845 1450.326,727.892 1450.414,727.937 1450.500,727.980 1450.585,728.021 1450.669,728.059 1450.751,728.095 1450.833,728.128 1450.913,728.159 1450.991,728.188 1451.069,728.215 1451.145,728.239 1451.220,728.261 1451.294,728.280 1451.367,728.297 1451.438,728.312 1451.508,728.324 1451.576,728.334 1451.643,728.341 1451.709,728.346 1451.774,728.349 1451.837,728.349 1451.899,728.347 1451.959,728.342 1452.018,728.335 1452.076,728.326 1452.132,728.313 1452.187,728.299 1452.240,728.282 1452.292,728.263 1468.451,728.739 1468.483,728.606 1468.515,728.463 1468.547,728.310 1468.579,728.148 1468.611,727.976 1468.643,727.794 1468.676,727.603 1468.708,727.402 1468.740,727.192 1468.773,726.972 1468.805,726.743 1468.837,726.505 1468.870,726.257 1468.902,726.001 1468.934,725.735 1468.966,725.460 1468.998,725.176 1469.030,724.884 1469.062,724.582 1469.094,724.272 1469.126,723.953 1469.158,723.625 1469.189,723.289 1469.220,722.944 1469.251,722.591 1469.282,722.230 1469.313,721.860 1469.344,721.482 1469.374,721.095 1469.404,720.700 1469.434,720.298 1469.463,719.887 1469.493,719.468 1469.522,719.042 1469.551,718.607 1469.579,718.165 1469.607,717.715 1469.635,717.258 1469.663,716.792 1469.690,716.320 1469.717,715.839 1469.743,715.352 1469.769,714.857 1469.795,714.354 1469.820,713.845 1469.845,713.328 1469.869,712.805 1469.893,712.274 1469.917,711.736 1469.940,711.191 1469.962,710.640 1469.984,710.081 1470.006,709.516 1470.027,708.944 1470.048,708.366 1470.068,707.781 1470.087,707.190 1470.106,706.592 1470.124,705.988 1470.142,705.377 1470.159,704.761 1470.176,704.138 1470.192,703.509 1470.207,702.874 1470.222,702.233 1470.236,701.586 1470.249,700.933 1470.262,700.274 1470.274,699.610 1470.285,698.940 1470.296,698.264 1470.305,697.583 1470.314,696.896 1470.323,696.204 1470.330,695.507 1470.337,694.804 1470.343,694.096 1470.348,693.383 1470.353,692.664 1470.356,691.941 1470.359,691.212 1470.361,690.479 1470.362,689.741 1470.362,688.998 1470.361,688.250 1470.360,687.498 1470.357,686.741 1470.354,685.979 1470.349,685.213 1470.344,684.442 1470.338,683.667 1470.331,682.888 1470.322,682.105 1470.313,681.317 1470.303,680.525 1470.292,679.729 1470.280,678.929 1470.266,678.125 1470.252,677.318 1470.237,676.506 1470.220,675.691 1470.203,674.872 1470.184,674.049 1470.164,673.223 1470.144,672.393 1470.122,671.560 1470.098,670.723 1470.074,669.884 1470.049,669.040 1470.022,668.194 1469.994,667.345 1469.965,666.492 1469.935,665.637 1469.904,664.778 1469.871,663.917 1469.837,663.052 1469.802,662.185 1469.765,661.316 1469.727,660.443 1469.688,659.569 1469.648,658.691 1469.606,657.811 1469.563,656.929 1469.519,656.044 1469.473,655.157 1469.426,654.268 1469.377,653.377 1469.328,652.484 1469.276,651.588 1469.224,650.691 1469.169,649.792 1469.114,648.891 1469.057,647.988 1468.998,647.084 1468.938,646.177 1468.877,645.270 1468.814,644.360 1468.749,643.450 1468.683,642.538 1468.616,641.624 1468.547,640.709 1468.476,639.793 1468.404,638.876 1468.330,637.958 1468.255,637.039 1468.178,636.119 1468.099,635.197 1468.019,634.275 1467.937,633.353 1467.853,632.429 1467.768,631.505 1467.681,630.580 1467.593,629.655 1467.502,628.729 1467.410,627.803 1467.316,626.877 1467.221,625.950 1467.124,625.023 1467.025,624.096 1466.924,623.168 1466.821,622.241 1466.717,621.314 1466.611,620.387 1466.503,619.460 1466.393,618.533 1466.281,617.606 1466.168,616.680 1466.052,615.754 1465.935,614.829 1465.816,613.904 1465.695,612.980 1465.572,612.056 1465.447,611.133 1465.320,610.211 1465.291,610.000 1402.621,610.000 1402.649,610.088 Z"
                        style={{
                          fill: "#4a4234",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "none",
                          strokeWidth: 2.5,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                      />
                      <path
                        id="L_forearm_sleeve_outline"
                        d="M 1403.119,611.583 1403.198,611.835 1403.276,612.088 1403.354,612.342 1403.433,612.597 1403.511,612.853 1403.589,613.109 1403.667,613.366 1403.746,613.624 1403.824,613.883 1403.902,614.143 1403.980,614.403 1404.058,614.664 1404.136,614.926 1404.214,615.189 1404.292,615.452 1404.370,615.717 1404.448,615.982 1404.525,616.247 1404.603,616.514 1404.681,616.781 1404.759,617.049 1404.836,617.318 1404.914,617.587 1404.991,617.857 1405.068,618.128 1405.146,618.400 1405.223,618.672 1405.300,618.945 1405.377,619.218 1405.454,619.492 1405.531,619.767 1405.608,620.043 1405.685,620.319 1405.762,620.596 1405.838,620.874 1405.915,621.152 1405.991,621.430 1406.068,621.710 1406.144,621.990 1406.220,622.271 1406.296,622.552 1406.372,622.834 1406.448,623.116 1406.524,623.399 1406.599,623.683 1406.675,623.967 1406.750,624.252 1406.826,624.537 1406.901,624.823 1406.976,625.109 1407.051,625.396 1407.126,625.684 1407.200,625.972 1407.275,626.260 1407.349,626.549 1407.424,626.839 1407.498,627.129 1407.572,627.420 1407.646,627.711 1407.720,628.002 1407.793,628.294 1407.867,628.587 1407.940,628.880 1408.013,629.173 1408.086,629.467 1408.159,629.762 1408.231,630.057 1408.304,630.352 1408.376,630.648 1408.449,630.944 1408.521,631.240 1408.592,631.537 1408.664,631.835 1408.736,632.132 1408.807,632.431 1408.878,632.729 1408.949,633.028 1409.020,633.327 1409.090,633.627 1409.161,633.927 1409.231,634.228 1409.301,634.528 1409.371,634.830 1409.441,635.131 1409.510,635.433 1409.579,635.735 1409.648,636.038 1409.717,636.340 1409.786,636.643 1409.854,636.947 1409.922,637.250 1409.990,637.554 1410.058,637.859 1410.126,638.163 1410.193,638.468 1410.260,638.773 1410.327,639.079 1410.394,639.384 1410.460,639.690 1410.526,639.996 1410.592,640.303 1410.658,640.609 1410.723,640.916 1410.789,641.223 1410.854,641.530 1410.918,641.838 1410.983,642.145 1411.047,642.453 1411.111,642.761 1411.175,643.069 1411.238,643.378 1411.302,643.686 1411.364,643.995 1411.427,644.304 1411.490,644.613 1411.552,644.922 1411.614,645.231 1411.675,645.541 1411.737,645.850 1411.798,646.160 1411.858,646.470 1411.919,646.780 1411.979,647.090 1412.039,647.400 1412.099,647.710 1412.158,648.020 1412.217,648.331 1412.276,648.641 1412.334,648.952 1412.393,649.262 1412.450,649.573 1412.508,649.883 1412.565,650.194 1412.622,650.505 1412.679,650.816 1412.735,651.126 1412.791,651.437 1412.847,651.748 1412.926,652.186 1413.006,652.623 1413.088,653.060 1413.170,653.497 1413.254,653.932 1413.339,654.367 1413.425,654.802 1413.513,655.235 1413.602,655.668 1413.692,656.101 1413.783,656.533 1413.875,656.964 1413.968,657.394 1414.063,657.824 1414.158,658.253 1414.255,658.682 1414.353,659.109 1414.452,659.536 1414.552,659.963 1414.653,660.388 1414.755,660.813 1414.858,661.237 1414.963,661.661 1415.068,662.083 1415.174,662.505 1415.282,662.927 1415.390,663.347 1415.500,663.767 1415.610,664.186 1415.722,664.604 1415.834,665.021 1415.948,665.438 1416.062,665.854 1416.177,666.269 1416.294,666.683 1416.411,667.096 1416.529,667.509 1416.648,667.921 1416.768,668.332 1416.889,668.742 1417.011,669.151 1417.134,669.559 1417.257,669.967 1417.382,670.373 1417.507,670.779 1417.633,671.184 1417.760,671.588 1417.888,671.991 1418.017,672.394 1418.146,672.795 1418.277,673.195 1418.408,673.595 1418.540,673.994 1418.672,674.391 1418.806,674.788 1418.940,675.184 1419.075,675.579 1419.210,675.973 1419.347,676.366 1419.484,676.758 1419.622,677.149 1419.760,677.539 1419.900,677.928 1420.040,678.316 1420.180,678.703 1420.322,679.089 1420.464,679.474 1420.606,679.858 1420.749,680.241 1420.893,680.623 1421.038,681.004 1421.183,681.384 1421.329,681.763 1421.475,682.141 1421.622,682.518 1421.770,682.894 1421.918,683.268 1422.066,683.642 1422.215,684.014 1422.365,684.386 1422.515,684.756 1422.666,685.125 1422.818,685.493 1422.969,685.860 1423.122,686.226 1423.275,686.591 1423.428,686.955 1423.582,687.317 1423.736,687.678 1423.891,688.039 1424.046,688.398 1424.201,688.755 1424.357,689.112 1424.514,689.468 1424.671,689.822 1424.828,690.175 1424.986,690.527 1425.144,690.878 1425.302,691.227 1425.461,691.575 1425.620,691.923 1425.779,692.268 1425.939,692.613 1426.099,692.956 1426.260,693.298 1426.420,693.639 1426.581,693.979 1426.743,694.317 1426.904,694.654 1427.066,694.990 1427.228,695.325 1427.391,695.658 1427.554,695.990 1427.716,696.320 1427.880,696.650 1428.043,696.978 1428.206,697.304 1428.370,697.630 1428.534,697.954 1428.698,698.276 1428.863,698.597 1429.027,698.917 1429.192,699.236 1429.357,699.553 1429.522,699.869 1429.687,700.183 1429.852,700.497 1430.017,700.808 1430.183,701.118 1430.348,701.427 1430.514,701.735 1430.679,702.041 1430.845,702.345 1431.011,702.649 1431.177,702.950 1431.342,703.251 1431.508,703.550 1431.674,703.847 1431.840,704.143 1432.006,704.437 1432.172,704.730 1432.338,705.022 1432.504,705.312 1432.670,705.600 1432.836,705.887 1433.001,706.173 1433.167,706.457 1433.333,706.739 1433.498,707.020 1433.664,707.300 1433.829,707.578 1433.995,707.854 1434.160,708.129 1434.325,708.402 1434.490,708.674 1434.654,708.944 1434.819,709.212 1434.984,709.479 1435.148,709.745 1435.312,710.009 1435.476,710.271 1435.640,710.531 1435.803,710.790 1435.967,711.047 1436.130,711.303 1436.293,711.557 1436.455,711.810 1436.618,712.060 1436.780,712.310 1436.942,712.557 1437.103,712.803 1437.265,713.047 1437.426,713.289 1437.586,713.530 1437.747,713.769 1437.907,714.007 1438.067,714.242 1438.226,714.476 1438.385,714.709 1438.544,714.939 1438.702,715.168 1438.860,715.395 1439.018,715.620 1439.175,715.844 1439.332,716.066 1439.488,716.286 1439.644,716.504 1439.800,716.721 1439.955,716.935 1440.109,717.148 1440.264,717.360 1440.417,717.569 1440.571,717.777 1440.723,717.982 1440.876,718.186 1441.027,718.388 1441.179,718.589 1441.330,718.787 1441.480,718.984 1441.629,719.179 1441.779,719.372 1441.927,719.563 1442.075,719.752 1442.223,719.939 1442.370,720.125 1442.516,720.308 1442.662,720.490 1442.807,720.670 1442.951,720.847 1443.095,721.023 1443.238,721.197 1443.381,721.370 1443.523,721.540 1443.664,721.708 1443.804,721.874 1443.944,722.039 1444.084,722.201 1444.222,722.361 1444.360,722.520 1444.497,722.676 1444.633,722.831 1444.769,722.983 1444.904,723.134 1445.038,723.283 1445.171,723.429 1445.304,723.574 1445.436,723.716 1445.567,723.857 1445.697,723.995 1445.826,724.131 1445.955,724.266 1446.083,724.398 1446.210,724.528 1446.336,724.657 1446.461,724.783 1446.585,724.907 1446.709,725.029 1446.831,725.149 1446.953,725.266 1447.074,725.382 1447.194,725.496 1447.313,725.607 1447.431,725.716 1447.548,725.824 1447.664,725.929 1447.780,726.032 1447.894,726.133 1448.007,726.231 1448.120,726.328 1448.231,726.422 1448.342,726.514 1448.451,726.604 1448.559,726.692 1448.667,726.778 1448.773,726.861 1448.878,726.942 1448.982,727.021 1449.086,727.098 1449.188,727.173 1449.289,727.245 1449.389,727.315 1449.488,727.383 1449.585,727.449 1449.682,727.512 1449.777,727.573 1449.872,727.632 1449.965,727.689 1450.057,727.743 1450.148,727.795 1450.238,727.845 1450.326,727.892 1450.414,727.937 1450.500,727.980 1450.585,728.021 1450.669,728.059 1450.751,728.095 1450.833,728.128 1450.913,728.159 1450.991,728.188 1451.069,728.215 1451.145,728.239 1451.220,728.261 1451.294,728.280 1451.367,728.297 1451.438,728.312 1451.508,728.324 1451.576,728.334 1451.643,728.341 1451.709,728.346 1451.774,728.349 1451.837,728.349 1451.899,728.347 1451.959,728.342 1452.018,728.335 1452.076,728.326 1452.132,728.313 1452.187,728.299 1452.240,728.282 1452.292,728.263 1468.451,728.739 1468.483,728.606 1468.515,728.463 1468.547,728.310 1468.579,728.148 1468.611,727.976 1468.643,727.794 1468.676,727.603 1468.708,727.402 1468.740,727.192 1468.773,726.972 1468.805,726.743 1468.837,726.505 1468.870,726.257 1468.902,726.001 1468.934,725.735 1468.966,725.460 1468.998,725.176 1469.030,724.884 1469.062,724.582 1469.094,724.272 1469.126,723.953 1469.158,723.625 1469.189,723.289 1469.220,722.944 1469.251,722.591 1469.282,722.230 1469.313,721.860 1469.344,721.482 1469.374,721.095 1469.404,720.700 1469.434,720.298 1469.463,719.887 1469.493,719.468 1469.522,719.042 1469.551,718.607 1469.579,718.165 1469.607,717.715 1469.635,717.258 1469.663,716.792 1469.690,716.320 1469.717,715.839 1469.743,715.352 1469.769,714.857 1469.795,714.354 1469.820,713.845 1469.845,713.328 1469.869,712.805 1469.893,712.274 1469.917,711.736 1469.940,711.191 1469.962,710.640 1469.984,710.081 1470.006,709.516 1470.027,708.944 1470.048,708.366 1470.068,707.781 1470.087,707.190 1470.106,706.592 1470.124,705.988 1470.142,705.377 1470.159,704.761 1470.176,704.138 1470.192,703.509 1470.207,702.874 1470.222,702.233 1470.236,701.586 1470.249,700.933 1470.262,700.274 1470.274,699.610 1470.285,698.940 1470.296,698.264 1470.305,697.583 1470.314,696.896 1470.323,696.204 1470.330,695.507 1470.337,694.804 1470.343,694.096 1470.348,693.383 1470.353,692.664 1470.356,691.941 1470.359,691.212 1470.361,690.479 1470.362,689.741 1470.362,688.998 1470.361,688.250 1470.360,687.498 1470.357,686.741 1470.354,685.979 1470.349,685.213 1470.344,684.442 1470.338,683.667 1470.331,682.888 1470.322,682.105 1470.313,681.317 1470.303,680.525 1470.292,679.729 1470.280,678.929 1470.266,678.125 1470.252,677.318 1470.237,676.506 1470.220,675.691 1470.203,674.872 1470.184,674.049 1470.164,673.223 1470.144,672.393 1470.122,671.560 1470.098,670.723 1470.074,669.884 1470.049,669.040 1470.022,668.194 1469.994,667.345 1469.965,666.492 1469.935,665.637 1469.904,664.778 1469.871,663.917 1469.837,663.052 1469.802,662.185 1469.765,661.316 1469.727,660.443 1469.688,659.569 1469.648,658.691 1469.606,657.811 1469.563,656.929 1469.519,656.044 1469.473,655.157 1469.426,654.268 1469.377,653.377 1469.328,652.484 1469.276,651.588 1469.224,650.691 1469.169,649.792 1469.114,648.891 1469.057,647.988 1468.998,647.084 1468.938,646.177 1468.877,645.270 1468.814,644.360 1468.749,643.450 1468.683,642.538 1468.616,641.624 1468.547,640.709 1468.476,639.793 1468.404,638.876 1468.330,637.958 1468.255,637.039 1468.178,636.119 1468.099,635.197 1468.019,634.275 1467.937,633.353 1467.853,632.429 1467.768,631.505 1467.681,630.580 1467.593,629.655 1467.502,628.729 1467.410,627.803 1467.316,626.877 1467.221,625.950 1467.124,625.023 1467.025,624.096 1466.924,623.168 1466.821,622.241 1466.717,621.314 1466.611,620.387 1466.503,619.460 1466.393,618.533 1466.281,617.606 1466.168,616.680 1466.052,615.754 1465.935,614.829 1465.816,613.904 1465.695,612.980 1465.572,612.056 1465.447,611.133"
                        style={{
                          fill: "none",
                          stroke: "#2a2418",
                          strokeWidth: 2.5,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                      />
                    </g>
                  </g>
                  <g
                    id="L_hand"
                    transform={leftHandTransform}
                    data-part="hand"
                    data-pivot-x={1459}
                    data-pivot-y={730}
                    data-side="L"
                    data-parent="L_forearm"
                  >
                    <g id="L_HAND_ART" data-role="art">
                      <path
                        id="path94"
                        d="m 0,0 c 2.569,3.783 6.141,5.767 10.715,5.954 4.556,0.323 8.16,-0.857 10.811,-3.541 L 22.14,-2.261 C 21.741,-5.068 17.639,-2.492 12.502,-7.66 7.526,-12.665 2.529,-7.59 0.667,-5.08 Z"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1443.2096,736.572)"
                        clipPath="url(#clipPath95)"
                      />
                      <path
                        id="path96"
                        d="M 0,0 C -1.579,-3.261 -1.337,-6.048 0.727,-8.359 2.198,-9.616 3.491,-9.58 4.607,-8.25 5.013,-6.491 4.398,-4.526 2.76,-2.358 2.11,-1.473 1.404,-0.76 0.638,-0.216 Z"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1473.2596,733.55587)"
                        clipPath="url(#clipPath97)"
                      />
                      <path
                        id="path98"
                        d="m 0,0 c -1.087,0.429 -2.044,-0.16 -2.871,-1.766 -1.075,-1.991 -1.651,-3.696 -1.728,-5.115 -0.079,-0.935 0.332,-1.483 1.234,-1.646 0.735,-0.097 1.275,0.414 1.62,1.534 1.175,2.243 2.092,4.2 2.752,5.871 C 1.071,-0.47 0.734,-0.097 0,0"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1447.3193,748.09467)"
                        clipPath="url(#clipPath99)"
                      />
                      <path
                        id="path100"
                        d="m 0,0 c -1.159,-0.152 -1.653,-1.214 -1.485,-3.186 0.266,-3.409 0.723,-6.205 1.373,-8.386 0.419,-1.124 1.107,-1.531 2.064,-1.224 0.779,0.283 1.03,1.131 0.753,2.546 C 2.528,-6.829 2.208,-3.698 1.744,-0.859 1.449,0.01 0.868,0.295 0,0"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1452.9671,749.75533)"
                        clipPath="url(#clipPath101)"
                      />
                      <path
                        id="path102"
                        d="m 0,0 c -1.159,-0.152 -1.653,-1.214 -1.485,-3.186 0.348,-4.033 0.916,-7.675 1.706,-10.926 0.431,-1.211 1.17,-1.658 2.216,-1.34 0.778,0.283 1.024,1.177 0.735,2.68 C 2.773,-7.658 2.342,-3.68 1.878,-0.841 1.583,0.027 0.956,0.306 0,0"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1461.5988,746.4028)"
                        clipPath="url(#clipPath103)"
                      />
                      <path
                        id="path104"
                        d="m 0,0 c -1.159,-0.152 -1.609,-1.208 -1.352,-3.169 0.355,-3.397 0.887,-6.41 1.595,-9.036 0.419,-1.124 1.108,-1.531 2.064,-1.225 0.779,0.283 1.03,1.132 0.753,2.547 C 2.735,-7.028 2.342,-3.68 1.878,-0.841 1.583,0.027 0.956,0.306 0,0"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1468.1572,743.21893)"
                        clipPath="url(#clipPath105)"
                      />
                    </g>
                  </g>
                </g>
                <g id="L_UPPER_ARM_ART" data-role="art">
                  <path
                    id="path92"
                    d="m 0,0 -18.645,-3.038 c -2.33,-0.38 -3.939,-3.251 -4.279,-7.638 -0.292,-3.757 0.379,-8.226 1.839,-12.258 l 17.397,-48.024 c 1.723,-4.754 4.54,-7.776 6.893,-7.393 l 10.227,1.666 c 2.081,0.34 8.963,7.356 8.681,11.694 l -8.663,42.233 c -0.398,6.133 -2.444,12.638 -5.407,17.2 C 5.487,-1.625 2.538,0.414 0,0"
                    style={{
                      fill: "#d48455",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "#000000",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1426.6017,535.31)"
                    clipPath="url(#clipPath93)"
                  />
                  <path
                    id="path131"
                    d="m 0,0 5.747,0.643 16.265,-4.226 c 2.301,-0.75 3.394,-2.264 3.279,-4.544 l -0.557,-9.883 c -0.313,-3.813 -1.972,-7.146 -4.978,-10 L 3.337,-29.846 Z"
                    style={{
                      fill: "#d48455",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "#000000",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1395.4859,520.09947)"
                    clipPath="url(#clipPath132)"
                  />
                  <path
                    id="path133"
                    d="m 0,0 c -1.178,0.624 -0.609,1.317 1.707,2.08 5.39,1.358 9.486,0.242 12.288,-3.348 l 4.51,-15.55 c 0.643,-2.446 -0.678,-3.853 -3.961,-4.22 l -6.021,-0.674 c -2.919,-0.326 -4.714,0.858 -5.384,3.554 z"
                    style={{
                      fill: "#d48455",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "#000000",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1411.9744,522.61307)"
                    clipPath="url(#path133_motion_clip)"
                    data-role="exposed-skin-fragment"
                  />
                  <g id="L_upper_sleeve" data-part="sleeve">
                    <path
                      id="L_upper_sleeve_fill"
                      d="M 1469.169,649.792 1469.114,648.891 1469.057,647.988 1468.998,647.084 1468.938,646.177 1468.877,645.270 1468.814,644.360 1468.749,643.450 1468.683,642.538 1468.616,641.624 1468.547,640.709 1468.476,639.793 1468.404,638.876 1468.330,637.958 1468.255,637.039 1468.178,636.119 1468.099,635.197 1468.019,634.275 1467.937,633.353 1467.853,632.429 1467.768,631.505 1467.681,630.580 1467.593,629.655 1467.502,628.729 1467.410,627.803 1467.316,626.877 1467.221,625.950 1467.124,625.023 1467.025,624.096 1466.924,623.168 1466.821,622.241 1466.717,621.314 1466.611,620.387 1466.503,619.460 1466.393,618.533 1466.281,617.606 1466.168,616.680 1466.052,615.754 1465.935,614.829 1465.816,613.904 1465.695,612.980 1465.572,612.056 1465.447,611.133 1465.320,610.211 1465.191,609.289 1465.060,608.369 1464.928,607.449 1464.793,606.531 1464.656,605.614 1464.517,604.697 1464.377,603.782 1464.234,602.868 1464.089,601.956 1463.942,601.045 1463.793,600.135 1463.642,599.227 1463.489,598.321 1463.333,597.416 1463.176,596.512 1463.016,595.611 1462.855,594.711 1462.691,593.813 1462.525,592.918 1462.356,592.024 1462.186,591.132 1462.013,590.242 1461.839,589.355 1461.662,588.470 1461.482,587.587 1461.301,586.707 1461.117,585.828 1460.931,584.953 1460.743,584.080 1460.552,583.210 1460.359,582.342 1460.164,581.477 1459.966,580.615 1459.766,579.756 1459.564,578.899 1459.359,578.046 1459.152,577.196 1458.943,576.349 1458.731,575.505 1458.516,574.664 1458.300,573.827 1458.080,572.993 1457.859,572.162 1457.635,571.335 1457.408,570.512 1457.179,569.692 1456.948,568.875 1456.713,568.063 1456.477,567.254 1456.238,566.450 1455.996,565.649 1455.752,564.852 1455.505,564.059 1455.256,563.270 1455.004,562.486 1454.749,561.705 1454.492,560.929 1454.232,560.158 1453.969,559.390 1453.704,558.628 1453.436,557.869 1453.166,557.116 1452.893,556.367 1452.617,555.623 1452.338,554.883 1452.057,554.149 1451.773,553.419 1451.486,552.694 1451.196,551.975 1450.904,551.260 1450.609,550.551 1450.311,549.847 1450.010,549.148 1449.707,548.455 1449.400,547.767 1449.091,547.084 1448.779,546.407 1448.464,545.736 1448.146,545.070 1447.825,544.410 1447.501,543.755 1447.175,543.107 1446.845,542.465 1446.513,541.828 1446.177,541.198 1445.839,540.573 1445.498,539.955 1445.153,539.343 1444.806,538.737 1444.456,538.138 1444.102,537.545 1443.746,536.958 1443.386,536.378 1443.024,535.805 1442.658,535.238 1442.289,534.678 1441.918,534.125 1441.543,533.578 1441.165,533.039 1440.783,532.506 1440.399,531.981 1440.012,531.462 1439.621,530.951 1439.227,530.447 1438.830,529.950 1438.430,529.461 1438.027,528.979 1437.620,528.504 1437.210,528.037 1436.797,527.578 1436.381,527.126 1435.961,526.682 1435.538,526.245 1435.112,525.817 1434.682,525.396 1434.249,524.983 1433.813,524.579 1433.373,524.182 1432.930,523.794 1432.484,523.413 1432.034,523.041 1431.581,522.678 1431.125,522.322 1430.665,521.976 1430.202,521.637 1430.145,521.597 1430.088,521.558 1430.030,521.518 1429.972,521.480 1429.913,521.441 1429.853,521.403 1429.792,521.366 1429.731,521.328 1429.669,521.292 1429.607,521.255 1429.543,521.219 1429.480,521.184 1429.415,521.148 1429.350,521.114 1429.284,521.079 1429.218,521.045 1429.151,521.012 1429.083,520.978 1429.015,520.945 1428.946,520.913 1428.877,520.881 1428.806,520.849 1428.736,520.818 1428.664,520.787 1428.593,520.756 1428.520,520.726 1428.447,520.696 1428.373,520.666 1428.299,520.637 1428.224,520.608 1428.149,520.580 1428.073,520.552 1427.997,520.524 1427.920,520.497 1427.842,520.470 1427.764,520.443 1427.685,520.417 1427.606,520.390 1427.526,520.365 1427.446,520.339 1427.365,520.314 1427.284,520.290 1427.202,520.265 1427.120,520.241 1427.037,520.217 1426.953,520.194 1426.870,520.171 1426.785,520.148 1426.700,520.126 1426.615,520.104 1426.529,520.082 1426.443,520.060 1426.356,520.039 1426.269,520.018 1426.181,519.998 1426.093,519.977 1426.005,519.957 1425.916,519.937 1425.826,519.918 1425.736,519.899 1425.646,519.880 1425.555,519.861 1425.464,519.843 1425.372,519.825 1425.280,519.807 1425.188,519.790 1425.095,519.773 1425.002,519.756 1424.908,519.739 1424.814,519.723 1424.719,519.707 1424.624,519.691 1424.529,519.676 1424.434,519.660 1424.337,519.645 1424.241,519.630 1424.144,519.616 1424.047,519.602 1423.950,519.588 1423.852,519.574 1423.754,519.560 1423.655,519.547 1423.556,519.534 1423.457,519.521 1423.358,519.508 1423.258,519.496 1423.158,519.484 1423.057,519.472 1422.956,519.460 1422.855,519.449 1422.754,519.438 1422.652,519.427 1422.550,519.416 1422.448,519.405 1422.345,519.395 1422.242,519.385 1422.139,519.375 1422.036,519.365 1421.932,519.356 1421.828,519.346 1421.724,519.337 1421.619,519.328 1421.515,519.320 1421.410,519.311 1421.304,519.303 1421.199,519.295 1421.093,519.287 1420.987,519.279 1420.881,519.271 1420.775,519.264 1420.668,519.257 1420.561,519.249 1420.454,519.243 1420.347,519.236 1420.240,519.229 1420.132,519.223 1420.024,519.217 1419.916,519.211 1419.808,519.205 1419.700,519.199 1419.591,519.193 1419.482,519.188 1419.373,519.183 1419.264,519.178 1419.155,519.173 1419.046,519.168 1418.936,519.163 1418.827,519.158 1418.717,519.154 1418.607,519.150 1418.497,519.146 1418.387,519.142 1418.277,519.138 1418.166,519.134 1418.056,519.130 1417.945,519.127 1417.834,519.123 1417.723,519.120 1417.613,519.117 1417.501,519.114 1417.390,519.111 1417.279,519.108 1417.168,519.105 1417.057,519.103 1416.945,519.100 1416.834,519.098 1416.722,519.096 1416.611,519.093 1416.499,519.091 1416.387,519.089 1416.276,519.087 1416.164,519.085 1416.052,519.084 1415.940,519.082 1415.828,519.080 1415.716,519.079 1415.604,519.077 1415.493,519.076 1415.381,519.075 1415.269,519.073 1415.157,519.072 1415.045,519.071 1414.933,519.070 1414.821,519.069 1414.709,519.068 1414.597,519.067 1414.486,519.067 1414.374,519.066 1414.262,519.065 1414.150,519.064 1414.039,519.064 1413.927,519.063 1413.815,519.063 1413.704,519.062 1413.592,519.062 1413.481,519.061 1413.370,519.061 1413.259,519.061 1413.147,519.060 1413.036,519.060 1412.925,519.060 1412.814,519.059 1412.704,519.059 1412.593,519.059 1412.482,519.059 1412.372,519.059 1412.262,519.058 1412.151,519.058 1412.041,519.058 1411.931,519.058 1411.821,519.058 1411.712,519.057 1411.602,519.057 1411.493,519.057 1411.383,519.057 1411.274,519.057 1411.165,519.056 1411.056,519.056 1410.948,519.056 1410.839,519.056 1410.731,519.055 1410.623,519.055 1410.515,519.055 1410.407,519.054 1410.300,519.054 1410.192,519.054 1410.085,519.053 1409.978,519.053 1409.871,519.052 1409.765,519.052 1409.659,519.051 1409.552,519.050 1409.447,519.050 1409.341,519.049 1409.236,519.048 1409.131,519.047 1409.026,519.046 1408.921,519.045 1408.817,519.044 1408.712,519.043 1408.609,519.042 1408.505,519.041 1408.402,519.039 1408.299,519.038 1408.196,519.037 1408.093,519.035 1407.991,519.033 1407.889,519.032 1407.788,519.030 1407.686,519.028 1407.585,519.026 1407.485,519.024 1407.384,519.022 1407.284,519.020 1407.185,519.017 1407.085,519.015 1406.986,519.013 1406.887,519.010 1406.789,519.007 1406.691,519.004 1406.593,519.001 1406.496,518.998 1406.399,518.995 1406.302,518.992 1406.206,518.989 1406.110,518.985 1406.015,518.981 1405.920,518.978 1405.825,518.974 1405.731,518.970 1405.637,518.966 1405.543,518.961 1405.450,518.957 1405.357,518.952 1405.265,518.948 1405.173,518.943 1405.082,518.938 1404.991,518.933 1404.900,518.927 1404.810,518.922 1404.720,518.916 1404.631,518.911 1404.542,518.905 1404.454,518.899 1404.366,518.892 1404.278,518.886 1404.191,518.879 1404.105,518.873 1404.018,518.866 1403.933,518.859 1403.848,518.851 1403.763,518.844 1403.679,518.836 1403.595,518.829 1403.512,518.821 1403.429,518.812 1403.347,518.804 1403.266,518.796 1403.185,518.787 1403.104,518.778 1403.024,518.769 1402.944,518.759 1402.865,518.750 1402.787,518.740 1402.709,518.730 1402.632,518.720 1402.555,518.710 1402.479,518.699 1402.403,518.688 1402.328,518.677 1402.253,518.666 1402.179,518.655 1402.106,518.643 1402.033,518.631 1401.961,518.619 1401.889,518.607 1401.818,518.594 1401.747,518.581 1401.678,518.568 1391.936,586.349 1391.987,586.385 1392.039,586.423 1392.091,586.463 1392.143,586.505 1392.195,586.548 1392.248,586.593 1392.301,586.640 1392.355,586.689 1392.408,586.739 1392.462,586.792 1392.517,586.846 1392.572,586.902 1392.627,586.959 1392.682,587.019 1392.738,587.080 1392.794,587.143 1392.850,587.207 1392.907,587.274 1392.964,587.342 1393.022,587.412 1393.079,587.483 1393.137,587.557 1393.195,587.632 1393.254,587.708 1393.313,587.787 1393.372,587.867 1393.431,587.948 1393.491,588.032 1393.551,588.117 1393.611,588.204 1393.672,588.292 1393.733,588.382 1393.794,588.474 1393.855,588.567 1393.917,588.662 1393.979,588.759 1394.041,588.857 1394.103,588.957 1394.166,589.058 1394.229,589.161 1394.292,589.266 1394.356,589.372 1394.420,589.480 1394.484,589.589 1394.548,589.700 1394.613,589.813 1394.678,589.927 1394.743,590.042 1394.808,590.159 1394.873,590.278 1394.939,590.398 1395.005,590.520 1395.071,590.643 1395.138,590.768 1395.205,590.894 1395.271,591.022 1395.339,591.152 1395.406,591.282 1395.474,591.415 1395.541,591.548 1395.609,591.684 1395.678,591.820 1395.746,591.958 1395.815,592.098 1395.884,592.239 1395.953,592.382 1396.022,592.525 1396.091,592.671 1396.161,592.818 1396.231,592.966 1396.301,593.115 1396.371,593.266 1396.442,593.419 1396.512,593.573 1396.583,593.728 1396.654,593.884 1396.725,594.042 1396.797,594.202 1396.868,594.362 1396.940,594.524 1397.012,594.688 1397.084,594.852 1397.156,595.018 1397.229,595.186 1397.301,595.354 1397.374,595.524 1397.447,595.696 1397.520,595.868 1397.593,596.042 1397.666,596.218 1397.740,596.394 1397.813,596.572 1397.887,596.751 1397.961,596.931 1398.035,597.113 1398.109,597.296 1398.184,597.480 1398.258,597.665 1398.333,597.852 1398.407,598.040 1398.482,598.229 1398.557,598.419 1398.632,598.610 1398.707,598.803 1398.783,598.997 1398.858,599.192 1398.934,599.388 1399.009,599.586 1399.085,599.784 1399.161,599.984 1399.237,600.185 1399.313,600.387 1399.389,600.591 1399.466,600.795 1399.542,601.001 1399.618,601.207 1399.695,601.415 1399.772,601.624 1399.848,601.834 1399.925,602.045 1400.002,602.258 1400.079,602.471 1400.156,602.685 1400.233,602.901 1400.311,603.118 1400.388,603.335 1400.465,603.554 1400.543,603.774 1400.620,603.995 1400.698,604.217 1400.775,604.440 1400.853,604.664 1400.931,604.889 1401.008,605.115 1401.086,605.342 1401.164,605.570 1401.242,605.799 1401.320,606.029 1401.398,606.260 1401.476,606.492 1401.554,606.725 1401.632,606.960 1401.710,607.195 1401.788,607.430 1401.866,607.667 1401.945,607.905 1402.023,608.144 1402.101,608.384 1402.179,608.624 1402.258,608.866 1402.336,609.109 1402.414,609.352 1402.493,609.596 1402.571,609.842 1402.649,610.088 1402.728,610.335 1402.806,610.583 1402.884,610.831 1402.963,611.081 1403.041,611.332 1403.119,611.583 1403.198,611.835 1403.276,612.088 1403.354,612.342 1403.433,612.597 1403.511,612.853 1403.589,613.109 1403.667,613.366 1403.746,613.624 1403.824,613.883 1403.902,614.143 1403.980,614.403 1404.058,614.664 1404.136,614.926 1404.214,615.189 1404.292,615.452 1404.370,615.717 1404.448,615.982 1404.525,616.247 1404.603,616.514 1404.681,616.781 1404.759,617.049 1404.836,617.318 1404.914,617.587 1404.991,617.857 1405.068,618.128 1405.146,618.400 1405.223,618.672 1405.300,618.945 1405.377,619.218 1405.454,619.492 1405.531,619.767 1405.608,620.043 1405.685,620.319 1405.762,620.596 1405.838,620.874 1405.915,621.152 1405.991,621.430 1406.068,621.710 1406.144,621.990 1406.220,622.271 1406.296,622.552 1406.372,622.834 1406.448,623.116 1406.524,623.399 1406.599,623.683 1406.675,623.967 1406.750,624.252 1406.826,624.537 1406.901,624.823 1406.976,625.109 1407.051,625.396 1407.126,625.684 1407.200,625.972 1407.275,626.260 1407.349,626.549 1407.424,626.839 1407.498,627.129 1407.572,627.420 1407.646,627.711 1407.720,628.002 1407.793,628.294 1407.867,628.587 1407.940,628.880 1408.013,629.173 1408.086,629.467 1408.159,629.762 1408.231,630.057 1408.304,630.352 1408.376,630.648 1408.449,630.944 1408.521,631.240 1408.592,631.537 1408.664,631.835 1408.736,632.132 1408.807,632.431 1408.878,632.729 1408.949,633.028 1409.020,633.327 1409.090,633.627 1409.161,633.927 1409.231,634.228 1409.301,634.528 1409.371,634.830 1409.441,635.131 1409.510,635.433 1409.579,635.735 1409.648,636.038 1409.717,636.340 1409.786,636.643 1409.854,636.947 1409.922,637.250 1409.990,637.554 1410.058,637.859 1410.126,638.163 1410.193,638.468 1410.260,638.773 1410.327,639.079 1410.394,639.384 1410.460,639.690 1410.526,639.996 1410.592,640.303 1410.658,640.609 1410.723,640.916 1410.789,641.223 1410.854,641.530 1410.918,641.838 1410.983,642.145 1411.047,642.453 1411.111,642.761 1411.175,643.069 1411.238,643.378 1411.302,643.686 1411.364,643.995 1411.427,644.304 1411.490,644.613 1411.552,644.922 1411.614,645.231 1411.675,645.541 1411.737,645.850 1411.798,646.160 1411.858,646.470 1411.919,646.780 1411.979,647.090 1412.039,647.400 1412.099,647.710 1412.158,648.020 1412.217,648.331 1412.276,648.641 1412.334,648.952 1412.393,649.262 1412.450,649.573 1412.508,649.883 1412.530,650.000 1469.182,650.000 1469.169,649.792 Z"
                      style={{
                        fill: "#4a4234",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                        strokeWidth: 2.5,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                    />
                    <path
                      id="L_upper_sleeve_outline"
                      d="M 1469.114,648.891 1469.057,647.988 1468.998,647.084 1468.938,646.177 1468.877,645.270 1468.814,644.360 1468.749,643.450 1468.683,642.538 1468.616,641.624 1468.547,640.709 1468.476,639.793 1468.404,638.876 1468.330,637.958 1468.255,637.039 1468.178,636.119 1468.099,635.197 1468.019,634.275 1467.937,633.353 1467.853,632.429 1467.768,631.505 1467.681,630.580 1467.593,629.655 1467.502,628.729 1467.410,627.803 1467.316,626.877 1467.221,625.950 1467.124,625.023 1467.025,624.096 1466.924,623.168 1466.821,622.241 1466.717,621.314 1466.611,620.387 1466.503,619.460 1466.393,618.533 1466.281,617.606 1466.168,616.680 1466.052,615.754 1465.935,614.829 1465.816,613.904 1465.695,612.980 1465.572,612.056 1465.447,611.133 1465.320,610.211 1465.191,609.289 1465.060,608.369 1464.928,607.449 1464.793,606.531 1464.656,605.614 1464.517,604.697 1464.377,603.782 1464.234,602.868 1464.089,601.956 1463.942,601.045 1463.793,600.135 1463.642,599.227 1463.489,598.321 1463.333,597.416 1463.176,596.512 1463.016,595.611 1462.855,594.711 1462.691,593.813 1462.525,592.918 1462.356,592.024 1462.186,591.132 1462.013,590.242 1461.839,589.355 1461.662,588.470 1461.482,587.587 1461.301,586.707 1461.117,585.828 1460.931,584.953 1460.743,584.080 1460.552,583.210 1460.359,582.342 1460.164,581.477 1459.966,580.615 1459.766,579.756 1459.564,578.899 1459.359,578.046 1459.152,577.196 1458.943,576.349 1458.731,575.505 1458.516,574.664 1458.300,573.827 1458.080,572.993 1457.859,572.162 1457.635,571.335 1457.408,570.512 1457.179,569.692 1456.948,568.875 1456.713,568.063 1456.477,567.254 1456.238,566.450 1455.996,565.649 1455.752,564.852 1455.505,564.059 1455.256,563.270 1455.004,562.486 1454.749,561.705 1454.492,560.929 1454.232,560.158 1453.969,559.390 1453.704,558.628 1453.436,557.869 1453.166,557.116 1452.893,556.367 1452.617,555.623 1452.338,554.883 1452.057,554.149 1451.773,553.419 1451.486,552.694 1451.196,551.975 1450.904,551.260 1450.609,550.551 1450.311,549.847 1450.010,549.148 1449.707,548.455 1449.400,547.767 1449.091,547.084 1448.779,546.407 1448.464,545.736 1448.146,545.070 1447.825,544.410 1447.501,543.755 1447.175,543.107 1446.845,542.465 1446.513,541.828 1446.177,541.198 1445.839,540.573 1445.498,539.955 1445.153,539.343 1444.806,538.737 1444.456,538.138 1444.102,537.545 1443.746,536.958 1443.386,536.378 1443.024,535.805 1442.658,535.238 1442.289,534.678 1441.918,534.125 1441.543,533.578 1441.165,533.039 1440.783,532.506 1440.399,531.981 1440.012,531.462 1439.621,530.951 1439.227,530.447 1438.830,529.950 1438.430,529.461 1438.027,528.979 1437.620,528.504 1437.210,528.037 1436.797,527.578 1436.381,527.126 1435.961,526.682 1435.538,526.245 1435.112,525.817 1434.682,525.396 1434.249,524.983 1433.813,524.579 1433.373,524.182 1432.930,523.794 1432.484,523.413 1432.034,523.041 1431.581,522.678 1431.125,522.322 1430.665,521.976 1430.202,521.637 1430.145,521.597 1430.088,521.558 1430.030,521.518 1429.972,521.480 1429.913,521.441 1429.853,521.403 1429.792,521.366 1429.731,521.328 1429.669,521.292 1429.607,521.255 1429.543,521.219 1429.480,521.184 1429.415,521.148 1429.350,521.114 1429.284,521.079 1429.218,521.045 1429.151,521.012 1429.083,520.978 1429.015,520.945 1428.946,520.913 1428.877,520.881 1428.806,520.849 1428.736,520.818 1428.664,520.787 1428.593,520.756 1428.520,520.726 1428.447,520.696 1428.373,520.666 1428.299,520.637 1428.224,520.608 1428.149,520.580 1428.073,520.552 1427.997,520.524 1427.920,520.497 1427.842,520.470 1427.764,520.443 1427.685,520.417 1427.606,520.390 1427.526,520.365 1427.446,520.339 1427.365,520.314 1427.284,520.290 1427.202,520.265 1427.120,520.241 1427.037,520.217 1426.953,520.194 1426.870,520.171 1426.785,520.148 1426.700,520.126 1426.615,520.104 1426.529,520.082 1426.443,520.060 1426.356,520.039 1426.269,520.018 1426.181,519.998 1426.093,519.977 1426.005,519.957 1425.916,519.937 1425.826,519.918 1425.736,519.899 1425.646,519.880 1425.555,519.861 1425.464,519.843 1425.372,519.825 1425.280,519.807 1425.188,519.790 1425.095,519.773 1425.002,519.756 1424.908,519.739 1424.814,519.723 1424.719,519.707 1424.624,519.691 1424.529,519.676 1424.434,519.660 1424.337,519.645 1424.241,519.630 1424.144,519.616 1424.047,519.602 1423.950,519.588 1423.852,519.574 1423.754,519.560 1423.655,519.547 1423.556,519.534 1423.457,519.521 1423.358,519.508 1423.258,519.496 1423.158,519.484 1423.057,519.472 1422.956,519.460 1422.855,519.449 1422.754,519.438 1422.652,519.427 1422.550,519.416 1422.448,519.405 1422.345,519.395 1422.242,519.385 1422.139,519.375 1422.036,519.365 1421.932,519.356 1421.828,519.346 1421.724,519.337 1421.619,519.328 1421.515,519.320 1421.410,519.311 1421.304,519.303 1421.199,519.295 1421.093,519.287 1420.987,519.279 1420.881,519.271 1420.775,519.264 1420.668,519.257 1420.561,519.249 1420.454,519.243 1420.347,519.236 1420.240,519.229 1420.132,519.223 1420.024,519.217 1419.916,519.211 1419.808,519.205 1419.700,519.199 1419.591,519.193 1419.482,519.188 1419.373,519.183 1419.264,519.178 1419.155,519.173 1419.046,519.168 1418.936,519.163 1418.827,519.158 1418.717,519.154 1418.607,519.150 1418.497,519.146 1418.387,519.142 1418.277,519.138 1418.166,519.134 1418.056,519.130 1417.945,519.127 1417.834,519.123 1417.723,519.120 1417.613,519.117 1417.501,519.114 1417.390,519.111 1417.279,519.108 1417.168,519.105 1417.057,519.103 1416.945,519.100 1416.834,519.098 1416.722,519.096 1416.611,519.093 1416.499,519.091 1416.387,519.089 1416.276,519.087 1416.164,519.085 1416.052,519.084 1415.940,519.082 1415.828,519.080 1415.716,519.079 1415.604,519.077 1415.493,519.076 1415.381,519.075 1415.269,519.073 1415.157,519.072 1415.045,519.071 1414.933,519.070 1414.821,519.069 1414.709,519.068 1414.597,519.067 1414.486,519.067 1414.374,519.066 1414.262,519.065 1414.150,519.064 1414.039,519.064 1413.927,519.063 1413.815,519.063 1413.704,519.062 1413.592,519.062 1413.481,519.061 1413.370,519.061 1413.259,519.061 1413.147,519.060 1413.036,519.060 1412.925,519.060 1412.814,519.059 1412.704,519.059 1412.593,519.059 1412.482,519.059 1412.372,519.059 1412.262,519.058 1412.151,519.058 1412.041,519.058 1411.931,519.058 1411.821,519.058 1411.712,519.057 1411.602,519.057 1411.493,519.057 1411.383,519.057 1411.274,519.057 1411.165,519.056 1411.056,519.056 1410.948,519.056 1410.839,519.056 1410.731,519.055 1410.623,519.055 1410.515,519.055 1410.407,519.054 1410.300,519.054 1410.192,519.054 1410.085,519.053 1409.978,519.053 1409.871,519.052 1409.765,519.052 1409.659,519.051 1409.552,519.050 1409.447,519.050 1409.341,519.049 1409.236,519.048 1409.131,519.047 1409.026,519.046 1408.921,519.045 1408.817,519.044 1408.712,519.043 1408.609,519.042 1408.505,519.041 1408.402,519.039 1408.299,519.038 1408.196,519.037 1408.093,519.035 1407.991,519.033 1407.889,519.032 1407.788,519.030 1407.686,519.028 1407.585,519.026 1407.485,519.024 1407.384,519.022 1407.284,519.020 1407.185,519.017 1407.085,519.015 1406.986,519.013 1406.887,519.010 1406.789,519.007 1406.691,519.004 1406.593,519.001 1406.496,518.998 1406.399,518.995 1406.302,518.992 1406.206,518.989 1406.110,518.985 1406.015,518.981 1405.920,518.978 1405.825,518.974 1405.731,518.970 1405.637,518.966 1405.543,518.961 1405.450,518.957 1405.357,518.952 1405.265,518.948 1405.173,518.943 1405.082,518.938 1404.991,518.933 1404.900,518.927 1404.810,518.922 1404.720,518.916 1404.631,518.911 1404.542,518.905 1404.454,518.899 1404.366,518.892 1404.278,518.886 1404.191,518.879 1404.105,518.873 1404.018,518.866 1403.933,518.859 1403.848,518.851 1403.763,518.844 1403.679,518.836 1403.595,518.829 1403.512,518.821 1403.429,518.812 1403.347,518.804 1403.266,518.796 1403.185,518.787 1403.104,518.778 1403.024,518.769 1402.944,518.759 1402.865,518.750 1402.787,518.740 1402.709,518.730 1402.632,518.720 1402.555,518.710 1402.479,518.699 1402.403,518.688 1402.328,518.677 1402.253,518.666 1402.179,518.655 1402.106,518.643 1402.033,518.631 1401.961,518.619 1401.889,518.607 1401.818,518.594 1401.747,518.581 1401.678,518.568 1391.936,586.349 1391.987,586.385 1392.039,586.423 1392.091,586.463 1392.143,586.505 1392.195,586.548 1392.248,586.593 1392.301,586.640 1392.355,586.689 1392.408,586.739 1392.462,586.792 1392.517,586.846 1392.572,586.902 1392.627,586.959 1392.682,587.019 1392.738,587.080 1392.794,587.143 1392.850,587.207 1392.907,587.274 1392.964,587.342 1393.022,587.412 1393.079,587.483 1393.137,587.557 1393.195,587.632 1393.254,587.708 1393.313,587.787 1393.372,587.867 1393.431,587.948 1393.491,588.032 1393.551,588.117 1393.611,588.204 1393.672,588.292 1393.733,588.382 1393.794,588.474 1393.855,588.567 1393.917,588.662 1393.979,588.759 1394.041,588.857 1394.103,588.957 1394.166,589.058 1394.229,589.161 1394.292,589.266 1394.356,589.372 1394.420,589.480 1394.484,589.589 1394.548,589.700 1394.613,589.813 1394.678,589.927 1394.743,590.042 1394.808,590.159 1394.873,590.278 1394.939,590.398 1395.005,590.520 1395.071,590.643 1395.138,590.768 1395.205,590.894 1395.271,591.022 1395.339,591.152 1395.406,591.282 1395.474,591.415 1395.541,591.548 1395.609,591.684 1395.678,591.820 1395.746,591.958 1395.815,592.098 1395.884,592.239 1395.953,592.382 1396.022,592.525 1396.091,592.671 1396.161,592.818 1396.231,592.966 1396.301,593.115 1396.371,593.266 1396.442,593.419 1396.512,593.573 1396.583,593.728 1396.654,593.884 1396.725,594.042 1396.797,594.202 1396.868,594.362 1396.940,594.524 1397.012,594.688 1397.084,594.852 1397.156,595.018 1397.229,595.186 1397.301,595.354 1397.374,595.524 1397.447,595.696 1397.520,595.868 1397.593,596.042 1397.666,596.218 1397.740,596.394 1397.813,596.572 1397.887,596.751 1397.961,596.931 1398.035,597.113 1398.109,597.296 1398.184,597.480 1398.258,597.665 1398.333,597.852 1398.407,598.040 1398.482,598.229 1398.557,598.419 1398.632,598.610 1398.707,598.803 1398.783,598.997 1398.858,599.192 1398.934,599.388 1399.009,599.586 1399.085,599.784 1399.161,599.984 1399.237,600.185 1399.313,600.387 1399.389,600.591 1399.466,600.795 1399.542,601.001 1399.618,601.207 1399.695,601.415 1399.772,601.624 1399.848,601.834 1399.925,602.045 1400.002,602.258 1400.079,602.471 1400.156,602.685 1400.233,602.901 1400.311,603.118 1400.388,603.335 1400.465,603.554 1400.543,603.774 1400.620,603.995 1400.698,604.217 1400.775,604.440 1400.853,604.664 1400.931,604.889 1401.008,605.115 1401.086,605.342 1401.164,605.570 1401.242,605.799 1401.320,606.029 1401.398,606.260 1401.476,606.492 1401.554,606.725 1401.632,606.960 1401.710,607.195 1401.788,607.430 1401.866,607.667 1401.945,607.905 1402.023,608.144 1402.101,608.384 1402.179,608.624 1402.258,608.866 1402.336,609.109 1402.414,609.352 1402.493,609.596 1402.571,609.842 1402.649,610.088 1402.728,610.335 1402.806,610.583 1402.884,610.831 1402.963,611.081 1403.041,611.332 1403.119,611.583 1403.198,611.835 1403.276,612.088 1403.354,612.342 1403.433,612.597 1403.511,612.853 1403.589,613.109 1403.667,613.366 1403.746,613.624 1403.824,613.883 1403.902,614.143 1403.980,614.403 1404.058,614.664 1404.136,614.926 1404.214,615.189 1404.292,615.452 1404.370,615.717 1404.448,615.982 1404.525,616.247 1404.603,616.514 1404.681,616.781 1404.759,617.049 1404.836,617.318 1404.914,617.587 1404.991,617.857 1405.068,618.128 1405.146,618.400 1405.223,618.672 1405.300,618.945 1405.377,619.218 1405.454,619.492 1405.531,619.767 1405.608,620.043 1405.685,620.319 1405.762,620.596 1405.838,620.874 1405.915,621.152 1405.991,621.430 1406.068,621.710 1406.144,621.990 1406.220,622.271 1406.296,622.552 1406.372,622.834 1406.448,623.116 1406.524,623.399 1406.599,623.683 1406.675,623.967 1406.750,624.252 1406.826,624.537 1406.901,624.823 1406.976,625.109 1407.051,625.396 1407.126,625.684 1407.200,625.972 1407.275,626.260 1407.349,626.549 1407.424,626.839 1407.498,627.129 1407.572,627.420 1407.646,627.711 1407.720,628.002 1407.793,628.294 1407.867,628.587 1407.940,628.880 1408.013,629.173 1408.086,629.467 1408.159,629.762 1408.231,630.057 1408.304,630.352 1408.376,630.648 1408.449,630.944 1408.521,631.240 1408.592,631.537 1408.664,631.835 1408.736,632.132 1408.807,632.431 1408.878,632.729 1408.949,633.028 1409.020,633.327 1409.090,633.627 1409.161,633.927 1409.231,634.228 1409.301,634.528 1409.371,634.830 1409.441,635.131 1409.510,635.433 1409.579,635.735 1409.648,636.038 1409.717,636.340 1409.786,636.643 1409.854,636.947 1409.922,637.250 1409.990,637.554 1410.058,637.859 1410.126,638.163 1410.193,638.468 1410.260,638.773 1410.327,639.079 1410.394,639.384 1410.460,639.690 1410.526,639.996 1410.592,640.303 1410.658,640.609 1410.723,640.916 1410.789,641.223 1410.854,641.530 1410.918,641.838 1410.983,642.145 1411.047,642.453 1411.111,642.761 1411.175,643.069 1411.238,643.378 1411.302,643.686 1411.364,643.995 1411.427,644.304 1411.490,644.613 1411.552,644.922 1411.614,645.231 1411.675,645.541 1411.737,645.850 1411.798,646.160 1411.858,646.470 1411.919,646.780 1411.979,647.090 1412.039,647.400 1412.099,647.710 1412.158,648.020 1412.217,648.331 1412.276,648.641"
                      style={{
                        fill: "none",
                        stroke: "#2a2418",
                        strokeWidth: 2.5,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
            <g
              id="R_shoulder"
              data-part="shoulder"
              data-side="R"
              data-parent="TORSO"
              data-pivot-x={1248}
              data-pivot-y={535}
            >
              <g
                id="R_upper_arm"
                transform={rightArmTransform}
                data-part="upper_arm"
                data-pivot-x={1248}
                data-pivot-y={535}
                data-side="R"
                data-parent="R_shoulder"
              >
                <ellipse
                  id="R_elbow_cover"
                  cx={1203}
                  cy={630}
                  rx={18}
                  ry={21}
                  style={{
                    fill: "#4a4234",
                    fillOpacity: 1,
                    stroke: "none",
                  }}
                  data-role="joint-cover"
                  data-joint="elbow"
                  data-side="R"
                />
                <g
                  id="R_forearm"
                  transform={rightElbowTransform}
                  data-part="forearm"
                  data-pivot-x={1203}
                  data-pivot-y={630}
                  data-side="R"
                  data-parent="R_upper_arm"
                >
                  <g
                    id="R_hand"
                    transform={rightHandTransform}
                    data-part="hand"
                    data-pivot-x={1189}
                    data-pivot-y={736}
                    data-side="R"
                    data-parent="R_forearm"
                  >
                    <g id="R_HAND_ART" data-role="art">
                      <path
                        id="path106"
                        d="m 0,0 c -1.786,-2.565 -6.629,-7.787 -11.753,-2.933 -5.289,5.012 -9.312,2.314 -9.794,5.109 l 0.473,4.689 c 2.57,2.762 6.137,4.05 10.701,3.863 4.577,-0.05 8.206,-1.926 10.888,-5.631 z"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1203.2193,750.17693)"
                        clipPath="url(#clipPath107)"
                      />
                      <path
                        id="path108"
                        d="m 0,0 c -0.749,-0.567 -1.433,-1.301 -2.056,-2.204 -1.573,-2.216 -2.129,-4.198 -1.67,-5.945 1.154,-1.296 2.448,-1.294 3.881,0.007 1.994,2.372 2.152,5.165 0.477,8.377 z"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1172.9367,741.578)"
                        clipPath="url(#clipPath109)"
                      />
                      <path
                        id="path110"
                        d="m 0,0 c 0.709,-1.651 1.684,-3.58 2.926,-5.786 0.378,-1.109 0.934,-1.604 1.665,-1.485 0.897,0.19 1.291,0.75 1.184,1.682 -0.119,1.416 -0.746,3.103 -1.88,5.061 C 3.021,1.053 2.047,1.613 0.973,1.151 0.242,1.033 -0.084,0.649 0,0"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1198.8456,756.55627)"
                        clipPath="url(#clipPath111)"
                      />
                      <path
                        id="path112"
                        d="m 0,0 c -0.379,-2.852 -0.605,-5.991 -0.68,-9.416 -0.234,-1.422 0.043,-2.263 0.829,-2.523 0.966,-0.277 1.642,0.15 2.027,1.286 0.584,2.2 0.957,5.008 1.122,8.423 C 3.406,-0.253 2.881,0.793 1.718,0.911 0.841,1.179 0.269,0.877 0,0"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1192.2563,758.06373)"
                        clipPath="url(#clipPath113)"
                      />
                      <path
                        id="path114"
                        d="m 0,0 c -0.379,-2.852 -0.691,-6.841 -0.937,-11.964 -0.243,-1.511 0.029,-2.398 0.816,-2.657 1.055,-0.287 1.779,0.182 2.174,1.406 0.692,3.273 1.151,6.93 1.379,10.972 C 3.541,-0.267 3.015,0.78 1.852,0.897 0.887,1.175 0.269,0.877 0,0"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1183.3493,754.9528)"
                        clipPath="url(#clipPath115)"
                      />
                      <path
                        id="path116"
                        d="m 0,0 c -0.379,-2.852 -0.672,-6.21 -0.882,-10.073 -0.234,-1.422 0.043,-2.263 0.83,-2.523 0.965,-0.277 1.641,0.15 2.026,1.286 0.629,2.646 1.071,5.674 1.324,9.08 C 3.496,-0.262 3.015,0.78 1.852,0.897 0.887,1.175 0.269,0.877 0,0"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#111111",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1176.6985,751.96653)"
                        clipPath="url(#clipPath117)"
                      />
                    </g>
                  </g>
                  <g id="R_FOREARM_ART" data-role="art">
                    <path
                      id="path118"
                      d="m 0,0 15.322,-1.894 c 1.914,-0.237 3.143,-3.138 3.269,-7.715 0.108,-3.92 -0.606,-8.654 -1.959,-12.984 L 0.526,-74.17 c -1.595,-5.107 -4.034,-8.472 -5.967,-8.233 l -8.404,1.039 c -1.711,0.212 -2.602,3.431 -2.214,8 l 4.118,48.562 c 0.548,6.46 2.472,13.425 5.087,18.415 v 0 C -4.599,-2.085 -2.085,0.258 0,0"
                      style={{
                        fill: "#d48455",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1199.0017,626.88733)"
                      clipPath="url(#path118_motion_clip)"
                      data-role="exposed-skin-fragment"
                    />
                    <g id="R_forearm_sleeve" data-part="sleeve">
                      <path
                        id="R_forearm_sleeve_fill"
                        d="M 1181.440,610.681 1181.303,611.643 1181.168,612.605 1181.034,613.568 1180.903,614.531 1180.774,615.496 1180.647,616.461 1180.522,617.426 1180.399,618.392 1180.278,619.359 1180.159,620.326 1180.042,621.293 1179.926,622.260 1179.813,623.228 1179.701,624.196 1179.592,625.164 1179.484,626.131 1179.378,627.099 1179.275,628.067 1179.172,629.034 1179.072,630.001 1178.974,630.968 1178.877,631.934 1178.782,632.900 1178.689,633.865 1178.598,634.830 1178.509,635.794 1178.421,636.757 1178.335,637.719 1178.250,638.681 1178.168,639.641 1178.087,640.601 1178.008,641.560 1177.930,642.517 1177.854,643.473 1177.780,644.428 1177.708,645.382 1177.637,646.334 1177.567,647.285 1177.499,648.235 1177.433,649.182 1177.369,650.128 1177.306,651.073 1177.244,652.015 1177.184,652.956 1177.126,653.895 1177.069,654.832 1177.014,655.767 1176.960,656.700 1176.907,657.630 1176.856,658.558 1176.807,659.484 1176.758,660.408 1176.712,661.329 1176.667,662.248 1176.623,663.164 1176.580,664.078 1176.539,664.989 1176.499,665.897 1176.461,666.802 1176.424,667.705 1176.388,668.604 1176.354,669.500 1176.321,670.394 1176.289,671.284 1176.258,672.171 1176.229,673.055 1176.201,673.935 1176.174,674.812 1176.148,675.685 1176.124,676.555 1176.101,677.422 1176.079,678.284 1176.058,679.143 1176.038,679.999 1176.020,680.850 1176.002,681.697 1175.986,682.541 1175.971,683.380 1175.957,684.215 1175.944,685.046 1175.932,685.873 1175.921,686.695 1175.912,687.513 1175.903,688.327 1175.895,689.136 1175.889,689.940 1175.883,690.740 1175.878,691.535 1175.875,692.326 1175.872,693.111 1175.870,693.892 1175.869,694.667 1175.869,695.438 1175.870,696.203 1175.872,696.964 1175.875,697.719 1175.878,698.468 1175.883,699.213 1175.888,699.952 1175.894,700.685 1175.901,701.413 1175.909,702.136 1175.918,702.852 1175.927,703.563 1175.938,704.268 1175.949,704.967 1175.960,705.661 1175.973,706.348 1175.986,707.029 1176.000,707.704 1176.014,708.373 1176.030,709.035 1176.046,709.691 1176.062,710.341 1176.080,710.984 1176.097,711.621 1176.116,712.251 1176.135,712.875 1176.155,713.491 1176.175,714.101 1176.196,714.704 1176.218,715.300 1176.240,715.890 1176.262,716.472 1176.285,717.047 1176.309,717.614 1176.333,718.175 1176.358,718.728 1176.383,719.274 1176.408,719.812 1176.434,720.343 1176.461,720.867 1176.488,721.382 1176.515,721.890 1176.543,722.390 1176.571,722.883 1176.599,723.367 1176.628,723.844 1176.657,724.312 1176.687,724.772 1176.717,725.224 1176.747,725.668 1176.777,726.104 1176.808,726.531 1176.839,726.950 1176.870,727.360 1176.902,727.762 1176.934,728.155 1176.966,728.540 1176.998,728.916 1177.031,729.282 1177.063,729.640 1177.096,729.990 1177.129,730.330 1177.162,730.661 1177.195,730.982 1177.229,731.295 1177.262,731.598 1177.296,731.892 1177.330,732.177 1177.363,732.452 1177.397,732.718 1177.431,732.974 1177.465,733.220 1177.499,733.457 1177.533,733.684 1177.567,733.901 1177.601,734.108 1177.635,734.305 1177.669,734.492 1177.703,734.669 1177.737,734.835 1177.771,734.992 1177.804,735.138 1177.838,735.274 1191.747,736.758 1191.802,736.777 1191.858,736.791 1191.914,736.802 1191.972,736.809 1192.031,736.811 1192.091,736.809 1192.152,736.804 1192.213,736.794 1192.276,736.780 1192.340,736.762 1192.405,736.741 1192.471,736.715 1192.538,736.685 1192.606,736.651 1192.674,736.614 1192.744,736.572 1192.815,736.527 1192.887,736.477 1192.959,736.424 1193.033,736.367 1193.107,736.306 1193.182,736.242 1193.259,736.173 1193.336,736.101 1193.414,736.025 1193.493,735.945 1193.573,735.862 1193.654,735.775 1193.736,735.684 1193.818,735.589 1193.901,735.491 1193.986,735.389 1194.071,735.284 1194.157,735.175 1194.244,735.062 1194.331,734.946 1194.420,734.826 1194.509,734.703 1194.599,734.576 1194.690,734.446 1194.782,734.312 1194.874,734.175 1194.968,734.035 1195.062,733.890 1195.156,733.743 1195.252,733.592 1195.348,733.438 1195.446,733.280 1195.543,733.119 1195.642,732.955 1195.741,732.788 1195.842,732.617 1195.942,732.443 1196.044,732.265 1196.146,732.085 1196.249,731.901 1196.353,731.714 1196.457,731.524 1196.562,731.331 1196.668,731.134 1196.774,730.934 1196.881,730.732 1196.989,730.526 1197.097,730.317 1197.206,730.105 1197.316,729.890 1197.426,729.672 1197.537,729.451 1197.649,729.227 1197.761,729.000 1197.874,728.770 1197.987,728.537 1198.101,728.301 1198.215,728.063 1198.331,727.821 1198.446,727.577 1198.562,727.329 1198.679,727.079 1198.797,726.826 1198.915,726.571 1199.033,726.312 1199.152,726.051 1199.272,725.787 1199.392,725.520 1199.512,725.251 1199.633,724.978 1199.755,724.704 1199.877,724.426 1200.000,724.146 1200.123,723.863 1200.246,723.578 1200.370,723.290 1200.495,723.000 1200.620,722.706 1200.745,722.411 1200.871,722.113 1200.997,721.812 1201.124,721.509 1201.251,721.204 1201.379,720.895 1201.507,720.585 1201.635,720.272 1201.764,719.957 1201.893,719.639 1202.023,719.319 1202.152,718.997 1202.283,718.672 1202.414,718.345 1202.545,718.016 1202.676,717.685 1202.808,717.351 1202.940,717.015 1203.072,716.677 1203.205,716.336 1203.338,715.994 1203.472,715.649 1203.605,715.302 1203.739,714.953 1203.874,714.602 1204.008,714.248 1204.143,713.893 1204.279,713.535 1204.414,713.176 1204.550,712.814 1204.686,712.451 1204.822,712.085 1204.958,711.718 1205.095,711.348 1205.232,710.977 1205.369,710.604 1205.507,710.229 1205.644,709.851 1205.782,709.472 1205.920,709.092 1206.059,708.709 1206.197,708.324 1206.336,707.938 1206.474,707.550 1206.613,707.160 1206.752,706.769 1206.892,706.375 1207.031,705.980 1207.171,705.583 1207.310,705.185 1207.450,704.785 1207.590,704.383 1207.730,703.980 1207.871,703.575 1208.011,703.168 1208.151,702.760 1208.292,702.350 1208.432,701.939 1208.573,701.526 1208.714,701.112 1208.854,700.696 1208.995,700.279 1209.136,699.861 1209.277,699.440 1209.418,699.019 1209.559,698.596 1209.700,698.172 1209.841,697.746 1209.982,697.319 1210.124,696.891 1210.265,696.461 1210.406,696.030 1210.547,695.598 1210.688,695.164 1210.829,694.730 1210.970,694.294 1211.111,693.856 1211.252,693.418 1211.393,692.978 1211.534,692.538 1211.674,692.096 1211.815,691.653 1211.956,691.209 1212.096,690.764 1212.237,690.318 1212.377,689.870 1212.517,689.422 1212.658,688.973 1212.798,688.522 1212.938,688.071 1213.077,687.619 1213.217,687.166 1213.356,686.711 1213.496,686.256 1213.635,685.800 1213.774,685.344 1213.913,684.886 1214.052,684.427 1214.190,683.968 1214.329,683.508 1214.467,683.047 1214.605,682.585 1214.743,682.123 1214.880,681.659 1215.018,681.196 1215.155,680.731 1215.292,680.266 1215.428,679.800 1215.565,679.333 1215.701,678.866 1215.837,678.398 1215.972,677.929 1216.108,677.460 1216.243,676.991 1216.378,676.520 1216.512,676.050 1216.646,675.579 1216.780,675.107 1216.914,674.635 1217.047,674.162 1217.180,673.689 1217.313,673.216 1217.445,672.742 1217.577,672.267 1217.709,671.793 1217.840,671.318 1217.971,670.842 1218.102,670.367 1218.232,669.891 1218.362,669.414 1218.491,668.938 1218.620,668.461 1218.749,667.984 1218.877,667.507 1219.005,667.029 1219.132,666.552 1219.259,666.074 1219.386,665.596 1219.512,665.118 1219.638,664.640 1219.763,664.162 1219.888,663.684 1220.012,663.205 1220.136,662.727 1220.259,662.248 1220.382,661.770 1220.505,661.292 1220.627,660.813 1220.748,660.335 1220.869,659.857 1220.989,659.378 1221.109,658.900 1221.229,658.422 1221.347,657.945 1221.466,657.467 1221.583,656.989 1221.701,656.512 1221.817,656.035 1221.933,655.558 1222.049,655.082 1222.164,654.605 1222.278,654.129 1222.392,653.653 1222.505,653.178 1222.617,652.703 1222.729,652.228 1222.841,651.753 1222.951,651.279 1223.061,650.805 1223.171,650.332 1223.280,649.859 1223.388,649.387 1223.495,648.915 1223.602,648.444 1223.708,647.973 1223.814,647.502 1223.918,647.032 1224.022,646.563 1224.126,646.094 1224.229,645.626 1224.331,645.158 1224.432,644.692 1224.532,644.225 1224.632,643.760 1224.731,643.295 1224.830,642.830 1224.927,642.367 1225.024,641.904 1225.120,641.442 1225.216,640.981 1225.310,640.520 1225.404,640.060 1225.497,639.601 1225.589,639.143 1225.681,638.686 1225.771,638.230 1225.861,637.774 1225.950,637.320 1226.038,636.866 1226.126,636.413 1226.212,635.961 1226.298,635.511 1226.383,635.061 1226.467,634.612 1226.550,634.164 1226.609,633.848 1226.669,633.533 1226.729,633.219 1226.790,632.906 1226.852,632.595 1226.915,632.285 1226.979,631.977 1227.043,631.669 1227.108,631.364 1227.173,631.059 1227.240,630.756 1227.307,630.454 1227.374,630.153 1227.443,629.853 1227.512,629.555 1227.581,629.258 1227.652,628.963 1227.723,628.669 1227.795,628.376 1227.867,628.084 1227.940,627.793 1228.014,627.504 1228.088,627.216 1228.163,626.930 1228.239,626.644 1228.315,626.360 1228.392,626.077 1228.469,625.796 1228.548,625.516 1228.626,625.237 1228.706,624.959 1228.786,624.682 1228.866,624.407 1228.947,624.133 1229.029,623.860 1229.111,623.588 1229.194,623.318 1229.277,623.049 1229.361,622.781 1229.446,622.514 1229.531,622.249 1229.616,621.985 1229.702,621.722 1229.789,621.460 1229.876,621.199 1229.964,620.940 1230.052,620.682 1230.141,620.425 1230.230,620.169 1230.320,619.915 1230.410,619.661 1230.501,619.409 1230.592,619.158 1230.684,618.908 1230.776,618.660 1230.869,618.412 1230.962,618.166 1231.056,617.921 1231.150,617.677 1231.244,617.435 1231.339,617.193 1231.435,616.953 1231.530,616.714 1231.627,616.476 1231.723,616.239 1231.821,616.003 1231.918,615.769 1232.016,615.536 1232.114,615.303 1232.213,615.072 1232.312,614.842 1232.412,614.614 1232.512,614.386 1232.612,614.160 1232.713,613.934 1232.814,613.710 1232.915,613.487 1233.017,613.265 1233.119,613.044 1233.222,612.825 1233.324,612.606 1233.427,612.389 1233.531,612.172 1233.635,611.957 1233.739,611.743 1233.843,611.530 1233.948,611.318 1234.053,611.107 1234.159,610.898 1234.264,610.689 1234.370,610.481 1234.476,610.275 1234.583,610.070 1234.619,610.000 1181.539,610.000 1181.440,610.681 Z"
                        style={{
                          fill: "#4a4234",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "none",
                          strokeWidth: 2.5,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                      />
                      <path
                        id="R_forearm_sleeve_outline"
                        d="M 1181.303,611.643 1181.168,612.605 1181.034,613.568 1180.903,614.531 1180.774,615.496 1180.647,616.461 1180.522,617.426 1180.399,618.392 1180.278,619.359 1180.159,620.326 1180.042,621.293 1179.926,622.260 1179.813,623.228 1179.701,624.196 1179.592,625.164 1179.484,626.131 1179.378,627.099 1179.275,628.067 1179.172,629.034 1179.072,630.001 1178.974,630.968 1178.877,631.934 1178.782,632.900 1178.689,633.865 1178.598,634.830 1178.509,635.794 1178.421,636.757 1178.335,637.719 1178.250,638.681 1178.168,639.641 1178.087,640.601 1178.008,641.560 1177.930,642.517 1177.854,643.473 1177.780,644.428 1177.708,645.382 1177.637,646.334 1177.567,647.285 1177.499,648.235 1177.433,649.182 1177.369,650.128 1177.306,651.073 1177.244,652.015 1177.184,652.956 1177.126,653.895 1177.069,654.832 1177.014,655.767 1176.960,656.700 1176.907,657.630 1176.856,658.558 1176.807,659.484 1176.758,660.408 1176.712,661.329 1176.667,662.248 1176.623,663.164 1176.580,664.078 1176.539,664.989 1176.499,665.897 1176.461,666.802 1176.424,667.705 1176.388,668.604 1176.354,669.500 1176.321,670.394 1176.289,671.284 1176.258,672.171 1176.229,673.055 1176.201,673.935 1176.174,674.812 1176.148,675.685 1176.124,676.555 1176.101,677.422 1176.079,678.284 1176.058,679.143 1176.038,679.999 1176.020,680.850 1176.002,681.697 1175.986,682.541 1175.971,683.380 1175.957,684.215 1175.944,685.046 1175.932,685.873 1175.921,686.695 1175.912,687.513 1175.903,688.327 1175.895,689.136 1175.889,689.940 1175.883,690.740 1175.878,691.535 1175.875,692.326 1175.872,693.111 1175.870,693.892 1175.869,694.667 1175.869,695.438 1175.870,696.203 1175.872,696.964 1175.875,697.719 1175.878,698.468 1175.883,699.213 1175.888,699.952 1175.894,700.685 1175.901,701.413 1175.909,702.136 1175.918,702.852 1175.927,703.563 1175.938,704.268 1175.949,704.967 1175.960,705.661 1175.973,706.348 1175.986,707.029 1176.000,707.704 1176.014,708.373 1176.030,709.035 1176.046,709.691 1176.062,710.341 1176.080,710.984 1176.097,711.621 1176.116,712.251 1176.135,712.875 1176.155,713.491 1176.175,714.101 1176.196,714.704 1176.218,715.300 1176.240,715.890 1176.262,716.472 1176.285,717.047 1176.309,717.614 1176.333,718.175 1176.358,718.728 1176.383,719.274 1176.408,719.812 1176.434,720.343 1176.461,720.867 1176.488,721.382 1176.515,721.890 1176.543,722.390 1176.571,722.883 1176.599,723.367 1176.628,723.844 1176.657,724.312 1176.687,724.772 1176.717,725.224 1176.747,725.668 1176.777,726.104 1176.808,726.531 1176.839,726.950 1176.870,727.360 1176.902,727.762 1176.934,728.155 1176.966,728.540 1176.998,728.916 1177.031,729.282 1177.063,729.640 1177.096,729.990 1177.129,730.330 1177.162,730.661 1177.195,730.982 1177.229,731.295 1177.262,731.598 1177.296,731.892 1177.330,732.177 1177.363,732.452 1177.397,732.718 1177.431,732.974 1177.465,733.220 1177.499,733.457 1177.533,733.684 1177.567,733.901 1177.601,734.108 1177.635,734.305 1177.669,734.492 1177.703,734.669 1177.737,734.835 1177.771,734.992 1177.804,735.138 1177.838,735.274 1191.747,736.758 1191.802,736.777 1191.858,736.791 1191.914,736.802 1191.972,736.809 1192.031,736.811 1192.091,736.809 1192.152,736.804 1192.213,736.794 1192.276,736.780 1192.340,736.762 1192.405,736.741 1192.471,736.715 1192.538,736.685 1192.606,736.651 1192.674,736.614 1192.744,736.572 1192.815,736.527 1192.887,736.477 1192.959,736.424 1193.033,736.367 1193.107,736.306 1193.182,736.242 1193.259,736.173 1193.336,736.101 1193.414,736.025 1193.493,735.945 1193.573,735.862 1193.654,735.775 1193.736,735.684 1193.818,735.589 1193.901,735.491 1193.986,735.389 1194.071,735.284 1194.157,735.175 1194.244,735.062 1194.331,734.946 1194.420,734.826 1194.509,734.703 1194.599,734.576 1194.690,734.446 1194.782,734.312 1194.874,734.175 1194.968,734.035 1195.062,733.890 1195.156,733.743 1195.252,733.592 1195.348,733.438 1195.446,733.280 1195.543,733.119 1195.642,732.955 1195.741,732.788 1195.842,732.617 1195.942,732.443 1196.044,732.265 1196.146,732.085 1196.249,731.901 1196.353,731.714 1196.457,731.524 1196.562,731.331 1196.668,731.134 1196.774,730.934 1196.881,730.732 1196.989,730.526 1197.097,730.317 1197.206,730.105 1197.316,729.890 1197.426,729.672 1197.537,729.451 1197.649,729.227 1197.761,729.000 1197.874,728.770 1197.987,728.537 1198.101,728.301 1198.215,728.063 1198.331,727.821 1198.446,727.577 1198.562,727.329 1198.679,727.079 1198.797,726.826 1198.915,726.571 1199.033,726.312 1199.152,726.051 1199.272,725.787 1199.392,725.520 1199.512,725.251 1199.633,724.978 1199.755,724.704 1199.877,724.426 1200.000,724.146 1200.123,723.863 1200.246,723.578 1200.370,723.290 1200.495,723.000 1200.620,722.706 1200.745,722.411 1200.871,722.113 1200.997,721.812 1201.124,721.509 1201.251,721.204 1201.379,720.895 1201.507,720.585 1201.635,720.272 1201.764,719.957 1201.893,719.639 1202.023,719.319 1202.152,718.997 1202.283,718.672 1202.414,718.345 1202.545,718.016 1202.676,717.685 1202.808,717.351 1202.940,717.015 1203.072,716.677 1203.205,716.336 1203.338,715.994 1203.472,715.649 1203.605,715.302 1203.739,714.953 1203.874,714.602 1204.008,714.248 1204.143,713.893 1204.279,713.535 1204.414,713.176 1204.550,712.814 1204.686,712.451 1204.822,712.085 1204.958,711.718 1205.095,711.348 1205.232,710.977 1205.369,710.604 1205.507,710.229 1205.644,709.851 1205.782,709.472 1205.920,709.092 1206.059,708.709 1206.197,708.324 1206.336,707.938 1206.474,707.550 1206.613,707.160 1206.752,706.769 1206.892,706.375 1207.031,705.980 1207.171,705.583 1207.310,705.185 1207.450,704.785 1207.590,704.383 1207.730,703.980 1207.871,703.575 1208.011,703.168 1208.151,702.760 1208.292,702.350 1208.432,701.939 1208.573,701.526 1208.714,701.112 1208.854,700.696 1208.995,700.279 1209.136,699.861 1209.277,699.440 1209.418,699.019 1209.559,698.596 1209.700,698.172 1209.841,697.746 1209.982,697.319 1210.124,696.891 1210.265,696.461 1210.406,696.030 1210.547,695.598 1210.688,695.164 1210.829,694.730 1210.970,694.294 1211.111,693.856 1211.252,693.418 1211.393,692.978 1211.534,692.538 1211.674,692.096 1211.815,691.653 1211.956,691.209 1212.096,690.764 1212.237,690.318 1212.377,689.870 1212.517,689.422 1212.658,688.973 1212.798,688.522 1212.938,688.071 1213.077,687.619 1213.217,687.166 1213.356,686.711 1213.496,686.256 1213.635,685.800 1213.774,685.344 1213.913,684.886 1214.052,684.427 1214.190,683.968 1214.329,683.508 1214.467,683.047 1214.605,682.585 1214.743,682.123 1214.880,681.659 1215.018,681.196 1215.155,680.731 1215.292,680.266 1215.428,679.800 1215.565,679.333 1215.701,678.866 1215.837,678.398 1215.972,677.929 1216.108,677.460 1216.243,676.991 1216.378,676.520 1216.512,676.050 1216.646,675.579 1216.780,675.107 1216.914,674.635 1217.047,674.162 1217.180,673.689 1217.313,673.216 1217.445,672.742 1217.577,672.267 1217.709,671.793 1217.840,671.318 1217.971,670.842 1218.102,670.367 1218.232,669.891 1218.362,669.414 1218.491,668.938 1218.620,668.461 1218.749,667.984 1218.877,667.507 1219.005,667.029 1219.132,666.552 1219.259,666.074 1219.386,665.596 1219.512,665.118 1219.638,664.640 1219.763,664.162 1219.888,663.684 1220.012,663.205 1220.136,662.727 1220.259,662.248 1220.382,661.770 1220.505,661.292 1220.627,660.813 1220.748,660.335 1220.869,659.857 1220.989,659.378 1221.109,658.900 1221.229,658.422 1221.347,657.945 1221.466,657.467 1221.583,656.989 1221.701,656.512 1221.817,656.035 1221.933,655.558 1222.049,655.082 1222.164,654.605 1222.278,654.129 1222.392,653.653 1222.505,653.178 1222.617,652.703 1222.729,652.228 1222.841,651.753 1222.951,651.279 1223.061,650.805 1223.171,650.332 1223.280,649.859 1223.388,649.387 1223.495,648.915 1223.602,648.444 1223.708,647.973 1223.814,647.502 1223.918,647.032 1224.022,646.563 1224.126,646.094 1224.229,645.626 1224.331,645.158 1224.432,644.692 1224.532,644.225 1224.632,643.760 1224.731,643.295 1224.830,642.830 1224.927,642.367 1225.024,641.904 1225.120,641.442 1225.216,640.981 1225.310,640.520 1225.404,640.060 1225.497,639.601 1225.589,639.143 1225.681,638.686 1225.771,638.230 1225.861,637.774 1225.950,637.320 1226.038,636.866 1226.126,636.413 1226.212,635.961 1226.298,635.511 1226.383,635.061 1226.467,634.612 1226.550,634.164 1226.609,633.848 1226.669,633.533 1226.729,633.219 1226.790,632.906 1226.852,632.595 1226.915,632.285 1226.979,631.977 1227.043,631.669 1227.108,631.364 1227.173,631.059 1227.240,630.756 1227.307,630.454 1227.374,630.153 1227.443,629.853 1227.512,629.555 1227.581,629.258 1227.652,628.963 1227.723,628.669 1227.795,628.376 1227.867,628.084 1227.940,627.793 1228.014,627.504 1228.088,627.216 1228.163,626.930 1228.239,626.644 1228.315,626.360 1228.392,626.077 1228.469,625.796 1228.548,625.516 1228.626,625.237 1228.706,624.959 1228.786,624.682 1228.866,624.407 1228.947,624.133 1229.029,623.860 1229.111,623.588 1229.194,623.318 1229.277,623.049 1229.361,622.781 1229.446,622.514 1229.531,622.249 1229.616,621.985 1229.702,621.722 1229.789,621.460 1229.876,621.199 1229.964,620.940 1230.052,620.682 1230.141,620.425 1230.230,620.169 1230.320,619.915 1230.410,619.661 1230.501,619.409 1230.592,619.158 1230.684,618.908 1230.776,618.660 1230.869,618.412 1230.962,618.166 1231.056,617.921 1231.150,617.677 1231.244,617.435 1231.339,617.193 1231.435,616.953 1231.530,616.714 1231.627,616.476 1231.723,616.239 1231.821,616.003 1231.918,615.769 1232.016,615.536 1232.114,615.303 1232.213,615.072 1232.312,614.842 1232.412,614.614 1232.512,614.386 1232.612,614.160 1232.713,613.934 1232.814,613.710 1232.915,613.487 1233.017,613.265 1233.119,613.044 1233.222,612.825 1233.324,612.606 1233.427,612.389 1233.531,612.172 1233.635,611.957 1233.739,611.743 1233.843,611.530"
                        style={{
                          fill: "none",
                          stroke: "#2a2418",
                          strokeWidth: 2.5,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                      />
                    </g>
                  </g>
                </g>
                <g id="R_UPPER_ARM_ART" data-role="art">
                  <path
                    id="path122"
                    d="m 0,0 20.715,-2.561 c 2.588,-0.32 4.477,-3.15 5.023,-7.526 0.468,-3.747 -0.1,-8.231 -1.557,-12.299 L 6.823,-70.832 c -1.718,-4.796 -4.713,-7.889 -7.327,-7.566 l -11.362,1.405 c -2.313,0.286 -3.773,3.403 -3.63,7.746 l 1.52,46.156 c 0.202,6.14 2.209,12.695 5.307,17.33 2.67,3.997 5.85,6.11 8.669,5.761 z"
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1215.8537,537.93973)"
                    clipPath="url(#clipPath123)"
                  />
                  <path
                    id="path120"
                    d="m 0,0 20.715,-2.561 c 2.588,-0.32 4.477,-3.15 5.023,-7.526 0.468,-3.747 -0.1,-8.231 -1.557,-12.299 L 6.823,-70.832 c -1.718,-4.796 -4.713,-7.889 -7.327,-7.566 l -11.362,1.405 c -2.313,0.286 -3.773,3.403 -3.63,7.746 l 1.52,46.156 c 0.202,6.14 2.209,12.695 5.307,17.33 2.67,3.997 5.85,6.11 8.669,5.761"
                    style={{
                      fill: "#d48455",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1215.8537,537.93973)"
                    clipPath="url(#clipPath121)"
                    display="none"
                    data-role="hidden-construction-artifact"
                  />
                  <path
                    id="path127"
                    d="m 0,0 -5.747,0.643 -16.265,-4.226 c -2.301,-0.75 -3.394,-2.264 -3.279,-4.544 l 0.557,-9.883 c 0.313,-3.813 1.972,-7.146 4.978,-10 l 16.419,-1.836 z"
                    style={{
                      fill: "#d48455",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "#000000",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1249.4524,518.22147)"
                    clipPath="url(#clipPath128)"
                    display="none"
                    data-role="hidden-construction-artifact"
                  />
                  <path
                    id="path129"
                    d="m 0,0 c 1.178,0.624 0.609,1.317 -1.707,2.08 -5.39,1.358 -9.486,0.242 -12.289,-3.348 l -4.509,-15.55 c -0.643,-2.446 0.678,-3.853 3.961,-4.22 l 6.021,-0.674 c 2.919,-0.326 4.714,0.858 5.384,3.554 z"
                    style={{
                      fill: "#d48455",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "#000000",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1232.9637,520.73507)"
                    clipPath="url(#path129_motion_clip)"
                    data-role="exposed-skin-fragment"
                  />
                  <g id="R_upper_sleeve" data-part="sleeve">
                    <path
                      id="R_upper_sleeve_fill"
                      d="M 1223.280,649.859 1223.388,649.387 1223.495,648.915 1223.602,648.444 1223.708,647.973 1223.814,647.502 1223.918,647.032 1224.022,646.563 1224.126,646.094 1224.229,645.626 1224.331,645.158 1224.432,644.692 1224.532,644.225 1224.632,643.760 1224.731,643.295 1224.830,642.830 1224.927,642.367 1225.024,641.904 1225.120,641.442 1225.216,640.981 1225.310,640.520 1225.404,640.060 1225.497,639.601 1225.589,639.143 1225.681,638.686 1225.771,638.230 1225.861,637.774 1225.950,637.320 1226.038,636.866 1226.126,636.413 1226.212,635.961 1226.298,635.511 1226.383,635.061 1226.467,634.612 1226.550,634.164 1226.609,633.848 1226.669,633.533 1226.729,633.219 1226.790,632.906 1226.852,632.595 1226.915,632.285 1226.979,631.977 1227.043,631.669 1227.108,631.364 1227.173,631.059 1227.240,630.756 1227.307,630.454 1227.374,630.153 1227.443,629.853 1227.512,629.555 1227.581,629.258 1227.652,628.963 1227.723,628.669 1227.795,628.376 1227.867,628.084 1227.940,627.793 1228.014,627.504 1228.088,627.216 1228.163,626.930 1228.239,626.644 1228.315,626.360 1228.392,626.077 1228.469,625.796 1228.548,625.516 1228.626,625.237 1228.706,624.959 1228.786,624.682 1228.866,624.407 1228.947,624.133 1229.029,623.860 1229.111,623.588 1229.194,623.318 1229.277,623.049 1229.361,622.781 1229.446,622.514 1229.531,622.249 1229.616,621.985 1229.702,621.722 1229.789,621.460 1229.876,621.199 1229.964,620.940 1230.052,620.682 1230.141,620.425 1230.230,620.169 1230.320,619.915 1230.410,619.661 1230.501,619.409 1230.592,619.158 1230.684,618.908 1230.776,618.660 1230.869,618.412 1230.962,618.166 1231.056,617.921 1231.150,617.677 1231.244,617.435 1231.339,617.193 1231.435,616.953 1231.530,616.714 1231.627,616.476 1231.723,616.239 1231.821,616.003 1231.918,615.769 1232.016,615.536 1232.114,615.303 1232.213,615.072 1232.312,614.842 1232.412,614.614 1232.512,614.386 1232.612,614.160 1232.713,613.934 1232.814,613.710 1232.915,613.487 1233.017,613.265 1233.119,613.044 1233.222,612.825 1233.324,612.606 1233.427,612.389 1233.531,612.172 1233.635,611.957 1233.739,611.743 1233.843,611.530 1233.948,611.318 1234.053,611.107 1234.159,610.898 1234.264,610.689 1234.370,610.481 1234.476,610.275 1234.583,610.070 1234.690,609.865 1234.797,609.662 1234.904,609.460 1235.012,609.259 1235.120,609.059 1235.228,608.861 1235.336,608.663 1235.445,608.466 1235.553,608.271 1235.662,608.076 1235.772,607.882 1235.881,607.690 1235.991,607.499 1236.101,607.308 1236.211,607.119 1236.321,606.931 1236.432,606.744 1236.542,606.558 1236.653,606.372 1236.764,606.188 1236.876,606.005 1236.987,605.823 1237.099,605.642 1237.210,605.462 1237.322,605.284 1237.434,605.106 1237.546,604.929 1237.659,604.753 1237.771,604.578 1237.884,604.404 1237.996,604.231 1238.109,604.060 1238.222,603.889 1238.335,603.719 1238.448,603.550 1238.561,603.383 1238.675,603.216 1238.788,603.050 1238.901,602.885 1239.015,602.721 1239.128,602.558 1239.242,602.396 1239.356,602.236 1239.470,602.076 1239.583,601.917 1239.697,601.759 1239.811,601.602 1239.925,601.446 1240.039,601.291 1240.153,601.136 1240.267,600.983 1240.381,600.831 1240.495,600.680 1240.609,600.530 1240.723,600.380 1240.837,600.232 1240.951,600.084 1241.065,599.938 1241.179,599.792 1241.293,599.648 1241.407,599.504 1241.521,599.361 1241.634,599.219 1241.748,599.078 1241.862,598.938 1241.975,598.799 1242.089,598.661 1242.203,598.524 1242.316,598.387 1242.429,598.252 1242.543,598.117 1242.656,597.984 1242.769,597.851 1242.882,597.719 1242.995,597.588 1243.107,597.458 1243.220,597.329 1243.332,597.200 1243.445,597.073 1243.557,596.946 1243.669,596.821 1243.781,596.696 1243.893,596.572 1244.005,596.449 1244.116,596.327 1244.227,596.206 1244.339,596.085 1244.450,595.966 1244.560,595.847 1244.671,595.729 1244.782,595.612 1244.892,595.496 1245.002,595.381 1245.112,595.266 1245.221,595.153 1245.331,595.040 1245.440,594.928 1245.549,594.817 1245.658,594.707 1245.766,594.597 1245.874,594.489 1245.982,594.381 1246.090,594.274 1246.198,594.168 1246.305,594.063 1246.412,593.958 1246.519,593.854 1246.625,593.752 1246.731,593.650 1246.837,593.548 1246.943,593.448 1247.048,593.348 1247.153,593.249 1247.257,593.151 1247.362,593.054 1247.466,592.957 1247.569,592.862 1247.673,592.767 1247.776,592.673 1247.879,592.579 1247.981,592.487 1248.083,592.395 1248.185,592.304 1248.286,592.214 1248.387,592.124 1248.487,592.035 1248.587,591.947 1248.687,591.860 1248.787,591.774 1248.886,591.688 1248.984,591.603 1249.082,591.519 1249.180,591.435 1249.278,591.353 1249.375,591.271 1249.471,591.189 1249.567,591.109 1249.663,591.029 1249.758,590.950 1249.853,590.872 1249.947,590.794 1250.041,590.717 1250.135,590.641 1250.228,590.565 1250.320,590.491 1250.412,590.417 1250.504,590.343 1250.595,590.271 1250.685,590.199 1250.776,590.128 1250.865,590.057 1250.954,589.987 1251.043,589.918 1251.131,589.850 1251.218,589.782 1251.305,589.715 1251.392,589.649 1251.478,589.583 1251.563,589.518 1251.648,589.453 1251.732,589.390 1251.816,589.327 1251.899,589.264 1251.982,589.203 1252.064,589.142 1252.146,589.081 1252.226,589.022 1252.307,588.963 1252.386,588.904 1252.466,588.847 1252.544,588.789 1252.622,588.733 1252.699,588.677 1252.776,588.622 1252.852,588.567 1252.927,588.513 1253.002,588.460 1253.076,588.408 1253.150,588.356 1253.223,588.304 1253.295,588.253 1253.366,588.203 1253.437,588.154 1253.507,588.105 1253.577,588.056 1253.646,588.009 1253.714,587.961 1253.781,587.915 1253.848,587.869 1253.914,587.824 1253.979,587.779 1254.044,587.735 1254.108,587.691 1254.171,587.648 1254.234,587.606 1254.295,587.564 1254.356,587.523 1254.417,587.482 1254.476,587.442 1254.535,587.403 1254.593,587.364 1254.650,587.325 1254.706,587.288 1254.762,587.250 1254.817,587.214 1254.871,587.178 1249.957,515.947 1249.883,515.960 1249.808,515.973 1249.733,515.986 1249.657,515.999 1249.580,516.012 1249.503,516.024 1249.425,516.036 1249.346,516.048 1249.267,516.060 1249.186,516.071 1249.105,516.083 1249.024,516.094 1248.942,516.105 1248.859,516.116 1248.775,516.127 1248.691,516.137 1248.606,516.147 1248.521,516.157 1248.435,516.167 1248.348,516.177 1248.261,516.187 1248.173,516.196 1248.084,516.206 1247.995,516.215 1247.905,516.224 1247.814,516.233 1247.723,516.241 1247.632,516.250 1247.539,516.258 1247.446,516.266 1247.353,516.274 1247.259,516.282 1247.165,516.290 1247.069,516.298 1246.974,516.305 1246.878,516.312 1246.781,516.320 1246.684,516.327 1246.586,516.334 1246.487,516.340 1246.388,516.347 1246.289,516.354 1246.189,516.360 1246.089,516.366 1245.988,516.373 1245.886,516.379 1245.784,516.385 1245.682,516.391 1245.579,516.396 1245.476,516.402 1245.372,516.407 1245.267,516.413 1245.163,516.418 1245.057,516.423 1244.952,516.429 1244.845,516.434 1244.739,516.438 1244.632,516.443 1244.524,516.448 1244.416,516.453 1244.308,516.457 1244.199,516.462 1244.090,516.466 1243.981,516.470 1243.871,516.475 1243.761,516.479 1243.650,516.483 1243.539,516.487 1243.427,516.491 1243.315,516.495 1243.203,516.499 1243.091,516.502 1242.978,516.506 1242.864,516.510 1242.751,516.513 1242.637,516.517 1242.522,516.520 1242.408,516.523 1242.293,516.527 1242.177,516.530 1242.062,516.533 1241.946,516.536 1241.830,516.540 1241.713,516.543 1241.596,516.546 1241.479,516.549 1241.362,516.552 1241.244,516.555 1241.126,516.558 1241.008,516.561 1240.889,516.564 1240.771,516.566 1240.652,516.569 1240.532,516.572 1240.413,516.575 1240.293,516.578 1240.173,516.580 1240.053,516.583 1239.932,516.586 1239.812,516.589 1239.691,516.591 1239.570,516.594 1239.449,516.597 1239.327,516.599 1239.206,516.602 1239.084,516.605 1238.962,516.608 1238.840,516.610 1238.717,516.613 1238.595,516.616 1238.472,516.618 1238.349,516.621 1238.226,516.624 1238.103,516.627 1237.980,516.630 1237.856,516.633 1237.733,516.635 1237.609,516.638 1237.486,516.641 1237.362,516.644 1237.238,516.647 1237.114,516.650 1236.989,516.653 1236.865,516.656 1236.741,516.660 1236.616,516.663 1236.492,516.666 1236.367,516.669 1236.243,516.673 1236.118,516.676 1235.993,516.679 1235.868,516.683 1235.744,516.687 1235.619,516.690 1235.494,516.694 1235.369,516.698 1235.244,516.701 1235.119,516.705 1234.994,516.709 1234.869,516.713 1234.744,516.717 1234.619,516.721 1234.494,516.726 1234.369,516.730 1234.244,516.734 1234.119,516.739 1233.994,516.743 1233.869,516.748 1233.744,516.753 1233.619,516.758 1233.495,516.763 1233.370,516.768 1233.245,516.773 1233.121,516.778 1232.996,516.783 1232.872,516.789 1232.748,516.794 1232.623,516.800 1232.499,516.806 1232.375,516.812 1232.251,516.818 1232.127,516.824 1232.004,516.830 1231.880,516.836 1231.756,516.843 1231.633,516.849 1231.510,516.856 1231.387,516.863 1231.264,516.870 1231.141,516.877 1231.018,516.884 1230.896,516.891 1230.774,516.899 1230.651,516.906 1230.530,516.914 1230.408,516.922 1230.286,516.930 1230.165,516.938 1230.043,516.947 1229.922,516.955 1229.802,516.964 1229.681,516.973 1229.561,516.982 1229.441,516.991 1229.321,517.000 1229.201,517.010 1229.081,517.019 1228.962,517.029 1228.843,517.039 1228.725,517.049 1228.606,517.059 1228.488,517.070 1228.370,517.081 1228.252,517.091 1228.135,517.103 1228.018,517.114 1227.901,517.125 1227.785,517.137 1227.669,517.148 1227.553,517.160 1227.437,517.173 1227.322,517.185 1227.207,517.198 1227.092,517.210 1226.978,517.223 1226.864,517.236 1226.751,517.250 1226.637,517.263 1226.524,517.277 1226.412,517.291 1226.300,517.305 1226.188,517.320 1226.077,517.334 1225.966,517.349 1225.855,517.364 1225.745,517.380 1225.635,517.395 1225.525,517.411 1225.416,517.427 1225.308,517.443 1225.199,517.460 1225.092,517.476 1224.984,517.493 1224.877,517.510 1224.771,517.528 1224.665,517.546 1224.559,517.563 1224.454,517.582 1224.349,517.600 1224.245,517.619 1224.141,517.638 1224.038,517.657 1223.935,517.676 1223.833,517.696 1223.731,517.716 1223.630,517.736 1223.529,517.757 1223.428,517.777 1223.329,517.798 1223.229,517.820 1223.130,517.841 1223.032,517.863 1222.934,517.885 1222.837,517.907 1222.741,517.930 1222.644,517.953 1222.549,517.976 1222.454,518.000 1222.360,518.024 1222.266,518.048 1222.172,518.072 1222.080,518.097 1221.987,518.122 1221.896,518.147 1221.805,518.173 1221.715,518.199 1221.625,518.225 1221.536,518.252 1221.447,518.278 1221.359,518.306 1221.272,518.333 1221.185,518.361 1221.099,518.389 1221.014,518.417 1220.929,518.446 1220.845,518.475 1220.762,518.505 1220.679,518.534 1220.597,518.564 1220.516,518.595 1220.435,518.625 1220.355,518.657 1220.276,518.688 1220.197,518.720 1220.119,518.752 1220.042,518.784 1219.965,518.817 1219.889,518.850 1219.814,518.884 1219.740,518.917 1219.666,518.952 1219.593,518.986 1219.521,519.021 1219.450,519.056 1219.379,519.092 1219.309,519.128 1219.240,519.164 1219.171,519.201 1219.104,519.238 1219.037,519.275 1218.971,519.313 1218.906,519.351 1218.841,519.390 1218.777,519.429 1218.715,519.468 1218.653,519.508 1218.591,519.548 1218.531,519.589 1218.471,519.630 1217.982,519.975 1217.497,520.329 1217.015,520.692 1216.536,521.065 1216.062,521.445 1215.590,521.835 1215.123,522.233 1214.659,522.640 1214.198,523.055 1213.741,523.479 1213.287,523.911 1212.837,524.352 1212.390,524.800 1211.947,525.257 1211.507,525.722 1211.071,526.195 1210.638,526.677 1210.208,527.166 1209.782,527.663 1209.359,528.167 1208.940,528.680 1208.524,529.200 1208.111,529.728 1207.702,530.263 1207.296,530.806 1206.893,531.356 1206.494,531.913 1206.097,532.478 1205.705,533.050 1205.315,533.629 1204.928,534.215 1204.545,534.809 1204.165,535.409 1203.789,536.016 1203.415,536.630 1203.045,537.251 1202.677,537.878 1202.313,538.512 1201.952,539.152 1201.595,539.800 1201.240,540.453 1200.888,541.113 1200.540,541.779 1200.194,542.451 1199.852,543.130 1199.513,543.815 1199.177,544.505 1198.843,545.202 1198.513,545.905 1198.186,546.613 1197.862,547.327 1197.541,548.047 1197.222,548.773 1196.907,549.504 1196.595,550.241 1196.285,550.983 1195.979,551.731 1195.675,552.484 1195.375,553.242 1195.077,554.005 1194.782,554.773 1194.490,555.547 1194.200,556.326 1193.914,557.109 1193.630,557.897 1193.350,558.690 1193.072,559.488 1192.797,560.291 1192.524,561.098 1192.254,561.910 1191.987,562.726 1191.723,563.547 1191.462,564.371 1191.203,565.201 1190.947,566.034 1190.694,566.872 1190.443,567.713 1190.195,568.559 1189.949,569.409 1189.706,570.262 1189.466,571.120 1189.229,571.981 1188.994,572.846 1188.761,573.714 1188.532,574.586 1188.304,575.462 1188.080,576.341 1187.857,577.223 1187.638,578.109 1187.421,578.997 1187.206,579.889 1186.994,580.785 1186.784,581.683 1186.577,582.584 1186.372,583.488 1186.169,584.395 1185.970,585.305 1185.772,586.217 1185.577,587.132 1185.384,588.050 1185.194,588.970 1185.006,589.893 1184.820,590.818 1184.637,591.745 1184.455,592.675 1184.277,593.607 1184.100,594.541 1183.926,595.477 1183.754,596.415 1183.585,597.355 1183.417,598.297 1183.252,599.240 1183.089,600.186 1182.928,601.133 1182.770,602.082 1182.614,603.032 1182.459,603.983 1182.307,604.937 1182.158,605.891 1182.010,606.847 1181.864,607.804 1181.721,608.762 1181.579,609.721 1181.440,610.681 1181.303,611.643 1181.168,612.605 1181.034,613.568 1180.903,614.531 1180.774,615.496 1180.647,616.461 1180.522,617.426 1180.399,618.392 1180.278,619.359 1180.159,620.326 1180.042,621.293 1179.926,622.260 1179.813,623.228 1179.701,624.196 1179.592,625.164 1179.484,626.131 1179.378,627.099 1179.275,628.067 1179.172,629.034 1179.072,630.001 1178.974,630.968 1178.877,631.934 1178.782,632.900 1178.689,633.865 1178.598,634.830 1178.509,635.794 1178.421,636.757 1178.335,637.719 1178.250,638.681 1178.168,639.641 1178.087,640.601 1178.008,641.560 1177.930,642.517 1177.854,643.473 1177.780,644.428 1177.708,645.382 1177.637,646.334 1177.567,647.285 1177.499,648.235 1177.433,649.182 1177.378,650.000 1223.247,650.000 1223.280,649.859 Z"
                      style={{
                        fill: "#4a4234",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                        strokeWidth: 2.5,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                    />
                    <path
                      id="R_upper_sleeve_outline"
                      d="M 1223.602,648.444 1223.708,647.973 1223.814,647.502 1223.918,647.032 1224.022,646.563 1224.126,646.094 1224.229,645.626 1224.331,645.158 1224.432,644.692 1224.532,644.225 1224.632,643.760 1224.731,643.295 1224.830,642.830 1224.927,642.367 1225.024,641.904 1225.120,641.442 1225.216,640.981 1225.310,640.520 1225.404,640.060 1225.497,639.601 1225.589,639.143 1225.681,638.686 1225.771,638.230 1225.861,637.774 1225.950,637.320 1226.038,636.866 1226.126,636.413 1226.212,635.961 1226.298,635.511 1226.383,635.061 1226.467,634.612 1226.550,634.164 1226.609,633.848 1226.669,633.533 1226.729,633.219 1226.790,632.906 1226.852,632.595 1226.915,632.285 1226.979,631.977 1227.043,631.669 1227.108,631.364 1227.173,631.059 1227.240,630.756 1227.307,630.454 1227.374,630.153 1227.443,629.853 1227.512,629.555 1227.581,629.258 1227.652,628.963 1227.723,628.669 1227.795,628.376 1227.867,628.084 1227.940,627.793 1228.014,627.504 1228.088,627.216 1228.163,626.930 1228.239,626.644 1228.315,626.360 1228.392,626.077 1228.469,625.796 1228.548,625.516 1228.626,625.237 1228.706,624.959 1228.786,624.682 1228.866,624.407 1228.947,624.133 1229.029,623.860 1229.111,623.588 1229.194,623.318 1229.277,623.049 1229.361,622.781 1229.446,622.514 1229.531,622.249 1229.616,621.985 1229.702,621.722 1229.789,621.460 1229.876,621.199 1229.964,620.940 1230.052,620.682 1230.141,620.425 1230.230,620.169 1230.320,619.915 1230.410,619.661 1230.501,619.409 1230.592,619.158 1230.684,618.908 1230.776,618.660 1230.869,618.412 1230.962,618.166 1231.056,617.921 1231.150,617.677 1231.244,617.435 1231.339,617.193 1231.435,616.953 1231.530,616.714 1231.627,616.476 1231.723,616.239 1231.821,616.003 1231.918,615.769 1232.016,615.536 1232.114,615.303 1232.213,615.072 1232.312,614.842 1232.412,614.614 1232.512,614.386 1232.612,614.160 1232.713,613.934 1232.814,613.710 1232.915,613.487 1233.017,613.265 1233.119,613.044 1233.222,612.825 1233.324,612.606 1233.427,612.389 1233.531,612.172 1233.635,611.957 1233.739,611.743 1233.843,611.530 1233.948,611.318 1234.053,611.107 1234.159,610.898 1234.264,610.689 1234.370,610.481 1234.476,610.275 1234.583,610.070 1234.690,609.865 1234.797,609.662 1234.904,609.460 1235.012,609.259 1235.120,609.059 1235.228,608.861 1235.336,608.663 1235.445,608.466 1235.553,608.271 1235.662,608.076 1235.772,607.882 1235.881,607.690 1235.991,607.499 1236.101,607.308 1236.211,607.119 1236.321,606.931 1236.432,606.744 1236.542,606.558 1236.653,606.372 1236.764,606.188 1236.876,606.005 1236.987,605.823 1237.099,605.642 1237.210,605.462 1237.322,605.284 1237.434,605.106 1237.546,604.929 1237.659,604.753 1237.771,604.578 1237.884,604.404 1237.996,604.231 1238.109,604.060 1238.222,603.889 1238.335,603.719 1238.448,603.550 1238.561,603.383 1238.675,603.216 1238.788,603.050 1238.901,602.885 1239.015,602.721 1239.128,602.558 1239.242,602.396 1239.356,602.236 1239.470,602.076 1239.583,601.917 1239.697,601.759 1239.811,601.602 1239.925,601.446 1240.039,601.291 1240.153,601.136 1240.267,600.983 1240.381,600.831 1240.495,600.680 1240.609,600.530 1240.723,600.380 1240.837,600.232 1240.951,600.084 1241.065,599.938 1241.179,599.792 1241.293,599.648 1241.407,599.504 1241.521,599.361 1241.634,599.219 1241.748,599.078 1241.862,598.938 1241.975,598.799 1242.089,598.661 1242.203,598.524 1242.316,598.387 1242.429,598.252 1242.543,598.117 1242.656,597.984 1242.769,597.851 1242.882,597.719 1242.995,597.588 1243.107,597.458 1243.220,597.329 1243.332,597.200 1243.445,597.073 1243.557,596.946 1243.669,596.821 1243.781,596.696 1243.893,596.572 1244.005,596.449 1244.116,596.327 1244.227,596.206 1244.339,596.085 1244.450,595.966 1244.560,595.847 1244.671,595.729 1244.782,595.612 1244.892,595.496 1245.002,595.381 1245.112,595.266 1245.221,595.153 1245.331,595.040 1245.440,594.928 1245.549,594.817 1245.658,594.707 1245.766,594.597 1245.874,594.489 1245.982,594.381 1246.090,594.274 1246.198,594.168 1246.305,594.063 1246.412,593.958 1246.519,593.854 1246.625,593.752 1246.731,593.650 1246.837,593.548 1246.943,593.448 1247.048,593.348 1247.153,593.249 1247.257,593.151 1247.362,593.054 1247.466,592.957 1247.569,592.862 1247.673,592.767 1247.776,592.673 1247.879,592.579 1247.981,592.487 1248.083,592.395 1248.185,592.304 1248.286,592.214 1248.387,592.124 1248.487,592.035 1248.587,591.947 1248.687,591.860 1248.787,591.774 1248.886,591.688 1248.984,591.603 1249.082,591.519 1249.180,591.435 1249.278,591.353 1249.375,591.271 1249.471,591.189 1249.567,591.109 1249.663,591.029 1249.758,590.950 1249.853,590.872 1249.947,590.794 1250.041,590.717 1250.135,590.641 1250.228,590.565 1250.320,590.491 1250.412,590.417 1250.504,590.343 1250.595,590.271 1250.685,590.199 1250.776,590.128 1250.865,590.057 1250.954,589.987 1251.043,589.918 1251.131,589.850 1251.218,589.782 1251.305,589.715 1251.392,589.649 1251.478,589.583 1251.563,589.518 1251.648,589.453 1251.732,589.390 1251.816,589.327 1251.899,589.264 1251.982,589.203 1252.064,589.142 1252.146,589.081 1252.226,589.022 1252.307,588.963 1252.386,588.904 1252.466,588.847 1252.544,588.789 1252.622,588.733 1252.699,588.677 1252.776,588.622 1252.852,588.567 1252.927,588.513 1253.002,588.460 1253.076,588.408 1253.150,588.356 1253.223,588.304 1253.295,588.253 1253.366,588.203 1253.437,588.154 1253.507,588.105 1253.577,588.056 1253.646,588.009 1253.714,587.961 1253.781,587.915 1253.848,587.869 1253.914,587.824 1253.979,587.779 1254.044,587.735 1254.108,587.691 1254.171,587.648 1254.234,587.606 1254.295,587.564 1254.356,587.523 1254.417,587.482 1254.476,587.442 1254.535,587.403 1254.593,587.364 1254.650,587.325 1254.706,587.288 1254.762,587.250 1254.817,587.214 1254.871,587.178 1249.957,515.947 1249.883,515.960 1249.808,515.973 1249.733,515.986 1249.657,515.999 1249.580,516.012 1249.503,516.024 1249.425,516.036 1249.346,516.048 1249.267,516.060 1249.186,516.071 1249.105,516.083 1249.024,516.094 1248.942,516.105 1248.859,516.116 1248.775,516.127 1248.691,516.137 1248.606,516.147 1248.521,516.157 1248.435,516.167 1248.348,516.177 1248.261,516.187 1248.173,516.196 1248.084,516.206 1247.995,516.215 1247.905,516.224 1247.814,516.233 1247.723,516.241 1247.632,516.250 1247.539,516.258 1247.446,516.266 1247.353,516.274 1247.259,516.282 1247.165,516.290 1247.069,516.298 1246.974,516.305 1246.878,516.312 1246.781,516.320 1246.684,516.327 1246.586,516.334 1246.487,516.340 1246.388,516.347 1246.289,516.354 1246.189,516.360 1246.089,516.366 1245.988,516.373 1245.886,516.379 1245.784,516.385 1245.682,516.391 1245.579,516.396 1245.476,516.402 1245.372,516.407 1245.267,516.413 1245.163,516.418 1245.057,516.423 1244.952,516.429 1244.845,516.434 1244.739,516.438 1244.632,516.443 1244.524,516.448 1244.416,516.453 1244.308,516.457 1244.199,516.462 1244.090,516.466 1243.981,516.470 1243.871,516.475 1243.761,516.479 1243.650,516.483 1243.539,516.487 1243.427,516.491 1243.315,516.495 1243.203,516.499 1243.091,516.502 1242.978,516.506 1242.864,516.510 1242.751,516.513 1242.637,516.517 1242.522,516.520 1242.408,516.523 1242.293,516.527 1242.177,516.530 1242.062,516.533 1241.946,516.536 1241.830,516.540 1241.713,516.543 1241.596,516.546 1241.479,516.549 1241.362,516.552 1241.244,516.555 1241.126,516.558 1241.008,516.561 1240.889,516.564 1240.771,516.566 1240.652,516.569 1240.532,516.572 1240.413,516.575 1240.293,516.578 1240.173,516.580 1240.053,516.583 1239.932,516.586 1239.812,516.589 1239.691,516.591 1239.570,516.594 1239.449,516.597 1239.327,516.599 1239.206,516.602 1239.084,516.605 1238.962,516.608 1238.840,516.610 1238.717,516.613 1238.595,516.616 1238.472,516.618 1238.349,516.621 1238.226,516.624 1238.103,516.627 1237.980,516.630 1237.856,516.633 1237.733,516.635 1237.609,516.638 1237.486,516.641 1237.362,516.644 1237.238,516.647 1237.114,516.650 1236.989,516.653 1236.865,516.656 1236.741,516.660 1236.616,516.663 1236.492,516.666 1236.367,516.669 1236.243,516.673 1236.118,516.676 1235.993,516.679 1235.868,516.683 1235.744,516.687 1235.619,516.690 1235.494,516.694 1235.369,516.698 1235.244,516.701 1235.119,516.705 1234.994,516.709 1234.869,516.713 1234.744,516.717 1234.619,516.721 1234.494,516.726 1234.369,516.730 1234.244,516.734 1234.119,516.739 1233.994,516.743 1233.869,516.748 1233.744,516.753 1233.619,516.758 1233.495,516.763 1233.370,516.768 1233.245,516.773 1233.121,516.778 1232.996,516.783 1232.872,516.789 1232.748,516.794 1232.623,516.800 1232.499,516.806 1232.375,516.812 1232.251,516.818 1232.127,516.824 1232.004,516.830 1231.880,516.836 1231.756,516.843 1231.633,516.849 1231.510,516.856 1231.387,516.863 1231.264,516.870 1231.141,516.877 1231.018,516.884 1230.896,516.891 1230.774,516.899 1230.651,516.906 1230.530,516.914 1230.408,516.922 1230.286,516.930 1230.165,516.938 1230.043,516.947 1229.922,516.955 1229.802,516.964 1229.681,516.973 1229.561,516.982 1229.441,516.991 1229.321,517.000 1229.201,517.010 1229.081,517.019 1228.962,517.029 1228.843,517.039 1228.725,517.049 1228.606,517.059 1228.488,517.070 1228.370,517.081 1228.252,517.091 1228.135,517.103 1228.018,517.114 1227.901,517.125 1227.785,517.137 1227.669,517.148 1227.553,517.160 1227.437,517.173 1227.322,517.185 1227.207,517.198 1227.092,517.210 1226.978,517.223 1226.864,517.236 1226.751,517.250 1226.637,517.263 1226.524,517.277 1226.412,517.291 1226.300,517.305 1226.188,517.320 1226.077,517.334 1225.966,517.349 1225.855,517.364 1225.745,517.380 1225.635,517.395 1225.525,517.411 1225.416,517.427 1225.308,517.443 1225.199,517.460 1225.092,517.476 1224.984,517.493 1224.877,517.510 1224.771,517.528 1224.665,517.546 1224.559,517.563 1224.454,517.582 1224.349,517.600 1224.245,517.619 1224.141,517.638 1224.038,517.657 1223.935,517.676 1223.833,517.696 1223.731,517.716 1223.630,517.736 1223.529,517.757 1223.428,517.777 1223.329,517.798 1223.229,517.820 1223.130,517.841 1223.032,517.863 1222.934,517.885 1222.837,517.907 1222.741,517.930 1222.644,517.953 1222.549,517.976 1222.454,518.000 1222.360,518.024 1222.266,518.048 1222.172,518.072 1222.080,518.097 1221.987,518.122 1221.896,518.147 1221.805,518.173 1221.715,518.199 1221.625,518.225 1221.536,518.252 1221.447,518.278 1221.359,518.306 1221.272,518.333 1221.185,518.361 1221.099,518.389 1221.014,518.417 1220.929,518.446 1220.845,518.475 1220.762,518.505 1220.679,518.534 1220.597,518.564 1220.516,518.595 1220.435,518.625 1220.355,518.657 1220.276,518.688 1220.197,518.720 1220.119,518.752 1220.042,518.784 1219.965,518.817 1219.889,518.850 1219.814,518.884 1219.740,518.917 1219.666,518.952 1219.593,518.986 1219.521,519.021 1219.450,519.056 1219.379,519.092 1219.309,519.128 1219.240,519.164 1219.171,519.201 1219.104,519.238 1219.037,519.275 1218.971,519.313 1218.906,519.351 1218.841,519.390 1218.777,519.429 1218.715,519.468 1218.653,519.508 1218.591,519.548 1218.531,519.589 1218.471,519.630 1217.982,519.975 1217.497,520.329 1217.015,520.692 1216.536,521.065 1216.062,521.445 1215.590,521.835 1215.123,522.233 1214.659,522.640 1214.198,523.055 1213.741,523.479 1213.287,523.911 1212.837,524.352 1212.390,524.800 1211.947,525.257 1211.507,525.722 1211.071,526.195 1210.638,526.677 1210.208,527.166 1209.782,527.663 1209.359,528.167 1208.940,528.680 1208.524,529.200 1208.111,529.728 1207.702,530.263 1207.296,530.806 1206.893,531.356 1206.494,531.913 1206.097,532.478 1205.705,533.050 1205.315,533.629 1204.928,534.215 1204.545,534.809 1204.165,535.409 1203.789,536.016 1203.415,536.630 1203.045,537.251 1202.677,537.878 1202.313,538.512 1201.952,539.152 1201.595,539.800 1201.240,540.453 1200.888,541.113 1200.540,541.779 1200.194,542.451 1199.852,543.130 1199.513,543.815 1199.177,544.505 1198.843,545.202 1198.513,545.905 1198.186,546.613 1197.862,547.327 1197.541,548.047 1197.222,548.773 1196.907,549.504 1196.595,550.241 1196.285,550.983 1195.979,551.731 1195.675,552.484 1195.375,553.242 1195.077,554.005 1194.782,554.773 1194.490,555.547 1194.200,556.326 1193.914,557.109 1193.630,557.897 1193.350,558.690 1193.072,559.488 1192.797,560.291 1192.524,561.098 1192.254,561.910 1191.987,562.726 1191.723,563.547 1191.462,564.371 1191.203,565.201 1190.947,566.034 1190.694,566.872 1190.443,567.713 1190.195,568.559 1189.949,569.409 1189.706,570.262 1189.466,571.120 1189.229,571.981 1188.994,572.846 1188.761,573.714 1188.532,574.586 1188.304,575.462 1188.080,576.341 1187.857,577.223 1187.638,578.109 1187.421,578.997 1187.206,579.889 1186.994,580.785 1186.784,581.683 1186.577,582.584 1186.372,583.488 1186.169,584.395 1185.970,585.305 1185.772,586.217 1185.577,587.132 1185.384,588.050 1185.194,588.970 1185.006,589.893 1184.820,590.818 1184.637,591.745 1184.455,592.675 1184.277,593.607 1184.100,594.541 1183.926,595.477 1183.754,596.415 1183.585,597.355 1183.417,598.297 1183.252,599.240 1183.089,600.186 1182.928,601.133 1182.770,602.082 1182.614,603.032 1182.459,603.983 1182.307,604.937 1182.158,605.891 1182.010,606.847 1181.864,607.804 1181.721,608.762 1181.579,609.721 1181.440,610.681 1181.303,611.643 1181.168,612.605 1181.034,613.568 1180.903,614.531 1180.774,615.496 1180.647,616.461 1180.522,617.426 1180.399,618.392 1180.278,619.359 1180.159,620.326 1180.042,621.293 1179.926,622.260 1179.813,623.228 1179.701,624.196 1179.592,625.164 1179.484,626.131 1179.378,627.099 1179.275,628.067 1179.172,629.034 1179.072,630.001 1178.974,630.968 1178.877,631.934 1178.782,632.900 1178.689,633.865 1178.598,634.830 1178.509,635.794 1178.421,636.757 1178.335,637.719 1178.250,638.681 1178.168,639.641 1178.087,640.601 1178.008,641.560 1177.930,642.517 1177.854,643.473 1177.780,644.428 1177.708,645.382 1177.637,646.334 1177.567,647.285 1177.499,648.235"
                      style={{
                        fill: "none",
                        stroke: "#2a2418",
                        strokeWidth: 2.5,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g
            id="PELVIS"
            data-part="pelvis"
            data-pivot-x={1318}
            data-pivot-y={760}
            data-parent="CHARACTER_3ADY_MAN"
          >
            <g id="HIP_COVERS" data-role="joint-covers">
              <ellipse
                id="R_hip_cover"
                cx={1276}
                cy={762}
                rx={22}
                ry={18}
                style={{
                  fill: "#1a1a2a",
                  fillOpacity: 1,
                  stroke: "none",
                }}
                data-role="joint-cover"
                data-joint="hip"
                data-side="R"
              />
              <ellipse
                id="L_hip_cover"
                cx={1363}
                cy={762}
                rx={22}
                ry={18}
                style={{
                  fill: "#1a1a2a",
                  fillOpacity: 1,
                  stroke: "none",
                }}
                data-role="joint-cover"
                data-joint="hip"
                data-side="L"
              />
            </g>
            <g id="PELVIS_ART" data-role="art">
              <path
                id="path30"
                d="M 0,0 C 1.1,1.575 25.756,2.888 51.097,3.055 70.921,3.186 91.164,2.614 100.874,0.918 147.987,-31.456 93.754,-58.867 29.037,-53.223 -1.272,-48.713 -38.585,-21.899 0,0"
                style={{
                  fill: "#d48455",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "#000000",
                  strokeWidth: 1,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1250.1444,771.45333)"
                clipPath="url(#clipPath31)"
                display="none"
                data-role="hidden-construction-artifact"
              />
              <path
                id="path164"
                d="m 0,0 -134.062,0.219 1.913,21.157 129.488,-2.138 2.288,-17.921"
                style={{
                  fill: "#2a2a3a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "#111111",
                  strokeWidth: 1,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1411.2579,770.57547)"
                clipPath="url(#clipPath165)"
              />
              <g opacity={0.5} id="g167" clipPath="url(#clipPath168)">
                <path
                  d="m 0,0 c 0,-3.393 -2.715,-6.144 -6.064,-6.144 -3.349,0 -6.064,2.751 -6.064,6.144 0,3.393 2.715,6.144 6.064,6.144 C -2.715,6.144 0,3.393 0,0"
                  style={{
                    fill: "#1a1a2a",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#0a0a12",
                    strokeWidth: 2.5,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1326.3588,757.41053)"
                  clipPath="url(#clipPath166)"
                  id="path167"
                />
              </g>
              <g opacity={0.5} id="g170" clipPath="url(#clipPath171)">
                <path
                  d="m 0,0 c 0,-2.272 -1.818,-4.114 -4.061,-4.114 -2.243,0 -4.061,1.842 -4.061,4.114 0,2.272 1.818,4.114 4.061,4.114 C -1.818,4.114 0,2.272 0,0"
                  style={{
                    fill: "#1a1a2a",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "#0a0a12",
                    strokeWidth: 2.5,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  transform="matrix(1.3333333,0,0,-1.3333333,1323.3268,756.69133)"
                  clipPath="url(#clipPath169)"
                  id="path170"
                />
              </g>
            </g>
            <g
              id="L_hip"
              data-part="hip"
              data-side="L"
              data-parent="PELVIS"
              data-pivot-x={1363}
              data-pivot-y={760}
            >
              <g
                id="L_thigh"
                transform={leftLegTransform}
                data-part="thigh"
                data-pivot-x={1363}
                data-pivot-y={760}
                data-side="L"
                data-parent="L_hip"
              >
                <ellipse
                  id="L_knee_cover"
                  cx={1377}
                  cy={895}
                  rx={32}
                  ry={70}
                  style={{
                    fill: "#1a1a2a",
                    fillOpacity: 1,
                    stroke: "none",
                  }}
                  data-role="joint-cover"
                  data-joint="knee"
                  data-side="L"
                />
                <g id="L_THIGH_ART" data-role="art">
                  <path
                    id="path32"
                    d="M 0,0 0.541,-3.737 -2.6,-4.185 c 0,0 -13.535,-0.613 -20.159,-7.444 -6.083,-6.272 16.902,-49.743 20.704,-56.815 0.34,-0.631 0.451,-1.326 0.322,-2.011 -0.944,-5.026 -4.564,-26.652 2.544,-29.316 8.049,-3.017 18.75,-2.205 27.275,2.569 0,0 0.75,2.746 1.205,6.508 0.552,4.554 -0.194,9.138 -2.171,13.395 -1.258,2.709 -2.37,6.713 -1.208,11.259 3.725,14.575 10.674,30.305 5.735,44.538 -2.186,6.3 -4.506,12.304 -6.307,15.296 0,0 -0.295,4.807 -24.019,2.614"
                    style={{
                      fill: "#d48455",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "#000000",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1365.1461,835.44467)"
                    clipPath="url(#path32_motion_clip)"
                    data-role="exposed-skin-fragment"
                  />
                  <path
                    id="path137"
                    d="m 0,0 -17.254,34.806 -1.191,75.65 66.489,0.369 C 52.925,82.229 63.036,66.406 60.32,41.586 59.572,34.743 58.987,27.879 58.598,21.007 L 57.412,0.022"
                    style={{
                      fill: "#1a1a2a",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "#0a0a12",
                      strokeWidth: 2.5,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1342.0007,889.34813)"
                    clipPath="url(#clipPath138)"
                  />
                  <g opacity={0.399994} id="g140" clipPath="url(#clipPath141)">
                    <path
                      d="m 0,0 h 65.173 c 3.049,-16.628 9.988,-32.16 8.464,-46.412 L 0,-46.32 Z"
                      style={{
                        fill: "#2a2a3a",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1317.4069,742.07373)"
                      clipPath="url(#clipPath139)"
                      id="path140"
                    />
                  </g>
                </g>
                <g
                  id="L_calf"
                  transform={leftKneeTransform}
                  data-part="calf"
                  data-pivot-x={1377}
                  data-pivot-y={895}
                  data-side="L"
                  data-parent="L_thigh"
                >
                  <g id="L_CALF_ART" data-role="art">
                    <path
                      id="path36"
                      d="m 0,0 -4.523,33.131 c -0.047,0.345 -0.132,0.684 -0.256,1.017 -1.936,5.213 -17.979,50.657 10.82,51.105 0.455,0.007 0.907,0.032 1.355,0.09 4.245,0.554 30.393,1.914 12.069,-52.355 -0.113,-0.335 -0.19,-0.68 -0.226,-1.025 L 15.906,0.127 C 15.671,-2.126 13.815,-4.105 11.069,-4.984 11.01,-5.003 10.95,-5.022 10.89,-5.041 5.988,-6.56 0.545,-3.995 0,0"
                      style={{
                        fill: "#d48455",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1378.5504,1084.526)"
                      clipPath="url(#path36_motion_clip)"
                      data-role="exposed-skin-fragment"
                    />
                    <path
                      id="path135"
                      d="m 0,0 -8.663,-153.235 -29.618,0.569 -19.131,152.644"
                      style={{
                        fill: "#1a1a2a",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#0a0a12",
                        strokeWidth: 2.5,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1418.5495,889.3184)"
                      clipPath="url(#clipPath136)"
                    />
                  </g>
                  <g
                    id="L_foot"
                    data-part="foot"
                    data-pivot-x={1399}
                    data-pivot-y={1090}
                    data-side="L"
                    data-parent="L_calf"
                  >
                    <g id="L_FOOT_ART" data-role="art">
                      <path
                        id="path40"
                        d="m 0,0 c 1.187,6.269 7.304,8.953 13.172,7.589 5.305,-1.192 10.942,-2.655 16.032,-4.571 2.604,-0.973 4.874,-2.06 7.244,-3.06 7.931,-3.108 20.14,-4.918 26.69,-9.559 2.508,-1.755 3.487,-4.588 1.188,-6.268 -2.836,-1.798 -5.658,-1.476 -9.85,-1.779 -6.011,-0.278 -12.464,-0.321 -18.374,0.156 -7.533,0.699 -15.327,0.941 -22.838,0.256 -1.968,-0.146 -3.858,-0.573 -5.788,-0.38 -7.558,1.135 -8.938,11.349 -7.487,17.568 z"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#000000",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1366.4976,1103.3143)"
                        clipPath="url(#clipPath41)"
                      />
                      <path
                        id="path172"
                        d="M 0,0 59.869,1.702 C 61.02,0.159 61.26,-1.722 60.591,-3.942 59.917,-5.496 57.983,-6.284 54.789,-6.303 L 3.466,-6.623 C 0.041,-6.202 -1.114,-3.994 0,0"
                        style={{
                          fill: "#000000",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#2a2a2a",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1376.0983,1125.276)"
                        clipPath="url(#clipPath173)"
                      />
                      <path
                        id="path174"
                        d="m 0,0 c -5.106,0.239 -5.059,-2.239 -6.555,-6.604 -1.495,-4.365 -3.502,-14.046 1.494,-16.497 l 71.249,2.796 c 5.127,0.204 7.163,2.548 6.105,7.032 -1.134,2.936 -4.237,4.855 -9.31,5.757 l -20.608,7.232 c -2.388,3.438 -9.61,2.606 -13.33,4.997 l -7.412,5.336 C 19.135,11.274 17.193,10.811 15.807,8.658 14.399,6.063 14.006,3.309 14.63,0.397 Z"
                        style={{
                          fill: "#231f20",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#2a2a2a",
                          strokeWidth: 2.5,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1372.9813,1094.0611)"
                        clipPath="url(#clipPath175)"
                      />
                      <g
                        opacity={0.199997}
                        id="g177"
                        clipPath="url(#clipPath178)"
                      >
                        <path
                          d="m 0,0 c -4.557,0.213 -7.53,-2.171 -8.918,-7.152 -1.389,-4.98 -2.275,-9.739 2.157,-12.468 L 9.318,-19.355 9.116,0.267 Z"
                          style={{
                            fill: "#000000",
                            fillOpacity: 1,
                            fillRule: "nonzero",
                            stroke: "none",
                          }}
                          transform="matrix(1.3333333,0,0,-1.3333333,1380.0444,1093.5172)"
                          clipPath="url(#clipPath176)"
                          id="path177"
                        />
                      </g>
                      <path
                        id="path179"
                        d="M 0,0 4.798,-6.876"
                        style={{
                          fill: "none",
                          stroke: "#2a2a2a",
                          strokeWidth: 2,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1410.1789,1084.0503)"
                        clipPath="url(#clipPath180)"
                      />
                      <path
                        id="path181"
                        d="M 0,0 4.749,-7.872"
                        style={{
                          fill: "none",
                          stroke: "#2a2a2a",
                          strokeWidth: 2,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1414.8453,1082.0505)"
                        clipPath="url(#clipPath182)"
                      />
                      <path
                        id="path183"
                        d="M 0,0 4.049,-8.172"
                        style={{
                          fill: "none",
                          stroke: "#2a2a2a",
                          strokeWidth: 2,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1419.4681,1080.9359)"
                        clipPath="url(#clipPath184)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g
              id="R_hip"
              data-part="hip"
              data-side="R"
              data-parent="PELVIS"
              data-pivot-x={1276}
              data-pivot-y={760}
            >
              <g
                id="R_thigh"
                transform={rightLegTransform}
                data-part="thigh"
                data-pivot-x={1276}
                data-pivot-y={760}
                data-side="R"
                data-parent="R_hip"
              >
                <ellipse
                  id="R_knee_cover"
                  cx={1257}
                  cy={895}
                  rx={32}
                  ry={70}
                  style={{
                    fill: "#1a1a2a",
                    fillOpacity: 1,
                    stroke: "none",
                  }}
                  data-role="joint-cover"
                  data-joint="knee"
                  data-side="R"
                />
                <g id="R_THIGH_ART" data-role="art">
                  <path
                    id="path34"
                    d="m 0,0 -0.551,-3.737 3.137,-0.441 c 0,0 13.521,-0.585 20.121,-7.4 6.059,-6.258 -17.03,-49.763 -20.849,-56.841 -0.341,-0.632 -0.455,-1.327 -0.328,-2.012 0.929,-5.022 4.484,-26.634 -2.625,-29.312 -8.052,-3.033 -18.741,-2.243 -27.245,2.513 0,0 -0.741,2.743 -1.185,6.503 -0.539,4.551 0.22,9.135 2.207,13.395 1.265,2.711 2.387,6.716 1.24,11.259 -3.681,14.563 -10.578,30.273 -5.603,44.512 2.202,6.303 4.537,12.31 6.345,15.305 0,0 0.309,4.806 24.006,2.663"
                    style={{
                      fill: "#d48455",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "#000000",
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1269.4384,837.94413)"
                    clipPath="url(#path34_motion_clip)"
                    data-role="exposed-skin-fragment"
                  />
                  <path
                    id="path142"
                    d="m 0,0 18.391,35.998 0.054,74.458 -59.968,1.115 c -4.612,-27.02 -12.295,-37.817 -10.613,-59.19 0.829,-10.534 0.956,-39.992 1.067,-50.557"
                    style={{
                      fill: "#1a1a2a",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "#0a0a12",
                      strokeWidth: 2.5,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    transform="matrix(1.3333333,0,0,-1.3333333,1292.7409,891.80373)"
                    clipPath="url(#clipPath143)"
                  />
                  <g opacity={0.399994} id="g147" clipPath="url(#clipPath148)">
                    <path
                      d="m 0,0 h -60.622 c -2.836,-16.628 -10.968,-31.726 -9.55,-45.979 L 0,-46.32 Z"
                      style={{
                        fill: "#2a2a3a",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "none",
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1317.4069,742.07373)"
                      clipPath="url(#clipPath146)"
                      id="path147"
                    />
                  </g>
                </g>
                <g
                  id="R_calf"
                  transform={rightKneeTransform}
                  data-part="calf"
                  data-pivot-x={1257}
                  data-pivot-y={895}
                  data-side="R"
                  data-parent="R_thigh"
                >
                  <g id="R_CALF_ART" data-role="art">
                    <path
                      id="path38"
                      d="m 0,0 4.523,33.131 c 0.047,0.345 0.132,0.684 0.256,1.017 1.936,5.213 17.979,50.657 -10.82,51.105 -0.455,0.007 -0.907,0.032 -1.355,0.091 -4.245,0.553 -30.393,1.913 -12.069,-52.356 0.113,-0.335 0.19,-0.68 0.226,-1.025 l 3.332,-31.836 c 0.236,-2.253 2.092,-4.232 4.838,-5.111 0.059,-0.019 0.119,-0.038 0.179,-0.057 C -5.988,-6.56 -0.545,-3.995 0,0"
                      style={{
                        fill: "#d48455",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#000000",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1261.2615,1086.954)"
                      clipPath="url(#clipPath39)"
                      display="none"
                      data-role="hidden-construction-artifact"
                    />
                    <path
                      id="path144"
                      d="M 0,0 2.32,-155.037 35.674,-154.9 51.069,-1.824"
                      style={{
                        fill: "#1a1a2a",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        stroke: "#0a0a12",
                        strokeWidth: 2.5,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                      }}
                      transform="matrix(1.3333333,0,0,-1.3333333,1224.6492,889.37213)"
                      clipPath="url(#clipPath145)"
                    />
                  </g>
                  <g
                    id="R_foot"
                    data-part="foot"
                    data-pivot-x={1240}
                    data-pivot-y={1090}
                    data-side="R"
                    data-parent="R_calf"
                  >
                    <g id="R_FOOT_ART" data-role="art">
                      <path
                        id="path42"
                        d="m 0,0 c -1.117,5.898 -6.873,8.424 -12.393,7.14 -4.993,-1.121 -10.297,-2.497 -15.086,-4.3 -2.449,-0.915 -4.586,-1.939 -6.816,-2.88 -7.462,-2.924 -18.949,-4.627 -25.113,-8.994 -2.36,-1.651 -3.281,-4.317 -1.118,-5.898 2.669,-1.691 5.324,-1.388 9.268,-1.673 5.656,-0.262 11.728,-0.303 17.289,0.146 7.088,0.659 14.421,0.886 21.488,0.242 1.852,-0.138 3.63,-0.54 5.447,-0.358 7.111,1.067 8.41,10.679 7.044,16.53 z"
                        style={{
                          fill: "#d48455",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#000000",
                          strokeWidth: 1,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1273.5425,1105.1799)"
                        clipPath="url(#clipPath43)"
                      />
                      <path
                        id="path191"
                        d="m 0,0 -53.406,0.32 c -3.323,0.02 -5.335,0.807 -6.036,2.362 -0.697,2.219 -0.447,4.1 0.75,5.643 L 3.606,6.623 C 4.766,2.629 3.563,0.422 0,0"
                        style={{
                          fill: "#000000",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#2a2a2a",
                          strokeWidth: 2,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1261.5388,1136.4839)"
                        clipPath="url(#clipPath192)"
                      />
                      <path
                        id="path193"
                        d="m 0,0 c 0.632,2.911 0.23,5.665 -1.208,8.261 -1.415,2.154 -3.394,2.62 -5.938,1.397 L -14.694,4.33 C -18.482,1.943 -25.843,2.781 -28.273,-0.654 l -20.992,-7.211 c -5.169,-0.897 -8.329,-2.813 -9.482,-5.747 -1.073,-4.483 1.004,-6.829 6.229,-7.038 l 72.608,-2.867 c 5.088,2.446 3.033,12.129 1.505,16.495 -1.529,4.366 -1.484,6.844 -6.687,6.61 z"
                        style={{
                          fill: "#231f20",
                          fillOpacity: 1,
                          fillRule: "nonzero",
                          stroke: "#2a2a2a",
                          strokeWidth: 2.5,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1247.6075,1094.7707)"
                        clipPath="url(#clipPath194)"
                      />
                      <g
                        opacity={0.199997}
                        id="g196"
                        clipPath="url(#clipPath197)"
                      >
                        <path
                          d="m 0,0 0.444,-20.302 16.731,-0.265 c 4.612,2.729 3.69,7.488 2.245,12.468 -1.445,4.981 -4.538,7.365 -9.28,7.152 z"
                          style={{
                            fill: "#000000",
                            fillOpacity: 1,
                            fillRule: "nonzero",
                            stroke: "none",
                          }}
                          transform="matrix(1.3333333,0,0,-1.3333333,1250.2229,1096.5925)"
                          clipPath="url(#clipPath195)"
                          id="path196"
                        />
                      </g>
                      <path
                        id="path198"
                        d="M 0,0 4.993,6.876"
                        style={{
                          fill: "none",
                          stroke: "#2a2a2a",
                          strokeWidth: 2,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1224.2271,1094.3803)"
                        clipPath="url(#clipPath199)"
                      />
                      <path
                        id="path200"
                        d="M 0,0 4.941,7.872"
                        style={{
                          fill: "none",
                          stroke: "#2a2a2a",
                          strokeWidth: 2,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1219.4397,1093.7081)"
                        clipPath="url(#clipPath201)"
                      />
                      <path
                        id="path202"
                        d="M 0,0 4.213,8.172"
                        style={{
                          fill: "none",
                          stroke: "#2a2a2a",
                          strokeWidth: 2,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                        transform="matrix(1.3333333,0,0,-1.3333333,1215.6008,1092.9935)"
                        clipPath="url(#clipPath203)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="RIG_GUIDES" data-part="guides" display="none">
            <g opacity={0} id="g340" clipPath="url(#clipPath341)">
              <path
                d="M 0,0 C 1.572,-0.001 2.846,-0.955 2.845,-2.131 2.844,-3.306 1.57,-4.259 -0.002,-4.258 c -1.572,0 -2.846,0.954 -2.845,2.13 C -2.846,-0.952 -1.572,0.001 0,0"
                style={{
                  fill: "#0066ff",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1272.0788,792.21347)"
                clipPath="url(#clipPath339)"
                id="path340"
              />
            </g>
            <g opacity={0} id="g343" clipPath="url(#clipPath344)">
              <path
                d="M 0,0 C 1.572,-0.001 2.846,-0.955 2.845,-2.131 2.844,-3.307 1.57,-4.259 -0.002,-4.258 c -1.572,0 -2.846,0.954 -2.845,2.13 C -2.846,-0.952 -1.572,0.001 0,0"
                style={{
                  fill: "#e0002a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1199.9115,938.86)"
                clipPath="url(#clipPath342)"
                id="path343"
              />
            </g>
            <g opacity={0} id="g346" clipPath="url(#clipPath347)">
              <path
                d="M 0,0 C 1.572,-0.001 2.846,-0.955 2.845,-2.131 2.844,-3.307 1.57,-4.259 -0.002,-4.258 c -1.572,0 -2.846,0.954 -2.845,2.13 C -2.846,-0.952 -1.572,0.001 0,0"
                style={{
                  fill: "#c98a2e",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1264.3255,1142.35)"
                clipPath="url(#clipPath345)"
                id="path346"
              />
            </g>
            <g opacity={0} id="g156" clipPath="url(#clipPath157)">
              <path
                d="m 0,0 c 2.183,0 3.953,-0.957 3.953,-2.138 0,-1.181 -1.77,-2.138 -3.953,-2.138 -2.183,0 -3.953,0.957 -3.953,2.138 C -3.953,-0.957 -2.183,0 0,0"
                style={{
                  fill: "#e0002a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1317.4069,886.49773)"
                clipPath="url(#clipPath155)"
                id="path156"
              />
            </g>
            <g opacity={0} id="g159" clipPath="url(#clipPath160)">
              <path
                d="m 0,0 c 2.183,0 3.953,-0.957 3.953,-2.138 0,-1.181 -1.77,-2.138 -3.953,-2.138 -2.183,0 -3.953,0.957 -3.953,2.138 C -3.953,-0.957 -2.183,0 0,0"
                style={{
                  fill: "#c98a2e",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1406.9984,1090.7815)"
                clipPath="url(#clipPath158)"
                id="path159"
              />
            </g>
            <g opacity={0} id="g186" clipPath="url(#clipPath187)">
              <path
                d="M 0,0 C 0.566,-0.026 1.003,-0.494 0.976,-1.043 0.949,-1.593 0.468,-2.018 -0.099,-1.991 -0.665,-1.965 -1.102,-1.498 -1.075,-0.948 -1.047,-0.398 -0.566,0.026 0,0"
                style={{
                  fill: "#e0002a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1410.5732,1076.0857)"
                clipPath="url(#clipPath185)"
                id="path186"
              />
            </g>
            <g opacity={0} id="g189" clipPath="url(#clipPath190)">
              <path
                d="M 0,0 C 0.566,-0.026 1.003,-0.494 0.976,-1.043 0.949,-1.593 0.468,-2.018 -0.099,-1.991 -0.665,-1.965 -1.102,-1.498 -1.075,-0.948 -1.047,-0.398 -0.566,0.026 0,0"
                style={{
                  fill: "#c98a2e",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1392.5425,1117.376)"
                clipPath="url(#clipPath188)"
                id="path189"
              />
            </g>
            <g opacity={0} id="g162" clipPath="url(#clipPath163)">
              <path
                d="m 0,0 c 2.183,0 3.953,-0.957 3.953,-2.138 0,-1.181 -1.77,-2.138 -3.953,-2.138 -2.183,0 -3.953,0.957 -3.953,2.138 C -3.953,-0.957 -2.183,0 0,0"
                style={{
                  fill: "#c98a2e",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1227.8153,1090.7815)"
                clipPath="url(#clipPath161)"
                id="path162"
              />
            </g>
            <g opacity={0} id="g205" clipPath="url(#clipPath206)">
              <path
                d="m 0,0 c 0.028,-0.55 -0.426,-1.017 -1.016,-1.043 -0.589,-0.027 -1.089,0.397 -1.118,0.947 -0.028,0.55 0.427,1.017 1.016,1.044 C -0.529,0.974 -0.028,0.55 0,0"
                style={{
                  fill: "#e0002a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1231.9644,1078.5108)"
                clipPath="url(#clipPath204)"
                id="path205"
              />
            </g>
            <g opacity={0} id="g208" clipPath="url(#clipPath209)">
              <path
                d="m 0,0 c 0.028,-0.55 -0.426,-1.017 -1.016,-1.043 -0.589,-0.027 -1.089,0.397 -1.118,0.947 -0.028,0.55 0.427,1.017 1.016,1.044 C -0.529,0.974 -0.028,0.55 0,0"
                style={{
                  fill: "#c98a2e",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1250.7267,1119.8012)"
                clipPath="url(#clipPath207)"
                id="path208"
              />
            </g>
            <g opacity={0} id="g150" clipPath="url(#clipPath151)">
              <path
                d="m 0,0 c 2.183,0 3.953,-0.957 3.953,-2.138 0,-1.181 -1.77,-2.138 -3.953,-2.138 -2.183,0 -3.953,0.957 -3.953,2.138 C -3.953,-0.957 -2.183,0 0,0"
                style={{
                  fill: "#0066ff",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1417.5385,739.22333)"
                clipPath="url(#clipPath149)"
                id="path150"
              />
            </g>
            <g opacity={0} id="g153" clipPath="url(#clipPath154)">
              <path
                d="m 0,0 c 2.183,0 3.953,-0.957 3.953,-2.138 0,-1.181 -1.77,-2.138 -3.953,-2.138 -2.183,0 -3.953,0.957 -3.953,2.138 C -3.953,-0.957 -2.183,0 0,0"
                style={{
                  fill: "#0066ff",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                transform="matrix(1.3333333,0,0,-1.3333333,1217.2752,739.22333)"
                clipPath="url(#clipPath152)"
                id="path153"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}