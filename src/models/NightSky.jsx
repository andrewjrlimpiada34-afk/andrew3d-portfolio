import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import nightScene from "../assets/3d/night.glb";

// Night sky model component for dark mode
export function NightSky({ isAnimated }) {
  const night = useGLTF(nightScene);
  const skyRef = useRef();

  // Smooth rotation animation
  useFrame((_, delta) => {
    if (isAnimated && skyRef.current) {
      skyRef.current.rotation.y += 0.05 * delta; // Slower, calmer rotation
    }
  });

return (
    <mesh ref={skyRef} scale={0.08} position={[0, -1.5, 0]}>
      <primitive object={night.scene} />
    </mesh>
  );
}

useGLTF.preload(nightScene);
