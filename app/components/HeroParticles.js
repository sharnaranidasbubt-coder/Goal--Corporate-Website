"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 200 }) {
  const mesh = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
        ],
        velocity: [
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.002,
        ],
        size: Math.random() * 0.08 + 0.02,
        color: i % 3 === 0 ? "#E85D04" : i % 3 === 1 ? "#003366" : "#FFFFFF",
      });
    }
    return temp;
  }, [count]);

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorMap = {
      "#E85D04": new THREE.Color("#E85D04"),
      "#003366": new THREE.Color("#003366"),
      "#FFFFFF": new THREE.Color("#FFFFFF"),
    };

    particles.forEach((p, i) => {
      positions[i * 3] = p.position[0];
      positions[i * 3 + 1] = p.position[1];
      positions[i * 3 + 2] = p.position[2];

      const c = colorMap[p.color];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = p.size;
    });

    return { positions, colors, sizes };
  }, [particles, count]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const positionArray = mesh.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const p = particles[i];

      // Gentle drift
      positionArray[i3] += p.velocity[0] + Math.sin(time * 0.3 + i) * 0.0003;
      positionArray[i3 + 1] += p.velocity[1] + Math.cos(time * 0.2 + i) * 0.0003;
      positionArray[i3 + 2] += p.velocity[2];

      // Mouse attraction (subtle)
      const dx = mouseRef.current.x * 5 - positionArray[i3];
      const dy = mouseRef.current.y * 5 - positionArray[i3 + 1];
      positionArray[i3] += dx * 0.0001;
      positionArray[i3 + 1] += dy * 0.0001;

      // Wrap around
      if (positionArray[i3] > 10) positionArray[i3] = -10;
      if (positionArray[i3] < -10) positionArray[i3] = 10;
      if (positionArray[i3 + 1] > 10) positionArray[i3 + 1] = -10;
      if (positionArray[i3 + 1] < -10) positionArray[i3 + 1] = 10;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ConnectionLines({ particles, count = 200 }) {
  const lineRef = useRef();
  const maxConnections = 3;
  const connectionDistance = 2.5;

  const linePositions = useMemo(() => {
    return new Float32Array(count * maxConnections * 6);
  }, [count]);

  useFrame(() => {
    if (!lineRef.current) return;
    const posAttr = lineRef.current.geometry.attributes.position;
    let lineIndex = 0;

    for (let i = 0; i < count && lineIndex < count * maxConnections; i++) {
      let connections = 0;
      for (let j = i + 1; j < count && connections < maxConnections; j++) {
        const dx = particles[i].position[0] - particles[j].position[0];
        const dy = particles[i].position[1] - particles[j].position[1];
        const dz = particles[i].position[2] - particles[j].position[2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionDistance) {
          const idx = lineIndex * 6;
          posAttr.array[idx] = particles[i].position[0];
          posAttr.array[idx + 1] = particles[i].position[1];
          posAttr.array[idx + 2] = particles[i].position[2];
          posAttr.array[idx + 3] = particles[j].position[0];
          posAttr.array[idx + 4] = particles[j].position[1];
          posAttr.array[idx + 5] = particles[j].position[2];
          lineIndex++;
          connections++;
        }
      }
    }

    // Clear remaining lines
    for (let i = lineIndex * 6; i < posAttr.array.length; i++) {
      posAttr.array[i] = 0;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count * maxConnections * 2}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#003366" transparent opacity={0.08} />
    </lineSegments>
  );
}

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles count={180} />
      </Canvas>
    </div>
  );
}
