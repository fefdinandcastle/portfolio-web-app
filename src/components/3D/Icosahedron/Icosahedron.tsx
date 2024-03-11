import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, MeshTransmissionMaterial, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { MeshPhysicalMaterial, Texture } from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
interface PlumbobProps {
  children?: React.ReactNode;
  size: number;
}

const Icosahedron : React.FC<PlumbobProps> = ({ children, size, ...props }) => {
  const ref: any = useRef()
  const { nodes, materials } = useGLTF('/assets_3d/ico_sphere.glb');
  // const { nodes, materials } = useLoader(GLTFLoader, '/assets_3d/ico_sphere.glb');

  const meshRef: any = useRef<any>();


  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.0002;
      meshRef.current.rotation.x -= 0.0002;
    }
  });

  const [envMap] = useLoader(RGBELoader, ['./assets_3d/abstract_10.hdr']);

  return (
    <group>
      <primitive object={nodes.Icosphere} material={nodes['Material.001']} scale={[size, size, size]} ref={meshRef} >
        <MeshTransmissionMaterial
          color={"white"}
          // backside={true}
          samples={1}
          thickness={1}
          chromaticAberration={0.1}
          anisotropy={1}
          distortion={0.0}
          // distortionScale={1}
          // temporalDistortion={1}
          iridescence={0}
          // iridescenceIOR={1}
          // iridescenceThicknessRange={[0, 1400]}
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

useGLTF.preload('/assets_3d/ico_sphere.glb');

export default Icosahedron;