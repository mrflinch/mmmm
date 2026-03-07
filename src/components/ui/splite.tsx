import { Suspense, lazy } from 'react';
import { LoadingSpinner } from '@/src/components/ui/loading-spinner';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function SplineScene({ scene, className }: { scene: string, className?: string }) {
  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading Scene..." />
      </div>
    }>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
