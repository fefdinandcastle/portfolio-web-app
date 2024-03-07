import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, Lightformer, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import { Mesh, Texture } from 'three';
import * as THREE from "three";
import Icosahedron from '../Icosahedron/Icosahedron';
import Glass from '../Glass/Glass';

interface ShowcaseProps {
  scrollableRef?: React.RefObject<HTMLElement>
}

const ShowcaseBG : React.FC<ShowcaseProps> = ({ scrollableRef, ...props }) => {

  console.log(`[ShowcaseBG - R]`);

  return (
    <Canvas>
      <PerspectiveCamera makeDefault fov={2} position={[0, 0, 5]} />
      <directionalLight intensity={1} position={[0, 10, 0]} />
      <directionalLight intensity={1} position={[0, -10, 0]} />
      <directionalLight intensity={1} position={[10, 0, 0]} />
      <Environment resolution={1024} background>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color={"red"}/>
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} color={"red"}/>
          ))}
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} color={"red"}/>
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} color={"red"} />
        </group>
        <group rotation={[-Math.PI / 1, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color={"red"}/>
        </group>
      </Environment>
      <Icosahedron size={0.3}>
      </Icosahedron>
    </Canvas>
  );
};

export default ShowcaseBG;