import { AbsoluteFill, Img, staticFile } from "remotion";
const stadiumPath = "assets/Environment/Stadium";
const stadiumLayers = [
  "Nachtelijke hemel met blauwe wolken-1.png",
    "Verlichte lichtmasten met zachte lichtbundels-5.png",

  "Bomen, huisdak en verlichte tribune-2.png",
  "Verlichte grasvoorgrond van het voetbalveld-4.png",
  "stadium-goal-fence.png",

];

export const Episode4Stadium = () => (
  <AbsoluteFill>
    {stadiumLayers.map((path, index) => (
      <Img
        key={path}
        src={staticFile(`${stadiumPath}/${path}`)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: index,
        }}
      />
    ))}
  </AbsoluteFill>
);
