// src/integrations/YusufDeskIntegration.tsx
import type { ReactNode } from "react";
import { YusufRoom, YusufRoomDeskForeground } from "../../scenes/rooms/YusufRoom";
import { YusufBackCharacter, type YusufBackCharacterProps } from "../../YusufBackCharacter";
import { SceneMaster } from "..//..//scenes/sceneCharacter";

type YusufDeskIntegrationProps = {
  pose: YusufBackCharacterProps;
  heldPhone?: ReactNode;
  foregroundChildren?: ReactNode;
};

export const YusufDeskIntegration = ({
  pose,
  heldPhone,
  foregroundChildren,
}: YusufDeskIntegrationProps) => {
  return (
    <>
      {/* 1. Back room layer */}
      <YusufRoom />

      {/* 2. Yusuf lives at a stable location in this room */}
      <SceneMaster
        x={858}
        y={343}
        width={500}
        scale={0.75}
        integration={{
            contactShadow:true,
            rimLight:"window",
            keyLight:"deskLamp",
            ambientLight:"room"
        }}
      >
        {heldPhone}
        

        <YusufBackCharacter
          {...pose}
          lowerBodyPose="deskSeated"
        />
      </SceneMaster>

      {/* 3. Objects that must cover Yusuf */}
      <YusufRoomDeskForeground />

      {/* 4. Cursor, phone UI, etc. that must be above desk */}
      {foregroundChildren}
    </>
  );
};