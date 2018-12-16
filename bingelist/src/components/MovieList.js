import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { isEmpty } from '../utils';
import MovieListItem from './MovieListItem';
import FluidText from './FluidText';
import Column from './Column';
import { median } from '../utils';
import './MovieList.css';

function MovieList(props) {
  const { movies } = props;
  if (isEmpty(movies)) {
    return <FluidText text={props.emptyMessage} />;
  }

  const { left, right } = layoutMovies(props);
  return (
    <div className="grid">
      <Column>{left}</Column>
      <Column>{right}</Column>
    </div>
  );
}

MovieList.defaultProps = {
  movies: [],
  favorites: [],
  emptyMessage: 'There are no movies to show.',
};

// There are 2 columns and the results are rendered in the
// left-to-right-down-left order.
function layoutMovies(props) {
  const { movies, favorites, ...rest } = props;
  const favoritesIndex = createFavoritesIndex(favorites);
  const medianRating = median(movies.map(movie => movie.rating));
  return movies.reduce(
    (memo, movie, i) => {
      const Component = (
        <MovieListItem
          {...rest}
          key={movie.id}
          movie={movie}
          isFavorite={favoritesIndex.has(movie.id)}
          showStar={movie.rating >= medianRating}
        />
      );
      if (i % 2 === 0) {
        memo.left.push(Component);
      } else {
        memo.right.push(Component);
      }
      return memo;
    },
    { left: [], right: [] },
  );
}

function createFavoritesIndex(favorites) {
  const index = new Map();
  favorites.forEach(({ id }) => {
    index.set(String(id), true);
  });
  return index;
}

export default createFragmentContainer(
  React.memo(MovieList),
  graphql`
    fragment MovieList_movies on Movie @relay(plural: true) {
      id
      rating
      ...MovieListItem_movie
    }
  `,
);
