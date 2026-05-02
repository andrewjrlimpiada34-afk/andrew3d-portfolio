import { useRef, useEffect } from "react";
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

    // Firefly hovers with subtle vertical movement
    fireflyRef.current.position.y = Math.sin(clock.elapsedTime * 1.5) * 0.25 + 2.8;

    // Fly across the scene from left to right
    if (fireflyRef.current.position.x > camera.position.x + 10) {
      fireflyRef.current.position.x = camera.position.x - 10;
    }
    fireflyRef.current.position.x += delta * 1.5;
    
    // Subtle back and forth movement in z axis
    fireflyRef.current.position.z = Math.sin(clock.elapsedTime * 0.8) * 0.5 + 2;
    
    // Rotation based on movement direction
    fireflyRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.2;
    fireflyRef.current.rotation.z = Math.sin(clock.elapsedTime * 3) * 0.08;
  });

  return (
    <mesh
      ref={fireflyRef}
      position={[-6, 2.8, 2]}
      scale={[0.02, 0.02, 0.02]}
    >
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload(fireflyScene);
