import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, MeshTransmissionMaterial, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { MeshPhysicalMaterial, Texture } from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
interface PlumbobProps {
  children?: React.ReactNode;
  size: number;
}

const Icosahedron : React.FC<PlumbobProps> = ({ children, size, ...props }) => {
  const ref: any = useRef()
  const { nodes, materials } = useGLTF('/assets_3d/ico_sphere.glb');

  const meshRef: any = useRef<any>();


  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.0002;
      meshRef.current.rotation.x -= 0.0002;
    }
  });

  const [envMap] = useLoader(RGBELoader, ['./assets_3d/abstract_09.hdr']);

  return (
    <group>
      <primitive object={nodes.Icosphere} material={nodes['Material.001']} scale={[size, size, size]} ref={meshRef} >
        <MeshTransmissionMaterial
          color={"white"}
          backside={true}
          samples={1}
          thickness={10}
          // chromaticAberration={1}
          anisotropy={0.2}
          // distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          background={envMap}
          transmission={1} 
        />
        {/* <meshPhysicalMaterial {...mat}/> */}
        {/* <meshNormalMaterial/> */}
        {/* <meshToonMaterial/> */}
      </primitive>
      <group ref={ref}>{children}</group>
    </group>
  );
};

export default Icosahedron;