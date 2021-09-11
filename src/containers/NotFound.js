import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/NotFound.css"

function NotFound(){
  return (
    <div className="error">
      <span className="error__numero">
        404        
      </span>
      <span className="error__texto"> Page Not Found</span>
      <Link to="/">
        Volver a Home
      </Link>     
      </div>
  )
}

export default NotFound;