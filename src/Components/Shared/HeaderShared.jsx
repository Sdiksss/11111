import React from "react";
import "./styles/HeaderShared.css"

const HeaderShared = () => {
    return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>UNDA</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
        </div>
      </div>
    </header>
  
    )
}

export default HeaderShared