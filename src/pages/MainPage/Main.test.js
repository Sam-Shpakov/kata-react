import React from 'react';
import { screen } from '@testing-library/react';

import { MainPage } from './MainPage';
import { renderWithProviders } from '../../test/test-utils';

describe('The Main page', () => {
  it('shows Main page', async () => {
    renderWithProviders(<MainPage />);
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });
});
