import { createContext, useState } from "react";
import { format } from "date-fns"
import { Notification } from "../components";

const StockContext = createContext({});

const StockContextProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    return items;
  });

  const getItem = (itemId) => items.find((item) => item.id === +itemId);

  const addItem = (item) => {
    setItems((currentState) => {
      const updatedItems = [...currentState, item];
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const updateItem = (itemId, attr) => {
    setItems(currentState => {
      const itemIndex = currentState.findIndex(item => item.id === +itemId)
      const updatedItems = [...currentState]
      Object.assign(updatedItems[itemIndex], attr, { updatedAt: format(new Date(), "dd/MM/yyyy") })
      return updatedItems 
   })
  }

  const deleteItem = (itemId) => {
    setItems((currentState) => {
      const updatedItems = currentState.filter((item) => item.id !== +itemId);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const [notification, setNotification] = useState({
    title: "",
    message: "",
    type: "",
    show: false,
  });

  const stock = {
    items,
    getItem,
    addItem,
    updateItem,
    deleteItem,
    setNotification,
  };

  return (
    <StockContext.Provider value={stock}>
      <Notification
        title={notification.title}
        message={notification.message}
        type={notification.type}
        show={notification.show}
      />
      {children}
    </StockContext.Provider>
  );
};

export { StockContext, StockContextProvider };
