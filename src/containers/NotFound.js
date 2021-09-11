import React from 'react'
import { Link } from 'react-router-dom'

function NotFound(){
  return (
    <React.Fragment>
      <h1>
        No encontrado
        <Link to="/">
          Volver a Home
        </Link>
      </h1>
    </React.Fragment>
  )
}

export default NotFound;