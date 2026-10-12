import { AbsoluteFill, Img, staticFile } from "remotion";

export const UniversityHallway = () => {
  return (
    <AbsoluteFill>
      <Img
        src={staticFile("assets/Flash_Images/Sunlit University Hallway with Arabic Signs.png")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </AbsoluteFill>
  );
};