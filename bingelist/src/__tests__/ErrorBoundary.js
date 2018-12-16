import React from 'react';
import { render } from 'react-testing-library';
import ErrorBoundary from '../components/ErrorBoundary';

test('that a fallback UI is shown when a programming error occurs', () => {
  expect(() => {
    const { getByText } = render(
      <ErrorBoundary>
        <ErroredComponent />
      </ErrorBoundary>,
    );
    expect(getByText('Ups! Something went wrong')).toBeInTheDocument();
  }).toThrow();
});
