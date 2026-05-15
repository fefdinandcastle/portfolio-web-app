import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Icosahedron from '../Icosahedron/Icosahedron';
interface ShowcaseBGProps {
  scrollableRef?: React.RefObject<HTMLElement>;
}

/**
 * ShowcaseBG – the background layer of the hero.
 *
 * Uses fov=2 (telephoto) so the icosahedron appears very large and
 * flat-perspective, filling the canvas like a wallpaper without distortion.
 * This camera config is incompatible with PlumbobScene's fov=4.5 rig, which
 * is why these two live in separate <Canvas> elements rather than one.
 *
 * antialias:false  → saves GPU; this is a blurry background layer
 * alpha:false      → no transparency needed; this is the bottommost canvas
 */
const ShowcaseBG: React.FC<ShowcaseBGProps> = (_props) => (
  <Canvas
    gl={{ antialias: false, alpha: false }}
    dpr={[1, 1.5]}
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
  >
    <PerspectiveCamera makeDefault fov={2} position={[0, 0, 5]} />
     {/* <Environment resolution={256} background={true}>
          <group rotation={[-Math.PI / 3, 0, 0]}>
            <Lightformer intensity={6} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
              <Lightformer
                key={i}
                form="circle"
                intensity={4}
                rotation={[Math.PI / 2, 0, 0]}
                position={[x, 4, i * 4]}
                scale={[4, 1, 1]}
              />
            ))}
            <Lightformer intensity={2} rotation-y={Math.PI / 2}  position={[-5, 1, -1]} scale={[50, 2, 1]} />
            <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]}  scale={[50, 2, 1]} />
          </group>
          <group rotation={[-Math.PI / 1, 0, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          </group>
        </Environment> */}
        {/* Background matches the hero section */}
        <color attach="background" args={['#f5f4f0']} />
        <ambientLight intensity={0.7}  color="#ffffff" />
        <directionalLight position={[5, 5, 5]}   intensity={2}   color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#e8e0d8" />
    <Suspense fallback={null}>
      <Icosahedron size={0.4} />
    </Suspense>
  </Canvas>
);

export default ShowcaseBG;