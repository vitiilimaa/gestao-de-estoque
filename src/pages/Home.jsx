import { Card, Table } from "../components";
import useStock from "../hooks/useStock";

const Home = () => {
  const { items } = useStock()

  const totalInventory = items.reduce((acc, item) => acc + +item.quantity, 0);
  const limitDate = new Date()
  limitDate.setDate(limitDate.getDate() - 10)
  const currentItems = items.filter(item => {
    const dateDivided = item.createdAt.split("/")
    const day = dateDivided[0]
    const month = dateDivided[1]
    const year = dateDivided[2]
    const dateFormated = new Date(year, month, day)
    return dateFormated > limitDate
  })  
  const itemsRunningOut = items.filter((item) => item.quantity < 10);

  return (
    <div className="containerHome">
      <h1 className="title">Dashboard</h1>
      <div className="cardsSection">
        <Card title="Diversidade de itens" value={items.length} />
        <Card title="Inventário total" value={totalInventory} />
        <Card title="Itens recentes" value={currentItems.length} />
        <Card title="Itens acabando" value={itemsRunningOut.length} />
      </div>
      <div className="tablesSection">
        <Table
          columns={[{
            name: "Itens recentes",
            dataField: "name",
          }]}
          dataSource={currentItems}
          actions={{ view: true }}
        />
        <Table
          columns={[{
            name: "Itens acabando",
            dataField: "name",
          }, {
            name: "Qtd.",
            dataField: "quantity",
          }]}
          dataSource={itemsRunningOut}
          actions={{ view: true }}
        />
      </div>
    </div>
  );
};

export default Home;
