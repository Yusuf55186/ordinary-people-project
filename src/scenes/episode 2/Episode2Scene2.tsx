import { Img, staticFile, useCurrentFrame, interpolate,Easing } from "remotion";
import { farmalaPose } from "../../animations/FarmalaPose";
import { idleAnimation } from "../../animations/idleAnimation";
import { Camera } from "../../components/Camera";
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { YusufDeskShot } from "../../shots/DeskShot";
import { SceneMaster } from "../sceneCharacter";
import { Audio } from "@remotion/media";
import { HeadShakeAnimation } from "../../animations/HeadShakeAnimation";
export const Episode2Scene2 = () => {
  const frame = useCurrentFrame();

  const scrollingStart = 45;
  const phoneState = frame < scrollingStart ? "notification" : "scrolling";
  const farmalaIdle = idleAnimation(frame, 120);
  const everyTimeReaction = interpolate(
    frame,
     [148, 160, 296, 310],
  [0, 1, 1, 0],{
    extrapolateLeft:"clamp",
    extrapolateRight:"clamp",
    easing:Easing.inOut(Easing.cubic)
  }
  )
  const willyouReturnReaction = interpolate(
    frame,
    [545, 558, 633, 652],
  [0, 1, 1, 0],{
    extrapolateLeft:"clamp",
    extrapolateRight:"clamp",
    easing:Easing.inOut(Easing.cubic)
  }
  )
  const confusionReaction = interpolate(
  frame,
  [646, 655, 824, 842],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

const searchingCommit = interpolate(
  frame,
  [890, 902, 928, 942],
  [0, 1, -0.35, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const notItShakeStart = 992;
const notItShakeDuration = 68;

const notItShakeLocalFrame = Math.min(
  Math.max(frame - notItShakeStart, 0),
  notItShakeDuration - 1,
);

const notItShakePose = HeadShakeAnimation(
  notItShakeLocalFrame,
  notItShakeDuration,
);
const caughtQuestionReaction = interpolate(
  frame,
  [1068, 1078, 1144, 1162],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

const dodgeReaction = interpolate(
  frame,
  [1158, 1168, 1218, 1234],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
   const scene2PerformanceOffset = {
  headRotation:
    4 -
    everyTimeReaction * 1.2 -
    willyouReturnReaction * 2 -
    confusionReaction * 5.5 +
    searchingCommit * 2.5 +
    notItShakePose.headRotation * 0.75 +
    caughtQuestionReaction * 4 +
    dodgeReaction * 3.5,
    

  bodyY:
    -willyouReturnReaction * 0.7 -
    confusionReaction * 2.2 +
    searchingCommit * 2 +
    caughtQuestionReaction * 1.2 +
    dodgeReaction * 1.5,
};

  return (
    <Camera x={60} y={20} scale={1.5}>
      <Audio
        src={staticFile("VoiceOver/Episode2/Nieuwe opname 47.m4a")}
        from={45}
      />
      <Audio
        src={staticFile("VoiceOver/Episode2/Nieuwe opname 50.m4a")}
        from={119}
      />
      <Audio
        src={staticFile("VoiceOver/Episode2/Nieuwe opname 30.m4a")}
        from={260}
      />
      <Audio
        src={staticFile("VoiceOver/Episode2/Nieuwe opname 32.m4a")}
        from={335}
      />
      <Audio
        src={staticFile("VoiceOver/Episode2/will_you_come_back.m4a")}
        from={501}
      />
      <Audio
        src={staticFile("VoiceOver/Episode2/Nieuwe opname 51.m4a")}
        from={552}
      />
      <Audio
  src={staticFile("VoiceOver/Episode2/WAIT....m4a")}
  from={635}
/>


<Audio
  src={staticFile("VoiceOver/Episode2/Ugh what bro.m4a")}
  from={640}
/>


<Audio
  src={staticFile("VoiceOver/Episode2/I_dont_get_this_part.m4a")}
  from={677}
/>


<Audio
  src={staticFile("VoiceOver/Episode2/SEARCH_IT_UP_THEN.m4a")}
  from={746}
/>


<Audio
  src={staticFile("VoiceOver/Episode2/searching_it_up.m4a")}
  from={807}
/>
<Audio
  src={staticFile("VoiceOver/Episode2/No_its_not_it.m4a")}
  from={938}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/What_are_you_looking_for.m4a")}
  from={1051}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/wait_a_second.m4a")}
  from={1114}
/>
      <YusufDeskShot
        preformanceOffset={scene2PerformanceOffset}
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
