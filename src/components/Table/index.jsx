import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import GlobalContext from "../../contexts/GlobalContext";

const Table = ({ columns, dataSource, actions }) => {
  const [dataTable, setDataTable] = useState(dataSource);
  const { setNotification } = useContext(GlobalContext);
  
  function removeItem(id) {
    try {
      const items = dataTable.filter((data) => data.id !== id);
      if (items.length !== dataTable.length) {
        setDataTable(items);
        localStorage.setItem("items", JSON.stringify(items));
        setNotification((prevNotif) => ({
          ...prevNotif,
          type: "success",
          message: "Item removido com sucesso!",
          show: true,
        }));
      } else {
        throw new Error("Erro ao remover o item.")
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

  return columns ? (
    <div className={styles.container}>
      <table>
        <thead>
          <tr className={styles.colBar}>
            {columns.map((col) => <th key={col.dataField}>{col.name}</th>)}
            {actions ? <th>Ações</th> : null}
          </tr>
        </thead>
        <tbody>
          {dataTable ? dataTable.map((data, index) => (
            <tr key={`id-${index}`}>
              {columns.map((col) => (
                <td key={`${col.dataField}-${data.id}`}>
                  {data[col.dataField]}
                </td>
              ))}
              {actions ? (
                <td className={styles.actions}>
                  {actions.view ? (
                    <Link
                      to={`/items/${data.id}/${data.name?.replace(
                        /\s/g,
                        "-"
                      )}`}
                    >
                      <button>Ver</button>
                    </Link>
                  ) : null}
                  {actions.update ? (
                    <Link
                      to={`/items/edit/${data.id}/${data.name?.replace(
                        " ",
                        "-"
                      )}`}
                    >
                      <button>Atualizar</button>
                    </Link>
                  ) : null}
                  {actions.delete ? (
                    <button onClick={() => removeItem(data.id)}>
                      Excluir
                    </button>
                  ) : null}
                </td>
              ) : null}
            </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default Table;
