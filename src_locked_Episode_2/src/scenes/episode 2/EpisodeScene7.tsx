import { Img, staticFile, useCurrentFrame,interpolate,Easing } from "remotion";
import { idleAnimation } from "../../animations/idleAnimation";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot"
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { SceneMaster } from "../sceneCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { Audio } from "@remotion/media";
import { getMouthPose, type MouthCue } from "../../animations/lipSync";
export const Episode2Scene7 = () => {
    const frame = useCurrentFrame();
    const yusufIdle = idleAnimation(frame, 60);
  const farmalaIdle = idleAnimation(frame, 120);
  const idlePose = {
    headRotation: yusufIdle.headRotation + 4,
    bodyY: yusufIdle.bodyY,
  };
  const scene7FarmalaMouthCues: MouthCue[] = [
  // "مش هتريح؟" — actual voice: 114–154
  { startFrame: 114, endFrame: 120, pose: "MBP" },
  { startFrame: 120, endFrame: 126, pose: "I" },
  { startFrame: 126, endFrame: 132, pose: "S" },
  { startFrame: 132, endFrame: 138, pose: "A" },
  { startFrame: 138, endFrame: 145, pose: "R" },
  { startFrame: 145, endFrame: 154, pose: "I" },

  // "هعمل إيه؟" — actual voice: 248–298
  { startFrame: 248, endFrame: 255, pose: "A" },
  { startFrame: 255, endFrame: 262, pose: "MBP" },
  { startFrame: 262, endFrame: 270, pose: "A" },
  { startFrame: 270, endFrame: 278, pose: "L" },
  { startFrame: 278, endFrame: 288, pose: "E" },
  { startFrame: 288, endFrame: 298, pose: "A" },

  // "أوكي يا يوسف" — actual voice: 502–547
  { startFrame: 502, endFrame: 510, pose: "O" },
  { startFrame: 510, endFrame: 518, pose: "E" },
  { startFrame: 518, endFrame: 526, pose: "I" },
  { startFrame: 529, endFrame: 536, pose: "I" },
  { startFrame: 536, endFrame: 542, pose: "U" },
  { startFrame: 542, endFrame: 547, pose: "S" },
];
const FarmalaMouthPose = getMouthPose(frame,scene7FarmalaMouthCues)
const arentYouRestingStrength = interpolate(
  frame,
  [110, 120, 150, 168],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const whatShouldIDoStrength = interpolate(
  frame,
  [244, 254, 292, 310],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
    return (
        <Camera x={0} y={0} scale={1}>
            <Audio
  src={staticFile(
    "VoiceOver/Episode2/ARENT_YOU_GOING_TO_REST.m4a",
  )}
  from={0}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/AFTERWARDS.m4a")}
  from={105}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/WHAT_SHOULD_DO_.m4a")}
  from={160}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/DONT_KNOW.m4a")}
  from={285}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/OK_YUSUF.m4a")}
  from={350}
/>
    <YusufDeskShot
                {...idlePose}
                typingToRestProgress={1}
                yusufMode="typing"
                phoneReachProgress={0}
                phoneHoldProgress={0}
                rightArmPose="phonePose"
                rightHandPose="phone"
                heldPhone={
                  <Episode2Phone
                    state={"scrolling"}
                    x={452}
                    y={286}
                    width={72}
                    rotation={0}
                    zIndex={0}
                  />
                }
              >
                <Img
                  src={staticFile("assets/Episode2_ScreenStates/laptop_project.svg")}
                  style={{
                    position: "absolute",
                    left: 650,
                    top: 420,
                    width: 290,
                    height: 160,
                    objectFit: "cover",
                  }}
                />
              </YusufDeskShot>
              <SceneMaster x={0} y={270} scale={1} width={250}>
                <FarmalaCharacter
                  lowerBodyPose="beanbagSeated"
                  {...farmalaPose(farmalaIdle)}
                  headRotation={
                    farmalaIdle.headRotation + arentYouRestingStrength * 1.5 - whatShouldIDoStrength * 1.4
                  }
                  bodyY={farmalaIdle.bodyY + arentYouRestingStrength * 1.2 - whatShouldIDoStrength * 0.8
                  }
                   leftEyeBrowY={-arentYouRestingStrength * 1.3 -
                    whatShouldIDoStrength * 1.8
                   }
  rightEyeBrowY={-arentYouRestingStrength * 1.3 -
    whatShouldIDoStrength * 0.8
  }
  rightArmRotation={-10 * whatShouldIDoStrength}
rightElbowRotation={-16 * whatShouldIDoStrength}
rightHandRotation={-7 * whatShouldIDoStrength}
                  mouthPose={FarmalaMouthPose}
                />
              </SceneMaster>
            </Camera>
          );
        };
