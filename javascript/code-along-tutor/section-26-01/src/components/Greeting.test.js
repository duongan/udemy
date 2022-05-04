import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldEle = screen.getByText('Hello world!');
    expect(helloWorldEle).toBeInTheDocument();
  });

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputEle = screen.getByText('good to see you', { exact: false });
    expect(outputEle).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonEle = screen.getByRole('button');
    userEvent.click(buttonEle);

    // Assert
    const outputEle = screen.getByText('Changed!');
    expect(outputEle).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked!', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonEle = screen.getByRole('button');
    userEvent.click(buttonEle);

    // Assert
    const outputEle = screen.queryByText('good to see you', { exact: false });
    expect(outputEle).toBeNull();
  });
});
