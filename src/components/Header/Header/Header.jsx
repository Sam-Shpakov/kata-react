import { memo } from 'react';

import { Logo } from '../Logo';
import { List } from '../List';

import './Header.css';

const HeaderInner = ({ logo, links }) => {
  return (
    <div className='header-container'>
      <Logo>{logo}</Logo>
      <List links={links} />
    </div>
  );
};

export const Header = memo(HeaderInner);
