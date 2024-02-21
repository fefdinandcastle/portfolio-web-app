import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, Lightformer, OrbitControls, useTexture } from '@react-three/drei';
import { Texture } from 'three';
import Glass from '../Glass/Glass';
import Plumbob from '../Plumbob/Plumbob';

const Showcase = () => {
  const controlsRef: any = useRef();

  return (
    <Canvas>
      <color attach="background" args={['#ffffff']} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[0, 10, 0]} />
      <Environment resolution={1024}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
          ))}
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
      </Environment>
      <Glass>
        <Plumbob/>
      </Glass>
      <OrbitControls ref={controlsRef} />

    </Canvas>
  );
};

export default Showcase;