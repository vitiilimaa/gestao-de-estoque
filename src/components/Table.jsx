import { Link } from "react-router-dom";
import { DeleteButton } from "./";

const Table = ({ columns, dataSource, actions }) => {
  return columns ? (
    <div className="containerTable">
      <table>
        <thead>
          <tr className="colBar">
            {columns.map((col) => <th key={col.dataField}>{col.name}</th>)}
            {actions ? <th>Ações</th> : null}
          </tr>
        </thead>
        <tbody>
          {dataSource ? dataSource.map((data, index) => (
            <tr key={`id-${index}`}>
              {columns.map((col) => (
                <td key={`${col.dataField}-${data.id}`}>
                  {data[col.dataField]}
                </td>
              ))}
              {actions ? (
                <td className="actionsTable">
                  {actions.view ? (
                    <Link
                      className="btn"
                      to={`/items/${data.id}/${data.name?.replace(/\s/g,"-")}`}
                    >
                      Ver
                    </Link>
                  ) : null}
                  {actions.update ? (
                    <Link
                      className="btn"
                      to={`/items/edit/${data.id}/${data.name?.replace(" ", "-")}`}
                    >
                      Atualizar
                    </Link>
                  ) : null}
                  {actions.delete ? (
                    <DeleteButton itemId={data.id} itemName={data.name}/>
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
