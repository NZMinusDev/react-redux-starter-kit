import React from 'react';
import {
  AutocompleteProps as MUIAutocompleteProps,
  Autocomplete as MUIAutocomplete,
} from '@mui/material';

import { assertFC } from '@shared/types/assertions';

interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType<any> = 'div'
> extends MUIAutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  > {}

const Autocomplete = <
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType<any> = 'div'
>(
  props: AutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >
) => {
  const { ...MUIProps } = props;

  return <MUIAutocomplete {...MUIProps} />;
};

assertFC(Autocomplete);

export { Autocomplete };
