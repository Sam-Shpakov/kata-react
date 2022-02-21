import './ListItem.css';

const ListItem = ({ text, id, nameButton, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <div className='list-item-container'>
      <span className='list-item-content'>{text}</span>
      <button className='list-item-button' onClick={handleClick}>
        {nameButton}
      </button>
    </div>
  );
};

export { ListItem };
