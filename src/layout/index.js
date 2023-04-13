import "./index.css";
import {
  Outlet,
  Link,
  NavLink,
  useNavigation,
  useNavigate
} from "react-router-dom";

const layout = () => {
  const navigation = useNavigation();
  return (
    <div className="contenedor-layout">
      <div>
        <nav className="navbar navbar-dark">
          <div className="container">
            <NavLink className="btn btn-outline-primary" to="/">
              {navigation.state === "loading" && (
                <div>
                  <p>Estamos cargando información...</p>
                </div>
              )}
              Home
            </NavLink>

            <NavLink className="btn btn-outline-primary" to="/contacto">
              Contacto
            </NavLink>
          </div>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default layout;
