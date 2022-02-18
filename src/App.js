import { useState, useCallback } from 'react';

import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import CustomText from './components/CustomText';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isActive, setIsActive] = useState(false);

  // const onChangeName = (event) => {
  //   setName(event.target.value);
  // };

  const onChangeName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  // const onChangeFullName = (event) => {
  //   setFullName(event.target.value);
  // };

  const onChangeFullName = useCallback((event) => {
    setFullName(event.target.value);
  }, []);

  const onClick = useCallback(() => {
    console.log('click');
    setIsActive((prev) => !prev);
  }, []);

  return (
    <div className='input-div'>
      <CustomText name={isActive} />
      <CustomInput name='input-1' value={name} onChange={onChangeName} />
      <CustomInput
        name='input-2'
        value={fullName}
        onChange={onChangeFullName}
      />
      <CustomButton onClick={onClick} />
    </div>
  );
};

export default App;
