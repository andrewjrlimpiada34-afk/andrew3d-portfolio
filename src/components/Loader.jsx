import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const Loader = () => {
  const { progress } = useProgress();
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "These may take a while",
    "You can still access my portfolio instead of waiting",
    "Get to know me!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white/85 px-5 py-4 shadow-xl backdrop-blur">
        <div className="w-14 h-14 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-sm font-semibold text-slate-800">
          Loading...
        </p>
        <p className="text-xs text-slate-500 mt-2 text-center min-h-[20px] transition-opacity duration-500">
          {messages[messageIndex]}
        </p>
        <p className="text-xs text-slate-400 mt-1">
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
