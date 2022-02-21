import { useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import allActions from '../actions';

const useListEmployees = () => {
  const getEmployees = allActions.employeesActions.getData;
  const addEmployee = allActions.employeesActions.addItem;
  const deleteEmployee = allActions.employeesActions.deleteItem;
  const employees = useSelector((state) => state.main, shallowEqual);
  const dispatch = useDispatch();
  const getData = useCallback(
    (state) => dispatch(getEmployees(state)),
    [dispatch]
  );
  const addItem = useCallback(
    (state) => dispatch(addEmployee(state)),
    [dispatch]
  );

  const deleteItem = useCallback(
    (state) => dispatch(deleteEmployee(state)),
    [dispatch]
  );

  const handleAddClick = (name) => {
    addItem({ data: employees.data, name });
  };

  const handleDeleteClick = (id) => {
    deleteItem({ data: employees.data, id });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return () => (mounted = false);
  }, []);

  return { employees, handleAddClick, handleDeleteClick };
};

export default useListEmployees;
