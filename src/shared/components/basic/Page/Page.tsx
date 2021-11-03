import React from 'react';
import { useTheme } from '@mui/material';

import { Header } from '@shared/components/basic/Header/Header';

import { getClasses } from './Page.style';

interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const Page: React.FC<PageProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const theme = useTheme();
  const classes = getClasses({}, theme);

  return (
    <article>
      <Header
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />

      <section css={classes.section}>
        <h2 css={classes.title}>Pages in Storybook</h2>
        <p css={classes.paragraph}>
          We recommend building UIs with a{' '}
          <a
            css={classes.link}
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p css={classes.paragraph}>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </p>
        <ul css={classes.list}>
          <li css={classes.listItem}>
            Use a higher-level connected component. Storybook helps you compose
            such data from the &quot;args&quot; of child component stories
          </li>
          <li css={classes.listItem}>
            Assemble data in the page component from your services. You can mock
            these services out using Storybook.
          </li>
        </ul>
        <p css={classes.paragraph}>
          Get a guided tutorial on component-driven development at{' '}
          <a
            css={classes.link}
            href="https://storybook.js.org/tutorials/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a
            css={classes.link}
            href="https://storybook.js.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs
          </a>
          .
        </p>
        <div css={classes.tipWrapper}>
          <span css={classes.tip}>Tip</span> Adjust the width of the canvas with
          the{' '}
          <svg
            css={classes.icon}
            width="10"
            height="10"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                css={classes.iconPath}
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};

export type { PageProps };

export { Page };
