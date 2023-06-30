import React from 'react';

import { Skeleton } from '@shared/components/utils/Skeleton/Skeleton';

interface SuspenseProps extends Partial<React.SuspenseProps> {}

const Suspense: React.FC<SuspenseProps> = ({
  children,
  fallback = <Skeleton variant="rectangular" height="100%" />,
}) => {
  return <React.Suspense fallback={fallback}>{children}</React.Suspense>;
};

export { Suspense };
