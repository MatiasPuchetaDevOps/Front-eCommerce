import { useContext } from "react";
import "./Productos.scss";
import ProductoContext from "../contexts/ProductoContext";
import ProductosCard from "../components/ProductosCard";

const Productos = () => {
  const { productos } = useContext(ProductoContext);
  let productosTotales;
  if (productos) {
    productosTotales = productos.length;
  }

  console.log(productos)
  
  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>COLECCION 2023</h1>
          <p className="pProductos">
            {productos
              ? `Se encontraron ${productosTotales} productos`
              : `No se encontraron productos`}
          </p>
        </header>
        <main className="container__productos" >{productos && productos.length !== 0 && <ProductosCard productos={productos} />}</main>
      </section>
    </main>
  );
};

export default Productos;
