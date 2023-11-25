import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (

    <nav className="nav-bar">

      <ul className="nav-bar__nav-list">
        <li className="nav-bar__nav-item">
          <a href="/inicio" className="nav-bar__nav-link">Inicio</a>
        </li>
        <li className="nav-bar__nav-item">
          <a href="/productos" className="nav-bar__nav-link">Productos</a>
        </li>
        <li className="nav-bar__nav-item">
          <a href="/alta" className="nav-bar__nav-link">Alta</a>
        </li>
        <li className="nav-bar__nav-item">
          <a href="/contacto" className="nav-bar__nav-link">Contacto</a>
        </li>
        <li className="nav-bar__nav-item">
          <a href="/nosotros" className="nav-bar__nav-link">Nosotros</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar