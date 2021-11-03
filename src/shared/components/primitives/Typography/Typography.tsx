import React from 'react';
import {
  TypographyProps as MUITypographyProps,
  Typography as MUITypography,
} from '@mui/material';

interface TypographyProps extends MUITypographyProps {}

const Typography: React.FC<TypographyProps> = ({ ...MUIProps }) => {
  return <MUITypography {...MUIProps} />;
};

export { Typography };
