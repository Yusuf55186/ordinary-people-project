// Shared by both street scenes. Frames match the existing 60fps composition.
export const SCENE_1_DURATION = 430;
export const YUSUF_GROUND_Y = 1050;
export const WALK_CYCLE_FRAMES = 60;
export const SLOW_START = 55;
export const STOP_FRAME = 115;

// Integrated velocity: continuous phase and travel, including when scrubbing.
export const getApproachProgress = (frame: number): number => {
  const FrameSinceSlowdownStarted = Math.max(0, Math.min(frame - SLOW_START, STOP_FRAME - SLOW_START));
  return Math.max(0, Math.min(frame, SLOW_START)) + FrameSinceSlowdownStarted
    - FrameSinceSlowdownStarted * FrameSinceSlowdownStarted / (2 * (STOP_FRAME - SLOW_START));
};

export const getWalkStrength = (frame: number): number => {
  const slowDownProgress = Math.max(0, Math.min(1, (frame - SLOW_START) / (STOP_FRAME - SLOW_START)));
  return 1 - slowDownProgress * slowDownProgress * (3 - 2 * slowDownProgress);
};

export const getStreetPlacement = (progress: number) => ({
  x: 420 - 170 * progress / SCENE_1_DURATION,
  y: 420 + 80 * progress / SCENE_1_DURATION,
  scale: 0.38 + 0.12 * progress / SCENE_1_DURATION,
});
