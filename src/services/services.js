import { getUrl } from '../utils/get-url';

const { uri } = getUrl();

const fetchEmployees = async () => {
  let requestOptions = {
    method: 'GET',
  };

  const response = await fetch(uri, requestOptions);
  if (response.ok) return response.json();
  else {
    if (response.status === 400) {
      const error = { message: `Сервер не доступен ` };
      return Promise.reject(error);
    } else {
      const error = {
        message: `Ответ с сервера статус  ${response.status}(${response.statusText})`,
      };
      return Promise.reject(error);
    }
  }
};

export default fetchEmployees;
