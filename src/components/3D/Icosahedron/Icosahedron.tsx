import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

interface IcosahedronProps {
  children?: React.ReactNode;
  size: number;
}

const Icosahedron: React.FC<IcosahedronProps> = ({ children, size }) => {
  const groupRef  = useRef<THREE.Group>(null);
  const meshRef   = useRef<THREE.Mesh>(null);

  const { nodes } = useGLTF('/assets_3d/ico_sphere.glb');
  const [envMap]  = useLoader(RGBELoader, ['./assets_3d/abstract_10.hdr']);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.0002;
      meshRef.current.rotation.x -= 0.0002;
    }
  });

  return (
    <group>
      <primitive
        object={nodes.Icosphere}
        material={nodes['Material.001']}
        scale={[size, size, size]}
        ref={meshRef}
      >
        <MeshTransmissionMaterial
         color=
"white"
samples=
{4}
// was 1 — background can be slightly lower
resolution=
{256}
transmission=
{1}
thickness=
{1.5}
// chunkier feel for the bg sphere
roughness=
{0}
ior=
{1.45}
chromaticAberration=
{0.04}
// was 0.1
anisotropy=
{0.5}
distortion=
{0.05}
background=
{envMap}
        />
      </primitive>
      <group ref={groupRef}>{children}</group>
    </group>
  );
};

useGLTF.preload('/assets_3d/ico_sphere.glb');

export default Icosahedron;