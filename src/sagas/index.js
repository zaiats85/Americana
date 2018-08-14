import { all, call } from 'redux-saga/effects';
import testSaga from './testSaga'

/*Independantly call different sagas*/
function* mainSaga() {
  yield all([
    call(testSaga)
  ])
}

export default mainSaga