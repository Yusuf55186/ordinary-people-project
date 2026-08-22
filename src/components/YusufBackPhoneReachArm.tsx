
type Props = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rotation?: number;
  handPose?:"grab" | "phone"
  elbowRotation:number
};

export const YusufBackPhoneReachArm = ({
  x = 0,
  y = 0,
  width = 129,
  height = 104,
  rotation = 0,
  elbowRotation= 0
  
  
}: Props) => {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 128.98 103.95"
      overflow="visible"
      transform={`rotate(${rotation} ${x} ${y})`}
    >
      <polyline
        id="UPPERARM_x5F_BACK_x5F_PHONE_x5F_REACH"
        fill="#0053d4"
        stroke="#1b0000"
        strokeWidth={2}
        strokeLinejoin="round"
        points="45.28 80.7 8.57 46.45 6.95 14.88 70.51 56.11"
        
      />
      <g transform={`rotate(${elbowRotation} 70.3 56)`}>
      <path
        id="FOREARM_x5F_BACK_x5F_PHONE_x5F_REACH"
        
        fill="#0053d4"
        stroke="#1b0000"
        strokeWidth={2}
        strokeLinejoin="round"
        d="M70.2,55.93l53.29,24.56s3.61,6.33-4.45,15.28l-74.01-15.25"
      />
      <circle
  id="PHONE_REACH_ELBOW_UNDERLAY"
  cx={58}
  cy={68}
  r={16}
  fill="#0053d4"
  
/>
      </g>
    </svg>
  );
};