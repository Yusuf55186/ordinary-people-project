import { idleAnimation } from "../../animations/idleAnimation";
import { YusufDeskShot } from "../../shots/DeskShot";
import { Camera } from "../../components/Camera";
import { Easing, Img, interpolate, staticFile, useCurrentFrame} from "remotion"
import { Audio } from "@remotion/media";
import { UiCursor } from "../../components/UiCursor";
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { SceneMaster } from "../sceneCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
export const Episode2Scene1 = () => {
  const everythingReadyStart = 45;
const monitorOnStart = 195;
const vsCodeStart = 445;
const imReadyStart = 625;
const letsBeginStart = 865;
  const haderYaAamStart =  1325;
  const haderYa3amEnd = haderYaAamStart + 165;
const typingStart = haderYa3amEnd + 90;
const notificationStart = typingStart + 36;
const pickupStart = notificationStart + 50
const pickupEnd = pickupStart + 42;
const deskPhone = { x: 564, y: 357, width: 114, rotation: 90 };
const heldPhone = { x: 457, y: 286, width: 72, rotation: 0 };

  const frame = useCurrentFrame();
const currentHandPose = frame < pickupEnd ? "grab" : "phone";
  const monitorCheck = interpolate(
    frame,
    [everythingReadyStart, everythingReadyStart + 18, everythingReadyStart + 60, everythingReadyStart + 80],[0,1,1,0],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp"
    }
    
  )
  const isPickingUp = frame >= pickupStart
  const phoneX = interpolate(frame, [pickupStart, pickupEnd], [deskPhone.x, heldPhone.x],{
    extrapolateLeft: "clamp",
  extrapolateRight: "clamp"
  });
const phoneY = interpolate(frame, [pickupStart, pickupEnd], [deskPhone.y, heldPhone.y],{
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp"
} );
const phoneWidth = interpolate(frame, [pickupStart, pickupEnd], [deskPhone.width, heldPhone.width],{
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp"
});
  
  
  const VScodeCheck = interpolate(
    frame,
    [vsCodeStart,vsCodeStart + 12, vsCodeStart + 42, vsCodeStart + 58],
    [0,1,1,0],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp"
    }
  )
  const vsCodeCursorX = interpolate(
  frame,
  [vsCodeStart, vsCodeStart + 28],
  [700, 790],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  },
);
  const cameraX = interpolate(
    frame,
    [0,300,900,1335],[0,60,60,60],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp",
      easing:Easing.inOut(Easing.cubic)
    }
  )
  const cameraY = interpolate(
    frame,
    [0,300,900,1335],[0,40,40,20],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp",
      easing:Easing.inOut(Easing.cubic)
    }
  )
  const cameraScale = interpolate(
    frame,
    [0,300,900,1335],[1,1.2,1.2,1.5],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp",
      easing:Easing.inOut(Easing.cubic)
    }
  )
  const idlePose = idleAnimation(frame,60)
  const CheckStrength = {
    bodyY : idlePose.bodyY - monitorCheck * 2,
    headRotation: idlePose.headRotation - monitorCheck * 1.5
  }
  const imReadyStrength = interpolate(
    frame,
    [imReadyStart, imReadyStart + 12, imReadyStart + 32, imReadyStart + 48],
    [0,1,1,0],{
      extrapolateLeft:'clamp',
      extrapolateRight:'clamp'
    }
  )
  const letsBeginStrength = interpolate(
    frame,
    [letsBeginStart,letsBeginStart + 12, letsBeginStart + 48, letsBeginStart + 58],
    [0,1,1,0],{
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }
  )
const phoneRotation = interpolate(
  frame,
  [pickupStart, pickupEnd],
  [deskPhone.rotation, heldPhone.rotation],
  { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
);
  const notificationGlow = interpolate(
    frame,
    [notificationStart,notificationStart + 6,notificationStart + 18],
    [0,1,0.35],{
      extrapolateLeft:'clamp',
      extrapolateRight:'clamp'
    }
  )
 
  
 
  return (
    
    <Camera x={cameraX} y={cameraY} scale={cameraScale}

    >
      <Audio src={staticFile("VoiceOver/Episode2/scene1-everything-ready.m4a")} from={everythingReadyStart} />
      <Audio src={staticFile("VoiceOver/Episode2/scene1-monitor-on.m4a")} from={monitorOnStart} />
      <Audio src={staticFile("VoiceOver/Episode2/scene1-vscode-open.m4a")} from={vsCodeStart} />
      <Audio src={staticFile("VoiceOver/Episode2/scene1-im-ready.m4a")} from={imReadyStart} />
      <Audio src={staticFile("VoiceOver/Episode2/scene1-lets-start.m4a")} from={letsBeginStart} />
      <Audio src={staticFile("VoiceOver/Episode2/scene1-hader-ya-aam.m4a")} from={haderYaAamStart} />


      <div style={{
        opacity: VScodeCheck
      }}>
        <UiCursor x={vsCodeCursorX} y={450} scale={0.2} />
      </div>
      <YusufDeskShot
  yusufMode={frame >= typingStart ? "typing" : "rest"}
  heldPhone={
    isPickingUp ? (
      <Episode2Phone
        state="notification"
        x={phoneX}
        y={phoneY}
        width={phoneWidth}
        rotation={phoneRotation}
        zIndex={0}
      />
    ) : undefined
  }
  preformanceOffset={{
    bodyY: imReadyStrength * 1.5 - letsBeginStrength * 2,
    headRotation: imReadyStrength * 3 - letsBeginStrength * 2,
  }}
  hesitation={interpolate(frame, [0, 20, 70, 120], [0, 0.18, 0.18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })}
  {...CheckStrength}
  rightArmPose={isPickingUp ? "phonePose" : "rest"}
  rightHandPose={isPickingUp ? currentHandPose : undefined}
  foregroundChildren={
    <>
      <div
        style={{
          position: "absolute",
          left: 1250,
          top: 575,
          width: 160,
          height: 105,
          borderRadius: "50%",
          backgroundColor: "rgba(198, 230, 255, 0.65)",
          filter: "blur(22px)",
          opacity: notificationGlow,
          pointerEvents: "none",
        }}
      />

      {!isPickingUp &&
        (frame >= notificationStart ? (
          <Episode2Phone
            state="notification"
            x={1275}
            y={550}
            width={80}
            rotation={90}
          />
        ) : (
          <Img
            src={staticFile("assets/Episode2_Devices/phone_surface_01.svg")}
            style={{
              position: "absolute",
              left: 1300,
              top: 550,
              width: 80,
              height: 160,
              transform: "rotate(90deg)",
              transformOrigin: "center",
            }}
          />
        ))}
    </>
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
        <FarmalaCharacter lowerBodyPose='beanbagSeated' {...farmalaPose(idleAnimation(frame, 120))} />
      </SceneMaster>
      
    </Camera>
  )
}


  
    
    