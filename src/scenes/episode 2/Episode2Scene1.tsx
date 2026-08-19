import { idleAnimation } from "../../animations/idleAnimation";
import { YusufDeskShot } from "../../shots/DeskShot";
import { Camera } from "../../components/Camera";
import { Easing, Img, interpolate, staticFile, useCurrentFrame} from "remotion"
import { Audio } from "@remotion/media";
import { UiCursor } from "../../components/UiCursor";
export const Episode2Scene1 = () => {
  const frame = useCurrentFrame();
  const monitorCheck = interpolate(
    frame,
    [300,318,360,380],[0,1,1,0],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp"
    }
    
  )
  const vsCodeStart = 700;
  const imReadyStart = 880;
  const letsBeginStart = 1160;
  const haderYaAamStart =  1325;
  const haderYa3amEnd = haderYaAamStart + 165;
const typingStart = haderYa3amEnd + 90;
  
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
  const typingStrength = interpolate (
    frame,
    [typingStart,typingStart + 12],
    [0,1],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp"
    }
  )
  const typingPulse = Math.sin((frame - typingStart) * 1.35);
  const typingOffset = {
      bodyY: -0.8 * typingStrength,
  headRotation: -0.5 * typingStrength,
  leftArmSwing: typingPulse * 1.25 * typingStrength,
  rightArmSwing: -typingPulse * 1.25 * typingStrength,
  leftElbowRotation: typingPulse * 1.5 * typingStrength,
  rightElbowRotation: -typingPulse * 1.5 * typingStrength,
  }
  

  
 
  return (
    
    <Camera x={cameraX} y={cameraY} scale={cameraScale}
    
    >
    <Audio src={staticFile("VoiceOver/Episode2/scene1-everything-ready.m4a")} from={300} />
    <Audio src={staticFile("VoiceOver/Episode2/scene1-monitor-on.m4a")} from={450} />
    <Audio src={staticFile("VoiceOver/Episode2/scene1-vscode-open.m4a")} from={700} />
    <Audio src={staticFile("VoiceOver/Episode2/scene1-im-ready.m4a")} from={880} />
    <Audio src={staticFile("VoiceOver/Episode2/scene1-lets-start.m4a")} from={1160} />
    <Audio src={staticFile("VoiceOver/Episode2/scene1-hader-ya-aam.m4a")} from={haderYaAamStart} />

    
    <div style={{
      opacity:VScodeCheck
    }}>
    <UiCursor x={vsCodeCursorX} y={450} scale={0.2} />
    </div>
    <YusufDeskShot yusufMode={frame >= typingStart ? "typing" : "rest"}
    preformanceOffset={{
  bodyY: imReadyStrength * 1.5 - letsBeginStrength * 2 + typingOffset.bodyY,
  headRotation: imReadyStrength * 3 - letsBeginStrength * 2 + typingOffset.headRotation,
  leftArmSwing: typingOffset.leftArmSwing,
  rightArmSwing:typingOffset.rightArmSwing,
  leftElbowRotation:typingOffset.leftElbowRotation,
  rightElbowRotation:typingOffset.rightElbowRotation
}}
    
    hesitation={interpolate(frame,[0,20,70,120],[0,0.18,0.18,0],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp"
    })}
  
    {...CheckStrength}
    
    
    children={
      
      <Img src={staticFile("assets/Episode2_ScreenStates/laptop_project.svg")}
      style={{
       position: "absolute",
    left: 650,
    top: 420,
    width: 290,
    height: 160,
    objectFit: "cover",
      }}
      />
    }     
    foregroundChildren={
      <Img src={staticFile("assets/Episode2_Devices/phone_surface_01.svg")}
      style={{
        position:"absolute",
        left:1300,
        top:550,
        width:30,
        height:160,
    transform: "rotate(90deg)",
    transformOrigin: "center",
      
      }}
    
      />
    }
      >
        
     
    </YusufDeskShot>
    </Camera>
  )
}