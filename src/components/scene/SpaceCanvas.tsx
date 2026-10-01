"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
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
    <Float speed={speed} rotationIntensity={0.24} floatIntensity={0.35}>
      <group position={position} rotation={rotation}>{children}</group>
    </Float>
  );
}

function Studio({ reduceMotion, dark }: { reduceMotion: boolean; dark: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const { pointer, camera } = useThree();

  useFrame(() => {
    if (!rig.current || reduceMotion) return;

    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, pointer.x * 0.055, 0.022);
    rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, pointer.y * -0.035, 0.022);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.12, 0.018);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * -0.08, 0.018);
    camera.lookAt(0, 0, 0);
  });

  const glass = dark ? "#8ecfff" : "#d9f2ff";
  const violet = dark ? "#9a78ff" : "#b596ff";
  const peach = dark ? "#d08c78" : "#f3b8a5";
  const mint = dark ? "#75bfa6" : "#a6e0ca";

  return (
    <>
      <ambientLight intensity={dark ? 1.45 : 2.2} />
      <directionalLight position={[3, 5, 5]} intensity={dark ? 2.4 : 3.4} color="#ffffff" />
      <pointLight position={[-2, 1, 3]} intensity={dark ? 4.5 : 3.4} color={violet} />

      <group ref={rig}>
        <MaterialObject position={[0.7, 0.65, 0.2]} rotation={[0.3, 0.5, 0.1]} speed={reduceMotion ? 0 : 0.85}>
          <mesh>
            <torusGeometry args={[0.78, 0.22, 28, 54]} />
            <meshStandardMaterial color={peach} roughness={0.28} metalness={0.03} />
          </mesh>
        </MaterialObject>

        <MaterialObject position={[-0.55, -0.25, 0.65]} speed={reduceMotion ? 0 : 0.75}>
          <mesh>
            <sphereGeometry args={[0.62, 32, 32]} />
            <meshPhysicalMaterial
              color={glass}
              roughness={0.12}
              transmission={0.28}
              transparent
              opacity={0.78}
              thickness={0.45}
            />
          </mesh>
        </MaterialObject>

        <MaterialObject position={[1.65, -0.55, -0.15]} rotation={[0.15, 0.2, -0.25]} speed={reduceMotion ? 0 : 0.7}>
          <mesh>
            <cylinderGeometry args={[0.45, 0.45, 1.15, 28]} />
            <meshStandardMaterial color={violet} roughness={0.34} />
          </mesh>
        </MaterialObject>

        <MaterialObject position={[-1.55, 0.65, -0.35]} rotation={[0.2, -0.35, 0.2]} speed={reduceMotion ? 0 : 0.8}>
          <mesh>
            <dodecahedronGeometry args={[0.52, 0]} />
            <meshStandardMaterial color={mint} roughness={0.4} />
          </mesh>
        </MaterialObject>
      </group>
    </>
  );
}

export default function SpaceCanvas({ active = true }: { active?: boolean }) {
  const { reduceMotion } = usePortfolioMotion();
  const { theme } = usePortfolioTheme();

  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 46, near: 0.1, far: 40 }}
      dpr={[1, 1.2]}
      frameloop={active && !reduceMotion ? "always" : "demand"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Studio reduceMotion={reduceMotion} dark={theme === "dark"} />
    </Canvas>
  );
}
