import { useState, useRef } from "react";
import { Input, TextArea } from "./";
import StockItem from "../entities/StockItem";
import useStock from "../hooks/useStock";

const Form = ({ itemToBeUpdated }) => {
  const defaultItem = {
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    description: "",
  };

  const [item, setItem] = useState(itemToBeUpdated || defaultItem);
  const inputRef = useRef(null)
  const { addItem, updateItem, setNotification } = useStock();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (itemToBeUpdated) {
        updateItem(itemToBeUpdated.id, item);
        setNotification((currentState) => ({
          ...currentState,
          type: "success",
          message: "O item foi editado com sucesso!",
          show: true,
        }));
      } else {
        const stockItem = new StockItem(item);
        addItem(stockItem);
        setItem(defaultItem);
        setNotification((currentState) => ({
          ...currentState,
          type: "success",
          message: "O item foi adicionado com sucesso!",
          show: true,
        }));
      }
    } catch {
      setNotification((currentState) => ({
        ...currentState,
        type: "error",
        message:
          "Erro ao realizar a ação. Verifique os campos e tente novamente.",
        show: true,
      }));
    } finally {
      inputRef.current.focus();
    }
  };

  return (
    <form className="containerForm" onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        id="name"
        label="Nome"
        value={item.name}
        setValue={setItem}
        required
      />
      <Input
        id="quantity"
        type="number"
        label="Quantidade"
        value={item.quantity}
        setValue={setItem}
        min="1"
        required
      />
      <Input
        id="price"
        type="number"
        label="Preço"
        min="1"
        step="0.01"
        value={item.price}
        setValue={setItem}
        required
      />
      <Input
        id="category"
        label="Categoria"
        value={item.category}
        setValue={setItem}
        required
      />
      <TextArea
        id="description"
        label="Descrição"
        value={item.description}
        setValue={setItem}
        required
      />
      <div className="btnContainerForm">
        <button className="btn btnForm" style={{ float: "right" }}>Salvar</button>
      </div>
    </form>
  );
};

export default Form;
