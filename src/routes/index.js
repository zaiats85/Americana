import React from 'react'
import { Route, Switch } from 'react-router'
import NoMatch from '../components/NoMatch'
import Home from '../components/Home'
import Treneram from '../components/Treneram'
import Rozklad from '../components/Rozklad'
import Batkam from '../components/Batkam'
import NavBar from '../components/NavBar'

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