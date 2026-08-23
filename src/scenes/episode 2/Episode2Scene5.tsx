import { Img, staticFile, useCurrentFrame } from "remotion";
import { idleAnimation } from "../../animations/idleAnimation";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot"
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { SceneMaster } from "../sceneCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { Audio } from "@remotion/media";
export const Episode2Scene5 = () => {
    const frame = useCurrentFrame();
    const yusufIdle = idleAnimation(frame, 60);
  const farmalaIdle = idleAnimation(frame, 120);
  const idlePose = {
    headRotation: yusufIdle.headRotation + 4,
    bodyY: yusufIdle.bodyY,
  };
    return (
        <Camera x={60} y={20} scale={1.5}>
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
                />
              </SceneMaster>
            </Camera>
          );
        };
