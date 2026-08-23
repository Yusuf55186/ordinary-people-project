import { Img, staticFile, useCurrentFrame } from "remotion";
import { idleAnimation } from "../../animations/idleAnimation";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot"
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { SceneMaster } from "../sceneCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { Audio } from "@remotion/media";
export const Episode2Scene7 = () => {
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
