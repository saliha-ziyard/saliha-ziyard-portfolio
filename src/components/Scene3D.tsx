import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, rotation, scale, geometry, isMobile }: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  geometry: 'torus' | 'octahedron' | 'icosahedron' | 'torusKnot';
  isMobile: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 + rotation[0];
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 + rotation[1];
    }
  });

  const geometryComponent = useMemo(() => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[1, 0.3, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />;
      default:
        return <octahedronGeometry args={[1]} />;
    }
  }, [geometry]);

  // Reduce quality on mobile for better performance
  const materialProps = isMobile ? {
    samples: 2,
    thickness: 0.3,
  } : {
    samples: 4,
    thickness: 0.5,
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometryComponent}
        <MeshTransmissionMaterial
          backside
          {...materialProps}
          chromaticAberration={0.1}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color="#ffffff"
          transmission={0.95}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = ({ isMobile }: { isMobile: boolean }) => {
  // Reduce particle count on mobile
  const count = isMobile ? 100 : 200;
  const particlesRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spread = isMobile ? 15 : 20;
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return pos;
  }, [count, isMobile]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.03 : 0.02}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const GridFloor = ({ isMobile }: { isMobile: boolean }) => {
  const gridSize = isMobile ? 20 : 30;
  return (
    <group position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[gridSize, gridSize, '#1C636B', '#1C636B']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
};

const Scene = ({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) => {
  // Mobile gets completely different, tighter layout
  const shapes = isMobile ? [
    { position: [-2.5, 1.5, -2] as [number, number, number], rotation: [0, 0, 0] as [number, number, number], scale: 0.8, geometry: 'torus' as const },
    { position: [2.5, -1, -2] as [number, number, number], rotation: [1, 0, 0] as [number, number, number], scale: 0.6, geometry: 'octahedron' as const },
    { position: [0, 2, -3] as [number, number, number], rotation: [0, 1, 0] as [number, number, number], scale: 0.7, geometry: 'icosahedron' as const },
  ] : isTablet ? [
    { position: [-3.5, 2, -2.5] as [number, number, number], rotation: [0, 0, 0] as [number, number, number], scale: 1, geometry: 'torus' as const },
    { position: [3.5, -1, -2] as [number, number, number], rotation: [1, 0, 0] as [number, number, number], scale: 0.7, geometry: 'octahedron' as const },
    { position: [0, 3, -4] as [number, number, number], rotation: [0, 1, 0] as [number, number, number], scale: 0.9, geometry: 'icosahedron' as const },
    { position: [-2.5, -2, -3] as [number, number, number], rotation: [0.5, 0.5, 0] as [number, number, number], scale: 0.5, geometry: 'torusKnot' as const },
  ] : [
    { position: [-4, 2, -3] as [number, number, number], rotation: [0, 0, 0] as [number, number, number], scale: 1.2, geometry: 'torus' as const },
    { position: [4, -1, -2] as [number, number, number], rotation: [1, 0, 0] as [number, number, number], scale: 0.8, geometry: 'octahedron' as const },
    { position: [0, 3, -5] as [number, number, number], rotation: [0, 1, 0] as [number, number, number], scale: 1, geometry: 'icosahedron' as const },
    { position: [-3, -2, -4] as [number, number, number], rotation: [0.5, 0.5, 0] as [number, number, number], scale: 0.6, geometry: 'torusKnot' as const },
    { position: [5, 1, -6] as [number, number, number], rotation: [0, 0, 1] as [number, number, number], scale: 0.9, geometry: 'torus' as const },
  ];

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ffffff" />

      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position}
          rotation={shape.rotation}
          scale={shape.scale}
          geometry={shape.geometry}
          isMobile={isMobile}
        />
      ))}

      <ParticleField isMobile={isMobile} />
      <GridFloor isMobile={isMobile} />

      <Environment preset="night" />
    </>
  );
};

const Scene3D = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    width: typeof window !== 'undefined' ? window.innerWidth : 1920
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        width
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust camera based on screen size
  const cameraPosition: [number, number, number] = screenSize.isMobile 
    ? [0, 0, 10] 
    : screenSize.isTablet 
    ? [0, 0, 9] 
    : [0, 0, 8];

  const fov = screenSize.isMobile ? 55 : screenSize.isTablet ? 50 : 45;

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: cameraPosition, fov }}
        gl={{ 
          antialias: !screenSize.isMobile, 
          alpha: true,
          powerPreference: screenSize.isMobile ? 'low-power' : 'high-performance'
        }}
        dpr={screenSize.isMobile ? [1, 1.5] : [1, 2]}
      >
        <Scene isMobile={screenSize.isMobile} isTablet={screenSize.isTablet} />
      </Canvas>
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none" />
    </div>
  );
};

export default Scene3D;