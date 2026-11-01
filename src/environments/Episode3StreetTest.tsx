import { RodeNpcCharacter } from "../RodeNPCSide/RodeNPCSideCharacter";
import { SceneMaster } from "../scenes/sceneCharacter";
import { Episode4Stadium } from "../Stadium_Landscape/Stadium";
import { YusufSideFootball } from "../YusufFootballSideCharacter/YusufSideFootball";
export const Episode3StreetTest = () => {
  return (
    <>
    <Episode4Stadium />
      <div style={{ position: "absolute", inset: 0, zIndex: 4 }}>
        <SceneMaster width={500} x={200} y={0} scale={1} integration={{contactShadow:true,ambientLight:"stadiumNight",castShadow:"stadium",keyLight:"stadium"}}>
  <YusufSideFootball />
  </SceneMaster>
          <SceneMaster width={500} x={200} y={0} scale={1} integration={{contactShadow:true,ambientLight:"stadiumNight",castShadow:"stadium",keyLight:"stadium"}}>
  <RodeNpcCharacter />
  </SceneMaster>
  </div>
  </>
  )
}