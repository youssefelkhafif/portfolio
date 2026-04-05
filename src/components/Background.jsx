import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

// 🪐 Planet
function Planet({ position, color }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.6) * 0.2;
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.6, 32, 22]} />
      <meshStandardMaterial color={color} roughness={0.9} />
    </mesh>
  );
}

// 🪨 Asteroid
function Asteroid({ position }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.x += 1.003;
    ref.current.rotation.y += 1.002;
    ref.current.position.y = position[1] + Math.sin(t) * 0.15;
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.25, 1]} />
      <meshStandardMaterial color="#5a4530" />
    </mesh>
  );
}

// 🌑 Moon
function Moon() {
  return (
    <mesh position={[2.5, -3.2, -2]}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <meshStandardMaterial color="#1a1a2e" roughness={1} />
    </mesh>
  );
}

// 🚀 Rocket Launch
function RocketLaunch() {
  const rocketRef = useRef();
  const flameRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    const duration = 6; // ⏱ time for one full launch
    const progress = (t % duration) / duration; // 🔁 loop 0 → 1

    // 🚀 move from bottom to top then reset
    rocketRef.current.position.y = -1 + progress * 8;

    // 🔥 flame animation (always running)
    flameRef.current.scale.y = 1 + Math.sin(t * 15) * 0.5;
  });

  return (
    <group ref={rocketRef} position={[2.5, -2, -2]}>

      {/* 🧱 BODY */}
      <mesh>
        <cylinderGeometry args={[0.08, 0.08, 1.2, 32]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      {/* 🔺 NOSE */}
      <mesh position={[0, 0.85, 0]}>
        <coneGeometry args={[0.08, 0.4, 32]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      {/* 🔵 WINDOW */}
      <mesh position={[0, 0.2, 0.09]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      {/* 🪽 FINS */}
      <mesh position={[-0.12, -0.4, 0]}>
        <boxGeometry args={[0.05, 0.3, 0.15]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      <mesh position={[0.12, -0.4, 0]}>
        <boxGeometry args={[0.05, 0.3, 0.15]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      <mesh position={[0, -0.4, -0.12]}>
        <boxGeometry args={[0.15, 0.3, 0.05]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      {/* 🔥 FLAME */}
      <mesh ref={flameRef} position={[0, -0.9, 0]}>
        <coneGeometry args={[0.07, 0.5, 16]} />
        <meshStandardMaterial
          color="#ff7a00"
          emissive="#ff7a00"
          emissiveIntensity={2}
        />
      </mesh>

    </group>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>

        {/* 🌌 Background */}
        <color attach="background" args={["#050816"]} />

        {/* 💡 Lighting */}
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 3, 3]} intensity={5.6} />

        {/* ✨ Stars */}
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={3}
          fade
          speed={0.6}
        />

        {/* 🪐 Planets */}
        <Planet position={[5.5, 1.5, -2]} color="#1a3a5c"  camera={{ position: [0, 0, 6] }}/>
        <Planet position={[10.5, -1, -3]} color="#2d1a4a"   camera={{ position: [0, 0, 6] }}/>
        <Planet position={[-2.5, 2, 1]} color="#1a3a2a"   camera={{ position: [0, 0, 6] }}/>

        {/* 🪨 Asteroids */}
        <Asteroid position={[1.2, -1.2, -2]} />
        <Asteroid position={[5.8, 3.5, -3]} />
        

        {/* 🌑 Moon + 🚀 Launch */}
        <Moon />
        <RocketLaunch />

      </Canvas>
    </div>
  );
}