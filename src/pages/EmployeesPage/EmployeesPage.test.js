import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { EmployeesPage } from './EmployeesPage';
import { renderWithProviders } from '../../test/test-utils';
import { getDataSuccess, getDataError } from '../../test/mock-api';

const unmockedFetch = global.fetch;

beforeEach(() => {
  global.fetch = unmockedFetch;
});

describe('The Employees page', () => {
  test('shows loading and error fetch', async () => {
    global.fetch = getDataError;
    renderWithProviders(<EmployeesPage />);
    await waitFor(() => {
      expect(screen.getByText(/Error:/i)).toBeInTheDocument();
    });
  });

  test('shows loading and success fetch', async () => {
    global.fetch = getDataSuccess;
    renderWithProviders(<EmployeesPage />);
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    const buttons = await screen.findAllByText('Удалить');
    expect(buttons).toHaveLength(12);
  });

  it('click on buttons', async () => {
    global.fetch = getDataSuccess;
    renderWithProviders(<EmployeesPage />);
    const buttons = await screen.findAllByText('Удалить');
    userEvent.click(buttons[0]);
    const newButtons = await screen.findAllByText('Удалить');
    expect(newButtons).toHaveLength(11);
    userEvent.click(newButtons[0]);
    const tenButtons = await screen.findAllByText('Удалить');
    expect(tenButtons).toHaveLength(10);
  });

  it('Add user', async () => {
    global.fetch = getDataSuccess;
    renderWithProviders(<EmployeesPage />);
    await screen.findAllByText(/Удалить/i);
    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', {
      name: /Добавить/i,
    });
    userEvent.type(input, 'React test');
    userEvent.click(addButton, {
      ctrlKey: false,
      shiftKey: false,
    });
    const buttons = await screen.findAllByText(/Удалить/i);
    expect(buttons).toHaveLength(13);
    expect(screen.getByText(/React test/i)).toBeInTheDocument();
  });
});
