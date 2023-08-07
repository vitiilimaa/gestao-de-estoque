import useStock from "../../hooks/useStock";
import { Table } from "../../components";

const Items = () => {
  const { items } = useStock()

  return (
    <Table
      dataSource={items}
      columns={[{
        name: "ID",
        dataField: "id",
      }, {
        name: "Nome",
        dataField: "name",
      }, {
        name: "Em Estoque",
        dataField: "quantity",
      }, {
        name: "Categoria",
        dataField: "category",
      }]}
      actions={{ view: true, update: true, delete: true }}
    />
  );
}

export default Items