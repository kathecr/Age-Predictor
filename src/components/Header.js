import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Link} from 'react-router-dom'
import "../assets/styles/components/Header.css"

function Header(){
  return(
    <React.Fragment>
      <header className="header">
        <Link to={'/'} className = "header">
          <FontAwesomeIcon 
            className="header__icon"
            icon="clock" 
            color="#FFF" />
          <h4 className="header__title">AgePredictor</h4>
        </Link>  
      </header>
    </React.Fragment>
  )
}

export default Header;