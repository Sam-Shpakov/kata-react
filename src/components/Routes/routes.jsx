import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, EmployeesPage } from '..';

const useRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/employees' element={<EmployeesPage />} />
    </Routes>
  );
};

export default useRoutes;
