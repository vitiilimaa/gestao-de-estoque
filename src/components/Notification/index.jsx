import styles from "./styles.module.css";
import { useContext } from "react";
import success from "../../img/success.svg";
import error from "../../img/error.svg";
import close from "../../img/close.svg";
import GlobalContext from "../../contexts/GlobalContext";

const Notification = ({ title, message, type }) => {
  const { notification, setNotification } = useContext(GlobalContext);

  function closeNotification(e) {
    e.target.style.animationName = styles.hideNotification;
    setTimeout(() => {
      setNotification((prevNotif) => ({ ...prevNotif, show: false }));
    }, 300);
  }

  return notification.show ? (
    <div
      className={styles.container}
      style={{ backgroundColor: type === "success" ? "#25ae88" : "#D75A4A" }}
      onAnimationEnd={closeNotification}
    >
      <div className={styles.title}>
        <img
          src={type === "success" ? success : error}
          alt=""
          width={25}
          height={25}
        />
        <span className={styles.titleText}>{title ? title : type === "success" ? "Sucesso" : "Erro"}</span>
        <button
          onClick={() =>
            setNotification((prevNotif) => ({ ...prevNotif, show: false }))
          }
          className={styles.btn}
        >
          <img src={close} alt="" width={20} height={20} />
        </button>
      </div>
      <span className={styles.message}>{message}</span>
    </div>
  ) : null;
};

export default Notification;
