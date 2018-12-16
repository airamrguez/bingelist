import React from 'react';
import { render } from 'react-testing-library';
import { mockMatchMedia } from '../setupTests';
import MovieList from '../components/MovieList';

test('if an empty message is rendered when there are no movies', () => {
  const { getByText } = render(
    <MovieList movies={[]} emptyMessage="no movies" />,
  );
  expect(getByText('no movies')).toBeInTheDocument();
});

test('if the movies received are rendered', () => {
  mockMatchMedia(false);
  const movies = [
    { id: '123', title: 'movie1', poster: { fullPath: 'image1' } },
    { id: '456', title: 'movie2', poster: { fullPath: 'image2' } },
  ];
  const { getByAltText } = render(<MovieList movies={movies} />);
  expect(getByAltText('movie1')).toBeInTheDocument();
  expect(getByAltText('movie2')).toBeInTheDocument();
});

test('if the movies are rendered in two columns', () => {
  const movies = [
    { id: '123', title: 'movie1', poster: { fullPath: 'image1' } },
    { id: '456', title: 'movie2', poster: { fullPath: 'image2' } },
    { id: '789', title: 'movie3', poster: { fullPath: 'image3' } },
    { id: '012', title: 'movie4', poster: { fullPath: 'image4' } },
  ];
  const { container } = render(<MovieList movies={movies} />);
  const columns = Array.from(container.querySelectorAll('.column'));
  expect(columns.length).toBe(2);
});

test('if movies are rendered in the left-to-right-down-left order.', () => {
  mockMatchMedia(true);
  const movies = [
    { id: '123', title: 'movie1', poster: { fullPath: 'image1' } },
    { id: '456', title: 'movie2', poster: { fullPath: 'image2' } },
    { id: '789', title: 'movie3', poster: { fullPath: 'image3' } },
    { id: '012', title: 'movie4', poster: { fullPath: 'image4' } },
  ];
  const { container } = render(<MovieList movies={movies} />);
  const [left, right] = Array.from(container.querySelectorAll('.column'));
  const leftItems = Array.from(
    left.querySelectorAll('.movie .title'),
    item => item.textContent,
  );
  const rightItems = Array.from(
    right.querySelectorAll('.movie .title'),
    item => item.textContent,
  );
  expect(leftItems).toEqual(['movie1', 'movie3']);
  expect(rightItems).toEqual(['movie2', 'movie4']);
});

test('if the correct bookmark icon is rendered whether is favorite or not', () => {
  mockMatchMedia(false);
  const movies = [
    { id: '123', title: 'movie1', poster: { fullPath: 'image1' } },
    { id: '456', title: 'movie2', poster: { fullPath: 'image2' } },
  ];
  const favorites = [
    { id: '456', title: 'movie2', poster: { fullPath: 'image2' } },
  ];

  const { getByTestId } = render(
    <MovieList movies={movies} favorites={favorites} />,
  );
  expect(getByTestId('bookmark-icon-456')).toHaveAttribute(
    'alt',
    'Remove movie from bookmarks',
  );
  expect(getByTestId('bookmark-icon-123')).toHaveAttribute(
    'alt',
    'Add movie to bookmark',
  );
});
