import React, { Suspense } from 'react';
import { render, waitForElement } from 'react-testing-library';
import Router from '../components/Router';

const suspenseRender = (node, options) => {
  return render(<Suspense fallback="Loading ...">{node}</Suspense>, options);
};

it('shows the search page when the app is launched', async () => {
  const { getByText } = suspenseRender(<Router />);
  await waitForElement(() => getByText('My Binge List'));
  expect(getByText('My Binge List')).toBeInTheDocument();
});

it('navigates to favorites page', async () => {
  const routerRef = React.createRef();
  const { getByText } = suspenseRender(<Router ref={routerRef} />);
  routerRef.current.navigate('favorites');
  await waitForElement(() => getByText('Favourite Movies'));
  expect(getByText('Favourite Movies')).toBeInTheDocument();
});

it('goes back to the search page', async () => {
  const routerRef = React.createRef();
  const { getByText, queryByText } = suspenseRender(<Router ref={routerRef} />);
  routerRef.current.navigate('favorites');
  await waitForElement(() => getByText('Favourite Movies'));
  routerRef.current.goBack();
  expect(queryByText('Favourite Movies')).not.toBeInTheDocument();
  expect(queryByText('My Binge List')).toBeInTheDocument();
});
