import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('check render App', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
