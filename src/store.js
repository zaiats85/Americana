/*REDUCER*/
import persistReducer from './reducers/index'
/*ROUTER*/
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
/*SAGA*/
import createSagaMiddleware from 'redux-saga'
import mainSaga from './sagas/index'
/*PERSIST*/
import { persistStore } from 'redux-persist'

/** history **/
export const history = createBrowserHistory();
/** create the saga middleware **/
const sagaMiddleware = createSagaMiddleware()
const enhancers = [];

const middleware = [
  sagaMiddleware,
  routerMiddleware(history) // for dispatching history actions
];

/** use Redux console in dev mode **/
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
  connectRouter(history)(persistReducer),
  composedEnhancers
);

export const persistor = persistStore(store);

/** then run the saga **/
sagaMiddleware.run(mainSaga);
