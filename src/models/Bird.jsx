import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import butterflyScene from "../assets/3d/butterfly.glb";

export function Bird({ isAnimated }) {
  const butterflyRef = useRef();
  const { scene, animations } = useGLTF(butterflyScene);
  const { actions } = useAnimations(animations, butterflyRef);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (!action) return;
      if (isAnimated) {
        action.play();
      } else {
        action.stop();
      }
    });
  }, [actions, isAnimated]);

  useFrame(({ clock, camera }, delta) => {
    if (!butterflyRef.current || !isAnimated) {
      return;
    }

    butterflyRef.current.position.y = Math.sin(clock.elapsedTime * 1.8) * 0.35 + 2.2;

    if (butterflyRef.current.position.x > camera.position.x + 8) {
      butterflyRef.current.rotation.y = Math.PI;
    } else if (butterflyRef.current.position.x < camera.position.x - 8) {
      butterflyRef.current.rotation.y = 0;
    }

    const direction = butterflyRef.current.rotation.y === 0 ? 1 : -1;
    butterflyRef.current.position.x += direction * delta * 1.2;
    butterflyRef.current.position.z -= direction * delta * 0.9;
    butterflyRef.current.rotation.z = Math.sin(clock.elapsedTime * 6) * 0.08;
  });

  return (
    <mesh
      ref={butterflyRef}
      position={[-4, 2.2, 1]}
      scale={[0.1, 0.1, 0.1]}
    >
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload(butterflyScene);
