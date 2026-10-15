import { Img, staticFile  } from "remotion"
export const WorkFlash = () => {
    const imgURL = "assets/Environment/Nachtelijk programmeerwerk met stadslicht.png"
    return (
        
    <Img
    style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }}
    src={staticFile(imgURL)}></Img>
    
    )
}