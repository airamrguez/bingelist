import React, { PureComponent } from 'react';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import idx from 'idx';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import FluidText from './FluidText';
import FavouriteIcon from '../assets/svg/favorites.svg';
import { isNil, firstGenre } from '../utils';

class MovieSearchPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { errorMessage: undefined };
    this.currentFetch = null;
  }
  componentWillUnmount() {
    if (!isNil(this.currentFetch)) {
      this.currentFetch.dispose();
    }
  }
  handleSearchClick = searchText => {
    // We could show an different message when searchText is empty,
    // but the specifications does not tell anything about what to do in that case.
    const genre = firstGenre(searchText);
    this.currentFetch = this.props.relay.refetch(
      { genre, hasGenre: true },
      null,
      error => {
        // As this is a PureComponent, setting the same errorMessage several times
        // will not trigger unnecessary re-renders.
        this.setState({ errorMessage: idx(error, _ => _[0].message) });
        this.currentFetch = null;
      },
    );
  };
  renderQueryResults() {
    const props = this.props;
    const movies = idx(props, _ => _.search.allMovies.data);
    if (!isNil(movies)) {
      return (
        <MovieList
          {...props}
          movies={movies}
          emptyMessage={`There are no movies for this category.\nTry another one!`}
        />
      );
    } else {
      return (
        <FluidText text={`Please enter a genre to find movies\ne.g. Action`} />
      );
    }
  }
  render() {
    const { errorMessage } = this.state;
    const showResults = isNil(errorMessage);
    return (
      <>
        <Header
          text="My Binge List"
          right={
            <button
              onClick={() => this.props.navigation.navigate('favorites')}
              data-testid="show-favorites-button"
            >
              <img src={FavouriteIcon} alt="Show favorites" />
            </button>
          }
        />
        <div className="container">
          <SearchBar
            placeholder="Enter genre"
            handleSearchClick={this.handleSearchClick}
          />
          {showResults ? (
            this.renderQueryResults()
          ) : (
            <FluidText text={errorMessage} />
          )}
        </div>
      </>
    );
  }
}

export default createRefetchContainer(
  MovieSearchPage,
  // The first time no movies should be fetched. They are fetch only when the
  // user clicks on the search button.
  graphql`
    fragment MovieSearchPage_search on Query
      @argumentDefinitions(
        genre: { type: "String!", defaultValue: "" }
        hasGenre: { type: "Boolean!", defaultValue: false }
      ) {
      allMovies(genre: $genre, limit: 10) @include(if: $hasGenre) {
        data {
          ...MovieList_movies
        }
      }
    }
  `,
  graphql`
    query MovieSearchPageRefetchQuery($genre: String!, $hasGenre: Boolean!) {
      ...MovieSearchPage_search @arguments(hasGenre: $hasGenre, genre: $genre)
    }
  `,
);
