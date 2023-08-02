import { useLoaderData } from "react-router-dom";
import Table from "../../../components/Table";

const Items = () => {
  const items = useLoaderData();

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
    ></Table>
  );
}

export default Items