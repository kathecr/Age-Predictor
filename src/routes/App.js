import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import '../assets/styles/App.css'
import Home from '../containers/Home'
import AgePredictor from '../containers/AgePredictor'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faCheckSquare, faCoffee)

function App(){
  return(
    <BrowserRouter>
      <Layout>
        <Switch>        
          <Route exact path="/" component={Home} />
          <Route exact path="/AgePredictor" component={AgePredictor} />
          <Route component={NotFound} />
        </Switch>  
      </Layout>
    </BrowserRouter>
  )
}

export default App;