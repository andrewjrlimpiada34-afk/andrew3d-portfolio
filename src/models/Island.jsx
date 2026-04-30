import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import marinduqueScene from "../assets/3d/marinduque.glb";

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  onClick,
  ...props
}) {
  const islandRef = useRef();
  const pointerStart = useRef({ x: 0, y: 0 });
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const { viewport } = useThree();
  const { scene } = useGLTF(marinduqueScene);

  const handlePointerDown = (event) => {
    event.stopPropagation();
    setIsRotating(true);
    lastX.current = event.clientX;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    setIsRotating(false);

    const movedX = Math.abs(event.clientX - pointerStart.current.x);
    const movedY = Math.abs(event.clientY - pointerStart.current.y);

    if (movedX < 8 && movedY < 8) {
      onClick?.();
    }
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();

    if (!isRotating || !islandRef.current) {
      return;
    }

    const delta = (event.clientX - lastX.current) / viewport.width;

    islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = event.clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
  };

  const handleKeyDown = (event) => {
    if (!islandRef.current) {
      return;
    }

    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isRotating]);

  useFrame(() => {
    if (!islandRef.current) {
      return;
    }

    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
      return;
    }

    const rotation = islandRef.current.rotation.y;
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  return (
    <a.group
      ref={islandRef}
      {...props}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setIsRotating(false)}
      onPointerMissed={() => setIsRotating(false)}
    >
      <primitive object={scene} />
    </a.group>
  );
}

useGLTF.preload(marinduqueScene);
