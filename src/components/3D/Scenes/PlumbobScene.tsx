import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader';
import { Environment, Lightformer, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import { Mesh, Texture } from 'three';
import * as THREE from "three";
import Icosahedron from '../Icosahedron/Icosahedron';
import Plumbob from '../Plumbob/Plumbob';

interface ShowcaseProps {
  scrollableRef?: React.RefObject<HTMLElement>
}

const PlumbobScene : React.FC<ShowcaseProps> = ({ scrollableRef, ...props }) => {

  console.log(`[PlumbobScene - R]`);

  const controlsRef: any = useRef();
  let camera = new THREE.PerspectiveCamera (70, 1, 0.1, 1000);

  return (
    <Canvas gl={{ alpha: true }} style={{ background: 'transparent' }}>
      <PerspectiveCamera makeDefault fov={4.5} position={[0, 0, 5]} />
      {/* <ambientLight intensity={1} color={"red"}/> */}
      <directionalLight intensity={1} position={[0, 10, 0]} />
      <directionalLight intensity={1} position={[0, -10, 0]} />
      <directionalLight intensity={1} position={[10, 0, 0]} />
      {/* <Environment files="./assets_3d/rooftop_night_1k.hdr" /> */}
      <Environment resolution={1024} background>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
          ))}
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
        <group rotation={[-Math.PI / 1, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        </group>
      </Environment>
      {/* <Glass> */}
      <Plumbob scrollableRef={scrollableRef} size={0.08}/>
      {/* </Glass> */}
      {/* <OrbitControls ref={controlsRef} /> */}

    </Canvas>
  );
};

export default PlumbobScene;