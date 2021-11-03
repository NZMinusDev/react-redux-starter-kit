import { useTheme } from '@mui/material';
import React from 'react';

import { getClasses } from './Button.style';

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;

  /**
   * Is this the principal call to action on the page?
   */
  isPrimary?: boolean;

  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * What background color to use
   */
  backgroundColor?: React.CSSProperties['backgroundColor'];

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  label,
  isPrimary = false,
  size = 'medium',
  backgroundColor,
  ...props
}) => {
  const theme = useTheme();
  const classes = getClasses({ isPrimary, size, backgroundColor }, theme);

  return (
    <button type="button" css={classes.root()} {...props}>
      {label}
    </button>
  );
};

export type { ButtonProps };

export { Button };
