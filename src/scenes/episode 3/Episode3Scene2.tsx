import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { SceneMaster } from "../sceneCharacter";
import { YusufCharacter } from "../../YusufCharacter";
import { Camera } from "../../components/Camera";
import { frontWalkCycle } from "../../animations/frontWalkCycle";
import { EgyptianStreet } from "../../environments/EgyptianStreet";
import { yusufPose } from "../../animations/yusufPose";
import { Audio } from "@remotion/media";
import { staticFile } from "remotion";
import {getMouthPose, type MouthCue } from "../../animations/lipSync";
import { eyeLookingAnimation } from "../../animations/EyeLookAnimation";
export const Episode3Scene2 = () => {
  const frame = useCurrentFrame();
  const walkfrontPose = frontWalkCycle(frame,60);
  const eyePose = eyeLookingAnimation(frame,60);

const walkStrength = interpolate(
  frame,
  [25, 50, 166, 205],
  [1, 0.45, 0.45, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const carLookStrength = interpolate(
  frame,
  [24, 44, 166, 195],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const carHeadRotation = interpolate(
  carLookStrength,
  [0, 1],
  [0, 7]
);

const carEyeLookStrength = interpolate(
  frame,
  [24, 58, 166, 205],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }
);

const carEyeLookX = interpolate(
  carEyeLookStrength,
  [0, 1],
  [0, 2.5]
);

  
  const scene2YusufMouthCues: MouthCue[] = [
  // silence before speech
  { startFrame: 0, endFrame: 49, pose: "rest" },

  // "إيه"
  { startFrame: 49, endFrame: 54, pose: "E" },
  { startFrame: 54, endFrame: 59, pose: "A" },

  // "ده؟"
  { startFrame: 59, endFrame: 64, pose: "A" },
  { startFrame: 64, endFrame: 69, pose: "A" },

  // pause
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

  // close after line
  { startFrame: 166, endFrame: 230, pose: "rest" },
];
const scene2MouthPose = getMouthPose(frame,scene2YusufMouthCues);

const scene2ActingPose = {
  ...walkfrontPose,
  mouthPose: scene2MouthPose,
  headRotation:
    (walkfrontPose.headRotation ?? 0) + carHeadRotation,

  bodyY:
    (walkfrontPose.bodyY ?? 0) * walkStrength,

leftArmSwing:
  (walkfrontPose.leftArmSwing ?? 0) * walkStrength,

rightArmSwing:
  (walkfrontPose.rightArmSwing ?? 0) * walkStrength,

leftKneeRotation:
  (walkfrontPose.leftKneeRotation ?? 0) * walkStrength,

rightKneeRotation:
  (walkfrontPose.rightKneeRotation ?? 0) * walkStrength,
    eyeLLookX:
  (eyePose.eyeLLookX ?? 0) * carEyeLookX,

eyeRLookX:
  (eyePose.eyeRLookX ?? 0) * carEyeLookX,
};
const resolvedYusuf = yusufPose(scene2ActingPose);
  return (
    <>
    <Audio from={0} src={staticFile("VoiceOver/VO_Episode_3/looks_like_my_father_car.m4a")}></Audio>
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
        <SceneMaster
          x={250}
          y={500}
          scale={0.5}
          width={250}
          integration={{ contactShadow: true, ambientLight:"daylight",keyLight:"sun",castShadow:"streetSun" }}
          zIndex={1}
        >
          <YusufCharacter
          {...resolvedYusuf}
          ></YusufCharacter>
        </SceneMaster>
      </AbsoluteFill>
    </Camera>
    </>
  );
};
