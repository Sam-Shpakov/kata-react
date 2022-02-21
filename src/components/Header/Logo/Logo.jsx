import './Logo.css';

const Logo = ({ children }) => {
  return (
    <div className='logo-container'>
      <p className='logo-content'>{children}</p>
    </div>
  );
};

export { Logo };
