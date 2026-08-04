import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  useCurrentFrame,
} from "remotion";
import { YusufCharacter } from "./YusufCharacter";
import { walkCycle } from "./animations/walkCycle";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};
const WALK_CYCLE_FRAMES = 60;
const LegsScene: React.FC<Props> = () => {
  // const frameLegL = useCurrentFrame();
  // const kneeRotation_L = interpolate(
  //   frameLegL,
  //   [0,30,59],
  //   [0,50,0]
  // );
  const frame = useCurrentFrame();
  const pose = walkCycle(frame,WALK_CYCLE_FRAMES);
  return (
    
    <AbsoluteFill
      style={{
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
      from={-7}
    >
      <YusufCharacter
        rightKneeRotation={pose.rightKneeRotation}
        leftKneeRotation={pose.leftKneeRotation}
        leftHipRotation={pose.leftHipRotation}
        rightHipRotation={pose.rightHipRotation}
        bodyY={pose.bodyY} 
        leftArmSwing={pose.leftArmSwing}
rightArmSwing={pose.rightArmSwing}
        
        
      />
    </AbsoluteFill>
  );
  
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={LegsScene}
      durationInFrames={WALK_CYCLE_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};
