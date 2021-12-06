import React from "react";
import "./LandingPage.css";
import img from "../../Images/MkEnK8.jpeg";

export default function LandPage() {
  return (
    <div>
      <header className="header">
        <nav className="contacto">
          <div className="enlaces uno" id="enlaces"></div>
        </nav>
        <div className="containerLand">
          <div className="textos">
            <h1>Food Web Page</h1>
            <h2>Made by Nahuel Paolinelli</h2>
            <a href="/Home">Recipes:</a>
          </div>
          <img className="tostadita" src={img} alt="Background" />
        </div>
      </header>
    </div>
  );
}
