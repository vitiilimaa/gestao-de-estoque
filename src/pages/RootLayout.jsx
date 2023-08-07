import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>
        <p className="appTitle">GESTOR DE ESTOQUE</p>
        <nav>
          <Link className="link" to="/">Início</Link>
          <Link className="link" to="/items">Itens</Link>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>Desenvolvido por Vitor Batista</p>
      </footer>
    </>
  );
};

export default RootLayout;
