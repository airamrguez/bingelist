import React from 'react';
import { render } from 'react-testing-library';
import Header from '../components/Header';

it('renders left, text and right elements', () => {
  const { container } = render(<Header />);

  expect(container).toContainElement(container.querySelector('.left'));
  expect(container).toContainElement(container.querySelector('.text'));
  expect(container).toContainElement(container.querySelector('.right'));
});

it('renders the components passed to left, text and right props', () => {
  const left = <button>Left</button>;
  const text = 'Title text';
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  const right = <a>Link</a>;
  const { getByText } = render(
    <Header left={left} text={text} right={right} />,
  );

  expect(getByText('Left')).toBeInTheDocument();
  expect(getByText('Title text')).toBeInTheDocument();
  expect(getByText('Link')).toBeInTheDocument();
});
