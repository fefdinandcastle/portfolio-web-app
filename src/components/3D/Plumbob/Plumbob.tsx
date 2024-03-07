import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, MeshTransmissionMaterial, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { MeshPhysicalMaterial, Texture } from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
interface PlumbobProps {
  children?: React.ReactNode;
  scrollableRef?: React.RefObject<HTMLElement>;
  size: number;
}

const Plumbob : React.FC<PlumbobProps> = ({ children, scrollableRef, size, ...props }) => {
  const ref: any = useRef()
  const { nodes, materials } = useGLTF('/assets_3d/plumbob.glb');

  const meshRef: any = useRef<any>();

  let lastScrollY = window.scrollY;
  let scrollSpeed = 0;

  useFrame(() => {
    if (meshRef.current) {

      meshRef.current.rotation.y += scrollSpeed * 0.001;
      scrollSpeed *= 0.9;

      meshRef.current.rotation.y -= 0.001;
      // meshRef.current.rotation.x -= 0.001;
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the speed based on the change in scroll position
      const currentScrollY = document.body.scrollTop;
      scrollSpeed = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
    };

    document.body.addEventListener('scroll', handleScroll);

    return () => document.body.removeEventListener('scroll', handleScroll);
  }, []);

  // const [envMap] = useLoader(RGBELoader, ['./assets_3d/studio001small.hdr']);
  const [envMap] = useLoader(RGBELoader, ['./assets_3d/abstract_13.hdr']);


  return (
    <group>
      <primitive object={nodes.Cone} material={nodes['Material.001']} scale={[size, size, size]} ref={meshRef} >
        <MeshTransmissionMaterial
          color={"#white"}
          backside={true}
          samples={1}
          thickness={5}
          chromaticAberration={0.05}
          anisotropy={0.5}
          // distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={0.8}
          iridescenceThicknessRange={[0, 1400]}
          background={envMap}
          transmission={0.9} 
        />
        {/* <meshPhysicalMaterial {...mat}/> */}
        {/* <meshNormalMaterial/> */}
        {/* <meshToonMaterial/> */}
      </primitive>
      <group ref={ref}>{children}</group>
    </group>
  );
};

export default Plumbob;