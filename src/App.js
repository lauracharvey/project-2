import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/style.scss'

// Components
import Image from './components/Image.js'
import Home from './components/Home.js'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/project-2" component={Home}/>
      <Route exact path="/project-2/:id" component={Image}/>
    </Switch>
  </BrowserRouter>
)

export default App