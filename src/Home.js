import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Home.css";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { data } = useLoaderData();
  const navegador = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useViewportScroll();
  const opacidad = useTransform(scrollY, [0, 200], [1, 0]);
  const colorTexto = useTransform(scrollY, [0, 100], ["#ff2900", "#ffffff"]);
  const cua = useRef();
  const gatitosSelector = useSelector((state) => state.gatitosSlice);
  console.log(gatitosSelector);

  function editando() {
    setIsOpen(!isOpen);
    cua.current.classList.toggle("activo");
  }

  return (
    <div>
      <motion.h1 style={{ color: colorTexto }}>Home</motion.h1>

      {navegador.state === "loading" && (
        <div style={{ color: "white" }}>Estamos en loading..</div>
      )}
      {data.map((w) => (
        <div>
          {w.id}
          <Link to={`/post/${w.id}`}>Ir a detalle</Link>
          <hr />
        </div>
      ))}
      <hr />
      <motion.div
        style={{ opacity: opacidad }}
        ref={cua}
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => editando()}
        className="cuadrado"
      >
        <motion.h2 whileHover={{ scale: 1.1 }} layout="position">
          Framer Animation :-)
        </motion.h2>

        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>
              Aqui hay una descripcion de una animacion que hareamos, esperemos
              todo funcione bien.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Home;

export const fetchDatos = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return { data };
};

export const usuarios = async () => {
  const user = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await user.json();
  return { data };
};
