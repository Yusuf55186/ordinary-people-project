import { Img,staticFile } from "remotion";
export const MemoryFlash = () => {
    const imageUrl = staticFile("assets/Flash_Images/henedy_flashback.png");
    return (
        <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#000",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Img src={imageUrl} style={{width:"100%",height:"100%",objectFit:"contain"}} />
        </div>
    )
}