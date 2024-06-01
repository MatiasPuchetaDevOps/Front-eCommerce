import { useContext } from 'react'
import './Tabla.scss'
import TablaFila from './TablaFila'
import ProductContext from '../contexts/ProductContext'

const Tabla = ( { setProductoAEditar }) => {
  const { products } = useContext(ProductContext)

  return (
    <table className='tabla-alta'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Categoría</th>
          <th>Detalles</th>
          <th>Foto</th>
          <th>Envío</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products && products.map((producto, idx) => (
          <TablaFila key={idx} producto={producto} setProductoAEditar={setProductoAEditar}/>
        ))}
      </tbody>
    </table>
  )
}

export default Tabla