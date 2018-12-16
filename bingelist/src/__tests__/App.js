import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import App from '../components/App';
import { queryMock } from '../setupTests';

it('shows Loading while the request has not finished', async () => {
  queryMock.mockQuery({
    name: 'AppQuery',
    data: {
      favorites: [],
    },
  });

  const { getByText } = render(<App />);
  await waitForElement(() => getByText('Loading ...'));
  expect(getByText('Loading ...')).toBeInTheDocument();
});
