import React from 'react'
import { Route, Switch } from 'react-router'
import NoMatch from '../components/NoMatch'
import Home from '../components/Home'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes