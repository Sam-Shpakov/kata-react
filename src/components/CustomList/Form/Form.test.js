import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('Form', () => {
  const nameButton = 'test Button';
  const onSubmit = () => {};

  it('renders Form button', () => {
    render(<Form onSubmit={onSubmit} nameButton={nameButton} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/test Button/i)).toBeInTheDocument();
  });

  it('renders Form change input value', () => {
    render(<Form onSubmit={onSubmit} nameButton={nameButton} />);
    expect(screen.queryByText(/React test/)).toBeNull();
    const input = screen.getByRole('textbox');
    expect(input).toHaveDisplayValue('');
    userEvent.type(input, 'React test');
    expect(input).toHaveDisplayValue('React test');
  });

  it('renders Form input focus', () => {
    render(<Form onSubmit={onSubmit} nameButton={nameButton} />);
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('renders Form onSubmit', () => {
    render(<Form onSubmit={onSubmit} nameButton={nameButton} />);
    expect(screen.queryByText(/React test/)).toBeNull();
    const input = screen.getByRole('textbox');
    expect(input).toHaveDisplayValue('');
    userEvent.type(input, 'React test');
    expect(input).toHaveDisplayValue('React test');
    userEvent.click(screen.getByRole('button'), {
      ctrlKey: false,
      shiftKey: false,
    });
    expect(input).toHaveDisplayValue('');
  });
});
