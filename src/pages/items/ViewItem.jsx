import { Link, useParams } from "react-router-dom";
import { MiniCard, DeleteButton } from "../../components"
import useStock from "../../hooks/useStock";

const ViewItem = () => {
  const { getItem } = useStock()
  const { itemId } = useParams()

  const item = getItem(itemId)
  const price = +item.price
  const formatedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <>
      <div className="manipulationSection">
        <p className="itemName">{item.name}</p>
        <div className="btnsSection">
          <Link className="btn" to={`/items/edit/${item.id}/${item.name?.replace(/\s/g, "-")}`}>
            Atualizar
          </Link>
          <DeleteButton itemId={item.id} itemName={item.name} />
        </div>
      </div>
      <div className="miniCardsContainer">
        <MiniCard title="Categoria" value={item.category} />
        <MiniCard title="Quantidade em estoque" value={item.quantity} />
        <MiniCard title="Preço" value={formatedPrice} />
      </div>
      <p style={{ fontSize: 18 }}>{item.description}</p>
      <div className="infoSection">
        <p>
          <b>Cadastrado em:</b> {item.createdAt}
        </p>
        <p>
          <b>Atualizado em:</b> {item.createdAt}
        </p>
      </div>
    </>
  );
};

export default ViewItem;
