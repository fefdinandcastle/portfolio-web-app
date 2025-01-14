import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Icosahedron from '../Icosahedron/Icosahedron';

interface ShowcaseProps {
  scrollableRef?: React.RefObject<HTMLElement>
}
const ShowcaseBG : React.FC<ShowcaseProps> = ({ scrollableRef, ...props }) => {

  // console.log(`[ShowcaseBG - R]`);

  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault fov={2} position={[0, 0, 5]} />
        <Icosahedron size={0.4} />
    </Canvas>
  );
};

export default ShowcaseBG;