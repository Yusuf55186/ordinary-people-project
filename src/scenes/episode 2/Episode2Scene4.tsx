import { Img, staticFile, useCurrentFrame } from "remotion";
import { idleAnimation } from "../../animations/idleAnimation";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot"
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { SceneMaster } from "../sceneCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { Audio } from "@remotion/media";
export const Episode2Scene4 = () => {
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
  src={staticFile("VoiceOver/Episode2/you_are_not_focusing.m4a")}
  from={17}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/When_did_you_appear.m4a")}
  from={83}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/about_a_minute_ago.m4a")}
  from={131}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/then_talk.m4a")}
  from={226}
/>
<Audio
  src={staticFile("VoiceOver/Episode2/I_was_looking_at_you.m4a")}
  from={260}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/at_what.m4a")}
  from={404}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/nothing_bro.m4a")}
  from={405}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/you_are_not_focusing(1).m4a",
  )}
  from={513}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/man_i_know.m4a")}
  from={576}
/>
<Audio
  src={staticFile("VoiceOver/Episode2/standup_then.m4a")}
  from={646}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/what_should_i_stand_for.m4a",
  )}
  from={696}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/anything.m4a")}
  from={811}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/Why.m4a")}
  from={881}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/rest_a_little.m4a")}
  from={943}
/>
<Audio
  src={staticFile("VoiceOver/Episode2/and_then(1).m4a")}
  from={989}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/and_then_continue.m4a")}
  from={1036}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/its_not_about_focus.m4a")}
  from={1096}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/WHATWHAT.m4a")}
  from={1212}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/nothing_nothing.m4a")}
  from={1192}
/>
{/* SCENE 4 — BLOCK 5 */}

<Audio
  src={staticFile(
    "VoiceOver/Episode2/Look_when_your_brain_is_fried.m4a",
  )}
  from={1281}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/don't_push_yourself.m4a",
  )}
  from={1410}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/do_something_else.m4a")}
  from={1487}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/and_then_and_then.m4a")}
  from={1624}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/for_sure.m4a")}
  from={1650}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/alrighty.m4a")}
  from={1762}
/>
<Audio
  src={staticFile("VoiceOver/Episode2/you_can_also_sleep.m4a")}
  from={1884}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/No_not_to_sleeping.m4a")}
  from={1989}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/I_was_saying_i_see_you_look_tired.m4a",
  )}
  from={2058}
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
