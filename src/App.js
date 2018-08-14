import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.scss';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

const App = ({ history }) => {
  return (
    <div className="App">
      <Header/>

      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>

      <Footer/>
    </div>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
