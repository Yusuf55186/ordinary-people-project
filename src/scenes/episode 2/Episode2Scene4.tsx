import { Img, staticFile, useCurrentFrame,interpolate,Easing } from "remotion";
import { idleAnimation } from "../../animations/idleAnimation";
import { Camera } from "../../components/Camera";
import { YusufDeskShot } from "../../shots/DeskShot"
import { Episode2Phone } from "../../components/Episode2DeviceStates";
import { SceneMaster } from "../sceneCharacter";
import { farmalaPose } from "../../animations/FarmalaPose";
import { FarmalaCharacter } from "../../FarmalaCharacter";
import { Audio } from "@remotion/media";
import { eyeLookingAnimation } from "../../animations/EyeLookAnimation";
import { getMouthPose,type MouthCue } from "../../animations/lipSync";
import { eyeBrowAnimation } from "../../animations/eyebrowAnimation";
export const Episode2Scene4 = () => {
    const frame = useCurrentFrame();
    const yusufIdle = idleAnimation(frame, 60);
  const farmalaIdle = idleAnimation(frame, 120);
  
  const idlePose = {
    headRotation: yusufIdle.headRotation + 4,
    bodyY: yusufIdle.bodyY,
  };
  const farmalaRevealStart = 230
  const revealStrength = interpolate(
    frame,
    [farmalaRevealStart,260],
    [0,1],{
        extrapolateLeft: "clamp",
        extrapolateRight:"clamp",
        easing:Easing.inOut(Easing.cubic)
    }
)
const cameraX = interpolate(
  revealStrength,
  [0, 1],
  [60, 0],
);
const cameraY = interpolate(revealStrength, [0, 1], [20, 0],{
    extrapolateLeft: 'clamp',
    extrapolateRight:'clamp',
    easing:Easing.inOut(Easing.cubic)
})

const watchingYusufStrength = interpolate(
    frame,
    [336,346,356,365],
    [0,1,1,0],{
        extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
    }
)

   
const cameraScale = interpolate(
  revealStrength,
  [0, 1],
  [1.5, 1],
);
const scene4FarmalaMouthCues: MouthCue[] = [
  // إنت
  { startFrame: 60, endFrame: 63, pose: "E" },
  { startFrame: 63, endFrame: 66, pose: "N" },
  { startFrame: 66, endFrame: 69, pose: "A" },

  // مش
  { startFrame: 71, endFrame: 76, pose: "MBP" },
  { startFrame: 76, endFrame: 83, pose: "I" },
  { startFrame: 83, endFrame: 90, pose: "S" },

  // مر
  { startFrame: 93, endFrame: 98, pose: "MBP" },
  { startFrame: 98, endFrame: 104, pose: "A" },
  { startFrame: 104, endFrame: 114, pose: "R" },

  // كز
  { startFrame: 121, endFrame: 126, pose: "G" },
  { startFrame: 126, endFrame: 131, pose: "A" },
  { startFrame: 131, endFrame: 135, pose: "S" },

  // من
  { startFrame: 209, endFrame: 214, pose: "MBP" },
  { startFrame: 214, endFrame: 220, pose: "E" },
  { startFrame: 220, endFrame: 225, pose: "N" },

  // شُو
  { startFrame: 225, endFrame: 231, pose: "S" },
  { startFrame: 231, endFrame: 238, pose: "U" },
  { startFrame: 238, endFrame: 246, pose: "A" },

  // يّة
  { startFrame: 249, endFrame: 255, pose: "I" },
  { startFrame: 259, endFrame: 265, pose: "A" },
  // BLOCK 2 — كنت بتفرج عليك
{ startFrame: 365, endFrame: 370, pose: "G" },
{ startFrame: 370, endFrame: 376, pose: "O" },
{ startFrame: 376, endFrame: 382, pose: "N" },
{ startFrame: 382, endFrame: 388, pose: "MBP" },
{ startFrame: 388, endFrame: 394, pose: "A" },
{ startFrame: 394, endFrame: 400, pose: "F" },
{ startFrame: 400, endFrame: 406, pose: "A" },
{ startFrame: 406, endFrame: 412, pose: "R" },
{ startFrame: 412, endFrame: 418, pose: "A" },
{ startFrame: 418, endFrame: 424, pose: "G" },
{ startFrame: 424, endFrame: 430, pose: "A" },
{ startFrame: 430, endFrame: 436, pose: "L" },
{ startFrame: 436, endFrame: 443, pose: "I" },
{ startFrame: 443, endFrame: 449, pose: "G" },
{ startFrame: 449, endFrame: 453, pose: "A" },

// ولا حاجة
{ startFrame: 513, endFrame: 518, pose: "U" },
{ startFrame: 518, endFrame: 523, pose: "L" },
{ startFrame: 523, endFrame: 528, pose: "A" },
{ startFrame: 528, endFrame: 533, pose: "G" },
{ startFrame: 533, endFrame: 538, pose: "A" },
{ startFrame: 538, endFrame: 542, pose: "A" },

// إنت مش مركز — second take
{ startFrame: 556, endFrame: 559, pose: "E" },
{ startFrame: 559, endFrame: 562, pose: "N" },
{ startFrame: 562, endFrame: 565, pose: "A" },
{ startFrame: 567, endFrame: 572, pose: "MBP" },
{ startFrame: 572, endFrame: 579, pose: "I" },
{ startFrame: 579, endFrame: 586, pose: "S" },
{ startFrame: 589, endFrame: 594, pose: "MBP" },
{ startFrame: 594, endFrame: 600, pose: "A" },
{ startFrame: 600, endFrame: 610, pose: "R" },
{ startFrame: 617, endFrame: 622, pose: "G" },
{ startFrame: 622, endFrame: 627, pose: "A" },
{ startFrame: 627, endFrame: 631, pose: "S" },

// BLOCK 3 — طب ما تقوم كده
{ startFrame: 704, endFrame: 708, pose: "N" },
{ startFrame: 708, endFrame: 712, pose: "A" },
{ startFrame: 712, endFrame: 716, pose: "MBP" },
{ startFrame: 721, endFrame: 727, pose: "MBP" },
{ startFrame: 727, endFrame: 733, pose: "A" },
{ startFrame: 733, endFrame: 740, pose: "N" },
{ startFrame: 740, endFrame: 748, pose: "U" },
{ startFrame: 748, endFrame: 756, pose: "O" },
{ startFrame: 756, endFrame: 764, pose: "MBP" },
{ startFrame: 764, endFrame: 771, pose: "U" },
{ startFrame: 771, endFrame: 777, pose: "MBP" },
{ startFrame: 783, endFrame: 790, pose: "G" },
{ startFrame: 790, endFrame: 798, pose: "A" },
{ startFrame: 798, endFrame: 805, pose: "N" },
{ startFrame: 805, endFrame: 817, pose: "A" },

// أي حاجة
{ startFrame: 891, endFrame: 897, pose: "A" },
{ startFrame: 897, endFrame: 902, pose: "I" },
{ startFrame: 902, endFrame: 908, pose: "G" },
{ startFrame: 908, endFrame: 913, pose: "A" },
{ startFrame: 913, endFrame: 917, pose: "A" },

// عشان تفصل شوية
{ startFrame: 960, endFrame: 966, pose: "A" },
{ startFrame: 966, endFrame: 972, pose: "S" },
{ startFrame: 972, endFrame: 978, pose: "A" },
{ startFrame: 978, endFrame: 982, pose: "N" },
{ startFrame: 986, endFrame: 991, pose: "N" },
{ startFrame: 991, endFrame: 996, pose: "A" },
{ startFrame: 996, endFrame: 1001, pose: "F" },
{ startFrame: 1001, endFrame: 1005, pose: "L" },
{ startFrame: 1005, endFrame: 1009, pose: "S" },
{ startFrame: 1009, endFrame: 1012, pose: "U" },
{ startFrame: 1012, endFrame: 1015, pose: "A" },

// BLOCK 4 — وبعدين ترجع تكمل
{ startFrame: 1072, endFrame: 1078, pose: "U" },
{ startFrame: 1078, endFrame: 1084, pose: "MBP" },
{ startFrame: 1084, endFrame: 1090, pose: "A" },
{ startFrame: 1090, endFrame: 1096, pose: "N" },
{ startFrame: 1096, endFrame: 1103, pose: "I" },
{ startFrame: 1103, endFrame: 1108, pose: "N" },
{ startFrame: 1108, endFrame: 1114, pose: "N" },
{ startFrame: 1114, endFrame: 1120, pose: "A" },
{ startFrame: 1120, endFrame: 1126, pose: "R" },
{ startFrame: 1126, endFrame: 1132, pose: "G" },
{ startFrame: 1132, endFrame: 1137, pose: "A" },
{ startFrame: 1137, endFrame: 1142, pose: "N" },
{ startFrame: 1142, endFrame: 1147, pose: "A" },
{ startFrame: 1147, endFrame: 1150, pose: "MBP" },
{ startFrame: 1150, endFrame: 1153, pose: "L" },

// إيه؟
{ startFrame: 1262, endFrame: 1266, pose: "E" },
{ startFrame: 1266, endFrame: 1271, pose: "A" },

// BLOCK 5 — بص، لما دماغك تكون قافشة كده
{ startFrame: 1331, endFrame: 1336, pose: "MBP" },
{ startFrame: 1336, endFrame: 1342, pose: "O" },
{ startFrame: 1342, endFrame: 1347, pose: "S" },
{ startFrame: 1347, endFrame: 1350, pose: "L" },
{ startFrame: 1350, endFrame: 1354, pose: "A" },

{ startFrame: 1378, endFrame: 1382, pose: "N" },
{ startFrame: 1382, endFrame: 1386, pose: "A" },
{ startFrame: 1386, endFrame: 1390, pose: "MBP" },
{ startFrame: 1390, endFrame: 1393, pose: "G" },

{ startFrame: 1400, endFrame: 1405, pose: "N" },
{ startFrame: 1405, endFrame: 1410, pose: "A" },
{ startFrame: 1410, endFrame: 1415, pose: "U" },
{ startFrame: 1415, endFrame: 1419, pose: "N" },
{ startFrame: 1419, endFrame: 1423, pose: "G" },
{ startFrame: 1423, endFrame: 1428, pose: "A" },

{ startFrame: 1432, endFrame: 1438, pose: "G" },
{ startFrame: 1438, endFrame: 1444, pose: "A" },
{ startFrame: 1444, endFrame: 1450, pose: "N" },
{ startFrame: 1450, endFrame: 1455, pose: "A" },

// متفضلش تضغط على نفسك
{ startFrame: 1459, endFrame: 1464, pose: "MBP" },
{ startFrame: 1464, endFrame: 1468, pose: "A" },
{ startFrame: 1468, endFrame: 1473, pose: "N" },
{ startFrame: 1473, endFrame: 1478, pose: "F" },
{ startFrame: 1478, endFrame: 1483, pose: "A" },
{ startFrame: 1483, endFrame: 1488, pose: "L" },
{ startFrame: 1488, endFrame: 1493, pose: "S" },
{ startFrame: 1493, endFrame: 1498, pose: "N" },
{ startFrame: 1498, endFrame: 1503, pose: "A" },
{ startFrame: 1503, endFrame: 1508, pose: "G" },
{ startFrame: 1508, endFrame: 1513, pose: "A" },
{ startFrame: 1513, endFrame: 1518, pose: "N" },
{ startFrame: 1518, endFrame: 1522, pose: "A" },
{ startFrame: 1522, endFrame: 1526, pose: "L" },
{ startFrame: 1526, endFrame: 1530, pose: "A" },
{ startFrame: 1530, endFrame: 1534, pose: "N" },
{ startFrame: 1534, endFrame: 1538, pose: "A" },
{ startFrame: 1538, endFrame: 1543, pose: "S" },

// اعمل حاجة تانية
{ startFrame: 1560, endFrame: 1565, pose: "A" },
{ startFrame: 1565, endFrame: 1570, pose: "MBP" },
{ startFrame: 1570, endFrame: 1575, pose: "A" },
{ startFrame: 1575, endFrame: 1580, pose: "L" },
{ startFrame: 1580, endFrame: 1585, pose: "G" },
{ startFrame: 1585, endFrame: 1590, pose: "A" },
{ startFrame: 1590, endFrame: 1595, pose: "G" },
{ startFrame: 1595, endFrame: 1600, pose: "A" },
{ startFrame: 1600, endFrame: 1603, pose: "N" },

// فك دماغك
{ startFrame: 1656, endFrame: 1662, pose: "F" },
{ startFrame: 1662, endFrame: 1668, pose: "A" },
{ startFrame: 1668, endFrame: 1673, pose: "G" },
{ startFrame: 1673, endFrame: 1678, pose: "N" },
{ startFrame: 1678, endFrame: 1682, pose: "A" },
{ startFrame: 1682, endFrame: 1685, pose: "G" },

// آه / طبعًا
{ startFrame: 1774, endFrame: 1783, pose: "A" },
{ startFrame: 1787, endFrame: 1793, pose: "N" },
{ startFrame: 1793, endFrame: 1801, pose: "A" },
{ startFrame: 1801, endFrame: 1807, pose: "MBP" },
{ startFrame: 1807, endFrame: 1814, pose: "A" },
{ startFrame: 1814, endFrame: 1820, pose: "N" },
{ startFrame: 1820, endFrame: 1827, pose: "A" },
{ startFrame: 1829, endFrame: 1835, pose: "E" },
{ startFrame: 1835, endFrame: 1842, pose: "A" },
{ startFrame: 1842, endFrame: 1849, pose: "N" },

// FINAL — وممكن تنام كمان
{ startFrame: 1915, endFrame: 1920, pose: "U" },
{ startFrame: 1920, endFrame: 1925, pose: "MBP" },
{ startFrame: 1925, endFrame: 1930, pose: "G" },
{ startFrame: 1933, endFrame: 1939, pose: "E" },
{ startFrame: 1939, endFrame: 1945, pose: "N" },
{ startFrame: 1945, endFrame: 1951, pose: "N" },
{ startFrame: 1951, endFrame: 1957, pose: "A" },
{ startFrame: 1957, endFrame: 1963, pose: "N" },
{ startFrame: 1963, endFrame: 1968, pose: "MBP" },
{ startFrame: 1968, endFrame: 1974, pose: "G" },
{ startFrame: 1974, endFrame: 1980, pose: "A" },
{ startFrame: 1980, endFrame: 1985, pose: "MBP" },
{ startFrame: 1995, endFrame: 2000, pose: "A" },
{ startFrame: 2015, endFrame: 2020, pose: "N" },
{ startFrame: 2020, endFrame: 2026, pose: "A" },

// كنت بقول يعني، شايفك شكلك تعبان
{ startFrame: 2123, endFrame: 2126, pose: "G" },
{ startFrame: 2126, endFrame: 2129, pose: "O" },
{ startFrame: 2129, endFrame: 2131, pose: "N" },

{ startFrame: 2134, endFrame: 2140, pose: "MBP" },
{ startFrame: 2140, endFrame: 2148, pose: "O" },
{ startFrame: 2148, endFrame: 2154, pose: "L" },
{ startFrame: 2154, endFrame: 2160, pose: "I" },
{ startFrame: 2160, endFrame: 2166, pose: "A" },
{ startFrame: 2166, endFrame: 2172, pose: "N" },
{ startFrame: 2172, endFrame: 2178, pose: "I" },

{ startFrame: 2178, endFrame: 2184, pose: "S" },
{ startFrame: 2184, endFrame: 2190, pose: "A" },
{ startFrame: 2190, endFrame: 2196, pose: "I" },
{ startFrame: 2196, endFrame: 2201, pose: "F" },
{ startFrame: 2201, endFrame: 2206, pose: "G" },

{ startFrame: 2224, endFrame: 2230, pose: "S" },
{ startFrame: 2230, endFrame: 2235, pose: "A" },
{ startFrame: 2235, endFrame: 2240, pose: "G" },
{ startFrame: 2240, endFrame: 2246, pose: "L" },
{ startFrame: 2246, endFrame: 2250, pose: "A" },
{ startFrame: 2250, endFrame: 2254, pose: "G" },

{ startFrame: 2290, endFrame: 2295, pose: "N" },
{ startFrame: 2295, endFrame: 2301, pose: "A" },
{ startFrame: 2301, endFrame: 2306, pose: "MBP" },
{ startFrame: 2306, endFrame: 2312, pose: "A" },
{ startFrame: 2312, endFrame: 2318, pose: "N" },

  
]
const farmalaMouthPose = getMouthPose(
  frame,
  scene4FarmalaMouthCues,
);
const watchingYusufEyeFrame = Math.min(
  Math.max(frame - 260, 0),
  139,
);

const watchingYusufEyes = eyeLookingAnimation(
  watchingYusufEyeFrame,
  140,
);
const nothingStrength = interpolate(
  frame,
  [500, 515, 555, 565],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const standUpStrength = interpolate(
  frame,
  [646, 670, 720, 750],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const whatStrength = interpolate(
  frame,
  [1212, 1228, 1250, 1270],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const whatEyebrowFrame = Math.min(
  Math.max(frame - 1212, 0),
  59,
);

const whatEyebrows = eyeBrowAnimation(
  whatEyebrowFrame,
  60,
);
const sleepSuggestionStrength = interpolate(
  frame,
  [1884, 1910, 1960, 1984],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);
const tiredStrength = interpolate(
  frame,
  [2115, 2140, 2260, 2320],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  },
);


    return (
        <Camera x={cameraX} y={cameraY} scale={cameraScale}>
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
    "VoiceOver/Episode2/you_are_not_focusing.m4a",
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
  src={staticFile("VoiceOver/Episode2/and_then.m4a")}
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
                  {...watchingYusufEyes}
                  {...whatEyebrows}
                  headRotation={
                  farmalaIdle.headRotation- 4
  + watchingYusufStrength * 2.5
  - nothingStrength * 1.5
  + whatStrength * 1.7
  - sleepSuggestionStrength
  + tiredStrength * 1.25
}
rightArmRotation={18 * -standUpStrength}
rightElbowRotation={28 * -standUpStrength}
rightHandRotation={12 * -standUpStrength}
mouthPose={farmalaMouthPose}
bodyY={farmalaIdle.bodyY + sleepSuggestionStrength * 3 - tiredStrength}
                 
                  
                />
              </SceneMaster>
            </Camera>
          );
        };
