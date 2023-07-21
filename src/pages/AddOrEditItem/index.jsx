import { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import formatDate from "../../functions/formatDate";
import GlobalContext from "../../contexts/GlobalContext";
import styles from "./styles.module.css";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

const AddOrEditItem = ({ isEditItem }) => {
  const { setNotification } = useContext(GlobalContext);
  const navigate = useNavigate();
  const item = useLoaderData() ?? [];
  const items = JSON.parse(localStorage.getItem("items")) ?? [];

  const [name, setName] = useState(item.name ?? "");
  const [quantity, setQuantity] = useState(item.quantity ?? 0);
  const [price, setPrice] = useState(item.price ?? "");
  const [category, setCategory] = useState(item.category ?? 0);
  const [description, setDescription] = useState(item.description ?? "");

  function clearStates() {
    setName("");
    setQuantity(0);
    setPrice(0);
    setCategory("");
    setDescription("");
  }

  function showNotification(action, message) {
    setNotification((prevNotif) => ({
      ...prevNotif,
      type: action === "add" || action === "edit" ? "success" : "error",
      message: action === "add" ? message : action === "edit" ? message : message,
      show: true,
    }));
  }

  function addOrEditItem(e) {
    e.preventDefault();
    const itemObj = {
      id: item.id || parseInt(Math.random() * 100),
      name: name,
      quantity: quantity,
      price: price,
      category: category,
      description: description,
      createdAt: item.createdAt || formatDate(new Date()),
      updatedAt: formatDate(new Date()),
    };

    try {
      if (Object.keys(itemObj).length) {
        //se a const item retornar um array, significa que não estamos trabalhando com o objeto de uma linha selecionada da tabela
        if (Array.isArray(item)) {
          localStorage.setItem("items", JSON.stringify([...items, itemObj]));
          showNotification("add", "Item adicionado com sucesso!");
          clearStates();
        } else {
          //buscamos o index do objeto da linha selecionada entre todos os itens da tabela e depois trocamos ele pelo já editado
          console.log(items, item)
          const index = items.findIndex((itemArray) => itemArray.id === item.id);
          if (index >= 0) {
            items.splice(index, 1, itemObj);
            localStorage.setItem("items", JSON.stringify(items));
            showNotification("edit", "Item editado com sucesso!");
            navigate("/items");
          } else {
            throw new Error("Erro ao realizar a ação. Verifique os campos e tente novamente.");
          }
        }
      } else {
        throw new Error("Erro ao realizar a ação. Verifique os campos e tente novamente.");
      }
    } catch (e) {
      showNotification("error", e.message);
    }
  }

  useEffect(() => {
    if (!isEditItem) clearStates();
  }, [isEditItem]);

  return (
    <form className={styles.wrapper} onSubmit={addOrEditItem}>
      <Input 
        id="name" 
        label="Nome" 
        value={name} 
        setValue={setName} 
        required 
      />
      <Input
        id="quantity"
        type="number"
        label="Quantidade"
        value={quantity}
        setValue={setQuantity}
        min="1"
        required
      />
      <Input
        id="price"
        type="number"
        label="Preço"
        min="1"
        step="0.01"
        value={price}
        setValue={setPrice}
        required
      />
      <Input
        id="category"
        label="Categoria"
        value={category}
        setValue={setCategory}
        required
      />
      <TextArea
        id="description"
        label="Descrição"
        value={description}
        setValue={setDescription}
        required
      />
      <div className={styles.btnContainer}>
        <button>Salvar</button>
      </div>
    </form>
  );
};

export default AddOrEditItem;
