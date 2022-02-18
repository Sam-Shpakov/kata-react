import './CustomText.css';

const CustomText = ({ name }) => {
  console.log('render Text');
  return <div className='custom-text'>Text {name.toString()}</div>;
};

export default CustomText;
