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
const EYE_LOOK_ANIMATION_FRAMES =60;
const EYE_BROW_ANIMATION_FRAMES = 60;
const LegsScene: React.FC<Props> = () => {
  // const frameLegL = useCurrentFrame();
  // const kneeRotation_L = interpolate(
  //   frameLegL,
  //   [0,30,59],
  //   [0,50,0]
  // );
  const frame = useCurrentFrame();
  const pose = walkCycle(frame,WALK_CYCLE_FRAMES);
  const wavePose = WaveAnimation(frame,WAVE_ANIMATION_FRAMES);
  const idlePose = idleAnimation(frame,IDLE_ANIMATION_FRAMES);
  const blinkPose = BlinkingAnimation(frame,BLINK_ANIMATION_FRAMES)
  const pointPose = pointAnimation(frame,POINT_ANIMATION_FRAMES)
  const talkpose = talkingAnimation(frame,TALK_ANIMATION_FRAMES)
  const shakePose = HeadShakeAnimation(frame,HEAD_SHAKE_ANIMATION_FRAMES)
  const lookPose = eyeLookingAnimation(frame,EYE_LOOK_ANIMATION_FRAMES)
  const eyebrowPose = eyeBrowAnimation(frame,EYE_BROW_ANIMATION_FRAMES)
  return (
    
    <AbsoluteFill
      style={{
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
      
    >
      <YusufCharacter
        rightKneeRotation={0}
        leftKneeRotation={0}
        leftHipRotation={0}
        rightHipRotation={0}
        bodyY={talkpose.bodyY} 
        leftArmSwing={talkpose.leftArmSwing}
rightArmSwing={talkpose.rightArmSwing}
leftElbowRotation={talkpose.leftElbowRotation}
rightElbowRotation={talkpose.leftElbowRotation}
leftHandRotation={talkpose.leftHandRotation}
headRotation={shakePose.headRotation}
eyeScaleY={blinkPose.eyeScaleY}
eyeLLookX={lookPose.eyeLLookX}
eyeLLookY={lookPose.eyeLLookY}
eyeRLookX={lookPose.eyeRLookX}
eyeRLookY={lookPose.eyeRLookY}
leftEyeBrowY={eyebrowPose.leftEyeBrowY}
rightEyeBrowY={eyebrowPose.rightEyeBrowY}
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
      durationInFrames={IDLE_ANIMATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};
