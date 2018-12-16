import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import Media from 'react-media';
import Poster from './Poster';
import Button from './Button';
import Bookmark from './Bookmark';
import MedianStar from './MedianStar';
import { genresAsText } from '../utils';
import './MovieListItem.css';

function MovieListItem(props) {
  const {
    movie: { id, poster, title, rating, releaseYear, overview, genres = [] },
    showStar,
    isFavorite,
    relay,
  } = props;

  return (
    <Media query={{ minWidth: 740 }}>
      {matches => (
        <span
          className={`movie ${matches ? 'expanded' : ''}`}
          data-testid={`movie-${id}`}
        >
          <span className="poster-container">
            <Poster poster={poster} alt={title} />
            <div className="bookmark">
              <Bookmark movieId={id} isFavorite={isFavorite} relay={relay} />
            </div>
            {!matches && showStar && (
              <div className="median-star">
                <MedianStar />
              </div>
            )}
          </span>
          {matches && (
            <span className="description">
              <div className="heading">
                <span className="title truncate-line">{title}</span>
                <span className="rating">
                  <span className="value">{rating}</span>
                  <img
                    src={require('../assets/svg/rating_star.svg')}
                    alt={`Rating ${rating}`}
                  />
                </span>
              </div>
              <div className="subheading">
                <span className="truncate-line" data-testid="release-year">
                  <img
                    src={require('../assets/svg/calendar_icon.svg')}
                    alt={`Movie released at ${releaseYear}`}
                  />
                  <span className="year">{releaseYear}</span>
                </span>
                <span className="genres truncate-line">
                  {genresAsText(genres)}
                </span>
              </div>
              <div className="overview">
                <p>{overview}</p>
              </div>
              <div className="footer">
                {showStar && <MedianStar />}
                <Button text="More info" />
              </div>
            </span>
          )}
        </span>
      )}
    </Media>
  );
}

MovieListItem.defaultProps = {
  showStar: false,
};

export default createFragmentContainer(
  MovieListItem,
  graphql`
    fragment MovieListItem_movie on Movie {
      id
      title
      rating
      releaseYear
      tagline
      overview
      genres {
        name
      }
      poster(size: SMALL) {
        ...Poster_poster
      }
    }
  `,
);
