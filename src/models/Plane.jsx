import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import morionScene from "../assets/3d/morion.glb";

export function Plane({ isAnimated, onClick, ...props }) {
  const ref = useRef();
  const pointerStart = useRef({ x: 0, y: 0 });
  const { scene, animations } = useGLTF(morionScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const animationList = Object.values(actions).filter(Boolean);

    if (isAnimated) {
      animationList.forEach((action) => action.play());
    } else {
      animationList.forEach((action) => action.stop());
    }
  }, [actions, isAnimated]);

  useFrame(({ clock }, delta) => {
    if (!ref.current) {
      return;
    }

    if (isAnimated) {
      ref.current.rotation.y += delta * 0.7;
      ref.current.position.y += Math.sin(clock.elapsedTime * 2.2) * delta * 0.12;
      ref.current.rotation.z = Math.sin(clock.elapsedTime * 1.8) * 0.05;
    } else {
      ref.current.rotation.z *= 0.92;
    }
  });

  const handlePointerDown = (event) => {
    event.stopPropagation();
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    const movedX = Math.abs(event.clientX - pointerStart.current.x);
    const movedY = Math.abs(event.clientY - pointerStart.current.y);

    if (movedX < 8 && movedY < 8) {
      onClick?.();
    }
  };

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload(morionScene);
