import React from 'react';
import { useTheme } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@app/hooks';
import { ToggleButtonGroup } from '@shared/components/containers';
import {
  SettingsBrightness,
  LightMode,
  DarkMode,
  Typography,
} from '@shared/components/primitives';
import { capitalizeText } from '@shared/helpers';

import { selectCurrentMode, select } from '../../redux/themeSlice';
import { ThemeMode } from '../../namespace';
import { getClasses } from './ThemeSelector.style';

interface ThemeSelectorProps {}

type ThemeOptions = {
  [key in ThemeMode]: { icon: React.ReactNode };
};

const ThemeSelector: React.FC<ThemeSelectorProps> = () => {
  const themeOptions: ThemeOptions = {
    system: { icon: <SettingsBrightness /> },
    light: { icon: <LightMode /> },
    dark: { icon: <DarkMode /> },
  };

  const currentMode = useAppSelector(selectCurrentMode);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const classes = getClasses({}, theme);

  const onChange = (
    event: React.MouseEvent<HTMLElement>,
    newThemeOptionKey: keyof ThemeOptions | null
  ) => {
    if (newThemeOptionKey !== null) {
      dispatch(
        select({
          currentMode: newThemeOptionKey,
        })
      );
    }
  };

  return (
    <div css={classes.root}>
      <Typography id="global-theme-selector" css={classes.label}>
        Theme Mode
      </Typography>
      <ToggleButtonGroup
        ariaLabelledby="global-theme-selector"
        color="primary"
        value={currentMode}
        exclusive
        onChange={onChange}
        MUIToggleButtonProps={Object.entries(themeOptions).map(
          ([themeLabel, themeValues]) => {
            const capitalizedThemeLabel = capitalizeText(themeLabel);

            return {
              value: themeLabel,
              ariaLabel: capitalizedThemeLabel,
              keyID: themeLabel,
              children: (
                <>
                  {themeValues.icon}
                  {}
                  {capitalizedThemeLabel}
                </>
              ),
            };
          }
        )}
      />
    </div>
  );
};

export { ThemeSelector };
