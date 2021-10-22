import React from 'react';
import type MDN from 'csstype';

import { classes } from './Button.style';

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
  backgroundColor?: MDN.Property.BackgroundColor;

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
  return (
    <button
      type="button"
      css={classes.root({ isPrimary, size, backgroundColor })}
      {...props}
    >
      {label}
    </button>
  );
};

export type { ButtonProps };

export { Button };
