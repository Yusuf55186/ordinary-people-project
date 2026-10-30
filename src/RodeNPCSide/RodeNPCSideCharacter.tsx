import { RodeNPCSideLeg } from "./RodeNPCLegs"
import { RodeNPCHead } from "./RodeNPCHead"
import { RodeNPCTorso } from "./RodeNPCTorso"
import { RodeNPCArms } from "./RodeNPCArms"
export const RodeNpcCharacter = () => {
    return (
        <>
          <div style={{ position: "absolute", left: 1200, top: 300, width: 200, height: 300 }}>
        <RodeNPCHead />
        </div>
        <div style={{position:"absolute",width:70,height:100,left:1265,top:409}}>
        <RodeNPCTorso />
        </div>
         <div style={{ position: "absolute", left: 1218, top: 574, width:140, height: 300 }}>
        <RodeNPCSideLeg />
        </div>
                 <div style={{ position: "absolute", left: 1310, top: 434, width: 140, height: 134 }}>
  <RodeNPCArms />
</div>
        </>
    )
}