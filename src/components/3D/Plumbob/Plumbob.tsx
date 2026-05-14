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
  const groupRef = useRef<THREE.Group>(null);
  const meshRef  = useRef<THREE.Mesh>(null);

  const { nodes } = useGLTF('/assets_3d/plumbob.glb');
  const [envMap]  = useLoader(RGBELoader, ['./assets_3d/abstract_10.hdr']);
  const coneMesh = nodes.Cone as THREE.Mesh


  // ── Scroll-speed refs ────────────────────────────────────────────────────
  // Plain `let` variables inside a React component body reset to 0 on every
  // render. useRef persists the value for the component's lifetime without
  // triggering re-renders.
  const lastScrollY = useRef(0);
  const scrollSpeed = useRef(0);

  useEffect(() => {
    // Returns the current scroll position regardless of which element is
    // actually scrolling (window, documentElement, or body).
    const getScrollY = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    lastScrollY.current = getScrollY();

    const handleScroll = () => {
      const currentY      = getScrollY();
      scrollSpeed.current = currentY - lastScrollY.current;
      lastScrollY.current = currentY;
    };

    // document-level 'scroll' bubbles up from ANY scrolling element on the
    // page, so this works whether the page scrolls on <html>, <body>, or a
    // custom container — no ref-forwarding needed.
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;

    // Scroll burst: apply accumulated speed then decay exponentially
    meshRef.current.rotation.y += scrollSpeed.current * 0.004;
    scrollSpeed.current *= 0.9;

    // Constant idle rotation (always on)
    meshRef.current.rotation.y -= 0.001;
  });

  return (
    <group>
      <primitive
        object={coneMesh}
        material={nodes['Material.001']}
        scale={[size, size, size]}
        ref={meshRef}
      >
        <MeshTransmissionMaterial
          color="white"
          backside={true}
          samples={1}
          // was 1 — this is the main fix
          resolution={512}
          // was default — dedicated FBO resolution
          transmission={0.5}
          // was 0.7 — full glass, use color for tint
          thickness={10}
          // was 2 — thinner = lighter, more delicate
          roughness={0}
          // perfectly smooth glass surface
          ior={1.5}
          // index of refraction (glass ≈ 1.5)
          chromaticAberration={0.06}
          // was 0.2 — subtle RGB split
          anisotropy={0.1}
          distortion={1}
          // slight surface wobble
          distortionScale={1}
          temporalDistortion={0.05}
          // animate the distortion over time
          background={envMap}
          metalness={0}
          envMapIntensity={2}
        />
        
      </primitive>
      <mesh geometry={coneMesh.geometry} scale={[size, size, size]}>
  <meshPhysicalMaterial
    color="white"
    transparent
    opacity={0}
    roughness={0}
    metalness={0}
    transmission={0}
    thickness={0}
    envMapIntensity={3}
    side={THREE.BackSide}  // renders inner faces = rim glow
  />
</mesh>
      <group ref={groupRef}>{children}</group>
    </group>
  );
};

useGLTF.preload('/assets_3d/plumbob.glb');

export default Plumbob;