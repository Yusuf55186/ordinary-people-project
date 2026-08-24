import { Img, staticFile, useCurrentFrame } from "remotion";
import { idleAnimation } from "../../animations/idleAnimation";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot"
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { SceneMaster } from "../sceneCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { Audio } from "@remotion/media";
import { getMouthPose, type MouthCue } from "../../animations/lipSync";
export const Episode2Scene5 = () => {
    const frame = useCurrentFrame();
    const yusufIdle = idleAnimation(frame, 60);
  const farmalaIdle = idleAnimation(frame, 120);
  const idlePose = {
    headRotation: yusufIdle.headRotation + 4,
    bodyY: yusufIdle.bodyY,
  };
  const scene5FarmalaMouthCues: MouthCue[] = [
  // مفيش مشكلة
  { startFrame: 259, endFrame: 265, pose: "MBP" },
  { startFrame: 265, endFrame: 270, pose: "A" },
  { startFrame: 270, endFrame: 276, pose: "F" },
  { startFrame: 276, endFrame: 283, pose: "I" },
  { startFrame: 283, endFrame: 289, pose: "S" },

  { startFrame: 291, endFrame: 296, pose: "MBP" },
  { startFrame: 296, endFrame: 301, pose: "O" },
  { startFrame: 301, endFrame: 306, pose: "S" },
  { startFrame: 306, endFrame: 311, pose: "G" },
  { startFrame: 311, endFrame: 316, pose: "E" },
  { startFrame: 316, endFrame: 321, pose: "L" },
  { startFrame: 321, endFrame: 328, pose: "A" },

  // آه طبعًا
  { startFrame: 463, endFrame: 477, pose: "A" },
  { startFrame: 478, endFrame: 481, pose: "N" },
  { startFrame: 481, endFrame: 484, pose: "A" },
  { startFrame: 484, endFrame: 487, pose: "MBP" },
  { startFrame: 487, endFrame: 490, pose: "A" },
  { startFrame: 490, endFrame: 492, pose: "N" },

  // ولا حاجة خالص
  { startFrame: 553, endFrame: 558, pose: "U" },
  { startFrame: 558, endFrame: 563, pose: "L" },
  { startFrame: 563, endFrame: 574, pose: "A" },

  { startFrame: 577, endFrame: 582, pose: "G" },
  { startFrame: 582, endFrame: 589, pose: "A" },
  { startFrame: 589, endFrame: 594, pose: "A" },

  { startFrame: 594, endFrame: 599, pose: "G" },
  { startFrame: 599, endFrame: 603, pose: "A" },
  { startFrame: 603, endFrame: 606, pose: "L" },
  { startFrame: 606, endFrame: 610, pose: "S" },
];
const mouthPose = getMouthPose(frame,scene5FarmalaMouthCues)
const noProblem
    return (
        <Camera x={0} y={0} scale={1}>
            <Audio
  src={staticFile("VoiceOver/Episode2/5_more_mintues.m4a")}
  from={0}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/no_problem.m4a")}
  from={190}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/5_minutes_and_i'll_get_back.m4a",
  )}
  from={305}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/yes_of_course.m4a")}
  from={385}
/>
<Audio
  src={staticFile("VoiceOver/Episode2/WHATWHAT(1).m4a")}
  from={470}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/NOTHING_NOTHING_AT_ALL.m4a",
  )}
  from={490}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/YOUSEF.m4a")}
  from={640}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/you_know_that_you're_saying_that_to_procrastinate.m4a",
  )}
  from={720}
/>
    <YusufDeskShot
                {...idlePose}
                typingToRestProgress={1}
                yusufMode="typing"
                phoneReachProgress={1}
                phoneHoldProgress={1}
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
                  mouthPose={mouthPose}
                />
              </SceneMaster>
            </Camera>
          );
        };
