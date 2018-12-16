import React from 'react';
import { render } from 'react-testing-library';
import Column from '../components/Column';

it('renders the passed children', () => {
  const children = <div>child nodes</div>;
  const { container, getByText } = render(<Column>{children}</Column>);
  expect(container).toContainElement(getByText('child nodes'));
});

it('renders a column with the column class', () => {
  const { container } = render(<Column />);
  expect(container.querySelector('.column')).toBeInTheDocument();
});
