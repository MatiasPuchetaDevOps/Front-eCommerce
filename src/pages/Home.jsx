import React, { useContext } from "react";
import Card from "../components/Card";
import ProductoContext from "../contexts/ProductoContext";
import "./Home.scss";

const Home = () => {
  const { productos } = useContext(ProductoContext);
  let novedades;
  let ultimasNovedades;

  const ultimosProductos = () => {
    ultimasNovedades = productos.slice(productos.length - 4, productos.length);
    novedades = ultimasNovedades.reverse()
  };
  if (productos) {
    ultimosProductos();

  }
  return (
    <>
      <section className="sectionHome">
        <header>
          <img
            className="headerImg"
            src="../img/main/grupo-personas-camisetas-que-dicen-marca_915071-2069.jpg"
            alt=""
          />
        </header>
        <main>
          <h2>Dale estilo a tu vida</h2>
          <div className="seccion__opciones">
            <a className="seccion__opciones-categoria" href="./Productos">
              <img
                src="../img/main/camiseta-genial-maqueta-percha_23-2150486768.jpg"
                alt="REMERAS"
              />
              <h3>REMERAS</h3>
            </a>
            <a className="seccion__opciones-categoria" href="./Productos">
              <img src="../img/main/hombre-vestido-sudadera.jpg" alt="BUZOS" />
              <h3>BUZOS</h3>
            </a>
            <a className="seccion__opciones-categoria" href="./Productos">
              <img src="../img/main/photo16946391431.jpg" alt="JEANS" />
              <h3>JEANS</h3>
            </a>
          </div>
          <h2>Ultimas Novedades</h2>
          <div className="seccion__novedades">

            {novedades && <Card productos={novedades} />}

          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
