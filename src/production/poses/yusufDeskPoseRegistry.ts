import type { HandPose } from "../../components/BackHandPose";

export type YusufDeskPoseId =
  | "pose.yusuf.back.desk.rest.v1"
  | "pose.yusuf.back.desk.typing.v1"
  | "pose.yusuf.back.desk.phone-hold.v1";

export type YusufDeskPose = {
  yusufMode: "rest" | "typing";
  typingToRestProgress: number;
  phoneReachProgress: number;
  phoneHoldProgress: number;
  rightArmPose: "rest" | "phonePose";
  rightHandPose?: HandPose;
};

/**
 * Director-facing, stable pose names for the proven Yusuf desk states.
 * Keep per-line performance offsets and timing inside the scene.
 */
export const yusufDeskPoseRegistry = {
  "pose.yusuf.back.desk.rest.v1": {
    yusufMode: "rest",
    typingToRestProgress: 0,
    phoneReachProgress: 0,
    phoneHoldProgress: 0,
    rightArmPose: "rest",
  },
  "pose.yusuf.back.desk.typing.v1": {
    yusufMode: "typing",
    typingToRestProgress: 0,
    phoneReachProgress: 0,
    phoneHoldProgress: 0,
    rightArmPose: "rest",
  },
  "pose.yusuf.back.desk.phone-hold.v1": {
    yusufMode: "typing",
    typingToRestProgress: 1,
    phoneReachProgress: 1,
    phoneHoldProgress: 1,
    rightArmPose: "phonePose",
    rightHandPose: "phone",
  },
} as const satisfies Record<YusufDeskPoseId, YusufDeskPose>;

export const resolveYusufDeskPose = (poseId?: YusufDeskPoseId): YusufDeskPose =>
  yusufDeskPoseRegistry[poseId ?? "pose.yusuf.back.desk.rest.v1"];
