import { useState, useCallback } from 'react';

import { CustomInput } from './components';
import './App.css';

export default function App() {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');

  // const onChangeName = (event) => {
  //   setName(event.target.value);
  // };

  const onChangeName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [name]
  );

  // const onChangeFullName = (event) => {
  //   setFullName(event.target.value);
  // };

  const onChangeFullName = useCallback(
    (event) => {
      setFullName(event.target.value);
    },
    [fullName]
  );

  return (
    <div className='input-div'>
      <CustomInput name='input-1' value={name} onChange={onChangeName} />
      <CustomInput
        name='input-2'
        value={fullName}
        onChange={onChangeFullName}
      />
      <button>Button</button>
    </div>
  );
}
