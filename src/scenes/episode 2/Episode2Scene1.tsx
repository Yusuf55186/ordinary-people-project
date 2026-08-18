import { idleAnimation } from "../../animations/idleAnimation";
import { YusufDeskShot } from "../../shots/DeskShot";
import { Camera } from "../../components/Camera";
import { Easing, Img, interpolate, staticFile, useCurrentFrame} from "remotion"
import { Audio } from "@remotion/media";
export const Episode2Scene1 = () => {
  const frame = useCurrentFrame();
  const cameraX = interpolate(
    frame,
    [0,300],[0,60],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp",
      easing:Easing.inOut(Easing.cubic)
    }
  )
  const cameraY = interpolate(
    frame,
    [0,300],[0,40],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp",
      easing:Easing.inOut(Easing.cubic)
    }
  )
  const cameraScale = interpolate(
    frame,
    [0,300],[1,1.12],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp",
      easing:Easing.inOut(Easing.cubic)
    }
  )
  const idlePose = idleAnimation(frame,60)
 
  return (
    
    <Camera x={cameraX} y={cameraY} scale={cameraScale}
    
    >
    <Audio src={staticFile("VoiceOver/Episode2/scene1-everything-ready.m4a")} from={300} />
    <Audio src={staticFile("VoiceOver/Episode2/scene1-monitor-on.m4a")} from={450} />
    <Audio src={staticFile("VoiceOver/Episode2/scene1-vscode-open.m4a")} from={700} />
    <Audio src={staticFile("VoiceOver/Episode2/scene1-im-ready.m4a")} from={880} />

    

    <YusufDeskShot
    hesitation={interpolate(frame,[0,20,70,120],[0,0.18,0.18,0],{
      extrapolateLeft:"clamp",
      extrapolateRight:"clamp"
    })}
    {...idlePose}
    
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