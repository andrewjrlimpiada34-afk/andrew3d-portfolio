import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white/85 px-5 py-4 shadow-xl backdrop-blur">
        <div className="w-14 h-14 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-sm font-semibold text-slate-800">
          Loading...
        </p>
        <p className="text-xs text-slate-500">
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
