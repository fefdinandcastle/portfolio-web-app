import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, MeshTransmissionMaterial, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { Texture } from 'three';
interface PlumbobProps {
  children?: React.ReactNode;
}

const Plumbob : React.FC<PlumbobProps> = ({ children, ...props }) => {
  const ref: any = useRef()
  const { nodes, materials } = useGLTF('/assets_3d/plumbob.glb');

  const meshRef: any = useRef<any>();

  useFrame(() => {
    // Check if the reference is valid before accessing its properties
    if (meshRef.current) {
      // meshRef.current.rotation.x -= 0.001;
      meshRef.current.rotation.y -= 0.001;
    }
  });

  return (
    <group>
      <primitive object={nodes.Cone} material={nodes['Material.001']} scale={[0.5, 0.5, 0.5]} ref={meshRef} >
        <MeshTransmissionMaterial
          backside
          samples={1}
          thickness={3}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={0.9}
          iridescenceThicknessRange={[0, 1400]}
          // color="green"
          transmission={1} // Increase transmission
        />
      </primitive>
        {/* <meshNormalMaterial/> */}
        {/* <meshToonMaterial/> */}
      <group ref={ref}>{children}</group>
    </group>
  );
};

export default Plumbob;