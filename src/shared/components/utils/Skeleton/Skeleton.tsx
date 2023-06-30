import React from 'react';
import {
  Skeleton as MUISkeleton,
  SkeletonProps as MUISkeletonProps,
} from '@mui/material';

interface SkeletonProps extends MUISkeletonProps {}

const Skeleton: React.FC<SkeletonProps> = ({ ...MUIProps }) => {
  return <MUISkeleton {...MUIProps} />;
};

export { Skeleton };
