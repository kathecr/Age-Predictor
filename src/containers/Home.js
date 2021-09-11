import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Link} from "react-router-dom"
import "../assets/styles/Home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="home">
      <FontAwesomeIcon 
        icon="clock"
        className="fa-10x home__icon" 
        color="#FFF" 
        />
        <h1 className="home__title"> AgePredictor</h1>
        <span className = "home__text">
          Aquí podras predecir la edad de una persona con solo su nombre y geolocalización.
        </span>
        <Link to= '/AgePredictor'>
          <button class="home__button">Vamos a Predecir!</button>  
        </Link>
      </div>      
    </React.Fragment>
  );
}

export default Home;
