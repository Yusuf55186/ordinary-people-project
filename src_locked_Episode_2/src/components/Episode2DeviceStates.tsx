import { Img, staticFile } from "remotion";

export type LaptopScreenState = "project" | "browser" | "tabs" | "time";
export type PhoneScreenState = "notification" | "scrolling" | "appOpen";

type DevicePlacement = {
  x: number;
  y: number;
  width: number;
  rotation?: number;
  zIndex?: number;
};

const laptopStates: Record<LaptopScreenState, string> = {
  project: "assets/Episode2_ScreenStates/laptop_project.svg",
  browser: "assets/Episode2_ScreenStates/laptop_browser.svg",
  tabs: "assets/Episode2_ScreenStates/laptop_tabs.svg",
  time: "assets/Episode2_ScreenStates/laptop_time.svg",
};

const phoneStates: Record<PhoneScreenState, string> = {
  notification: "assets/Episode2_ScreenStates/phone_notification.svg",
  scrolling: "assets/Episode2_ScreenStates/phone_scrolling.svg",
  appOpen: "assets/Episode2_ScreenStates/phone_app_open.svg",
};

/**
 * The SVG state artwork is deliberately separate from the laptop body.
 * `objectFit: cover` fills the real screen aperture without exposing its edges.
 */
export const Episode2Laptop = ({
  state,
  x,
  y,
  width,
  rotation = 0,
  zIndex = 1,
}: DevicePlacement & { state: LaptopScreenState }) => {
  const height = width * (1000 / 1600);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        zIndex,
        overflow: "visible",
        pointerEvents: "none",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
      }}
    >
      <Img
        src={staticFile("assets/Episode2_Devices/laptop_screen_surface_01.svg")}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          left: "2.125%",
          top: "3.4%",
          width: "95.75%",
          height: "88.8%",
          overflow: "hidden",
          borderRadius: "1.8%",
        }}
      >
        <Img
          src={staticFile(laptopStates[state])}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

/**
 * The phone content is clipped to the supplied phone screen aperture. Scenes
 * only choose a semantic state; they do not need to know an asset filename.
 */
export const Episode2Phone = ({
  state,
  x,
  y,
  width,
  rotation = 0,
  zIndex = 1,
}: DevicePlacement & { state: PhoneScreenState }) => {
  const height = width * 2;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        zIndex,
        overflow: "visible",
        pointerEvents: "none",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
      }}
    >
      <Img
        src={staticFile("assets/Episode2_Devices/phone_surface_01.svg")}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          left: "4%",
          top: "2%",
          width: "92%",
          height: "96%",
          overflow: "hidden",
          borderRadius: "9%",
        }}
      >
        <Img
          src={staticFile(phoneStates[state])}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "36.67%",
          top: "3.5%",
          width: "26.67%",
          height: "3.5%",
          borderRadius: "999px",
          backgroundColor: "#05070a",
        }}
      />
    </div>
  );
};
