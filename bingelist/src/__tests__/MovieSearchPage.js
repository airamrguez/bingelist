import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import MovieSearchPage from '../components/MovieSearchPage';
import { mockMatchMedia } from '../setupTests';

it('renders the app title', () => {
  const { container, getByText } = render(<MovieSearchPage />);
  const headerNode = container.querySelector('.header');
  expect(headerNode).toContainElement(getByText('My Binge List'));
});

it('renders a show favorites button at the top right of the app', () => {
  const { container, getByTestId, getByAltText } = render(<MovieSearchPage />);
  const showFavoritesButton = getByTestId('show-favorites-button');
  const rightHeaderNode = container.querySelector('.header .right');

  expect(rightHeaderNode).toContainElement(showFavoritesButton);
  expect(showFavoritesButton).toContainElement(getByAltText('Show favorites'));
});

it('calls navigate to "Favorites Page" when the favorite button is clicked', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const { getByTestId } = render(<MovieSearchPage navigation={navigation} />);
  const showFavoritesButton = getByTestId('show-favorites-button');
  fireEvent.click(showFavoritesButton);

  expect(navigation.navigate).toHaveBeenCalledTimes(1);
  expect(navigation.navigate).toHaveBeenCalledWith('favorites');
});

it('renders a search bar', () => {
  const { getByLabelText, getByText } = render(<MovieSearchPage />);
  expect(getByLabelText('Movie genre')).toBeInTheDocument();
  expect(getByText('Search')).toBeInTheDocument();
});

it('renders a hint text if the search button has not been clicked', () => {
  const { getByPlaceholderText } = render(<MovieSearchPage />);
  expect(getByPlaceholderText('Enter genre')).toBeInTheDocument();
});

it('renders a list of movies when the search query returns movies', () => {
  mockMatchMedia(false);
  const search = {
    allMovies: {
      data: [
        { id: '1', poster: { fullPath: 'https://fake/path.jpg' } },
        { id: '2', poster: { fullPath: 'https://fake/path.jpg' } },
      ],
    },
  };
  const { container } = render(<MovieSearchPage search={search} />);
  const movies = container.querySelectorAll('.movie');
  expect(movies.length).toBe(search.allMovies.data.length);
});

it('renders a star when the movie rating is equal or greater than the rest', () => {
  mockMatchMedia(false);
  const search = {
    allMovies: {
      data: [
        { id: '1', poster: { fullPath: 'https://fake/path.jpg' }, rating: 7 },
        { id: '2', poster: { fullPath: 'https://fake/path.jpg' }, rating: 8 },
        { id: '3', poster: { fullPath: 'https://fake/path.jpg' }, rating: 9 },
      ],
    },
  };
  const { getByTestId } = render(<MovieSearchPage search={search} />);
  const movie1 = getByTestId('movie-1');
  const movie2 = getByTestId('movie-2');
  const movie3 = getByTestId('movie-3');
  expect(movie1).not.toContainElement(movie1.querySelector('.median-star'));
  expect(movie2).toContainElement(movie2.querySelector('.median-star'));
  expect(movie3).toContainElement(movie3.querySelector('.median-star'));
});

it('renders an empty message when the search does not return results', () => {
  mockMatchMedia(false);
  const search = {
    allMovies: {
      data: [],
    },
  };
  const { getByText } = render(<MovieSearchPage search={search} />);
  expect(getByText(/no movies for this category/)).toBeInTheDocument();
});
