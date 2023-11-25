import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/* CREANDO CONTEXTO */
/* 1er -> Crear un contexto */
const CarritoContext = createContext()
   
/* 2do -> El armado del Provider */
const CarritoProvider = ( { children } ) => {
    const [ guardarEnElCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])

    const agregarCarritoContext = (producto) => {
        guardarEnElCarrito(producto)
    }

    const eliminarCarritoContext = (id) => {
        // console.log(id)
        eliminarDelCarrito(id)
    }


    const data = { carrito, agregarCarritoContext, eliminarCarritoContext }
    
    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

/* 3er -> Exportaciones */
export { CarritoProvider }
export default CarritoContext