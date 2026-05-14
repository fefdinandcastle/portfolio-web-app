import React, { useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

interface PlumbobProps {
  children?: React.ReactNode;
  size: number;
}

const Plumbob: React.FC<PlumbobProps> = ({ children, size }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef  = useRef<THREE.Mesh>(null);

  const { nodes } = useGLTF('/assets_3d/plumbob.glb');
  const [envMap]  = useLoader(RGBELoader, ['./assets_3d/abstract_05.hdr']);

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
        object={nodes.Cone}
        material={nodes['Material.001']}
        scale={[size, size, size]}
        ref={meshRef}
      >
        <MeshTransmissionMaterial
          color="white"
          backside={true}
          samples={1}
          thickness={2}
          chromaticAberration={0.2}
          anisotropy={1}
          background={envMap}
          transmission={0.7}
        />
      </primitive>
      <group ref={groupRef}>{children}</group>
    </group>
  );
};

useGLTF.preload('/assets_3d/plumbob.glb');

export default Plumbob;