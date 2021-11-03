import React from 'react';
import {
  ToggleButtonGroupProps as MUIToggleButtonGroupProps,
  ToggleButtonGroup as MUIToggleButtonGroup,
  ToggleButton as MUIToggleButton,
  ToggleButtonTypeMap as MUIToggleButtonTypeMap,
} from '@mui/material';

interface ToggleButtonGroupProps extends MUIToggleButtonGroupProps {
  // use ariaLabel="label", ariaLabelledby="id" or <label>
  ariaLabel?: string;
  ariaLabelledby?: string;
  MUIToggleButtonProps: (MUIToggleButtonTypeMap<{}, 'button'>['props'] & {
    ariaLabel: string;
    keyID: string;
  })[];
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  ariaLabel,
  ariaLabelledby,
  MUIToggleButtonProps,
  ...props
}) => {
  return (
    <MUIToggleButtonGroup
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {MUIToggleButtonProps.map((buttonProps) => {
        const {
          ariaLabel: buttonAriaLabel,
          keyID,
          children,
          ...MUIProps
        } = buttonProps;

        return (
          <MUIToggleButton
            aria-label={buttonAriaLabel}
            {...MUIProps}
            key={keyID}
          >
            {children}
          </MUIToggleButton>
        );
      })}
    </MUIToggleButtonGroup>
  );
};

export { ToggleButtonGroup };
