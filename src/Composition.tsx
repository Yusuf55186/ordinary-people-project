import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  useCurrentFrame,
} from "remotion";
import { YusufLegs } from "./YusufLegs";
import { walkCycle } from "./animations/useWalkCycle";
type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

const LegsScene: React.FC<Props> = () => {
  // const frameLegL = useCurrentFrame();
  // const kneeRotation_L = interpolate(
  //   frameLegL,
  //   [0,30,59],
  //   [0,50,0]
  // );
  const frame = useCurrentFrame();
  const pose = walkCycle(frame);
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
      from={-7}
    >
      <YusufLegs
        rightKneeRotation={pose.rightKneeRotation}
        leftKneeRotation={pose.leftKneeRotation}
        leftHipRotation={0}
        rightHipRotation={15}
        // kneeRotation_L={kneeRotation_L}
      />
    </AbsoluteFill>
  );
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={LegsScene}
      durationInFrames={60}
      fps={30}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};
