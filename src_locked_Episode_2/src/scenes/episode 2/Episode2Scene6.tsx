import { Img, staticFile, useCurrentFrame,interpolate,Easing } from "remotion";
import { idleAnimation } from "../../animations/idleAnimation";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot"
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { SceneMaster } from "../sceneCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { Audio } from "@remotion/media";
import { getMouthPose,type MouthCue } from "../../animations/lipSync";
export const Episode2Scene6 = () => {
    const frame = useCurrentFrame();
    const yusufIdle = idleAnimation(frame, 60);
  const farmalaIdle = idleAnimation(frame, 120);
  const idlePose = {
    headRotation: yusufIdle.headRotation + 4,
    bodyY: yusufIdle.bodyY,
  };
  const scene6FarmalaMouthCues: MouthCue[] = [
  // إيه؟
  { startFrame: 149, endFrame: 154, pose: "E" },
  { startFrame: 154, endFrame: 160, pose: "A" },

  // يا عم، ما أنا قلتلك
  { startFrame: 274, endFrame: 279, pose: "I" },
  { startFrame: 279, endFrame: 284, pose: "A" },
  { startFrame: 284, endFrame: 289, pose: "A" },
  { startFrame: 289, endFrame: 294, pose: "MBP" },

  { startFrame: 294, endFrame: 299, pose: "MBP" },
  { startFrame: 299, endFrame: 304, pose: "A" },
  { startFrame: 304, endFrame: 309, pose: "N" },
  { startFrame: 313, endFrame: 317, pose: "G" },
  { startFrame: 317, endFrame: 321, pose: "O" },
  { startFrame: 321, endFrame: 325, pose: "L" },
  { startFrame: 325, endFrame: 329, pose: "G" },

  // ريّح شوية
  { startFrame: 353, endFrame: 359, pose: "R" },
  { startFrame: 359, endFrame: 366, pose: "I" },
  { startFrame: 366, endFrame: 377, pose: "A" },

  { startFrame: 383, endFrame: 388, pose: "S" },
  { startFrame: 388, endFrame: 393, pose: "U" },
  { startFrame: 393, endFrame: 397, pose: "I" },
  { startFrame: 397, endFrame: 402, pose: "A" },

  // طب ما تكمل الراحة
  { startFrame: 556, endFrame: 560, pose: "N" },
  { startFrame: 560, endFrame: 565, pose: "A" },
  { startFrame: 565, endFrame: 570, pose: "MBP" },
  { startFrame: 570, endFrame: 575, pose: "A" },

  { startFrame: 576, endFrame: 581, pose: "N" },
  { startFrame: 581, endFrame: 586, pose: "E" },
  { startFrame: 586, endFrame: 590, pose: "G" },
  { startFrame: 590, endFrame: 594, pose: "A" },
  { startFrame: 594, endFrame: 598, pose: "MBP" },
  { startFrame: 598, endFrame: 601, pose: "L" },

  { startFrame: 601, endFrame: 605, pose: "E" },
  { startFrame: 605, endFrame: 609, pose: "R" },
  { startFrame: 609, endFrame: 613, pose: "A" },

  // خمس دقايق كمان
  { startFrame: 737, endFrame: 740, pose: "G" },
  { startFrame: 740, endFrame: 744, pose: "A" },
  { startFrame: 744, endFrame: 748, pose: "MBP" },
  { startFrame: 748, endFrame: 752, pose: "S" },

  { startFrame: 753, endFrame: 756, pose: "N" },
  { startFrame: 756, endFrame: 760, pose: "A" },
  { startFrame: 760, endFrame: 764, pose: "G" },

  { startFrame: 767, endFrame: 772, pose: "G" },
  { startFrame: 772, endFrame: 776, pose: "A" },
  { startFrame: 776, endFrame: 780, pose: "MBP" },
  { startFrame: 780, endFrame: 785, pose: "A" },
  { startFrame: 785, endFrame: 789, pose: "N" },
];
const farmalaMouthPose = getMouthPose(frame,scene6FarmalaMouthCues)
const whatStrength = interpolate(
  frame,
  [142, 151, 160, 176],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const toldYouStrength = interpolate(
  frame,
  [268, 286, 398, 420],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const realizationStrength = interpolate(
  frame,
  [424, 442, 522, 548],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const continueRestingStrength = interpolate(
  frame,
  [550, 562, 600, 622],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const fiveMoreMinutesStrength = interpolate(
  frame,
  [640, 652, 688, 710],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const preformanceOffsetscene6 = {
    headRotation: - realizationStrength * 4,
    bodyY:- realizationStrength * 1.8
}

    return (
        <Camera x={0} y={0} scale={1}>
            <Audio
  src={staticFile("VoiceOver/Episode2/YESSSS.m4a")}
  from={0}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/WHAT YA BALADINA.m4a")}
  from={110}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/Nothing.m4a",
  )}
  from={125}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/BRO_I_TOLD_YOU_REST_A_LITTLE.m4a",
  )}
  from={170}
/>

<Audio
  src={staticFile(
    "VoiceOver/Episode2/I_RESTED_NOTHING_CHANGED.m4a",
  )}
  from={320}
/>
<Audio
  src={staticFile(
    "VoiceOver/Episode2/THEN_CONTINUE_RESTING.m4a",
  )}
  from={530}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/WHATWHAT.m4a")}
  from={590}
/>

<Audio
  src={staticFile("VoiceOver/Episode2/5_MORE_MINUTES.m4a")}
  from={640}
/>
    <YusufDeskShot
    preformanceOffset={preformanceOffsetscene6}
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
                  mouthPose={farmalaMouthPose}
                  headRotation={
  farmalaIdle.headRotation
  + whatStrength * 1.4
  - toldYouStrength * 1.2
  + continueRestingStrength * 1.2
  - fiveMoreMinutesStrength * 1.3
}

bodyY={
  farmalaIdle.bodyY
  - toldYouStrength
  + continueRestingStrength * 2
  + fiveMoreMinutesStrength * 1.2
}

leftEyeBrowY={
  -whatStrength * 2
  - fiveMoreMinutesStrength * 1.2
}

rightEyeBrowY={
  -whatStrength * 2
  - fiveMoreMinutesStrength * 0.4
}
                      rightArmRotation={-12 * toldYouStrength}
  rightElbowRotation={-18 * toldYouStrength}
  rightHandRotation={-8 * toldYouStrength}
                    
                />
              </SceneMaster>
            </Camera>
          );
        };
