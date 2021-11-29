import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import img from "../Images/MkEnK8.jpeg";
function LandPage() {
  return (
    <body>
      <header>
        <nav>
          <a href="#" id="icono" class="icono">
            Contacto
          </a>
          <div class="enlaces uno" id="enlaces"></div>
        </nav>
        <div class="container">
          <div class="textos">
            <h1>Food web page</h1>
            <h2>Made by Nahuel Paolinelli</h2>
            <a href="/Home">Recetas:</a>
          </div>
          <img src={img} alt="Background" />
        </div>
      </header>
      <div class="wave"></div>
    </body>
  );
}
export default LandPage;
