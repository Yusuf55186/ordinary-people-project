type Props = {
  x: number;
  y: number;
  scale: number;
};

const videos = [
  { thumbnail: "#51515a" },
  { thumbnail: "#4f5b4d" },
  { thumbnail: "#5b4a47" },
];

export const YoutubeFeed = ({ x, y, scale }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >
      <div
        style={{
          width: 520,
          height: 260,
          backgroundColor: "#1f1f1f",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: 34,
            backgroundColor: "#111",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 14,
              top: 10,
              width: 20,
              height: 14,
              backgroundColor: "#ff3030",
              borderRadius: 4,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 8,
                top: 3,
                width: 0,
                height: 0,
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
                borderLeft: "6px solid white",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            padding: "16px 14px",
          }}
        >
          {videos.map((video, index) => (
            <div key={index} style={{ width: 150 }}>
              <div
                style={{
                  height: 78,
                  backgroundColor: video.thumbnail,
                  borderRadius: 4,
                }}
              />

              <div
                style={{
                  width: index === 1 ? 110 : 126,
                  height: 8,
                  marginTop: 8,
                  backgroundColor: "#a0a0a0",
                  borderRadius: 4,
                }}
              />

              <div
                style={{
                  width: 74,
                  height: 6,
                  marginTop: 6,
                  backgroundColor: "#666",
                  borderRadius: 4,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};