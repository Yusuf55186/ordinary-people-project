import { RodeNpcCharacter } from "../RodeNPCSide/RodeNPCSideCharacter";
import { Episode4Stadium } from "../Stadium_Landscape/Stadium";
import { YusufSideFootball } from "../YusufFootballSideCharacter/YusufSideFootball";
export const Episode3StreetTest = () => {
  return (
    <>
    <Episode4Stadium />
      <div style={{ position: "absolute", inset: 0, zIndex: 4 }}>

  <YusufSideFootball />
  <RodeNpcCharacter />
  </div>
  </>
  )
}