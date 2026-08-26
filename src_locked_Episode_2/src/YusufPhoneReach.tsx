import { Episode2Phone, PhoneScreenState } from "./components/Episode2DeviceStates";
import { YusufDeskShot } from "./shots/DeskShot";
export const YusufPhoneReach = ({
  phoneState = "notification",
  
}: {

  phoneState: PhoneScreenState;
}) => {
  return (
    <>
    
      

      <YusufDeskShot
        rightArmPose="phonePose"
        rightHandPose="phone"
        heldPhone={
            <Episode2Phone
         state={phoneState}
  x={460}
  y={277}
  width={72}
  rotation={0}
  zIndex={0}
      />
        }
      />
    </>
  );
};