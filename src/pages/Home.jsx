import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader, SEO } from "../components";
import { Bird, Hello, Island, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustMorionForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 640) {
      screenScale = [0.75, 0.75, 0.75];
      screenPosition = [1.6, -1.9, 0.6];
    } else if (window.innerWidth < 1024) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [2.1, -2.1, 0.2];
    } else {
      screenScale = [1.05, 1.05, 1.05];
      screenPosition = [2.5, -2.35, -0.2];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 640) {
      screenScale = [2.4, 2.4, 2.4];
      screenPosition = [0, -2.25, -7.4];
    } else if (window.innerWidth < 1024) {
      screenScale = [2.8, 2.8, 2.8];
      screenPosition = [0, -2.55, -8.1];
    } else {
      screenScale = [3.1, 3.1, 3.1];
      screenPosition = [0, -2.8, -8.8];
    }

    return [screenScale, screenPosition];
  };

  const adjustHelloForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 640) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, 1.15, -6.8];
    } else if (window.innerWidth < 1024) {
      screenScale = [1.05, 1.05, 1.05];
      screenPosition = [0, 1.3, -7.5];
    } else {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, 1.45, -8.1];
    }

    return [screenScale, screenPosition];
  };

  const [morionScale, morionPosition] = adjustMorionForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [helloScale, helloPosition] = adjustHelloForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <SEO
        title="Andrew B. Limpiada Jr. | Aspiring Computer Engineer"
        description="Portfolio of Andrew B. Limpiada Jr., an aspiring Computer Engineer from Marinduque State College who is passionate about technology, creativity, and continuous learning."
        type="website"
      />
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        dpr={[1, 1.25]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 10], fov: 45 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Hello
            position={helloPosition}
            rotation={[0.05, 0, 0]}
            scale={helloScale}
          />
          <Plane
            isRotating={isRotating}
            position={morionPosition}
            rotation={[0, 5.2, 0]}
            scale={morionScale}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
