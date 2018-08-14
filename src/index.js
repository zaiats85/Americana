import React from 'react';
import App from './App';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store, history } from './store'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
