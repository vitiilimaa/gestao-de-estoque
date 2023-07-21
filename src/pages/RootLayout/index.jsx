import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import GlobalContext from "../../contexts/GlobalContext";
import styles from "./styles.module.css";
import Notification from "../../components/Notification";

const RootLayout = () => {
  const [title, setTitle] = useState("");
  const [notification, setNotification] = useState({
    title: "",
    message: "",
    type: "success",
    show: false
  })

  const sharedData = {
    title, setTitle, 
    notification, setNotification
  };

  return (
    <GlobalContext.Provider value={sharedData}>
      <Notification title={notification.title} message={notification.message} type={notification.type} />
      <header>
        <p className={styles.appTitle}>GESTOR DE ESTOQUE</p>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/items">Itens</Link>
        </nav>
      </header>
      <h1 className={styles.title}>{title}</h1>
      <Outlet />
      <footer>
        <p>Desenvolvido por Vitor Batista</p>
      </footer>
    </GlobalContext.Provider>
  );
};

export default RootLayout;
