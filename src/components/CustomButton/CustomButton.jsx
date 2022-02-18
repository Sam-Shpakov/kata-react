import { memo } from 'react';
import './CustomButton.css';

const CustomButtonInner = ({ onClick }) => {
  console.log('render button');
  return (
    <div className='custom-input'>
      <button onClick={onClick}>Button</button>
    </div>
  );
};

export const CustomButton = memo(CustomButtonInner);
