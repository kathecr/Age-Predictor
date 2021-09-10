import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../containers/Home'
import AgePredictor from '../containers/AgePredictor'

function App(){
  return(
    <BrowserRouter>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/AgePredictor" component={AgePredictor} />
    </BrowserRouter>
  )
}

export default App;