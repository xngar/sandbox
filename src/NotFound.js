import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>
        Pagina no encontrada, si hay información que desse comuniquese al
        siguiente correo:
        {error.statusText}
      </h1>
      <Link to="/">volver</Link>
    </div>
  );
};
export default NotFound;
