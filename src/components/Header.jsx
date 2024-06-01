import Navbar from "./Navbar";

  const Header = () => {
    return (
      <div className="main-header flex flex-col w-full font-kalam md:flex-col-reverse">
        <input type="checkbox" id="menu" className="hidden" />
  
        <div className="search-bar flex items-center justify-evenly w-full h-14 bg-header">
          <div className="search-bar__logo-container flex justify-center items-center w-1/3 ml-8 p-4 bg-header text-white">
            <a href="./Inicio">
              <img src="../img/header/logo.jpeg" alt="Logo Demian" className="w-56" />
            </a>
          </div>
          <form action="#" className="search-bar__form-container flex flex-grow items-center ml-28 p-4 bg-header">
            <label htmlFor="busqueda" className="hidden"></label>
            <input
              type="search"
              className="hidden md:block w-3/4 h-12 border-b-2 border-header bg-header text-header placeholder-header outline-none font-kalam"
              id="busqueda"
              placeholder="Buscar..."
            />
            <input
              type="submit"
              className="hidden"
              value="Buscar"
            />
          </form>
          <div className="search-bar__carrito-container flex justify-center items-center w-1/12 m-4 cursor-pointer bg-header">
            <a href="/carrito">
              <img src="img/header/cart_icon.png" alt="Carrito" className="w-10 h-10" />
            </a>
          </div>
          <div className="menu-toogle hidden bg-header flex-none w-12 h-12 relative cursor-pointer m-2 md:block">
            <label htmlFor="menu" className="block w-full h-full bg-black">
              <span className="block w-full h-1 bg-search absolute top-3 left-2 right-2"></span>
              <span className="block w-full h-1 bg-search absolute top-1/2 transform -translate-y-1/2 left-2 right-2"></span>
              <span className="block w-full h-1 bg-search absolute bottom-3 left-2 right-2"></span>
            </label>
          </div>
        </div>
        <Navbar />
      </div>
    );
  };
  

export default Header;
