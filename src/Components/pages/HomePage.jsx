import React from 'react';
import "./styles/HomePage.css"


const HomePage = () => {
  return (
    <main className="main-content">
      <section className="intro">
        <h2>Bienvenidos a la Universidad Nacional Achata</h2>
        <p>
          En la Universidad Nacional de Achata, ofrecemos programas innovadores y únicos para preparar a nuestros estudiantes para el éxito en cualquier campo.
        </p>
      </section>
      <section className="programs">
        <h2>Nuestros Programas</h2>
        <div className="program-card">
          <img src='../src/img/SoldadorDeMadera.png' alt="Soldador de Madera" />
          <div className="program-info">
            <h3>Soldador de Madera</h3>
            <p>Duración: 3 años</p>
            <p>Un programa único para aquellos interesados en las técnicas avanzadas de soldadura de madera. Aprende a unir piezas de madera de manera innovadora.</p>
          </div>
        </div>
        <div className="program-card">
          <img src="../src/img/ingeneriaDeAire.png" alt="Ingeniería de Aire" />
          <div className="program-info">
            <h3>Ingeniería de Aire</h3>
            <p>Duración: 4 años</p>
            <p>Estudia las dinámicas y tecnologías relacionadas con la ingeniería del aire. Un programa pionero en su campo.</p>
          </div>
        </div>
        <div className="program-card">
          <img src="../src/img/arquitectura_De_sueños.jpg" />
          <div className="program-info">
            <h3>Arquitectura de Sombras</h3>
            <p>Duración: 5 años</p>
            <p>Aprende a diseñar y construir con sombras, una nueva y emocionante área de la arquitectura.</p>
          </div>
        </div>
        <div className="program-card">
          <img  src='../src/img/programacion de sueños.jpg' alt="Programación de Sueños" />
          <div className="program-info">
            <h3>Programación de Sueños</h3>
            <p>Duración: 2 años</p>
            <p>Explora cómo programar y manipular sueños usando las últimas tecnologías en neurociencia y software.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
