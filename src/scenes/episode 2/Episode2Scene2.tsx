import {Img, staticFile, useCurrentFrame} from "remotion";
import {farmalaPose} from "../../animations/FarmalaPose";
import {idleAnimation} from "../../animations/idleAnimation";
import {Camera} from "../../components/Camera";
import {Episode2Phone} from "../../components/Episode2DeviceStates";
import {FarmalaCharacter} from "../../FarmalaCharacter";
import {YusufDeskShot} from "../../shots/DeskShot";
import {SceneMaster} from "../sceneCharacter";

export const Episode2Scene2 = () => {
  const frame = useCurrentFrame();

  const scrollingStart = 45;
  const phoneState =
    frame < scrollingStart ? "notification" : "scrolling";

  const yusufIdle = idleAnimation(frame, 60);
  const farmalaIdle = idleAnimation(frame, 120);
  const idlePose = {
    headRotation: yusufIdle.headRotation,
    bodyY: yusufIdle.bodyY
    
  }
 

  return (
    <Camera x={60} y={20} scale={1.5}>
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
            state={phoneState}
            x={452}
            y={286}
            width={72}
            rotation={0}
            zIndex={0}
          />
        }
      >
        <Img
          src={staticFile(
            "assets/Episode2_ScreenStates/laptop_project.svg",
          )}
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