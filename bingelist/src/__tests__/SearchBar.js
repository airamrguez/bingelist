import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import SearchBar from '../components/SearchBar';

test('calls handleSearchClick using the entered genre when submitted', () => {
  const handleSubmit = jest.fn();
  const { container, getByLabelText } = render(
    <SearchBar handleSearchClick={handleSubmit} />,
  );

  const genre = 'Action';
  const genreNode = getByLabelText('Movie genre');
  const formNode = container.querySelector('form');

  fireEvent.change(genreNode, { target: { value: genre } });
  fireEvent.submit(formNode);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(genre);
});

test('renders a submit button', () => {
  const { getByText } = render(<SearchBar />);
  const submitButtonNode = getByText('Search');

  expect(submitButtonNode.type).toBe('submit');
});
