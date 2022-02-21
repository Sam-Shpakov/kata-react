import Header from '../../components/Header';
import CustomList from '../../components/CustomList';
import { logo, linksEmployee } from '../../constans';
import { useListEmployees } from '../../redux/hooks';
import './EmployeesPage.css';

const EmployeesPage = () => {
  const { employees, handleAddClick, handleDeleteClick } = useListEmployees();

  const onDeleteClick = (id) => {
    handleDeleteClick(id);
  };

  if (employees.error) {
    return (
      <div className='employees-container'>
        <Header logo={logo} links={linksEmployee} />
        <div className='employees-content'>
          <div className='employees-text'>Error: {employees.error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='employees-container'>
      <Header logo={logo} links={linksEmployee} />
      <div className='employees-content'>
        {employees.loading ? (
          <div className='employees-text'>Loading...</div>
        ) : (
          <CustomList>
            <CustomList.Form
              nameButton={'Добавить'}
              onSubmit={handleAddClick}
            />
            <CustomList.List>
              {employees.data.length !== 0 ? (
                employees.data.map((item) => (
                  <CustomList.ListItem
                    key={item.id}
                    id={item.id}
                    text={item.name}
                    onClick={onDeleteClick}
                    nameButton={'Удалить'}
                  />
                ))
              ) : (
                <div className='employees-text'>Нету пользователей</div>
              )}
            </CustomList.List>
          </CustomList>
        )}
      </div>
    </div>
  );
};
export default EmployeesPage;
