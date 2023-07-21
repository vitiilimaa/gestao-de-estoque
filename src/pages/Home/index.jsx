import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import formatDate from "../../functions/formatDate";
import styles from "./styles.module.css";
import Card from "../../components/Card";
import Table from "../../components/Table";
import GlobalContext from "../../contexts/GlobalContext";

const Home = () => {
  const items = useLoaderData();
  const { setTitle } = useContext(GlobalContext);

  const itemsDiversity = () => {
    const uniqueItems = {};
    items.forEach((itemObj) => (uniqueItems[itemObj.name] = true));
    return Object.keys(uniqueItems);
  };
  const currentItems = items.filter((item) => formatDate(item.createdAt));
  const itemsRunningOut = items.filter((item) => item.quantity < 10);

  useEffect(() => setTitle("Dashboard"), []);

  return (
    <div className={styles.container}>
      <div className={styles.dashboardSection}>
        <Card title="Diversidade de itens" value={itemsDiversity().length} />
        <Card title="Inventário total" value={items.length} />
        <Card title="Itens recentes" value={currentItems.length} />
        <Card title="Itens acabando" value={itemsRunningOut.length} />
      </div>
      <div className={styles.dashboardSection}>
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
