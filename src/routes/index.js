import React from 'react'
import { Route, Switch } from 'react-router'
import NoMatch from '../components/NoMatch/NoMatch'
import Home from '../components/Home/Home'
import Treneram from '../components/Treneram/Treneram'
import Rozklad from '../components/Rozklad/Rozklad'
import Batkam from '../components/Batkam/index'
import NavBar from '../components/NavBar/NavBar'

const routes = (
  <div>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/batkam" component={Batkam} />
      <Route exact path="/rozklad" component={Rozklad} />
      <Route exact path="/treneram" component={Treneram} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes