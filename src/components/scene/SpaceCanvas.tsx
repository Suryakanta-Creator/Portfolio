"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { usePortfolioMotion } from "@/context/MotionContext";
import { usePortfolioTheme } from "@/context/ThemeContext";

function MaterialObject({
  children,
  position,
  rotation = [0, 0, 0],
  speed = 1,
}: {
  children: React.ReactNode;
  position: [number, number, number];
  rotation?: [number, number, number];
  speed?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.35} floatIntensity={0.55}>
      <group position={position} rotation={rotation}>{children}</group>
    </Float>
  );
}

function Studio({ reduceMotion, dark }: { reduceMotion: boolean; dark: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const { pointer, camera } = useThree();

  useFrame((_, delta) => {
    if (!rig.current) return;
    const scroll = typeof window === "undefined" ? 0 : window.scrollY / Math.max(window.innerHeight, 1);

    if (!reduceMotion) {
      rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, pointer.x * 0.08, 0.025);
      rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, pointer.y * -0.045, 0.025);
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.18, 0.02);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * -0.12, 0.02);
      rig.current.rotation.z += Math.sin(delta) * 0.00004;
    }

    rig.current.position.y = THREE.MathUtils.lerp(rig.current.position.y, Math.min(scroll, 1.3) * 0.22, 0.025);
    camera.lookAt(0, 0, 0);
  });

  const glass = dark ? "#8ecfff" : "#d9f2ff";
  const violet = dark ? "#9a78ff" : "#b596ff";
  const peach = dark ? "#d08c78" : "#f3b8a5";
  const mint = dark ? "#75bfa6" : "#a6e0ca";

  return (
    <>
      <ambientLight intensity={dark ? 1.7 : 2.8} />
      <directionalLight position={[3, 5, 5]} intensity={dark ? 3 : 4.5} color="#ffffff" />
      <pointLight position={[-2, 1, 3]} intensity={dark ? 7 : 5} color={violet} />

      <group ref={rig}>
        <MaterialObject position={[0.7, 0.65, 0.2]} rotation={[0.3, 0.5, 0.1]} speed={reduceMotion ? 0 : 1.2}>
          <mesh>
            <torusGeometry args={[0.78, 0.22, 48, 96]} />
            <meshStandardMaterial color={peach} roughness={0.24} metalness={0.04} />
          </mesh>
        </MaterialObject>

        <MaterialObject position={[-0.55, -0.25, 0.65]} speed={reduceMotion ? 0 : 1.05}>
          <mesh>
            <sphereGeometry args={[0.62, 64, 64]} />
            <MeshTransmissionMaterial
              color={glass}
              transmission={0.96}
              thickness={1}
              roughness={0.08}
              chromaticAberration={0.04}
              ior={1.35}
            />
          </mesh>
        </MaterialObject>

        <MaterialObject position={[1.65, -0.55, -0.15]} rotation={[0.15, 0.2, -0.25]} speed={reduceMotion ? 0 : 0.95}>
          <mesh>
            <cylinderGeometry args={[0.45, 0.45, 1.15, 48]} />
            <meshStandardMaterial color={violet} roughness={0.32} />
          </mesh>
        </MaterialObject>

        <MaterialObject position={[-1.55, 0.65, -0.35]} rotation={[0.2, -0.35, 0.2]} speed={reduceMotion ? 0 : 1.1}>
          <mesh>
            <dodecahedronGeometry args={[0.52, 0]} />
            <meshStandardMaterial color={mint} roughness={0.38} />
          </mesh>
        </MaterialObject>

        <MaterialObject position={[0.05, 1.55, -0.75]} rotation={[0.05, 0.2, 0]} speed={reduceMotion ? 0 : 0.85}>
          <mesh>
            <cylinderGeometry args={[0.34, 0.34, 1.35, 40]} />
            <MeshTransmissionMaterial
              color={glass}
              transmission={0.88}
              thickness={0.85}
              roughness={0.16}
              ior={1.28}
            />
          </mesh>
        </MaterialObject>
      </group>
    </>
  );
}

export default function SpaceCanvas() {
  const { reduceMotion } = usePortfolioMotion();
  const { theme } = usePortfolioTheme();

  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 46, near: 0.1, far: 40 }}
      dpr={[1, 1.45]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Studio reduceMotion={reduceMotion} dark={theme === "dark"} />
    </Canvas>
  );
}
