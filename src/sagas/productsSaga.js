import { take, takeLatest, takeEvery, call, put, all, fork } from 'redux-saga/effects';
import axios from '../utils/axios';

function* loadProducts() {
  try {
    // await axios.get('http://localhost:3000/products')
    const res = yield call(axios.get, 'http://localhost:3000/products');
    console.log('res.data', res.data);
    yield put({ type: 'LOAD_PRODUCTS_SUCCESS', payload: res.data });
  } catch (error) {
    yield put({ type: 'LOAD_PRODUCTS_FAIL', payload: error });
  }
}

function* addProducts({ payload, meta }) {
  try {
    // await axios.post('products', values);
    const res = yield call(axios.post, 'products', payload);
    console.log('res.data', res.data);
    yield put({ type: 'ADD_PRODUCTS_SUCCESS', payload: res.data });
  } catch (error) {
    // action.setFieldError('server', error.message);
    yield call(meta.setFieldError, 'server', error.message);
  }
}

function* loadProductsRequest() {
  yield takeLatest('LOAD_PRODUCTS_REQUEST', loadProducts);
}

function* addProductsRequest() {
  yield takeLatest('ADD_PRODUCTS_REQUEST', addProducts);
}

function* test() {
  console.log('b4 login');
  yield take('login');
  console.log('after login');
  yield take('logout');
  console.log('after logout');
}

export default function* rootProducts() {
  yield all([fork(loadProductsRequest), fork(addProductsRequest), fork(test)]);
}
