import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListItem } from './ListItem';

describe('List Item', () => {
  const text = 'test text';
  const id = 'testid';
  const nameButton = 'test Button';
  const onClick = () => {};
  it('renders List Item component text', () => {
    render(
      <ListItem id={id} text={text} onClick={onClick} nameButton={nameButton} />
    );
    const linkElement = screen.getByText(/test text/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders List Item component button', () => {
    render(
      <ListItem id={id} text={text} onClick={onClick} nameButton={nameButton} />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/test Button/i)).toBeInTheDocument();
  });
});
