import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

const ItemBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  let message = "";

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        message = (
          <>
            <h2>Oops... Página não encontrada =(</h2>
            <p>
              Tente acessar o conteúdo novamente. Caso ainda não funcione, pode
              ser que ele tenha sido removido.
            </p>
          </>
        );
        break;
      default:
        message = <h2>Algo deu errado.</h2>;
    }
  }

  return (
    <>
      {message}
      <button 
        style={{ padding: "10px 30px" }} 
        onClick={() => navigate("/")}>
        Ir para página inicial
      </button>
    </>
  );
};

export default ItemBoundary;
