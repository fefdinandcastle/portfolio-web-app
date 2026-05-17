import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import Plumbob from '../Plumbob/Plumbob';

/**
 * PlumbobScene – foreground canvas layer of the hero.
 *
 * alpha:true makes the canvas transparent so the icosahedron background
 * and CSS gradients show through wherever the plumbob isn't drawn.
 *
 * Scroll handling is done inside <Plumbob> via a document-level listener,
 * so no scrollableRef needs to be forwarded from here.
 */
const PlumbobScene: React.FC = () => (
  <Canvas
    gl={{ alpha: true, antialias: false }}
    dpr={[1, 1.5]}
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'transparent' }}
  >
    <PerspectiveCamera makeDefault fov={4.5} position={[0, 0, 5]} />

    {/* Replace the dense Lightformer rig with 3 clean directional sources */}
    <ambientLight intensity={0.6}  color="#ffffff" />
    <directionalLight position={[3, 5, 3]}   intensity={4}   color="#ffffff" />
    <directionalLight position={[-3, -2, 2]} intensity={2.5} color="#d4c8ff" />
    <directionalLight position={[0, -5, -2]} intensity={1.0} color="#ffffff" />
    {/* Keep a minimal environment just for the transmission background */}
    <Environment preset="studio" background={false} />

    <Suspense fallback={null}>
      <Plumbob size={0.08} />
    </Suspense>
  </Canvas>
);

export default PlumbobScene;