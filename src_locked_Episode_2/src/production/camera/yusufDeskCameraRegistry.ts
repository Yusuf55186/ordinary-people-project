import type { CameraProps } from "../../components/Camera";

export type YusufDeskCameraId =
  | "camera.yusuf-desk.wide.v1"
  | "camera.yusuf-desk.phone-close.v1";

type YusufDeskCamera = Omit<CameraProps, "children">;

/**
 * Reuse only framings proven in Episode 2. Camera motion remains a scene-level
 * creative decision and may interpolate between these resolved endpoints.
 */
export const yusufDeskCameraRegistry = {
  "camera.yusuf-desk.wide.v1": { x: 0, y: 0, scale: 1 },
  "camera.yusuf-desk.phone-close.v1": { x: 60, y: 20, scale: 1.5 },
} as const satisfies Record<YusufDeskCameraId, YusufDeskCamera>;

export const resolveYusufDeskCamera = (cameraId: YusufDeskCameraId) =>
  yusufDeskCameraRegistry[cameraId];
