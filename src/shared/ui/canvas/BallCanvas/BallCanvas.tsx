import { Suspense } from "react";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Technology } from "@/entities/Technology/model/types/technology.ts";

export const BallCanvas = ({ icon, name }: Technology) => {
  return (
    <div className={"flex w-full h-full flex-col gap-4 items-center"}>
      <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} />
          <Ball icon={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
      <p className={"text-white-100"}>{name}</p>
    </div>
  );
};

const Ball = ({ icon }: { icon: string }) => {
  const [decal] = useTexture([icon]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow={true} receiveShadow={true} scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset={true}
          polygonOffsetFactor={-5}
          flatShading={true}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};
