import { success, error, close } from "../img";
import useStock from "../hooks/useStock";

const Notification = ({ title, message, type, show }) => {
  const { setNotification } = useStock()

  const defaultSettings = {
    title: "",
    message: "",
    type: "",
    show: false
  }

  const closeNotification = (e) => {
    e.target.style.animationName = "hideNotification"
    setTimeout(() => setNotification(defaultSettings), 300)
  };

  return show ? (
    <div
      className="containerNotification"
      style={{ backgroundColor: type === "success" ? "#25ae88" : "#D75A4A" }}
      onAnimationEnd={closeNotification}
    >
      <div className="containerTitleNotification">
        <img
          src={type === "success" ? success : error}
          alt=""
          width={25}
          height={25}
        />
        <span className="titleNotification">
          {title ? title : type === "success" ? "Sucesso" : "Erro"}
        </span>
        <button
          onClick={() => setNotification((prevNotif) => ({ ...prevNotif, show: false }))}
          className="btnNotification"
        >
          <img src={close} alt="" width={20} height={20} />
        </button>
      </div>
      <span>{message}</span>
    </div>
  ) : null;
};

export default Notification;
