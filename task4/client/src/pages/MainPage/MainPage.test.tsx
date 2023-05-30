import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('MainPage', () => {
  it('renders the input element and displays the typed data', () => {
    render(<MainPage />);

    const inputElement = screen.getByRole('textbox');
    const displayElement = screen.getByText('Data:');

    fireEvent.change(inputElement, { target: { value: 'Hello, world!' } });

    expect(inputElement).toBeInTheDocument();
    expect(displayElement).toHaveTextContent('Data: Hello, world!');
  });
});
