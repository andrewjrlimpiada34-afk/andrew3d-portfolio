import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import fireflyScene from "../assets/3d/firefly.glb";

export function Firefly({ isAnimated }) {
  const fireflyRef = useRef();
  const { scene, animations } = useGLTF(fireflyScene);
  const { actions } = useAnimations(animations, fireflyRef);

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
    if (!fireflyRef.current || !isAnimated) {
      return;
    }

    // Firefly flies in a similar pattern to butterfly but with slight variations
    fireflyRef.current.position.y = Math.sin(clock.elapsedTime * 1.8) * 0.35 + 2.2;

    if (fireflyRef.current.position.x > camera.position.x + 8) {
      fireflyRef.current.rotation.y = Math.PI;
    } else if (fireflyRef.current.position.x < camera.position.x - 8) {
      fireflyRef.current.rotation.y = 0;
    }

    const direction = fireflyRef.current.rotation.y === 0 ? 1 : -1;
    fireflyRef.current.position.x += direction * delta * 1.2;
    fireflyRef.current.position.z -= direction * delta * 0.9;
    fireflyRef.current.rotation.z = Math.sin(clock.elapsedTime * 6) * 0.08;
  });

  return (
    <mesh
      ref={fireflyRef}
      position={[-4, 2.2, 1]}
      scale={[0.015, 0.015, 0.015]}
    >
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload(fireflyScene);
