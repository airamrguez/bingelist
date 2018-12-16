import React from 'react';
import { render } from 'react-testing-library';
import MovieListItem from '../components/MovieListItem';
import { genresAsText } from '../utils';
import { mockMatchMedia } from '../setupTests';

const movie = {
  id: '1',
  title: 'WhoAmI',
  rating: 7.6,
  releaseYear: '2014',
  tagline: 'No system is safe',
  overview:
    "Benjamin, a young German computer whiz, is invited to join a subversive hacker group that wants to be noticed on the world's stage",
  genres: [
    {
      name: 'Thriller',
      id: '20',
    },
    {
      name: 'Computers',
      id: '21',
    },
  ],
  poster: {
    fullPath: 'https://fake/server/image.jpg',
  },
};

describe('For all kind of display sizes', () => {
  beforeEach(() => {
    // Here match media is mocked with false but it's not test dependent.
    mockMatchMedia(false);
  });

  it('renders a poster', () => {
    const { container, getByAltText } = render(<MovieListItem movie={movie} />);
    expect(getByAltText(movie.title)).toBeInTheDocument();
    expect(container.querySelector('.poster-container')).toContainElement(
      getByAltText(movie.title),
    );
  });

  it('renders a bookmark button', () => {
    const { getByAltText } = render(
      <MovieListItem movie={movie} isFavorite={false} />,
    );
    expect(getByAltText(/Add movie/i)).toBeInTheDocument();
  });

  it('renders a star when showStar is true', () => {
    const { getByAltText } = render(
      <MovieListItem movie={movie} showStar={true} />,
    );
    expect(getByAltText(/median/)).toBeInTheDocument();
  });
});

describe('for mobile display sizes', () => {
  beforeEach(() => {
    mockMatchMedia(false);
  });

  it('renders a star when showStar is true over the poster', () => {
    const { container, getByAltText } = render(
      <MovieListItem movie={movie} showStar={true} />,
    );
    expect(container.querySelector('.poster-container')).toContainElement(
      getByAltText(/median/),
    );
  });
});

describe('for tablets and widescreen displays', () => {
  beforeEach(() => {
    mockMatchMedia(true);
  });

  it('renders a description', () => {
    const { container } = render(<MovieListItem movie={movie} />);
    const descriptionNode = container.querySelector('.description');
    expect(descriptionNode).toBeInTheDocument();
    expect(descriptionNode).toContainElement(
      descriptionNode.querySelector('.heading .title'),
    );
    expect(descriptionNode).toContainElement(
      descriptionNode.querySelector('.heading .rating'),
    );
    expect(descriptionNode).toContainElement(
      descriptionNode.querySelector('.year'),
    );
    expect(descriptionNode).toContainElement(
      descriptionNode.querySelector('.genres'),
    );
    expect(descriptionNode).toContainElement(
      descriptionNode.querySelector('.overview'),
    );
    expect(descriptionNode).toContainElement(
      descriptionNode.querySelector('.footer'),
    );
  });

  it('renders a title inside the description', () => {
    const { container, getByText } = render(<MovieListItem movie={movie} />);
    const descriptionNode = container.querySelector('.description');

    expect(descriptionNode).toContainElement(getByText(movie.title));
  });

  it('renders a title in one line', () => {
    const { getByText } = render(<MovieListItem movie={movie} />);

    expect(getByText(movie.title)).toHaveClass('truncate-line');
  });

  it('renders the movie rating inside the description', () => {
    const { container, getByText, getByAltText } = render(
      <MovieListItem movie={movie} />,
    );
    const descriptionNode = container.querySelector('.description');

    expect(descriptionNode).toContainElement(getByText(String(movie.rating)));
    expect(descriptionNode).toContainElement(
      getByAltText(new RegExp(movie.rating)),
    );
  });

  it('renders the release year with an icon', () => {
    const { container, getByAltText, getByText } = render(
      <MovieListItem movie={movie} />,
    );
    const descriptionNode = container.querySelector('.description');
    const calendarIconNode = getByAltText(new RegExp(movie.releaseYear));

    expect(descriptionNode).toContainElement(calendarIconNode);
    expect(descriptionNode).toContainElement(getByText(movie.releaseYear));
  });

  it('renders the release year in one line', () => {
    const { getByTestId } = render(<MovieListItem movie={movie} />);
    expect(getByTestId('release-year')).toHaveClass('truncate-line');
  });

  it('renders a list of genres', () => {
    const { container } = render(<MovieListItem movie={movie} />);
    const movieGenres = genresAsText(movie.genres);

    const genresNode = container.querySelector('.description .genres');
    expect(genresNode).toHaveTextContent(movieGenres);
  });

  it('renders the genre list in one line', () => {
    const { container } = render(<MovieListItem movie={movie} />);
    const genresNode = container.querySelector('.description .genres');
    expect(genresNode).toHaveClass('truncate-line');
  });

  it('renders the movie overview', () => {
    const { container, getByText } = render(<MovieListItem movie={movie} />);
    const descriptionNode = container.querySelector('.description');

    expect(descriptionNode).toContainElement(getByText(movie.overview));
  });

  it('renders a star when showStar is true inside the description', () => {
    const { container, getByAltText } = render(
      <MovieListItem movie={movie} showStar={true} />,
    );
    const descriptionNode = container.querySelector('.description');

    expect(descriptionNode).toContainElement(getByAltText(/median/));
  });

  it('renders a more info button', () => {
    const { container, getByText } = render(<MovieListItem movie={movie} />);
    const descriptionNode = container.querySelector('.description');

    expect(descriptionNode).toContainElement(getByText('More info'));
  });
});
