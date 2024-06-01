import { useContext } from "react";
import "./Productos.scss";
import ProductContext from "../contexts/ProductContext";
import ProductosCard from "../components/ProductosCard";

const Productos = () => {
  const { products } = useContext(ProductContext);
  let productsTotales;
  if (products) {
    productsTotales = products.length;
  }

  console.log(products)
  
  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>COLECCION 2023</h1>
          <p className="pProducts">
            {products
              ? `Se encontraron ${productsTotales} products`
              : `No se encontraron products`}
          </p>
        </header>
        <main className="container__products" >{products && products.length !== 0 && <ProductosCard products={products} />}</main>
      </section>
    </main>
  );
};

export default Productos;
