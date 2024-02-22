import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, MeshTransmissionMaterial, OrbitControls, useGLTF, useMask, useTexture } from '@react-three/drei';
import { Object3D, Texture } from 'three';

interface SphereProps {
  children: React.ReactNode;
}

const Sphere : React.FC<SphereProps> = ({ children, ...props }) => {
  const ref: any = useRef()
  const meshRef: any = useRef<any>();

  useFrame(() => {
    // Check if the reference is valid before accessing its properties
    if (meshRef.current) {
      // meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[4.8, 20, 20]} />
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
          transmission={1} // Increase transmission
        />
      </mesh>
        {/* <meshNormalMaterial/> */}
        {/* <meshToonMaterial/> */}
      <group ref={ref}>{children}</group>
    </group>
  );
};

export default Sphere;