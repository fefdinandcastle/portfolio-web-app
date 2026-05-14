import React, { Suspense, lazy } from 'react';

// Lazy-load both heavy scene components so the three.js + GLB/HDR chunks
// are code-split out of the main bundle and only fetched after first paint.
const ShowcaseBG   = lazy(() => import('../Scenes/ShowcaseBG'));
const PlumbobScene = lazy(() => import('../Scenes/PlumbobScene'));

/**
 * HeroCanvas – stacks two WebGL canvases for the hero background.
 *
 * WHY TWO CANVASES INSTEAD OF ONE:
 *   ShowcaseBG   uses fov=2   (extreme telephoto) so the icosahedron fills
 *                the screen like a flat wallpaper with no perspective distortion.
 *   PlumbobScene uses fov=4.5 with a bespoke Lightformer environment rig.
 *   A PerspectiveCamera in R3F is global to its Canvas — two different FOVs
 *   can't coexist in one scene without custom render-target plumbing.
 *   Two canvases = clean, simple, well within the browser's ~16 context limit.
 *
 * LAYER ORDER (back → front):
 *   [0] ShowcaseBG   z-index:0   alpha:false  → opaque icosahedron wallpaper
 *   [1] PlumbobScene z-index:1   alpha:true   → plumbob floats, rest transparent
 *   [2] CSS blobs    z-index:2   (in Hero.tsx)
 *   [3] Grid         z-index:3   (in Hero.tsx)
 *   [4] HTML content z-index:4   (in Hero.tsx)
 *
 * SCROLL HANDLING:
 *   Plumbob listens to document-level 'scroll' events internally, so no
 *   ref-forwarding from here is needed.
 */
export function HeroCanvas() {
  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      {/* Canvas 0 – Icosahedron background */}
      <Suspense fallback={null}>
        <ShowcaseBG />
      </Suspense>

      {/* Canvas 1 – Plumbob foreground (transparent canvas on top) */}
      <Suspense fallback={null}>
        <PlumbobScene />
      </Suspense>
    </div>
  );
}