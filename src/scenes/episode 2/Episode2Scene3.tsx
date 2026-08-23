import { Img, staticFile, useCurrentFrame } from "remotion";
import { idleAnimation } from "../../animations/idleAnimation";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot"
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { SceneMaster } from "../sceneCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { Audio } from "@remotion/media";
export const Episode2Scene3 = () => {
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
  src={staticFile("VoiceOver/Episode2/Yusuf.m4a")}
  from={0}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/yas.m4a")}
  from={270}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/What_are_you_doing.m4a")}
  from={308}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/I_am_working.m4a")}
  from={351}
/>
<Audio
  src={staticFile("VoiceOver/Episode2/What_are_you_working_on.m4a")}
  from={464}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/I....m4a")}
  from={543}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/yasy.m4a")}
  from={582}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/I_need_to_clear_my_mind.m4a")}
  from={740}
/>
<Audio
  src={staticFile("VoiceOver/Episode2/and_then.m4a")}
  from={897}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/And_then_work.m4a")}
  from={940}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/you_were_just_working.m4a")}
  from={1044}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/you stopped when.m4a")}
  from={1207}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/you_figured_out.m4a")}
  from={1296}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/something_you_can't_do.m4a",
  )}
  from={1344}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/ok.m4a")}
  from={1432}
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