import { interpolate } from "remotion";

export const EPISODE3_SCENES = {
  scene1: { duration: 430 },
  scene2: { duration: 680 },
  scene3: { duration: 1020 },
  scene4: { duration: 300 },
  scene5: {duration:  1070},
  scene6: {duration: 1040},
  scene7: {duration: 1000},
} as const;

export type Episode3SceneKey =
  keyof typeof EPISODE3_SCENES;

export const getSceneDuration = (
  scene: Episode3SceneKey
) => EPISODE3_SCENES[scene].duration;

export const getSceneLastFrame = (
  scene: Episode3SceneKey
) => getSceneDuration(scene) - 1;


export const YUSUF_GROUND_Y = 1050;
export const WALK_CYCLE_FRAMES = 35;

export const SLOW_START = 55;
export const STOP_FRAME = 115;


export const getTravelDistance = (
  frame: number
): number => {
  const framesSinceSlowdownStarted = Math.max(
    0,
    Math.min(
      frame - SLOW_START,
      STOP_FRAME - SLOW_START
    )
  );

  return (
    Math.max(0, Math.min(frame, SLOW_START)) +
    framesSinceSlowdownStarted -
    (
      framesSinceSlowdownStarted *
      framesSinceSlowdownStarted
    ) /
      (2 * (STOP_FRAME - SLOW_START))
  );
};


export const MAX_APPROACH_DISTANCE =
  getTravelDistance(STOP_FRAME);

export const getApproachProgress = (
  frame: number
) =>
  getTravelDistance(frame) /
  MAX_APPROACH_DISTANCE;


export const getWalkStrength = (
  frame: number
): number => {
  const slowDownProgress = Math.max(
    0,
    Math.min(
      1,
      (frame - SLOW_START) /
        (STOP_FRAME - SLOW_START)
    )
  );

  return (
    1 -
    slowDownProgress *
      slowDownProgress *
      (3 - 2 * slowDownProgress)
  );
};


export const getStreetPlacement = (
  distance: number
) => ({
  x:
    420 -
    (170 * distance) /
      getSceneLastFrame("scene1"),

  y:
    420 +
    (115 * distance) /
      getSceneLastFrame("scene1"),

  scale:
    0.38 +
    (0.12 * distance) /
      getSceneLastFrame("scene1"),
});


export const getSceneEndState = (
  scene: Episode3SceneKey
) => {
  const lastFrame =
    getSceneLastFrame(scene);

  const distance =
    getTravelDistance(lastFrame);

  return {
    lastFrame,
    distance,
    placement:
      getStreetPlacement(distance),
  };
};


  export const getScene1CameraPlacement = (
  placement: { x: number; y: number }
) => ({
  x: interpolate(
    placement.x,
    [250, 420],
    [300, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  ),

  y: interpolate(
    placement.y,
    [420, 500],
    [0, 60],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  ),

  scale: 1.1,
});
export const SCENE_2_CAMERA_END = {
  x:20,
  y:70,
  scale:1.35,
}
export const FINAL_CAMERA_Scene_1 = 
getScene1CameraPlacement(
  getStreetPlacement(getSceneLastFrame("scene1"))
)
export const StreetTransform = (frame:number) => {
const distance = getTravelDistance(frame);
return {
  x:-18,

  y: -8 * 
  (43 * distance) /
  getSceneLastFrame("scene1"),

  scale: 1.01
  + (0.065 * distance) /
  getSceneLastFrame("scene1")
}
}