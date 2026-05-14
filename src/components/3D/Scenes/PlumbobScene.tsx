import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer, PerspectiveCamera } from '@react-three/drei';
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
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      background: 'transparent',
    }}
  >
    <PerspectiveCamera makeDefault fov={4.5} position={[0, 0, 5]} />

    <Environment resolution={512} background={true}>
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
    </Environment>

    <Suspense fallback={null}>
      <Plumbob size={0.08} />
    </Suspense>
  </Canvas>
);

export default PlumbobScene;