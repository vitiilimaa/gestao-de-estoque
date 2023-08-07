import useStock from "../hooks/useStock";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ itemId, itemName }) => {
  const { deleteItem, setNotification } = useStock();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja remover o item ${itemName}?`)) {
      deleteItem(itemId);
      setNotification(() => ({
        type: "success",
        title: "Sucesso",
        message: `O item ${itemName} foi removido com sucesso!`,
        show: true,
      }));
      navigate("/items");
    }
  };

  return (
    <button className="btn" onClick={handleDelete}>
      Excluir
    </button>
  );
};

export default DeleteButton;
