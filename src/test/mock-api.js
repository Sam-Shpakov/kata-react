import mockData from '../../public/mock-items.json';

const timeout = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getDataSuccess = async () => {
  await timeout(1000);
  return Promise.resolve({
    type: 'default',
    status: 200,
    ok: true,
    statusText: 'OK',
    json: () => Promise.resolve(mockData),
  });
};

const getDataError = async () => {
  await timeout(1000);
  const error = { message: `Сервер не доступен ` };
  return Promise.resolve({
    type: 'default',
    status: 400,
    ok: true,
    statusText: 'OK',
    json: () => Promise.reject(error),
  });
};

export { getDataSuccess, getDataError };
