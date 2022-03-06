import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RoutesPages } from './RoutesPages';
import { getDataSuccess } from '../../test/mock-api';
import { renderWithProviders } from '../../test/test-utils';

const unmockedFetch = global.fetch;

beforeEach(() => {
  global.fetch = unmockedFetch;
});

describe('routes', () => {
  it('should render the main page', () => {
    const { container } = renderWithProviders(<RoutesPages />);
    expect(container.innerHTML).toMatch('Main');
    expect(screen.getByText(/Главная/i)).toHaveClass('active-item');
    expect(screen.getByText(/Сотрудники/i)).not.toHaveClass('active-item');
  });

  it('should navigate to the employees page', async () => {
    global.fetch = getDataSuccess;
    renderWithProviders(<RoutesPages />);
    userEvent.click(screen.getByText(/Сотрудники/i), {
      ctrlKey: false,
      shiftKey: false,
    });
    const buttons = await screen.findAllByText(/Удалить/i);
    expect(buttons).toHaveLength(12);
    expect(screen.getByText(/Сотрудники/i)).toHaveClass('active-item');
    expect(screen.getByText(/Главная/i)).not.toHaveClass('active-item');
    userEvent.click(screen.getByText(/Главная/i), {
      ctrlKey: false,
      shiftKey: false,
    });
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });
});
