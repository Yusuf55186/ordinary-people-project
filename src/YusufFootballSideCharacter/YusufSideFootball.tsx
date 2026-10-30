import { YusufSideArms } from "./YusufSideArms"
import { YusufSideHead } from "./YusufSideHead"
import { YusufSideLegs } from "./YusufSideLegs"
import { YusufSideTorso } from "./YusufTorso"
export const YusufSideFootball = () => {
    return (
    <div style={{ position: "relative",left:800,top:300, width: 200, height: 540 }}>
  {/* Benen: achter de torso */}
  <div style={{ position: "absolute", left: -55, top: 270, width: 196.52, height: 259.89 }}>
    <YusufSideLegs />
  </div>

  {/* Arm: achter de torso */}
  <div
  style={{
    position: "absolute",
    left: 50,
    top: 140,
    width: 200,
    height: 100,
    transform: "rotate(20deg)",
    transformOrigin: "20px 20px",
  }}
>
  <YusufSideArms />
</div>

  {/* Torso */}
  <div style={{ position: "absolute", left: 0, top: 115, width: 141.6, height: 161.42 }}>
    <YusufSideTorso />
  </div>

  {/* Hoofd: onderkant sluit aan op de nek */}
  <div style={{ position: "absolute", left: 49, top: 4, width: 49.15, height: 116.6 }}>
    <YusufSideHead />
  </div>
</div>
    )
}