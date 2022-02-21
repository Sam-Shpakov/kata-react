import { Link } from 'react-router-dom';

import './List.css';

const List = ({ links }) => {
  return (
    <div className='list-container'>
      {links.map((item) => (
        <Link key={item.id} to={item.href}>
          <div
            className={item.isActive ? 'active-item list-text' : 'list-text'}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export { List };
