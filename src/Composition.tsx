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

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};
const WALK_CYCLE_FRAMES = 60;
const WAVE_ANIMATION_FRAMES = 60;
const IDLE_ANIMATION_FRAMES = 60;
const BLINK_ANIMATION_FRAMES = 60;
const POINT_ANIMATION_FRAMES = 60;
const TALK_ANIMATION_FRAMES = 60;
const HEAD_SHAKE_ANIMATION_FRAMES = 60;
const EYE_LOOK_ANIMATION_FRAMES = 60;
const EYE_BROW_ANIMATION_FRAMES = 60;
const RUN_ANIMATION_FRAMES = 30;
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
  const blinkPose = BlinkingAnimation(frame, BLINK_ANIMATION_FRAMES);
  const pointPose = pointAnimation(frame, POINT_ANIMATION_FRAMES);
  const talkpose = talkingAnimation(frame, TALK_ANIMATION_FRAMES);
  const shakePose = HeadShakeAnimation(frame, HEAD_SHAKE_ANIMATION_FRAMES);
  const lookPose = eyeLookingAnimation(frame, EYE_LOOK_ANIMATION_FRAMES);
  const eyebrowPose = eyeBrowAnimation(frame, EYE_BROW_ANIMATION_FRAMES);
  const runPose = RunAnimation(frame,RUN_ANIMATION_FRAMES);
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f2c53",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <YusufCharacter
        rightKneeRotation={0}
        leftKneeRotation={0}
        leftHipRotation={0}
        rightHipRotation={0}
        bodyY={runPose.bodyY}
        leftArmSwing={runPose.leftArmSwing}
        rightArmSwing={runPose.rightArmSwing}
        leftElbowRotation={runPose.leftElbowRotation}
        rightElbowRotation={runPose.leftElbowRotation}
        leftHandRotation={0}
        headRotation={runPose.headRotation}
        eyeScaleY={blinkPose.eyeScaleY}
        eyeLLookX={0}
        eyeLLookY={0}
        eyeRLookX={0}
        eyeRLookY={0}
        leftEyeBrowY={0}
        rightEyeBrowY={0}
        leftLegScaleY={runPose.leftLegScaleY}
        rightLegScaleY={runPose.rightLegScaleY}
        leftArmScaleY={runPose.leftArmScaleY}
        rightArmScaleY={runPose.rightArmScaleY}
        // leftHandPose={pointPose.leftHandPose}
      />
    </AbsoluteFill>
  );
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={LegsScene}
      durationInFrames={RUN_ANIMATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};
