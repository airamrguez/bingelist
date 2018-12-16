import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import FavoriteMoviesPage from '../components/FavoriteMoviesPage';
import { mockMatchMedia } from '../setupTests';

const navigation = {
  goBack: jest.fn(),
};

it('renders a go back button', () => {
  const { container, getByTestId, getByAltText } = render(
    <FavoriteMoviesPage />,
  );
  const buttonNode = getByTestId('go-back-button');

  expect(container).toContainElement(buttonNode);
  expect(buttonNode).toContainElement(getByAltText(/back/));
});

it('calls navigation.goBack when the go back button is clicked', () => {
  const { getByTestId } = render(
    <FavoriteMoviesPage navigation={navigation} />,
  );
  const buttonNode = getByTestId('go-back-button');
  fireEvent.click(buttonNode);

  expect(navigation.goBack).toHaveBeenCalledTimes(1);
});

it('renders the page title', () => {
  const { container, getByText } = render(<FavoriteMoviesPage />);
  const headerNode = container.querySelector('.header');

  expect(headerNode).toContainElement(getByText('Favourite Movies'));
});

it('renders the list of favorites movies', () => {
  mockMatchMedia(false);
  const favorites = [
    { id: '1', poster: { fullPath: 'https://fake/path' } },
    { id: '2', poster: { fullPath: 'https://fake/path2' } },
  ];
  const { container } = render(<FavoriteMoviesPage favorites={favorites} />);
  const movies = container.querySelectorAll('.movie');
  expect(movies.length).toEqual(favorites.length);
});

it('does not render non-favorites in the favorites list', () => {
  const favorites = [
    { id: '1', poster: { fullPath: 'https://fake/path' } },
    { id: '2', poster: { fullPath: 'https://fake/path2' } },
  ];
  const { queryAllByAltText } = render(
    <FavoriteMoviesPage favorites={favorites} />,
  );

  expect(queryAllByAltText(/Add movie/)).toEqual([]);
});
