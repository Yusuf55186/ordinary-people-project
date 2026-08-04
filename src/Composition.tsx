import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  useCurrentFrame,
} from "remotion";
import { YusufCharacter } from "./YusufCharacter";
import { walkCycle } from "./animations/walkCycle";
import { WaveAnimation } from "./animations/wave";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};
const WALK_CYCLE_FRAMES = 60;
const WAVE_ANIMATION_FRAMES = 60;
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
  return (
    
    <AbsoluteFill
      style={{
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
      
    >
      <YusufCharacter
        rightKneeRotation={pose.rightKneeRotation}
        leftKneeRotation={pose.leftKneeRotation}
        leftHipRotation={pose.leftHipRotation}
        rightHipRotation={pose.rightHipRotation}
        bodyY={pose.bodyY} 
        leftArmSwing={wavePose.leftArmSwing}
rightArmSwing={wavePose.rightArmSwing}
leftElbowRotation={wavePose.leftElbowRotation}
rightElbowRotation={wavePose.rightArmSwing}
leftHandRotation={wavePose.leftHandRotation}
        
        
      />
    </AbsoluteFill>
  );
  
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={LegsScene}
      durationInFrames={WAVE_ANIMATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};
