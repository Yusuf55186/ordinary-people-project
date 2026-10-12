// Shared by both street scenes. Frames match the existing 60fps composition.
export const SCENE_1_DURATION = 430;
export const YUSUF_GROUND_Y = 1050;
export const WALK_CYCLE_FRAMES = 35;
export const SLOW_START = 55;
export const STOP_FRAME = 115;

// Integrated velocity: continuous phase and travel, including when scrubbing.
export const getTravelDistance = (frame: number): number => {
  const FrameSinceSlowdownStarted = Math.max(0, Math.min(frame - SLOW_START, STOP_FRAME - SLOW_START));
  return Math.max(0, Math.min(frame, SLOW_START)) + FrameSinceSlowdownStarted
    - FrameSinceSlowdownStarted * FrameSinceSlowdownStarted / (2 * (STOP_FRAME - SLOW_START));
};

export const getWalkStrength = (frame: number): number => {
  const slowDownProgress = Math.max(0, Math.min(1, (frame - SLOW_START) / (STOP_FRAME - SLOW_START)));
  return 1 - slowDownProgress * slowDownProgress * (3 - 2 * slowDownProgress);
};

export const getStreetPlacement = (distance: number) => ({
  x: 420 - 170 * distance / SCENE_1_DURATION,
  y: 420 + 115 * distance / SCENE_1_DURATION,
  scale: 0.38 + 0.12 * distance / SCENE_1_DURATION ,
});
export const MAX_APPROACH_PROGRESS = 
getTravelDistance(STOP_FRAME);
export const getApproachProgress = (frame:number) => 
  getTravelDistance(frame) / MAX_APPROACH_PROGRESS;
export const SCENE_1_END_STREET_PLACEMENT = getStreetPlacement(
  getTravelDistance(SCENE_1_DURATION - 1)
)
export const SCENE_1_END = getTravelDistance(SCENE_1_DURATION - 1)

export const getScene1StreetTransform = (frame:number) => {
  const distance = getTravelDistance(frame);

  return {
    x: -18,
    y: -8 + 43 * distance / SCENE_1_DURATION,
    scale:1.01 + 0.065 * distance / SCENE_1_DURATION
  };
};
export const SCENE_1_END_STREET =
  getScene1StreetTransform(SCENE_1_DURATION - 1);