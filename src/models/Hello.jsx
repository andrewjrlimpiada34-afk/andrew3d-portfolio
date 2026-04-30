import { useGLTF } from "@react-three/drei";

import helloScene from "../assets/3d/hello.glb";

export function Hello(props) {
  const { scene } = useGLTF(helloScene);

  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(helloScene);
