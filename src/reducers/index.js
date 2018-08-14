import { combineReducers } from 'redux'
import { mock_reducer_1 } from './mock_reducer_1'
import { mock_reducer_2 } from './mock_reducer_2'

export default combineReducers ({
  mock_reducer_1,
  mock_reducer_2
})