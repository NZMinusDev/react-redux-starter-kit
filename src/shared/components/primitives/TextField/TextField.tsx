import React from 'react';
import {
  TextFieldProps as MUITextFieldProps,
  TextField as MUITextField,
} from '@mui/material';

type TextFieldProps = MUITextFieldProps & {};

const TextField: React.FC<TextFieldProps> = ({ ...MUIProps }) => {
  return <MUITextField {...MUIProps} />;
};

export { TextField };
