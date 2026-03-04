'use client'

import { Suspense, lazy } from 'react'
import { LoadingSpinner } from '@/src/components/ui/loading-spinner'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <LoadingSpinner size="lg" text="Loading Scene..." />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
