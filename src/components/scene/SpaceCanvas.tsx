"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";
import { usePortfolioMotion } from "@/context/MotionContext";

function CrystalRig({ reduceMotion }: { reduceMotion: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const crystal = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const { pointer, camera } = useThree();

  useFrame((_, delta) => {
    if (!rig.current || !crystal.current || !ringA.current || !ringB.current) return;

    const viewport = typeof window === "undefined" ? 1 : Math.max(window.innerHeight, 1);
    const scroll = typeof window === "undefined" ? 0 : window.scrollY / viewport;
    const heroExit = THREE.MathUtils.clamp(scroll, 0, 1.4);

    const targetX = 2.15 - heroExit * 0.5;
    const targetY = 0.25 + heroExit * 0.85;
    const targetScale = 1 - heroExit * 0.34;

    rig.current.position.x = THREE.MathUtils.lerp(rig.current.position.x, targetX, 0.045);
    rig.current.position.y = THREE.MathUtils.lerp(rig.current.position.y, targetY, 0.045);
    rig.current.scale.setScalar(THREE.MathUtils.lerp(rig.current.scale.x, targetScale, 0.045));

    if (!reduceMotion) {
      crystal.current.rotation.y += delta * 0.18;
      crystal.current.rotation.x = THREE.MathUtils.lerp(
        crystal.current.rotation.x,
        pointer.y * -0.3 + scroll * 0.04,
        0.035
      );
      crystal.current.rotation.z = THREE.MathUtils.lerp(
        crystal.current.rotation.z,
        pointer.x * 0.16,
        0.035
      );

      ringA.current.rotation.z += delta * 0.14;
      ringB.current.rotation.x -= delta * 0.11;

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.28, 0.025);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.2 - pointer.y * 0.2, 0.025);
    }

    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7.1 + Math.min(scroll, 6) * 0.14, 0.02);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={rig} position={[2.15, 0.25, 0]}>
      <Float speed={reduceMotion ? 0 : 1.2} rotationIntensity={0.18} floatIntensity={0.28}>
        <group>
          <mesh ref={crystal}>
            <octahedronGeometry args={[1.28, 0]} />
            <meshPhysicalMaterial
              color="#6ef7ff"
              emissive="#043f4a"
              emissiveIntensity={0.42}
              metalness={0.08}
              roughness={0.08}
              transmission={0.7}
              thickness={1.15}
              ior={1.45}
              transparent
              opacity={0.78}
              clearcoat={1}
              clearcoatRoughness={0.08}
            />
          </mesh>

          <mesh scale={1.02}>
            <octahedronGeometry args={[1.28, 0]} />
            <meshBasicMaterial color="#b8fbff" wireframe transparent opacity={0.34} />
          </mesh>

          <mesh ref={ringA} rotation={[1.08, 0.2, 0.2]}>
            <torusGeometry args={[1.78, 0.012, 10, 180]} />
            <meshBasicMaterial color="#2de8ff" transparent opacity={0.55} />
          </mesh>

          <mesh ref={ringB} rotation={[0.25, 0.2, 1.2]}>
            <torusGeometry args={[2.02, 0.008, 10, 180]} />
            <meshBasicMaterial color="#a855f7" transparent opacity={0.35} />
          </mesh>
        </group>
      </Float>

      <Sparkles
        count={reduceMotion ? 24 : 80}
        scale={[4.6, 4.6, 3.4]}
        size={1.5}
        speed={reduceMotion ? 0 : 0.35}
        opacity={0.55}
        color="#7df9ff"
      />
    </group>
  );
}

function PlanetField({ reduceMotion }: { reduceMotion: boolean }) {
  const planet = useRef<THREE.Mesh>(null);
  const moon = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (planet.current && !reduceMotion) planet.current.rotation.y += delta * 0.012;
    if (moon.current && !reduceMotion) moon.current.rotation.y -= delta * 0.024;
  });

  return (
    <>
      <mesh ref={planet} position={[6.8, 1.4, -10]} scale={5.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#071a2b"
          roughness={0.86}
          metalness={0.05}
          emissive="#04111f"
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh position={[6.1, 2.2, -4.7]} rotation={[0.7, 0.1, 0.45]}>
        <torusGeometry args={[2.25, 0.045, 12, 180]} />
        <meshBasicMaterial color="#1cc8e8" transparent opacity={0.18} />
      </mesh>

      <mesh ref={moon} position={[-5.5, -0.4, -8]} scale={1.35}>
        <sphereGeometry args={[1, 40, 40]} />
        <meshStandardMaterial color="#0b1624" roughness={1} />
      </mesh>
    </>
  );
}

function Scene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <>
      <fog attach="fog" args={["#02050a", 8, 27]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#a9fbff" />
      <pointLight position={[1.5, 0.8, 2]} intensity={13} distance={8} color="#12e5ff" />
      <pointLight position={[-3, 2, -1]} intensity={7} distance={8} color="#7c3aed" />

      <Stars radius={45} depth={28} count={reduceMotion ? 700 : 1800} factor={2.5} saturation={0} fade speed={reduceMotion ? 0 : 0.25} />
      <PlanetField reduceMotion={reduceMotion} />
      <CrystalRig reduceMotion={reduceMotion} />

      <gridHelper
        args={[44, 44, "#0c8ba0", "#0a1824"]}
        position={[0, -3.25, -3]}
        rotation={[0, 0, 0]}
      />
    </>
  );
}

export default function SpaceCanvas() {
  const { reduceMotion } = usePortfolioMotion();

  return (
    <Canvas
      camera={{ position: [0, 0.2, 7.1], fov: 48, near: 0.1, far: 80 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Scene reduceMotion={reduceMotion} />
    </Canvas>
  );
}
