import React from 'react';
import Header from './Header';
import MovieList from './MovieList';

export default function FavoriteMoviesPage(props) {
  const { favorites, navigation, ...rest } = props;
  return (
    <>
      <Header
        text="Favourite Movies"
        left={
          <button
            onClick={() => navigation.goBack()}
            data-testid="go-back-button"
          >
            <img
              src={require('../assets/svg/back-arrow.svg')}
              alt="Go back to search"
            />
          </button>
        }
      />
      <div className="container">
        <MovieList
          {...rest}
          favorites={favorites}
          movies={favorites}
          emptyMessage={`You still don't have favorite movies.\nBrowse a category and bookmark one.`}
        />
      </div>
    </>
  );
}
