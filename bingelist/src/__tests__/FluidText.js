import React from 'react';
import { render } from 'react-testing-library';
import FluidText from '../components/FluidText';

const text = 'text to show';

it('renders the passed text', () => {
  const { getByText } = render(<FluidText text={text} />);
  expect(getByText(text)).toHaveTextContent(text);
});

it('renders a text container with the fluid-container class', () => {
  const { container } = render(<FluidText text={text} />);
  expect(container.querySelector('.fluid-container')).toBeInTheDocument();
});
