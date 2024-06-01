import { useContext, useEffect, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import { useForm } from "../hooks/useForm";
import { DragDrop } from "./DragDrop";
import "./Formulario.scss";

const formInicial = {
  id: null,
  nombre: "",
  precio: "",
  stock: "",
  marca: "",
  categoria: "",
  detalles: "",
  foto: "",
  envio: false,
};

const Formulario = ({ productoAEditar, setProductoAEditar }) => {
  const [form, setForm, handleChange] = useForm(formInicial);
  const { crearProductoContext, actualizarProductoContext } =
    useContext(ProductContext);

  const [foto, setFoto] = useState("");
  const [srcImagen, setSrcImagen] = useState("");

  const [errors, setErrores] = useState({});

  const ExpRegString = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ]{1,20}$/;
  const ExpRegPrecio2Decimales = /^[0-9]+$/;

  useEffect(() => {
    if (productoAEditar) {
      setForm(productoAEditar);
      setSrcImagen(productoAEditar.foto);
    } else {
      setForm(formInicial);
    }
  }, [productoAEditar, setProductoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = onValidate(form);
    if (err === null) {
      try {
        if (form.id === null) {
          const productoNuevoConImagen = { ...form, ...foto };
          await crearProductoContext(productoNuevoConImagen);
        } else {
          const productoNuevoConImagen = { ...form, ...foto };
          await actualizarProductoContext(productoNuevoConImagen);
        }
        handleReset();
      } catch (error) {
        console.error("Algo ocurrió en el handleSubmit", error);
      }
    } else {
      setErrores(err);
    }
  };

  const onValidate = (form) => {
    let isError = false;
    let errors = {};

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo "Nombre" no debe estar vacio.';
      isError = true;
    } else if (!ExpRegString.test(form.nombre)) {
      errors.nombre = 'El campo "Nombre" solo acepta letras, espacios y hasta 20 caracteres.';
      isError = true;
    }
    if (!form.detalles.trim()) {
      errors.detalles = 'El campo "Detalles" no debe estar vacio.';
      isError = true;
    } else if (!ExpRegString.test(form.detalles)) {
      errors.detalles = 'El campo "Detalles" solo acepta letras, espacios y hasta 20 caracteres.';
      isError = true;
    }
    if (!form.precio.trim()) {
      errors.precio = 'El campo "Precio" no debe estar vacio.';
      isError = true;
    } else if (!ExpRegPrecio2Decimales.test(form.precio)) {
      errors.precio = 'El campo "Precio" solo acepta numeros';
      isError = true;
    }
    if (!form.categoria.trim()) {
      errors.categoria = 'El campo "Categoria" no debe estar vacio.';
      isError = true;
    } else if (!ExpRegString.test(form.categoria)) {
      errors.categoria = 'El campo "Categoria" solo acepta letras, espacios y hasta 20 caracteres.';
      isError = true;
    }
    if (!form.stock.trim()) {
      errors.stock = 'El campo "Stock" no debe estar vacio.';
      isError = true;
    } else if (!ExpRegPrecio2Decimales.test(form.stock)) {
      errors.stock = 'El campo "Stock" solo acepta numeros';
      isError = true;
    }
    if (!form.marca.trim()) {
      errors.marca = 'El campo "Marca" no debe estar vacio.';
      isError = true;
    } else if (!ExpRegString.test(form.marca)) {
      errors.marca = 'El campo "Marca" solo acepta letras, espacios y hasta 20 caracteres.';
      isError = true;
    }

    return isError ? errors : null;
  };

  const handleReset = () => {
    setForm(formInicial);
    setFoto("");
    setSrcImagen("");
  };
  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>{form === formInicial ? "Agregar" : "Editar"} un producto</h2>
        <div className="container__formulario">
          <div className="container__formulario__input">
            <div className="container__formulario__lbl">
              <label htmlFor="lbl-nombre"></label>
              <input
                className="container__formulario__input--input"
                type="text"
                name="nombre"
                id="lbl-nombre"
                placeholder="Ingrese el nombre"
                value={form.nombre}
                onChange={handleChange}
              />
              {errors.nombre && (
                <div className="alert alert-danger w-90" role="alert">
                  {errors.nombre}
                </div>
              )}
            </div>
            <div className="container__formulario__lbl">
              <label htmlFor="lbl-precio"></label>
              <input
                className="container__formulario__input--input"
                type="text"
                name="precio"
                id="lbl-precio"
                placeholder="Ingrese el precio"
                value={form.precio}
                onChange={handleChange}
              />
              {errors.precio && (
                <div className="alert alert-danger w-90" role="alert">
                  {errors.precio}
                </div>
              )}
            </div>
            <div className="container__formulario__lbl">
              <label htmlFor="lbl-stock"></label>
              <input
                className="container__formulario__input--input"
                type="text"
                name="stock"
                id="lbl-stock"
                placeholder="Ingrese el stock disponible"
                value={form.stock}
                onChange={handleChange}
              />
              {errors.stock && (
                <div className="alert alert-danger w-90" role="alert">
                  {errors.stock}
                </div>
              )}
            </div>
            <div className="container__formulario__lbl">
              <label htmlFor="lbl-marca"></label>
              <input
                className="container__formulario__input--input"
                type="text"
                name="marca"
                id="lbl-marca"
                placeholder="Ingrese la marca"
                value={form.marca}
                onChange={handleChange}
              />
              {errors.marca && (
                <div className="alert alert-danger w-90" role="alert">
                  {errors.marca}
                </div>
              )}
            </div>
            <div className="container__formulario__lbl">
              <label htmlFor="lbl-categoria"></label>
              <input
                className="container__formulario__input--input"
                type="text"
                name="categoria"
                id="lbl-categoria"
                placeholder="Ingrese una categoria"
                value={form.categoria}
                onChange={handleChange}
              />
              {errors.categoria && (
                <div className="alert alert-danger w-90" role="alert">
                  {errors.categoria}
                </div>
              )}
            </div>
            <div className="container__formulario__lbl">
              <label htmlFor="lbl-detalles"></label>
              {
                <input
                  className="container__formulario__input--input"
                  type="text"
                  name="detalles"
                  id="lbl-detalles"
                  placeholder="Ingrese los detalles"
                  value={form.detalles}
                  onChange={handleChange}
                />
              }
              {errors.detalles && (
                <div className="alert alert-danger w-90" role="alert">
                  {errors.detalles}
                </div>
              )}
            </div>
            <div className="container__formulario__inputEnvio">
              <label htmlFor="lbl-envio">Envio</label>
              <input
                className="container__formulario__inputEnvio--inputEnvio"
                type="checkbox"
                name="envio"
                id="lbl-envio"
                checked={form.envio}
                onChange={handleChange}
              />
              {errors.envio && (
                <div className="alert alert-danger w-90" role="alert">
                  {errors.envio}
                </div>
              )}
            </div>
          </div>
          <div>
            <DragDrop
              setFoto={setFoto}
              srcImagen={srcImagen}
              setSrcImagen={setSrcImagen}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-success me-2">
              Enviar
            </button>
            <button
              type="reset"
              className="btn btn-outline-secondary"
              onClick={handleReset}
            >
              Limpiar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
