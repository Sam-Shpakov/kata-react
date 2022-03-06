import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../MainPage';
import { EmployeesPage } from '../EmployeesPage';

const RoutesPages = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/employees' element={<EmployeesPage />} />
    </Routes>
  );
};

export { RoutesPages };
