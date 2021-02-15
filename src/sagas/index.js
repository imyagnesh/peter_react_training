import { all, fork } from 'redux-saga/effects';
import productsSaga from './productsSaga';

export default function* root() {
  yield all([fork(productsSaga)]);
}
