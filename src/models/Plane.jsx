import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import morionScene from "../assets/3d/morion.glb";

export function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(morionScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const animationList = Object.values(actions).filter(Boolean);

    if (isRotating) {
      animationList.forEach((action) => action.play());
    } else {
      animationList.forEach((action) => action.stop());
    }
  }, [actions, isRotating]);

  useFrame(({ clock }, delta) => {
    if (!ref.current) {
      return;
    }

    if (isRotating) {
      ref.current.rotation.y += delta * 0.7;
      ref.current.position.y += Math.sin(clock.elapsedTime * 2.2) * delta * 0.12;
      ref.current.rotation.z = Math.sin(clock.elapsedTime * 1.8) * 0.05;
    } else {
      ref.current.rotation.z *= 0.92;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload(morionScene);
