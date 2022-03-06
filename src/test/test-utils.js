import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';

import { reducer } from '../redux';

const getStoreWithState = (preloadedState) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};

const renderWithProviders = (element, state) => {
  const store = getStoreWithState(state);
  const utils = render(
    <BrowserRouter>
      <Provider store={store}>{element}</Provider>
    </BrowserRouter>
  );
  return { store, ...utils };
};

export { getStoreWithState, renderWithProviders };
