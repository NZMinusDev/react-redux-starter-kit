import React from 'react';
import { Translation } from 'react-i18next';

import { Suspense } from '@shared/components/utils/Suspense/Suspense';

interface ErrorBoundaryProps {
  logErrorToMyService?: (error: Error, errorInfo: React.ErrorInfo) => void;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = { hasError: false };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { logErrorToMyService } = this.props;

    logErrorToMyService?.(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) {
      return children;
    }

    return (
      <Suspense>
        <Translation ns="shared/ErrorBoundary">
          {(t) => <h1>{t('oups')}</h1>}
        </Translation>
      </Suspense>
    );
  }
}

export { ErrorBoundary };
