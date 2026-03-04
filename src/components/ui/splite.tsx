'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { LoadingSpinner } from '@/src/components/ui/loading-spinner'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Small delay to prioritize main thread for initial render
    const timer = setTimeout(() => setHasLoaded(true), 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  if (isMobile || !hasLoaded) {
    return <div className={className} />;
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
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
