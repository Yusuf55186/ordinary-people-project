import { Episode3SceneKey, getSceneCameraPlacement, getSceneLastFrame, getStreetPlacement, getTravelDistance, StreetTransform,EPISODE3_SCENES } from "./episode3StreetMotion";

export type Episode3SceneState = {
  placement: {
    x: number;
    y: number;
    scale: number;
  };

  street: {
    x: number;
    y: number;
    scale: number;
  };

  camera: {
    x: number;
    y: number;
    scale: number;
  };

  walkPhase: number;

  groundBend?: number;
};
export const DEFAULT_SCENE_STATE:Episode3SceneState = {
    placement : {
        x : 0,
        y : 0,
        scale : 1,
    },
    street: {
        x : 0,
        y : 0,
        scale : 1,
    },
    camera : {
        x : 0,
        y : 0,
        scale : 1,
    },
    walkPhase : 0,

    groundBend: 0,
}
export const getSceneEndState = (
    scene:Episode3SceneKey
): Episode3SceneState => {

    //Yusuf Placement
    const lastFrame = getSceneLastFrame(scene);
    const travelDistance = getTravelDistance(lastFrame);//Last frame
    const placement = getStreetPlacement(travelDistance);
    
    //street Transform
    const street = StreetTransform(lastFrame);

    //Camera Placement
    const camera = getSceneCameraPlacement(placement)

    const sceneKeys = Object.keys(EPISODE3_SCENES) as Episode3SceneKey[] //Convert Object to Array;
    const sceneIndex = sceneKeys.indexOf(scene) //Indexing Scenes;
    const startWalkPhase = sceneKeys.slice(0,sceneIndex).reduce(
    (total, key) => total + EPISODE3_SCENES[key].duration,
    0
  );
  const walkPhase = startWalkPhase + lastFrame;
  const groundBend = 0

  return {
    placement,
    camera,
    street,
    walkPhase,
    groundBend,
  }
};