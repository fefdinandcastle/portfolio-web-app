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
const ShowcaseBG: React.FC<ShowcaseBGProps> = ({ scrollableRef }) => (
  <Canvas
    gl={{ antialias: false, alpha: false }}
    dpr={[1, 1.5]}
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
  >
    <PerspectiveCamera makeDefault fov={2} position={[0, 0, 5]} />
    <Suspense fallback={null}>
      <Icosahedron size={0.4} />
    </Suspense>
  </Canvas>
);

export default ShowcaseBG;