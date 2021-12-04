import React from "react";
import "./LandingPage.css";
import img from "../../Images/MkEnK8.jpeg";
function LandPage() {
  return (
    <div>
      <header className="header">
        <nav className="contacto">
          <a href="#" id="icono" className="icono">
            Contacto
          </a>
          <div className="enlaces uno" id="enlaces"></div>
        </nav>
        <div className="containerLand">
          <div className="textos">
            <h1>Food Web Page</h1>
            <h2>Made by Nahuel Paolinelli</h2>
            <a href="/Home">Recetas:</a>
          </div>
          <img className="tostadita" src={img} alt="Background" />
        </div>
      </header>
    </div>
  );
}
export default LandPage;
