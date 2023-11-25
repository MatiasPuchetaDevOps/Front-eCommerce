import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__sell">
        <h2>Venta por mayor y menor</h2>
        <div className="footer__sell__shipping">
          <div>
            <h3>Envios a todo el pais</h3>
            <img
              className="delivery_icon"
              src="img/footer/delivery_icon.png"
              alt=""
            />
          </div>
          <div>
            <h3>Seguridad y garantia</h3>
            <img src="img/footer/box_icon.png" alt="" />
          </div>
          <div>
            <h3>Paga como quieras</h3>
            <img src="img/footer/handbag_icon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer__nav">
        <div className="footer__nav__list">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Alta</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
          </ul>
        </div>
        <div className="footer__nav__list">
          <ul>
            <li>
              <a href="#">Whatsapp</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Mail</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
