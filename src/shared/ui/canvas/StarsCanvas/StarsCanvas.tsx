import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import {
  PointMaterial,
  Points as PointsCanvas,
  Preload,
} from "@react-three/drei";
import { random } from "maath";
import { BufferGeometry, NormalBufferAttributes, Points } from "three";

const Stars = () => {
  const ref = useRef<Points<BufferGeometry<NormalBufferAttributes>>>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <PointsCanvas
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </PointsCanvas>
    </group>
  );
};
export const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
