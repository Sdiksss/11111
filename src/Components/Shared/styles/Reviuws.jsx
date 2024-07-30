import React, { useState } from "react";
import "/src/Components/Shared/styles/Reviews.css" 
const Reviews = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const proyectos = [
    {
      imagen: "https://i.postimg.cc/YSHC8GTG/gloglo.jpg",
      titulo: "Dra. Valeria “Valkyrie” Torres",
      descripcion: "Especialista en Psicología del Jugador y profesora en la Universidad Nacional de Sideral Carrion",
    },
    {
      imagen: "https://i.postimg.cc/WpBztHSw/sideral.jpg", 
      titulo: "Dr. Miguel “Invoker” Castillo",
      descripcion: "Profesor de Matemáticas Aplicadas y Teoría de Juegos en la Universidad Nacional de Sideral Carrion",
    },
  ];

  const prevSlider = () => {
    if(currentSlider > 0) setCurrentSlider(currentSlider - 1);
  };

  const nextSlider = () => {
    if (currentSlider < proyectos.length - 1) setCurrentSlider(currentSlider + 1);
  };

  return (
    <section id="projects" className="section section--projects">
      <div className="reviews__div">
        <button className="slider__btn" onClick={prevSlider}>prev</button>
        <ul className="reviews__div-ul">
          {proyectos.map((proyecto, index) => (
            <li
              key={index}
              className={`reviews__div-li ${index === currentSlider ? "active" : ""}`}
            >
              <div>
                <img src={proyecto.imagen} alt={proyecto.titulo} />
              </div>
              <div className="reviews_description">
                <div >
                  <h3>{proyecto.titulo}</h3>
                  <h3>{proyecto.descripcion}</h3>
              </div>
                <div>
                  <button>Git</button>
                  <button>Post</button>
                  <button>Despliegue</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="slider__btn" onClick={nextSlider}>next</button>
      </div>
    </section>
  );
};

export default Reviews;
