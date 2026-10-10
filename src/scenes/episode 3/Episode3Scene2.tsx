import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { SceneMaster } from "../sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { Camera } from "../../components/Camera";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { yusufPose } from "../../animations/yusufPose";
import { Audio } from "@remotion/media";
import { staticFile } from "remotion";
import {getMouthPose, type MouthCue } from "../../animations/lipSync";
import { YellowCar } from "../../environments/props/YellowCar";
import { BlinkingAnimation } from "../../animations/BlinkingAnimation";
import { StreetNPC } from "../../environments/props/StreetNpc";
import { SCENE_1_DURATION, WALK_CYCLE_FRAMES, YUSUF_GROUND_Y, getApproachProgress, getWalkStrength, getStreetPlacement } from "./episode3StreetMotion";

export const Episode3Scene2 = () => {
  const frame = useCurrentFrame();
  const approach = getApproachProgress(frame);
  const walkfrontPose = frontWalkCycle(SCENE_1_DURATION + approach, WALK_CYCLE_FRAMES);
  const placement = getStreetPlacement(SCENE_1_DURATION + approach);
  const walkStrength = getWalkStrength(frame);
  const idleBlink = BlinkingAnimation(frame,120);

const carLookStrength = interpolate(
  frame,
  [42, 72, 166, 215],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const carHeadRotation = interpolate(
  carLookStrength,
  [0, 1],
  [0, 4]
);

const carEyeLookStrength = interpolate(
  frame,
  [25, 40, 166, 215],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const carEyeLookX = interpolate(
  carEyeLookStrength,
  [0, 1],
  [0, 4]
);



// Recognition holds, then the gaze drops slightly as the car passes.
const carEyeLookY = interpolate(frame, [70, 140, 175, 215], [0, 0, 2, 0], {
  extrapolateLeft: "clamp", extrapolateRight: "clamp",
});
const recognitionBrow = interpolate(frame, [30, 50, 100, 140], [0, -1.5, -1.5, 0], {
  extrapolateLeft: "clamp", extrapolateRight: "clamp",
});

const carX = interpolate(
  frame,
  [0, 80, 180, 220],
  [540, 530, 170, -140],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }
);

const carY = 320;

const carScale = interpolate(
  frame,
  [0,400],
  [0.05,2],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing:Easing.inOut(Easing.cubic)
  }
);
const memoryThoughtStrength = interpolate(
  frame,
  [215, 240, 315, 340],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),

  }
);
const memoryHeadRotation = interpolate(
  memoryThoughtStrength,
  [0,1],
  [0,-3]
)
const memoryEyeY = interpolate(
  memoryThoughtStrength,
  [0, 1],
  [0, -1.5]
);
const doubtStrength = interpolate(
  frame,
  [365, 395, 455, 485],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const doubtHeadRotation = interpolate(
  doubtStrength,
  [0, 1],
  [0, 4]
);

const doubtLeftBrow = interpolate(
  doubtStrength,
  [0, 1],
  [0, -2]
);

const doubtRightBrow = interpolate(
  doubtStrength,
  [0, 1],
  [0, 1.5]
);
const settleHeadRotation = interpolate(
  frame,
  [610, 635, 680],
  [0, 1, 1.5],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const confirmHeadRotation = interpolate(
  frame,
  [545, 553, 561, 569, 577, 590, 610],
  [0, -4, 3, -4, 2, 0, -1.5],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);


const confirmBodyY = interpolate(
  frame,
  [545, 553, 561, 569, 577, 590],
  [0, 2, 0, 2, 0, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);


const confirmBlink = interpolate(
  frame,
  [548, 555, 562],
  [1, 0.08, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
const postConfirmEyeX = interpolate(
  frame,
  [610, 650],
  [carEyeLookX, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);
const npcAY = interpolate(frame, [0, 300], [600, 620], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});

const npcBY = interpolate(frame, [0, 300], [600, 620], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});

const eyeScaleY = Math.min(idleBlink.eyeScaleY, confirmBlink);
  const firstLineMouthCues: MouthCue[] = [
  { startFrame: 0, endFrame: 49, pose: "rest" },

  // "إيه"
  { startFrame: 49, endFrame: 54, pose: "E" },
  { startFrame: 54, endFrame: 59, pose: "A" },

  // "ده؟"
  { startFrame: 59, endFrame: 64, pose: "A" },
  { startFrame: 64, endFrame: 69, pose: "A" },

  { startFrame: 69, endFrame: 87, pose: "rest" },

  // "دي"
  { startFrame: 87, endFrame: 92, pose: "E" },
  { startFrame: 92, endFrame: 97, pose: "I" },

  // "شبه"
  { startFrame: 97, endFrame: 102, pose: "S" },
  { startFrame: 102, endFrame: 107, pose: "A" },
  { startFrame: 107, endFrame: 112, pose: "MBP" },
  { startFrame: 112, endFrame: 116, pose: "A" },

  // "عربية"
  { startFrame: 116, endFrame: 121, pose: "A" },
  { startFrame: 121, endFrame: 126, pose: "R" },
  { startFrame: 126, endFrame: 131, pose: "A" },
  { startFrame: 131, endFrame: 136, pose: "MBP" },
  { startFrame: 136, endFrame: 140, pose: "I" },

  // "أبويا"
  { startFrame: 140, endFrame: 145, pose: "A" },
  { startFrame: 145, endFrame: 150, pose: "MBP" },
  { startFrame: 150, endFrame: 155, pose: "U" },
  { startFrame: 155, endFrame: 161, pose: "I" },
  { startFrame: 161, endFrame: 166, pose: "A" },

  { startFrame: 166, endFrame: 230, pose: "rest" },
];

const confirmMouthCues: MouthCue[] = [
  { startFrame: 0, endFrame: 5, pose: "rest" },

  // لا
  { startFrame: 5, endFrame: 11, pose: "A" },
  { startFrame: 11, endFrame: 15, pose: "rest" },

  // لا
  { startFrame: 15, endFrame: 21, pose: "A" },
  { startFrame: 21, endFrame: 25, pose: "rest" },

  // لا
  { startFrame: 25, endFrame: 32, pose: "A" },

  // reset
  { startFrame: 32, endFrame: 40, pose: "rest" },

  // صفرا
  { startFrame: 40, endFrame: 46, pose: "S" },
  { startFrame: 46, endFrame: 52, pose: "A" },
  { startFrame: 52, endFrame: 58, pose: "R" },
  { startFrame: 58, endFrame: 65, pose: "A" },

  { startFrame: 65, endFrame: 90, pose: "rest" },
];

const yusufAudioStart = 50;
const confirmAudioStart = 550;
const firstLineMouthPose = getMouthPose(
  frame - yusufAudioStart,
  firstLineMouthCues
);

const confirmMouthPose = getMouthPose(
  frame - confirmAudioStart,
  confirmMouthCues
);
const smileStrength = interpolate(
  frame,
  [30,90,120,180],
  [0,1,1,0],{
    extrapolateLeft:"clamp",
    extrapolateRight:"clamp",
    easing:Easing.inOut(Easing.cubic),
  }
)
const scene2MouthPose =
  frame >= confirmAudioStart
    ? confirmMouthPose
    : firstLineMouthPose;
const scene2ActingPose = {
  ...walkfrontPose,
  mouthPose: scene2MouthPose,
  headRotation:
    (walkfrontPose.headRotation ?? 0) * walkStrength 
     + carHeadRotation + 
     memoryHeadRotation + 
     doubtHeadRotation +
     confirmHeadRotation
     + settleHeadRotation,


  bodyY:
    (walkfrontPose.bodyY ?? 0) * walkStrength + confirmBodyY,

leftArmSwing:
  (walkfrontPose.leftArmSwing ?? 0) * walkStrength,

rightArmSwing:
  (walkfrontPose.rightArmSwing ?? 0) * walkStrength,

leftKneeRotation:
  (walkfrontPose.leftKneeRotation ?? 0) * walkStrength,

rightKneeRotation:
  (walkfrontPose.rightKneeRotation ?? 0) * walkStrength,
  leftHipRotation: walkfrontPose.leftHipRotation * walkStrength,
  rightHipRotation: walkfrontPose.rightHipRotation * walkStrength,
  leftLegScaleY: 1 + (walkfrontPose.leftLegScaleY - 1) * walkStrength,
  rightLegScaleY: 1 + (walkfrontPose.rightLegScaleY - 1) * walkStrength,
  leftArmScaleY: 1 + (walkfrontPose.leftArmScaleY - 1) * walkStrength,
  rightArmScaleY: 1 + (walkfrontPose.rightArmScaleY - 1) * walkStrength,
  eyeLLookX: postConfirmEyeX,
eyeRLookX: postConfirmEyeX,
eyeLLookY: memoryEyeY + carEyeLookY,
eyeRLookY: memoryEyeY + carEyeLookY,
  

  leftEyeBrowY: doubtLeftBrow + recognitionBrow,
  rightEyeBrowY:doubtRightBrow + recognitionBrow,
  eyeScaleY,
  smileStrength,
};

const resolvedYusuf = yusufPose(scene2ActingPose);
  return (
    <>
    <Audio from={yusufAudioStart} src={staticFile("VoiceOver/VO_Episode_3/looks_like_my_father_car.m4a")}></Audio>
    <Audio from={231} src={staticFile("VoiceOver/VO_Episode_3/it_was_yellow.m4a")}></Audio>
        <Audio from={384} src={staticFile("VoiceOver/VO_Episode_3/or_was_it_beige.m4a")}></Audio>
            <Audio from={550} src={staticFile("VoiceOver/VO_Episode_3/no_no_yellow.m4a")}></Audio>

    
    <Camera x={-100} y={40} scale={1.1}>
      <AbsoluteFill
        style={{
          translate: "-3.6px 14.4px",
        }}
      >
        <EgyptianStreet x={-18} y={-8} scale={1.01} />
<YellowCar
  
  x={carX}
  y={carY}
  scale={carScale}
  width={700}
/>

<StreetNPC
  variant="b"
  x={470}
  y={npcBY}
  width={55}
/>

{/* right sidewalk */}
<StreetNPC
  variant="a"
  x={1450}
  y={npcAY}
  width={60}
/>
        <SceneMaster
          x={placement.x}
          y={placement.y}
          scale={placement.scale}
          width={500}
          groundY={YUSUF_GROUND_Y}
          integration={{ contactShadow: true, ambientLight:"daylight",keyLight:"sun",castShadow:"streetSun" }}
          zIndex={1}
        >
          <YusufCharacter
          
          grounded
          {...resolvedYusuf}
          ></YusufCharacter>
        </SceneMaster>
      </AbsoluteFill>
    </Camera>
    </>
  );
};
