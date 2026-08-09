import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  useCurrentFrame,
} from "remotion";
import { YusufCharacter } from "./YusufCharacter";
import { walkCycle } from "./animations/walkCycle";
import { WaveAnimation } from "./animations/wave";
import { idleAnimation } from "./animations/idleAnimation";
import { BlinkingAnimation } from "./animations/BlinkingAnimation";
import { pointAnimation } from "./animations/PointingAnimation";
import { talkingAnimation } from "./animations/TalkingAnimation";
import { HeadShakeAnimation } from "./animations/HeadShakeAnimation";
import { eyeLookingAnimation } from "./animations/EyeLookAnimation";
import { eyeBrowAnimation } from "./animations/eyebrowAnimation";
import { RunAnimation } from "./animations/RunAnimation";
import { getMouthPose, type MouthCue } from "./animations/lipSync";
import { staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { FarmalaCharacter } from "./FarmalaCharacter";
type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};
const WALK_CYCLE_FRAMES = 60;
const WAVE_ANIMATION_FRAMES = 60;
const IDLE_ANIMATION_FRAMES = 120;
const BLINK_ANIMATION_FRAMES = 120;
const POINT_ANIMATION_FRAMES = 60;
const TALK_ANIMATION_FRAMES = 60;
const HEAD_SHAKE_ANIMATION_FRAMES = 60;
const EYE_LOOK_ANIMATION_FRAMES = 60;
const EYE_BROW_ANIMATION_FRAMES = 60;
const RUN_ANIMATION_FRAMES = 30;
const mouthCues: MouthCue[] = [
  { startFrame: 5, endFrame: 7, pose: "N" },
  { startFrame: 8, endFrame: 10, pose: "I" },
  { startFrame: 11, endFrame: 12, pose: "G" },
  { startFrame: 13, endFrame: 14, pose: "G" },
  { startFrame: 15, endFrame: 17, pose: "E" },
  { startFrame: 18, endFrame: 20, pose: "R" },
  { startFrame: 46, endFrame: 48, pose: "E" },
  { startFrame: 49, endFrame: 51, pose: "E" },
  { startFrame: 52, endFrame: 54, pose: "S" },
  { startFrame: 79, endFrame: 81, pose: "S" },
  { startFrame: 81, endFrame: 83, pose: "A" },
  {startFrame: 83,endFrame: 86,pose: "L",
  },
  {startFrame: 86,endFrame: 89,pose: "A",
  },
  {startFrame: 89,endFrame: 93,pose: "MBP",
  },
  {startFrame: 93,endFrame: 94,pose: "A",
  },
  {startFrame: 94,endFrame: 97,pose: "U",
  },
];

const LegsScene: React.FC<Props> = () => {
  // const frameLegL = useCurrentFrame();
  // const kneeRotation_L = interpolate(
  //   frameLegL,
  //   [0,30,59],
  //   [0,50,0]
  // );
  const frame = useCurrentFrame();

  const pose = walkCycle(frame, WALK_CYCLE_FRAMES);
  const wavePose = WaveAnimation(frame, WAVE_ANIMATION_FRAMES);
  const idlePose = idleAnimation(frame, IDLE_ANIMATION_FRAMES);
   const FarmalaidlePose = idleAnimation(frame, 180);
  const blinkPose = BlinkingAnimation(frame, BLINK_ANIMATION_FRAMES);
  const pointPose = pointAnimation(frame, POINT_ANIMATION_FRAMES);
  const talkpose = talkingAnimation(frame, TALK_ANIMATION_FRAMES);
  const shakePose = HeadShakeAnimation(frame, HEAD_SHAKE_ANIMATION_FRAMES);
  const lookPose = eyeLookingAnimation(frame, EYE_LOOK_ANIMATION_FRAMES);
  const eyebrowPose = eyeBrowAnimation(frame, EYE_BROW_ANIMATION_FRAMES);
  const runPose = RunAnimation(frame, RUN_ANIMATION_FRAMES);
  const mouthPose = getMouthPose(frame, mouthCues);
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f2c53",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Audio src={staticFile("VoiceOver/Asalam Aleykoum.m4a")} />
      <Audio src={staticFile("VoiceOver/FatNigger.m4a")} from={-124} />
      
      <div
  style={{
  position: "absolute",
  left: 1050,
  top: 370,
  transform: "scale(0.60)",
  transformOrigin: "top left",
}}
>
      <YusufCharacter
        rightKneeRotation={runPose.rightKneeRotation}
        leftKneeRotation={runPose.leftKneeRotation}
        leftHipRotation={runPose.leftHipRotation}
        rightHipRotation={runPose.rightHipRotation}
        bodyY={talkpose.bodyY}
        leftArmSwing={runPose.leftArmSwing}
        rightArmSwing={runPose.rightArmSwing}
        leftElbowRotation={runPose.leftElbowRotation}
        rightElbowRotation={runPose.leftElbowRotation}
        leftHandRotation={0}
        headRotation={runPose.headRotation}
        eyeScaleY={blinkPose.eyeScaleY}
        eyeLLookX={lookPose.eyeLLookX}
        eyeLLookY={lookPose.eyeLLookY}
        eyeRLookX={lookPose.eyeRLookX}
        eyeRLookY={lookPose.eyeRLookY}
        leftEyeBrowY={eyebrowPose.rightEyeBrowY}
        rightEyeBrowY={eyebrowPose.leftEyeBrowY}
        leftLegScaleY={1}
        rightLegScaleY={1}
        leftArmScaleY={1}
        rightArmScaleY={1}
        mouthPose={mouthPose}
        // leftHandPose={pointPose.leftHandPose}
        
      />
      </div>
      
      <div
  style={{
    position: "absolute",
    left: 400,
    top: 100,
    width: 250,
  }}
>
  <FarmalaCharacter
  headRotation={0}
  bodyY={0}
  leftArmRotation={20}
  rightArmRotation={-30}
  leftLegRotation={0}
  rightLegRotation={0}
  leftKneeRotation={0}
  rightKneeRotation={-20}
  leftElbowRotation={-30}
/>
</div>
    </AbsoluteFill>
  );
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={LegsScene}
      durationInFrames={300}
      fps={60}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};
