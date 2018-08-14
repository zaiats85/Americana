import { combineReducers } from 'redux'
import mockReducer from './mockReducer'
import mockReducer2 from './mockReducer2'
/*PERSIST*/
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

/** BLACKLIST **/
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [] // list of components which will not be persisted
};

const rootReducer = combineReducers ({
  mockReducer,
  mockReducer2
});

export default persistReducer(rootPersistConfig, rootReducer);
