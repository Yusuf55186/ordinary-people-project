import { YusufSideHead } from "./YusufSideHead"
import { YusufSideLegs } from "./YusufSideLegs"
import { YusufSideTorso } from "./YusufTorso"
export const YusufSideFootball = () => {
    return (
    <>
    <div style={{ width:50, transformOrigin: "top center" }}>
  <YusufSideHead />
</div>
    <YusufSideTorso />
    <YusufSideLegs />
    </>
    )
}