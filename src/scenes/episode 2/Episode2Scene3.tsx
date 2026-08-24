import { Img, staticFile, useCurrentFrame, interpolate, Easing } from "remotion";
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
  const farmalaIdle = idleAnimation(frame, 120);
  const calledReaction = interpolate(
  frame,
  [92, 104, 328, 370],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

  const whatDoingReaction = interpolate(
  frame,
  [378, 389, 430, 444],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

const defensiveWorkingReaction = interpolate(
  frame,
  [438, 448, 486, 503],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const bufferingReaction = interpolate(
  frame,
  [565, 576, 590, 604, 618, 632, 650],
  [0, 1, -0.8, 0.65, -0.45, 0.25, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const workingQuestionReaction = interpolate(
  frame,
  [506, 516, 560, 571],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

const pressureReaction = interpolate(
  frame,
  [650, 659, 776, 796],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

const excuseRetreat = interpolate(
  frame,
  [776, 788, 916, 934],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const andThenPromptReaction = interpolate(
  frame,
  [930, 940, 970, 984],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

const confidentPlanReaction = interpolate(
  frame,
  [978, 988, 1124, 1142],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

const contradictionReaction = interpolate(
  frame,
  [1133, 1142, 1224, 1242],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const confrontationProgress = interpolate(
  frame,
  [1220, 1238, 1308, 1322, 1378, 1392, 1504],
  [0, 0.65, 0.65, 0.85, 0.85, 1, 1],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

const surrenderReaction = interpolate(
  frame,
  [1506, 1517, 1526, 1538, 1552],
  [0, 1, -0.25, 0.35, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);

const scene3PerformanceOffset = {
  headRotation:
    4 -
    calledReaction * 4.5 -
    whatDoingReaction * 3 +
    defensiveWorkingReaction * 2.5 -
    workingQuestionReaction * 4 +
    bufferingReaction * 3.5 -
    pressureReaction * 2.5 +
    excuseRetreat * 3.2 -
    andThenPromptReaction * 2 +
    confidentPlanReaction * 3.2 -
    contradictionReaction * 4.8 -
    confrontationProgress * 5 +
    surrenderReaction * 1.2,

  bodyY:
    -calledReaction * 0.8 -
    whatDoingReaction * 1.2 +
    defensiveWorkingReaction * 1.2 -
    workingQuestionReaction * 1.3 +
    Math.abs(bufferingReaction) * 1.2 -
    pressureReaction +
    excuseRetreat * 2 -
    andThenPromptReaction * 0.6 -
    confidentPlanReaction * 1.1 +
    contradictionReaction * 2 +
    confrontationProgress * 2.4 +
    Math.abs(surrenderReaction) * 0.5,
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
                preformanceOffset={scene3PerformanceOffset}
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