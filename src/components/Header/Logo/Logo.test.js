import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo testing', () => {
  const children = 'test children';
  it('renders Logo children', () => {
    render(<Logo>{children}</Logo>);
    expect(screen.getByText(/test children/i)).toBeInTheDocument();
  });
});
