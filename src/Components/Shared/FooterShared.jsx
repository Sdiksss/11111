import React from "react";
import "./styles/FooterShared.css"



const FooterShared = ()  => {
    return (

    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">Sobre Nosotros</h2>
          <p>
            Somos una empresa dedicada a proporcionar las mejores soluciones tecnológicas.
            Nuestro objetivo es ayudar a nuestros clientes a alcanzar el éxito.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Enlaces Rápidos</h2>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2 className="footer-title">Síguenos</h2>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Universidad Nacional de Achata. Todos los derechos reservados.</p>
      </div>
    </footer>

    )
}


export default FooterShared