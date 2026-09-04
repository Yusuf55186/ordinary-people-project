type StreetProps = {
    x?:number;
    y?:number;
    scale?:number;
}
import {Img, staticFile} from "remotion";

    const streetPath = 
      "assets/Environment/Egyptian_street_assets_v1";

const layers = [
    "01-sky-far-depth.png",
    "02-left-street-wall.png",
    "03-right-street-wall.png",
    "05-street-props.png",
    "04-ground-and-walkable-plane.png",
    
];
export const EgyptianStreet = ({ x = 0, y = 0, scale = 1 }: StreetProps) => {
    return (
        <div
        style={{
             position: "absolute",
             left: x,
             top: y,
             transform: `translate(${x}px, ${y}px) scale(${scale})`,
             transformOrigin: "top left",
             inset: 0,
             overflow: "hidden",
             zIndex:0
        }}
        >
            {layers.map((layer,index) => (
                <Img 
                key={layer}
                src={staticFile(`${streetPath}/${layer}`)}
                style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: index,
            pointerEvents: "none",
                }}
                />
            ))}

        </div>
        
    )
}
