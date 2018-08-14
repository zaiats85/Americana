/*REDUCER*/
import rootReducer from './reducers/index'
/*ROUTER*/
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
/*HISTORY*/
export const history = createBrowserHistory();
const enhancers = [];

const middleware = [
  routerMiddleware(history) // for dispatching history actions
];

/*Use Redux console in dev mode*/
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  composedEnhancers
);
