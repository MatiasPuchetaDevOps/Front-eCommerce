import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="main-header">
      <input type="checkbox" id="menu" />

      <div className="search-bar">
        <div className="search-bar__logo-container">
          <img src="../img/header/logo.jpeg" alt="Logo Demian" />
        </div>
        <form action="#" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label"></label>
          <input
            type="search"
            className="search-bar__form-search"
            id="busqueda"
            placeholder="Buscar..."
          />
          <input
            type="submit"
            className="search-bar__form-submit"
            value="Buscar"
          />
        </form>
        <div className="search-bar__carrito-container">
          <a href="/carrito">
            <img src="img/header/cart_icon.png" alt=""/>
          </a>
        </div>
        <div className="menu-toogle">
          <label htmlFor="menu" className="menu-toogle__label">
            <span className="menu-toogle__top-bread"></span>
            <span className="menu-toogle__meat"></span>
            <span className="menu-toogle__bottom-bread"></span>
          </label>
        </div>
      </div>
      {<Navbar />}
    </div>
  );
};

export default Header;
