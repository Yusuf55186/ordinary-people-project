import type { CSSProperties, ReactNode } from "react";
import type { YusufCharacterProps } from "../../YusufCharacter";
import { YusufSideArms } from "../../YusufFootballSideCharacter/YusufSideArms";
import { YusufSideLegs } from "../../YusufFootballSideCharacter/YusufSideLegs";
import { YusufSideTorso } from "../../YusufFootballSideCharacter/YusufTorso";
import type { ComponentType } from "react";
type JointStyle = CSSProperties & {
  "--yusuf-right-elbow"?: string;
  "--yusuf-left-knee"?: string;
};

// The same side-view artwork is instanced for the near and far limbs.
// Each instance has its own pose, inherited joint variables and SVG IDs.
export type FootballKit = {
  shirt: string;
  shorts: string;
  shoe: string;
  shoeDark: string;
  shoeLight: string;
  shoeOutline: string;
  skin: string;
};

export type FootballSideRigProps = Partial<YusufCharacterProps> & {
  head: ReactNode;
  kit?: Partial<FootballKit>;
  ArmComponent?:ComponentType<{
    skinColor?: string;
    shirtColor?: string;
  }>;
  };


const defaultKit: FootballKit = {
  shirt: "#063ac6",
  shorts: "#0252d2",
  shoe: "#46a2cd",
  shoeDark: "#6faad3",
  shoeLight: "#84c0e2",
  shoeOutline: "#042840",
  skin: "#d48455",
};

export const FootballSideRig = ({
  head,
  kit,
  ArmComponent = YusufSideArms,
  headRotation = 0,
  bodyY = 0,
  leftArmSwing = 0,
  rightArmSwing = 0,
  leftElbowRotation = 0,
  rightElbowRotation = 0,
  leftArmScaleY = 1,
  rightArmScaleY = 1,
  leftHipRotation = 0,
  rightHipRotation = 0,
  leftKneeRotation = 0,
  rightKneeRotation = 0,
  leftLegScaleY = 1,
  rightLegScaleY = 1,
}: FootballSideRigProps) => {
  const colors = { ...defaultKit, ...kit };
  const legStyle = (
    hip: number,
    knee: number,
    scaleY: number,
    far = false,
  ): JointStyle => ({
    position: "absolute",
    left: far ? -61 : -55,
    top: far ? 268 : 270,
    width: 196.52,
    height: 259.89,
    transformOrigin: "118px 10px",
    transform: `rotate(${hip}deg) scaleY(${scaleY})`,
    filter: far ? "brightness(0.8)" : undefined,
    // The source SVG calls this joint left-knee; each instance supplies its own value.
    "--yusuf-left-knee": `${knee}deg`,
  });

  const armStyle = (
    swing: number,
    elbow: number,
    scaleY: number,
    far = false,
  ): JointStyle => ({
    position: "absolute",
    left: far ? 64 : 70,
    top: far ? 138 : 140,
    width: 150,
    height: 150,
    transformOrigin: "20px 20px",
    transform: `rotate(${20 + swing}deg) scaleY(${scaleY})`,
    filter: far ? "brightness(0.8)" : undefined,
    // The source SVG calls this joint right-elbow; each instance supplies its own value.
    "--yusuf-right-elbow": `${elbow}deg`,
  });

  return (
    <div style={{ position: "relative", width: 200, height: 540 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateY(${bodyY}px)`,
        }}
      >
        {/* Far arm, behind the legs and torso. */}
        <div style={armStyle(leftArmSwing, leftElbowRotation, leftArmScaleY, true)}>
          <YusufSideArms skinColor={colors.skin} shirtColor={colors.shirt} />
        </div>

        {/* Far right leg. */}
        <div style={legStyle(rightHipRotation, rightKneeRotation, rightLegScaleY, true)}>
          <YusufSideLegs
          skinColor={colors.skin}
            shortsColor={colors.shorts}
            shoeColor={colors.shoe}
            shoeDarkColor={colors.shoeDark}
            shoeLightColor={colors.shoeLight}
            shoeOutlineColor={colors.shoeOutline}
          />
        </div>

        {/* Near left leg. */}
        <div style={legStyle(leftHipRotation, leftKneeRotation, leftLegScaleY)}>
          <YusufSideLegs
          skinColor={colors.skin}
            shortsColor={colors.shorts}
            shoeColor={colors.shoe}
            shoeDarkColor={colors.shoeDark}
            shoeLightColor={colors.shoeLight}
            shoeOutlineColor={colors.shoeOutline}
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            top: 115,
            width: 141.6,
            height: 161.42,
          }}
        >
          <YusufSideTorso skinColor={colors.skin} shirtColor={colors.shirt} />
        </div>

        <div
          style={{
            position: "absolute",
            left: 49,
            top: 4,
            width: 49.15,
            height: 116.6,
            transformOrigin: "24px 115px",
            transform: `rotate(${headRotation}deg)`,
          }}
        >
          {head}
        </div>

        {/* Near right arm. */}
        <div style={armStyle(rightArmSwing, rightElbowRotation, rightArmScaleY)}>
  <ArmComponent skinColor={colors.skin} shirtColor={colors.shirt} />
</div>
          
          
        </div>
      </div>
  );
};
