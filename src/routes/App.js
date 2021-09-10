import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from '../containers/Home'
import AgePredictor from '../containers/AgePredictor'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'

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