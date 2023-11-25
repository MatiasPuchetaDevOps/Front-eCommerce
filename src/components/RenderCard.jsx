
import React from "react";
import Card from './Card';
import'./RenderCard.scss'

const ProductoCard = ({productosCard}) => {

  return (
    <div className="cards-container">
      {productosCard && <Card productos={productosCard} />}
    </div>
  );
};

export default ProductoCard;
