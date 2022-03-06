import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { List } from './List';

const renderWithRouter = (
  component,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <BrowserRouter history={history}>{children}</BrowserRouter>
  );
  return {
    ...render(component, { wrapper: Wrapper }),
    history,
  };
};

describe('List', () => {
  const linksEmployee = [
    { isActive: false, id: 'main', href: '/', name: 'Главная' },
    { isActive: true, id: 'employees', href: '/employees', name: 'Сотрудники' },
  ];

  it('renders List Employee', () => {
    renderWithRouter(<List links={linksEmployee} />);
    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
    expect(screen.getByText(/Главная/i)).not.toHaveClass('active-item');
    expect(screen.getByText(/Сотрудники/i)).toHaveClass('active-item');
  });
  const linksMain = [
    { isActive: true, id: 'main', href: '/', name: 'Главная' },
    {
      isActive: false,
      id: 'employees',
      href: '/employees',
      name: 'Сотрудники',
    },
  ];

  it('renders List Main', () => {
    renderWithRouter(<List links={linksMain} />);
    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
    expect(screen.getByText(/Сотрудники/i)).not.toHaveClass('active-item');
    expect(screen.getByText(/Главная/i)).toHaveClass('active-item');
  });
});
