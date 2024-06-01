import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

import Home from './pages/Home'
import Productos from './pages/Productos'
import Alta from './pages/Alta'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'
import Header from './components/Header'
import Footer from './components/Footer'
import { ProductProvider } from './contexts/ProductContext'
import { CarritoProvider } from './contexts/CarritoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CarritoProvider> 
      <ProductProvider >
        <BrowserRouter>

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alta" element={<Alta />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<Home />} />
          </Routes>
        
          <Footer />

        </BrowserRouter>
      </ProductProvider>
    </CarritoProvider>
)
