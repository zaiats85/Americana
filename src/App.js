import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/index'
import './App.scss';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
        <div className="App">
          <Header/>
          { routes }
          <Footer/>
        </div>
    </ConnectedRouter>
  )
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
