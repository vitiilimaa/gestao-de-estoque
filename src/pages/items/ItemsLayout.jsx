import { Link, Outlet, useLocation } from "react-router-dom";

const ItemsNavbar = () => {
  const { pathname } = useLocation();

  return (
    <main>
      <h1 className="title">Stock Items</h1>
      <nav style={{ gap: 0 }}>
        <Link
          className={`tab ${pathname === "/items" ? "choicedTab" : ""}`}
          to="/items"
        >
          Todos os itens
        </Link>
        <Link
          className={`tab ${pathname === "/items/add" ? "choicedTab" : ""}`}
          to={`/items/add`}
        >
          Novo item
        </Link>
      </nav>
      <hr />
      <div className="tabs">
        <Outlet />
      </div>
    </main>
  );
};

export default ItemsNavbar;
