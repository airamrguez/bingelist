import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Bookmark from '../components/Bookmark';
import AddFavoriteMutation from '../mutations/AddFavoriteMutation';
import RemoveFavoriteMutation from '../mutations/RemoveFavoriteMutation';
import { relay } from '../setupTests';

it('renders add bookmark icon when a movie is not favorite', () => {
  const { getByAltText } = render(<Bookmark isFavorite={false} movideId="1" />);
  expect(getByAltText(/Add movie/i)).toBeInTheDocument();
});

it('renders remove bookmark icon when a movie is favorite', () => {
  const { getByAltText } = render(<Bookmark isFavorite={true} movideId="1" />);
  expect(getByAltText(/Remove movie/i)).toBeInTheDocument();
});

it('calls AddFavoriteMutation when a movie is not a favorite yet', () => {
  const spy = jest.spyOn(AddFavoriteMutation, 'commit');
  const movieId = '1';
  const { container } = render(
    <Bookmark isFavorite={false} movieId={movieId} relay={relay} />,
  );
  const button = container.querySelector('button');
  fireEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(relay.environment, movieId);
});

it('calls RemoveFavoriteMutation when a movie is a favorite', () => {
  const spy = jest.spyOn(RemoveFavoriteMutation, 'commit');
  const movieId = '1';
  const { container } = render(
    <Bookmark isFavorite={true} movieId={movieId} relay={relay} />,
  );
  const button = container.querySelector('button');
  fireEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(relay.environment, movieId);
});
