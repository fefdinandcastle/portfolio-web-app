import React, { Suspense, lazy } from 'react';

const ShowcaseBG   = lazy(() => import('../Scenes/ShowcaseBG'));
const PlumbobScene = lazy(() => import('../Scenes/PlumbobScene'));

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Suspense fallback={null}>
        <ShowcaseBG />
      </Suspense>
      <Suspense fallback={null}>
        <PlumbobScene />
      </Suspense>
    </div>
  );
}
