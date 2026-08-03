import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  useCurrentFrame,
  interpolate,
} from 'remotion';
import { YusufLegs } from './YusufLegs';


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
  const kneeRotation = interpolate(
    frame,
    [0,30,59],
    [-20,20,-20]
  );
  const rightKneeRotation = interpolate(
    frame,
    [0,30,59],
    [-20,20,-20]
  );
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <YusufLegs
      rightKneeRotation={rightKneeRotation}
      kneeRotation={kneeRotation}
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
