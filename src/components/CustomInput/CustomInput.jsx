import { memo } from 'react';
import './CustomInput.css';

const CustomInputInner = ({ name, value, onChange }) => {
  console.log('render', name);
  return (
    <div className='custom-input'>
      <input value={value} onChange={onChange} type='text' />
    </div>
  );
};

export const CustomInput = memo(CustomInputInner);
