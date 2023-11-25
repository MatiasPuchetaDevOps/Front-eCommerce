import "./Filtros.scss";

const Filtros = ({ productos, handleCheckbox }) => {
  let marcas = [];
  let categorias = [];
  let resultadoMarca = [];
  let resultadocategoria = [];

  marcas = productos.map((producto) => producto.marca);
  const marcasTotales = new Set(marcas);
  resultadoMarca = [...marcasTotales];

  categorias = productos.map((producto) => producto.categoria);
  const categoriasTotales = new Set(categorias);
  resultadocategoria = [...categoriasTotales];

  return (
    <div className="container__categorias">
      <div className="container__categorias-categoria">
        <h2>Categorias</h2>
        <ul>
          {resultadocategoria &&
            resultadocategoria.map((categoria, idx) => (
              <li key={idx}>
                <input
                  id={idx}
                  type="checkbox"
                  name={categoria}
                  className="categoria"
                  value={categoria}
                  onChange={handleCheckbox}
                />
                <label htmlFor={categoria} name={idx}>
                  {categoria}
                </label>
              </li>
            ))}
        </ul>
      </div>
      <div className="container__categorias-categoria">
        <h2>Marca</h2>
        <ul>
          {resultadoMarca &&
            resultadoMarca.map((marca, idx) => (
              <li key={idx}>
                <input
                  id={idx}
                  type="checkbox"
                  name={marca}
                  className="marca"
                  value={marca}
                  onChange={handleCheckbox}
                />
                <label htmlFor={marca}>{marca}</label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Filtros;
