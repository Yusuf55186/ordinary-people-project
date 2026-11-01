import { YusufSideArms } from "./YusufSideArms";
import { YusufSideHead } from "./YusufSideHead";
import { YusufSideLegs } from "./YusufSideLegs";
import { YusufSideTorso } from "./YusufTorso";

export const YusufSideFootball = () => {
  return (
    <div
      style={{
        position: "relative",
        left: 800,
        top: 300,
        width: 200,
        height: 540,
      }}
    >
      {/* Contactschaduw onder de schoen */}
      <div
        style={{
          position: "absolute",
          left: 10,
          top: 509,
          width: 75,
          height: 12,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(4, 12, 24, 0.65), transparent 75%)",
          filter: "blur(2px)",
          pointerEvents: "none",
        }}
      />

      {/* Nachtbelichting op het volledige karakter */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          
        }}
      >
        {/* Benen */}
        <div
          style={{
            position: "absolute",
            left: -55,
            top: 270,
            width: 196.52,
            height: 259.89,
          }}
        >
          <YusufSideLegs />
        </div>

        {/* Torso */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 115,
            width: 141.6,
            height: 161.42,
          }}
        >
          <YusufSideTorso />
        </div>

        {/* Hoofd */}
        <div
          style={{
            position: "absolute",
            left: 49,
            top: 4,
            width: 49.15,
            height: 116.6,
          }}
        >
          <YusufSideHead />
        </div>

        {/* Arm */}
        <div
          style={{
            position: "absolute",
            left: 70,
            top: 140,
            width: 150,
            height: 150,
            transform: "rotate(20deg)",
            transformOrigin: "20px 20px",
          }}
        >
          <YusufSideArms />
        </div>
      </div>
    </div>
  );
};