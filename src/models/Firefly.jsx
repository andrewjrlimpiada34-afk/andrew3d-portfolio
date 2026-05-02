import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import fireflyScene from "../assets/3d/firefly.glb";

export function Firefly({ isAnimated }) {
  const fireflyRef = useRef();
  const { scene } = useGLTF(fireflyScene);

  useFrame(({ clock }, delta) => {
    if (!fireflyRef.current || !isAnimated) {
      return;
    }

    // Firefly hovers and flies slowly in a circular pattern
    const time = clock.elapsedTime;
    fireflyRef.current.position.y = Math.sin(time * 1.5) * 0.3 + 2.5;
    fireflyRef.current.position.x = Math.sin(time * 0.8) * 2 - 2;
    fireflyRef.current.position.z = Math.cos(time * 0.8) * 1 + 1;
    
    // Slight rotation as it flies
    fireflyRef.current.rotation.y = Math.sin(time * 0.5) * 0.3;
    fireflyRef.current.rotation.z = Math.sin(time * 3) * 0.1;
  });

return (
    <primitive
      object={scene.clone()}
      ref={fireflyRef}
      position={[-2, 2.5, 2]}
      scale={[0.15, 0.15, 0.15]}
      rotation={[0, 0, 0]}
    />
  );
}

useGLTF.preload(fireflyScene);
