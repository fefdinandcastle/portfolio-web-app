import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import * as THREE from 'three'

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
          color="#c4bbff"
          backside={false}
          samples={2}
          resolution={512}
          transmission={0.6}
          thickness={3}
          roughness={0.04}
          ior={1.35}
          chromaticAberration={0}
          anisotropy={0}
          distortion={0}
          distortionScale={0}
          temporalDistortion={0}
          envMapIntensity={1.4}
          metalness={0}
        />
      </primitive>
    </group>
  );
};

useGLTF.preload('/assets_3d/plumbob.glb');

export default Plumbob;