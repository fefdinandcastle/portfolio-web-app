import React, { useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import * as THREE from 'three'

// Cast once — reuse everywhere
interface PlumbobProps {
  children?: React.ReactNode;
  size: number;
}

const Plumbob: React.FC<PlumbobProps> = ({ children, size }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { nodes } = useGLTF('/assets_3d/plumbob.glb');
  const coneMesh = nodes.Cone as THREE.Mesh;

  const scrollSpeed = useRef(0);

  useEffect(() => {
    const container = document.getElementById('scroll-container') ?? window;
    let lastY = container instanceof Window
      ? container.scrollY
      : (container as HTMLElement).scrollTop;

    const handleScroll = () => {
      const currentY = container instanceof Window
        ? container.scrollY
        : (container as HTMLElement).scrollTop;
      scrollSpeed.current += currentY - lastY;
      lastY = currentY;
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += scrollSpeed.current * 0.0025;
    scrollSpeed.current *= 0.01;
    meshRef.current.rotation.y -= 0.003;
  });

  return (
    <group>
      <primitive
        object={coneMesh}
        scale={[size, size, size]}
        ref={meshRef}
      >
        <MeshTransmissionMaterial
          color="#e8e8e8"
          backside={false}          // ← was true; backside doubled the dark faces
          samples={2}
          resolution={512}
          transmission={0.55}       // partial glass — not full crystal
          thickness={3}
          roughness={0.05}          // smooth enough to catch light
          ior={1.35}                // lower ior = less bending = less black
          chromaticAberration={0}   // ← kill this; it's the "luxury" tell
          anisotropy={0}
          distortion={0}            // ← kill; caused the wobbly darkness
          distortionScale={0}
          temporalDistortion={0}    // ← kill; animated warping ≠ brutalism
          envMapIntensity={1.2}
          metalness={0}
        />
      </primitive>
      {/* REMOVED the second <mesh> — it was doubling geometry and adding BackSide confusion */}
    </group>
  );
};

useGLTF.preload('/assets_3d/plumbob.glb');

export default Plumbob;