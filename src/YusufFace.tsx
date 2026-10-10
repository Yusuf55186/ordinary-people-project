import { useCurrentFrame} from "remotion";
export const YusufFace = () => {
const SMILE_START = 30; 
const SMILE_END = 90;
const frame = useCurrentFrame();
const SMILE_RETURN_START = 120;
const SMILE_RETURN_END = 180;
const duration = SMILE_END - SMILE_START;
const returnDuration = SMILE_RETURN_END - SMILE_RETURN_START

const elapsed = Math.max(
  0,
  Math.min(frame - SMILE_START, duration)
);

const smileProgress = elapsed / duration;
const easedProgress = smileProgress * (3 - 2 * smileProgress) * smileProgress;
const mouthWide = 20 + easedProgress * 20;

const returnElapsed = Math.max(
    0,
    Math.min(frame - SMILE_RETURN_START,returnDuration)
)
const returnProgress = returnElapsed / returnDuration;
const easedReturnProgress =
  returnProgress * returnProgress * (3 - 2 * returnProgress);
  const returnMouthWidth = 40 - easedReturnProgress * 20;
  const currentMouthWidth =
  frame >= SMILE_RETURN_START
    ? returnMouthWidth
    : mouthWide;
    const mouthX = 60 - currentMouthWidth / 2;
return (
    
    <rect x={mouthX} y={80} width={currentMouthWidth} height={5} />
);
};