import { Img, staticFile } from "remotion";

export const GymFlash = () => {
  const imgURL =
    "assets/Environment/Gouden zonsondergang in de fitnessruimte.png";

  return (
   
    
      <Img
        src={staticFile(imgURL)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    
  );
};