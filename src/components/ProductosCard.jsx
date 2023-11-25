import React, { useEffect, useState } from "react";
import Filtros from "./Filtros";
import RenderCard from "./RenderCard";

const ProductosCard = ({productos}) => {
    const [productosCard, setProductosCard] = useState(productos)
    let resultadoFiltro;

    console.log(productosCard)

    const handleCheckbox = (e) => {
      if (e.target.checked) {
        const resultadoChecked = productosCard.filter(
          (producto) =>
            (e.target.className === "categoria"
              ? producto.categoria
              : producto.marca) === e.target.value
        );
        resultadoFiltro = [].concat(...resultadoChecked);
        setProductosCard(resultadoFiltro);
      } else {
        const resultadoChecked = productosCard.filter(
          (producto) =>
            (e.target.className === "categoria"
              ? producto.categoria
              : producto.marca) !== e.target.value
        );
        resultadoFiltro = [].concat(...resultadoChecked);
        setProductosCard(resultadoFiltro);
      }
    };

    if (productosCard.length === 0 ) {
      setProductosCard(productos)
    }

    
  return (
    <>
      <div>{productosCard && <Filtros productos={productos} handleCheckbox={handleCheckbox} />}</div>
      <div>{productosCard && <RenderCard productosCard={productosCard} />}</div>
    </>
  );
};

export default ProductosCard;
