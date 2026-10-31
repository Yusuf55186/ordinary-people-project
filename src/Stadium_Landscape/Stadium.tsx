import { AbsoluteFill, Img, staticFile } from "remotion";
const stadiumPath = "assets/Environment/Stadium";
const stadiumLayers = [
  "stadium-sky.png",
  "stadium-neighborhood.png",
  "stadium-pitch.png",
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
