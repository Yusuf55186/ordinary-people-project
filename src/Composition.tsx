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
  const frame = useCurrentFrame();
  const kneeRotation = interpolate(
    frame,
    [0,30,59],
    [0,50,0]
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
      kneeRotation={kneeRotation}
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
