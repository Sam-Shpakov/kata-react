import { useState } from 'react';
import './Form.css';

const Form = ({ nameButton, onSubmit }) => {
  const [text, setText] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      onSubmit(text);
    }
    setText('');
  };

  const handleChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input
        className='form-input'
        onChange={handleChange}
        value={text}
        type='text'
      />
      <input className='form-button' type='submit' value={nameButton} />
    </form>
  );
};

export { Form };
