import { useState, createContext, useEffect } from "react"
import { del, get, post, put } from "../utils/http"
/* CREANDO CONTEXTO */
/* 1er -> Creación del contexto */
const ProductContext = createContext()

/* 2do -> El armado del Provider */
const url =import.meta.env.VITE_URL 
const ProductProvider = ( { children } ) => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        obtenerProducts()
    }, []) // <= Al tener un array de referencias vacío el useEffect se va a ejecutar una sola vez

    const obtenerProducts = async () => {
        try {
            const products = await get(url)
            setProducts(products)
        } catch (error) {
            console.error('Ocurrió un error en obtenerProducts()', error)
        }
    }

    const crearProductContext = async (productNuevo) => {
        try {
            const productCreado = await post(url, productNuevo)
            setProducts([...products, productCreado])
        } catch (error) {
            console.error('Algo pasó en el crearProductContext', error)
        }
    }

    const actualizarProductContext = async (productAEditar) => {
        try {
            const productEditado = await put(url, productAEditar.id, productAEditar)
            console.log(productEditado)
            const nuevaDB = products.map( product => product.id === productEditado.id ? productEditado : product)
            setProducts(nuevaDB)
        } catch (error) {
            console.error('Ocurrió un problema en actualizarProductContext', error)
        }
    }

    const eliminarProductContext = async (id) => {
        try {
            const productEliminado = await del(url, id)
            console.log(productEliminado)
            let nuevaDB = products.filter(product => product.id !== id)
            setProducts(nuevaDB)
        } catch (error) {
            console.error('Algo pasó en el eliminarProductContext', error)
        }
    }

    const data = {products, crearProductContext, eliminarProductContext, actualizarProductContext}

    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}
/* 3er -> Las exportaciones */
export { ProductProvider }
export default ProductContext