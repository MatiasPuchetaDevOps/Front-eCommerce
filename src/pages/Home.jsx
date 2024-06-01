import React, { useContext } from "react";
import Card from "../components/Card";
import ProductContext from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  let newProducts;
  let lastNewProducts;

  const lastProducts = () => {
    lastNewProducts = products.slice(products.length - 4, products.length);
    newProducts = lastNewProducts.reverse()
  };
  if (products) {
    lastProducts();

  }
  return (
    <>
      <section className=" text-black">
        <header>
          <img
            className="headerImg w-full object-cover"
            src="../img/main/grupo-personas-camisetas-que-dicen-marca_915071-2069.jpg"
            alt=""
          />
        </header>
        <main>
          <h2 className="text-center font-kalam font-bold text-7xl my-4">Dale estilo a tu vida</h2>
          <div className="seccion__opciones flex justify-around p-8">
            <a className=" relative w-1/3 cursor-pointer overflow-hidden font-kalam rounded-lg transform transition-transform duration-300 hover:scale-110" href="./Products">
              <img
                className="w-full h-full object-cover transition-transform duration-300"
                src="../img/main/camiseta-genial-maqueta-percha_23-2150486768.jpg"
                alt="REMERAS"
              />
              <h3 className="absolute text-white font-normal text-3xl bottom-0 left-1/4 m-0">REMERAS</h3>
            </a>
            <a className=" relative w-1/3 cursor-pointer overflow-hidden font-kalam rounded-lg transform transition-transform duration-300 hover:scale-110" href="./Products">
              <img
                className="w-full h-full object-cover transition-transform duration-300"
                src="../img/main/hombre-vestido-sudadera.jpg"
                alt="BUZOS"
              />
              <h3 className="absolute text-white font-normal text-3xl bottom-0 left-1/4 m-0">BUZOS</h3>
            </a>
            <a className=" relative w-1/3 cursor-pointer overflow-hidden font-kalam rounded-lg transform transition-transform duration-300 hover:scale-110" href="./Products">
              <img
                className="w-full h-full object-cover transition-transform duration-300"
                src="../img/main/photo16946391431.jpg"
                alt="JEANS"
              />
              <h3 className="absolute text-white font-normal text-3xl bottom-0 left-1/4 m-0">JEANS</h3>
            </a>
          </div>
          <h2 className="text-center font-kalam font-bold text-7xl my-20">Ultimas newProducts</h2>
          <div className=" flex justify-around my-20">

            {newProducts && <Card products={newProducts} />}
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
