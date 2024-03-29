import React from 'react';
import { useTheme } from '@mui/material';

import { Button } from '@shared/components/primitives/Button/Button';

import { getClasses } from './Header.style';

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const theme = useTheme();
  const classes = getClasses({}, theme);

  return (
    <header>
      <div css={classes.wrapper}>
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            css={classes.icon}
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
              />
            </g>
          </svg>
          <h1 css={classes.title}>Acme</h1>
        </div>
        <div css={classes.buttons}>
          {user ? (
            <Button label="Log out" size="small" onClick={onLogout} />
          ) : (
            <>
              <Button label="Log in" size="small" onClick={onLogin} />
              <Button
                label="Sign up"
                isPrimary
                size="small"
                onClick={onCreateAccount}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export type { HeaderProps };

export { Header };
