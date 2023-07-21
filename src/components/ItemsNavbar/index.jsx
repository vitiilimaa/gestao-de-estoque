import { useEffect, useState, useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import GlobalContext from "../../contexts/GlobalContext";

const ItemsNavbar = () => {
  const { setTitle } = useContext(GlobalContext);
  const { pathname } = useLocation();

  const [allItemsTab, setAllItemsTab] = useState(false);
  const [newItemTab, setNewItemTab] = useState(false);

  useEffect(() => setTitle("Stock Items"), []);

  useEffect(() => {
    pathname.includes("add")
      ? (setNewItemTab(true), setAllItemsTab(false))
      : (setAllItemsTab(true), setNewItemTab(false));
  });

  return (
    <>
      <nav className={styles.navContainer}>
        <Link
          className={`${styles.tab} ${allItemsTab ? styles.choicedTab : ""}`}
          to="/items"
        >
          Todos os itens
        </Link>
        <Link
          className={`${styles.tab} ${newItemTab ? styles.choicedTab : ""}`}
          to={`/items/add`}
        >
          Novo item
        </Link>
      </nav>
      <hr />
      <div className={styles.screensContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default ItemsNavbar;
