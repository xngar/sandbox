import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { agregarPais, eliminarPais } from "./slices/paises";
import { useNavigate, Link, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Contacto = () => {
  const parametros = useParams();

  const pizzaSelector = useSelector((state) => state.gatitosSlice);
  const paisesSelector = useSelector((state) => state.paisesSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    pais: "",
    moneda: ""
  });
  function enviarDatos(e) {
    e.preventDefault();
    dispatch(agregarPais({ ...formulario, id: uuid() }));
    navigate("/contacto");
  }

  function editForm(e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  }

  function eliminar(id) {
    dispatch(eliminarPais(id));
  }

  return (
    <div>
      <h1>Cantidad ({paisesSelector.length})</h1>
      <h3>
        {paisesSelector.map((paises) => {
          return (
            <div>
              {paises.moneda}
              <button onClick={() => eliminar(paises.id)}>Eliminar</button>
              <Link to={`/edit-contacto/${paises.id}`}>Actualizar</Link>
            </div>
          );
        })}
      </h3>
      <form onSubmit={enviarDatos}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Pais</label>
          <input
            value={formulario.pais}
            onChange={(e) => editForm(e)}
            placeholder="ingresar pais"
            name="pais"
          ></input>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Moneda</label>
          <input
            value={formulario.moneda}
            placeholder="ingresar moneda"
            onChange={(e) => editForm(e)}
            name="moneda"
          ></input>
        </div>
        <button>Agregar pais</button>
      </form>
    </div>
  );
};

export default Contacto;
