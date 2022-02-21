import React from 'react';

import Header from '../../components/Header';
import { logo, linksMain } from '../../constans';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className='main-container'>
      <Header logo={logo} links={linksMain} />
      <div className='main-content'>Main</div>
    </div>
  );
};
export default MainPage;
