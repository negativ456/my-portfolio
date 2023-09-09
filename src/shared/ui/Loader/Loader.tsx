import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className={"canvas-loader"}></span>
      <p className={"text-[#f1f1f1] font-bold my-[40px]"}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
