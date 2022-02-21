import React, { Fragment } from 'react';
import { useRoutes } from './hooks';

import './App.css';

const App = () => {
  const routes = useRoutes();
  return <Fragment>{routes}</Fragment>;
};

export default App;
