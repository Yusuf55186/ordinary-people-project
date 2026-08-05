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

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};
const WALK_CYCLE_FRAMES = 60;
const WAVE_ANIMATION_FRAMES = 60;
const IDLE_ANIMATION_FRAMES = 60;
const BLINK_ANIMATION_FRAMES = 60;
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
        bodyY={idlePose.bodyY} 
        leftArmSwing={idlePose.leftArmSwing}
rightArmSwing={idlePose.rightArmSwing}
leftElbowRotation={idlePose.leftElbowRotation}
rightElbowRotation={0}
leftHandRotation={idlePose.leftHandRotation}
headRotation={idlePose.headRotation}
eyeScaleY={blinkPose.eyeScaleY}
        
        
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
