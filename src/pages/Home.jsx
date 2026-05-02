import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";

import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader, SEO } from "../components";
import { Butterfly, Firefly, Marinduque, Morion, Sky, NightSky } from "../models";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isAnimated, setIsAnimated] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  
  // Theme context
  const { isDarkMode } = useTheme();

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
      title: "My Home",
      body: "Hi, this is my province, Marinduque—a place where every corner tells a story, where traditions are not just remembered but lived, and where the warmth of the people feels like home. From vibrant festivals to serene landscapes, it is an island that quietly captures your heart and leaves a lasting impression.",
    },
    morion: {
      title: "Morion Mask",
      body:
        "A symbol of tradition and identity from Marinduque, the Morion mask represents Roman soldiers in the annual Moriones Festival. Each mask is uniquely crafted, reflecting both artistry and cultural heritage.",
    },
  };

  // Dynamic background based on theme
  const canvasBgClass = isDarkMode ? "bg-gray-900" : "bg-transparent";
  const sceneButtonClass = isDarkMode 
    ? "bg-gray-700/90 text-white hover:bg-gray-600" 
    : "bg-white/85 text-slate-800 hover:bg-white";

  return (
    <section className={`w-full h-screen relative z-0 theme-transition ${isDarkMode ? 'dark-mode-bg' : ''}`}>
      <SEO
        title="Andrew B. Limpiada Jr. | Aspiring Computer Engineer"
        description="Portfolio of Andrew B. Limpiada Jr., an aspiring Computer Engineer from Marinduque State College who is passionate about technology, creativity, and continuous learning."
        type="website"
      />
      <div className="absolute top-24 right-4 z-10 sm:right-8">
        <button
          type="button"
          onClick={() => setIsAnimated((prev) => !prev)}
          className={`rounded-full backdrop-blur px-4 py-2 text-sm font-semibold shadow-lg transition ${sceneButtonClass}`}
        >
          {isAnimated ? "Pause Scene" : "Play Scene"}
        </button>
      </div>
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent z-0 ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        dpr={[1, 1.25]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 10], fov: 45 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Dynamic lighting based on theme */}
          <directionalLight 
            position={[1, 1, 1]} 
            intensity={isDarkMode ? 0.8 : 2} 
          />
          <ambientLight intensity={isDarkMode ? 0.3 : 0.5} />
          <pointLight 
            position={[10, 5, 10]} 
            intensity={isDarkMode ? 0.5 : 2} 
            color={isDarkMode ? "#c0c0c0" : "#ffffff"}
          />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={isDarkMode ? 0.8 : 2}
          />
          <hemisphereLight
            skyColor={isDarkMode ? "#1a1a2e" : "#b1e1ff"}
            groundColor={isDarkMode ? "#0a0a0a" : "#000000"}
            intensity={isDarkMode ? 0.4 : 1}
          />

{/* Sky model - swap between day/night */}
          {isDarkMode ? (
            <>
              <NightSky isAnimated={isAnimated} />
              <Firefly isAnimated={isAnimated} />
            </>
          ) : (
            <Sky isAnimated={isAnimated} />
          )}
          
          {/* Hide these models in dark mode */}
          {!isDarkMode && (
            <>
              <Butterfly isAnimated={isAnimated} />
              <Marinduque
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                position={islandPosition}
                rotation={[0.1, 4.7077, 0]}
                scale={islandScale}
                onClick={() => setActiveModal("marinduque")}
              />
              <Morion
                isAnimated={isAnimated}
                position={morionPosition}
                rotation={[0, 5.2, 0]}
                scale={morionScale}
                onClick={() => setActiveModal("morion")}
              />
            </>
          )}
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
              className={`w-full max-w-md rounded-2xl p-6 shadow-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`text-xl font-bold ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {modalContent[activeModal].title}
                  </h3>
                  <p className={`mt-3 leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-slate-600"
                  }`}>
                    {modalContent[activeModal].body}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className={`text-2xl leading-none hover:text-slate-900 ${
                    isDarkMode ? "text-gray-400 hover:text-white" : "text-slate-500"
                  }`}
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
