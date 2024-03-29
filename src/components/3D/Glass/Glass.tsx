import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, MeshTransmissionMaterial, OrbitControls, useGLTF, useMask, useTexture } from '@react-three/drei';
import { Object3D, Texture } from 'three';

interface GlassProps {
  children: React.ReactNode;
}

const Glass : React.FC<GlassProps> = ({ children, ...props }) => {
  const ref: any = useRef()
  const { nodes, materials } = useGLTF('/assets_3d/cube.glb');
  const meshRef: any = useRef<any>();

  useFrame(() => {
    // Check if the reference is valid before accessing its properties
    if (meshRef.current) {
      // meshRef.current.rotation.x += 0.01;
      // meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <primitive object={nodes.Cube} material={nodes['Material.001']}  scale={[2, 1, 1]} ref={meshRef}>
        <MeshTransmissionMaterial
          backside
          samples={1}
          thickness={3}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0}
          distortionScale={0.1}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          transmission={1}
          color={"white"}
        />
      </primitive>
        {/* <meshNormalMaterial/> */}
        {/* <meshToonMaterial/> */}
      <group ref={ref}>{children}</group>
    </group>
  );
};

export default Glass;