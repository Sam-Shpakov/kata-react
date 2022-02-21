const formatServerDataToData = (data) =>
  data.map((item) => ({
    id: item.id,
    name: `${item.first_name} ${item.last_name}`,
  }));

const addItemData = (data, name) => [
  ...data,
  { name, id: `${name}${Math.random()}` },
];

const deleteItemData = (data, id) => data.filter((item) => item.id !== id);

export { addItemData, deleteItemData, formatServerDataToData };
