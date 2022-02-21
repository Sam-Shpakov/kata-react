import { Form } from '../Form';
import { List } from '../List';
import { ListItem } from '../ListItem';

import './CustomList.css';

const CustomList = ({ children }) => {
  return <div className='customList-container'>{children}</div>;
};

export { CustomList };

CustomList.Form = Form;
CustomList.List = List;
CustomList.ListItem = ListItem;
