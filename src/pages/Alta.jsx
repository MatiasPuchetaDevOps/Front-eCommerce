import { useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'

const Alta = () => {

  const [productoAEditar, setProductoAEditar] = useState(null)

  return (
    <>
      <h1>Formulario de alta de productos</h1>
      <Formulario productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />
      <hr />
      <Tabla setProductoAEditar={setProductoAEditar} />
    </>
  )
}

export default Alta