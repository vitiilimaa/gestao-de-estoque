import { useState, useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import MiniCard from "../../components/MiniCard";
import GlobalContext from "../../contexts/GlobalContext";

const ViewItem = () => {
  const { setNotification } = useContext(GlobalContext);
  const item = useLoaderData();
  const price = +item.price
  const formatedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const navigate = useNavigate();

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")));

  function removeItem(id) {
    try {
      const filteredItems = items.filter((data) => data.id !== id);
      if (filteredItems.length !== items.length) {
        setItems(filteredItems);
        localStorage.setItem("items", JSON.stringify(filteredItems));
        setNotification((prevNotif) => ({
          ...prevNotif,
          type: "success",
          message: "Item removido com sucesso!",
          show: true,
        }));
        navigate("/items");
      } else {
        throw new Error("Erro ao remover o item.");
      }
    } catch (e) {
      setNotification((prevNotif) => ({
        ...prevNotif,
        type: "error",
        message: e.message,
        show: true,
      }));
    }
  }

  return (
    <>
      <div className={styles.manipulationSection}>
        <p className={styles.itemName}>{item.name}</p>
        <div className={styles.btnsSection}>
          <Link to={`/items/edit/${item.id}/${item.name?.replace(/\s/g, "-")}`}>
            <button>Atualizar</button>
          </Link>
          <button onClick={() => removeItem(item.id)}>Excluir</button>
        </div>
      </div>
      <div className={styles.miniCardsContainer}>
        <MiniCard title="Categoria" value={item.category} />
        <MiniCard title="Quantidade em estoque" value={item.quantity} />
        <MiniCard title="Preço" value={formatedPrice} />
      </div>
      <p style={{ fontSize: 18 }}>{item.description}</p>
      <div className={styles.infoSection}>
        <p>
          <b>Cadastrado em:</b> {item.createdAt}
        </p>
        <p>
          <b>Atualizado em:</b> {item.createdAt}
        </p>
      </div>
    </>
  );
};

export default ViewItem;
