import { useState } from "react";

export const useLocalStorage = (clave, valorInicial = []) => {

    const getValorAlmacenado = () => {
        try {
            const valorAlmacenadoLS = window.localStorage.getItem(clave)
            return valorAlmacenadoLS ? JSON.parse(valorAlmacenadoLS) : valorInicial 
        } catch (error) {
            console.error(`Error al obtener ${clave} del localStorage ${error}`)
            return valorInicial
        }
    }

    // Estado del carrito en el LS
    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

    const guardarValor = (valorNuevo) => { // valorNuevo => va a contenedr un producto = {}

        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo] // Creo un nuevo array y coloco lo que ya tenía más el nuevo producto
            setValorAlmacenado(nuevoValorAlmacenado) // guardo en el estado el nuevoValorAlmacenado 
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado)) // nuevo array generado con el nuevo producto dentro del storage
        } catch (error) {   
            console.error(`Error al guardar ${clave} del localStorage: ${error}`)
        }

    }

    const eliminarValor = (id) => {
        console.log(id)
    }

    const limpiarStorage = () => {

    }



    return [ guardarValor, eliminarValor, limpiarStorage,  valorAlmacenado ]
}