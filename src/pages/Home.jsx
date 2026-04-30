import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";

import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader, SEO } from "../components";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isAnimated, setIsAnimated] = useState(true);
  const [activeModal, setActiveModal] = useState(null);

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
      screenScale = [0.58, 0.58, 0.58];
      screenPosition = [0, -2.55, 0.25];
    } else if (window.innerWidth < 1024) {
      screenScale = [0.7, 0.7, 0.7];
      screenPosition = [0, -2.85, -0.1];
    } else {
      screenScale = [0.82, 0.82, 0.82];
      screenPosition = [0, -3.1, -0.45];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 640) {
      screenScale = [3.15, 3.15, 3.15];
      screenPosition = [0, -1.95, -7.3];
    } else if (window.innerWidth < 1024) {
      screenScale = [3.55, 3.55, 3.55];
      screenPosition = [0, -2.2, -8];
    } else {
      screenScale = [3.9, 3.9, 3.9];
      screenPosition = [0, -2.45, -8.7];
    }

    return [screenScale, screenPosition];
  };

  const [morionScale, morionPosition] = adjustMorionForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  const modalContent = {
    marinduque: {
      title: "Address",
      body: "Address: Paye, Mogpog, Marinduque.",
    },
    morion: {
      title: "Morion Mask",
      body:
        "A symbol of tradition and identity from Marinduque, the Morion mask represents Roman soldiers in the annual Moriones Festival. Each mask is uniquely crafted, reflecting both artistry and cultural heritage.",
    },
  };

  return (
    <section className="w-full h-screen relative">
      <SEO
        title="Andrew B. Limpiada Jr. | Aspiring Computer Engineer"
        description="Portfolio of Andrew B. Limpiada Jr., an aspiring Computer Engineer from Marinduque State College who is passionate about technology, creativity, and continuous learning."
        type="website"
      />
      <div className="absolute top-24 right-4 z-20 sm:right-8">
        <button
          type="button"
          onClick={() => setIsAnimated((prev) => !prev)}
          className="rounded-full bg-white/85 backdrop-blur px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg transition hover:bg-white"
        >
          {isAnimated ? "Pause Scene" : "Play Scene"}
        </button>
      </div>
      <div className="absolute bottom-20 left-1/2 z-20 -translate-x-1/2 px-4 sm:top-24 sm:bottom-auto">
        <p className="rounded-full bg-white/80 backdrop-blur px-4 py-2 text-center text-xs sm:text-sm font-medium text-slate-700 shadow-md">
          Long press each icons to view more info.
        </p>
      </div>
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

          <Bird isAnimated={isAnimated} />
          <Sky isAnimated={isAnimated} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
            onClick={() => setActiveModal("marinduque")}
          />
          <Plane
            isAnimated={isAnimated}
            position={morionPosition}
            rotation={[0, 5.2, 0]}
            scale={morionScale}
            onClick={() => setActiveModal("morion")}
          />
        </Suspense>
      </Canvas>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center bg-black/45 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {modalContent[activeModal].title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {modalContent[activeModal].body}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="text-2xl leading-none text-slate-500 hover:text-slate-900"
                  aria-label="Close modal"
                >
                  x
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
