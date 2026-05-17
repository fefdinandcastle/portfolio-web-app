import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

interface IcosahedronProps {
  children?: React.ReactNode;
  size: number;
}

const Icosahedron: React.FC<IcosahedronProps> = ({ children, size }) => {
  const groupRef  = useRef<THREE.Group>(null);
  const meshRef   = useRef<THREE.Mesh>(null);

  const { nodes } = useGLTF('/assets_3d/ico_sphere.glb');

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
       <meshPhysicalMaterial
          color="#e8e4dc"
          roughness={1.0}
          metalness={0}
          flatShading={true}
        />
      </primitive>
      <group ref={groupRef}>{children}</group>
    </group>
  );
};

useGLTF.preload('/assets_3d/ico_sphere.glb');

export default Icosahedron;