import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, MeshTransmissionMaterial, OrbitControls, useGLTF, useMask, useTexture } from '@react-three/drei';
import { Object3D, Texture } from 'three';

interface GlassProps {
  children: React.ReactNode;
}

const Glass : React.FC<GlassProps> = ({ children, ...props }) => {
  const ref: any = useRef()
  const { nodes, materials } = useGLTF('/assets_3d/cube.glb');

  return (
    <group>
      <primitive object={nodes.Cube} material={nodes['Material.001']}  scale={[1.5, 1.5, 1.5]}>
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
          iridescenceIOR={0.9}
          iridescenceThicknessRange={[0, 1400]}
        />
      </primitive>
        {/* <meshNormalMaterial/> */}
        {/* <meshToonMaterial/> */}
      <group ref={ref}>{children}</group>
    </group>
  );
};

export default Glass;