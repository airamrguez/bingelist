import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from '../components/Button';

it('renders a button element', () => {
  const buttonText = 'Test Text Button';
  const { getByText } = render(<Button text={buttonText} />);

  expect(getByText(buttonText)).toHaveTextContent(buttonText);
  expect(getByText(buttonText)).toHaveClass('button');
});

it('calls handleClick when the button is clicked', () => {
  const handleClick = jest.fn();
  const buttonText = 'My Button';

  const { getByText } = render(
    <Button text={buttonText} onClick={handleClick} />,
  );
  const buttonNode = getByText(buttonText);

  fireEvent.click(buttonNode);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
