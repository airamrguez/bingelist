import React from 'react';
import { render } from 'react-testing-library';
import Poster from '../components/Poster';

it('renders an image', () => {
  const poster = { fullPath: 'https://server/fake/path' };
  const altText = 'A movie poster';
  const { getByAltText } = render(<Poster poster={poster} alt={altText} />);

  expect(getByAltText(altText)).toBeInTheDocument();
  expect(getByAltText(altText)).toHaveAttribute('src', poster.fullPath);
});
