import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

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

describe('Header', () => {
  const links = [
    { isActive: false, id: 'main', href: '/', name: 'test Главная' },
    { isActive: true, id: 'employees', href: '/employees', name: 'Сотрудники' },
  ];
  const logo = 'LOGO';
  test('renders Header', () => {
    renderWithRouter(<Header links={links} logo={logo} />);
    expect(screen.getByText(/LOGO/i)).toBeInTheDocument();
    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
  });
});
