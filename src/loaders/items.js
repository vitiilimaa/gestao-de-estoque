const loadItems = () => {
  const items = JSON.parse(localStorage.getItem("items")) ?? [];
  return items;
};

const loadItem = ({ params }) => {
  const item = loadItems().find((i) => i.id === +params.itemId) ?? [];

  return item;
};

export { loadItems, loadItem };
