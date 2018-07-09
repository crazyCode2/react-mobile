/**
 * 产品 异步数据
 */
import { put,takeLatest,call } from 'redux-saga/effects'
import {getproduct_1} from '../../services/api'

function* productList_1(){
  const res = yield call(getproduct_1)

  yield put({
    type:'getProduct_1ReduxList',
    payload:res.data,
  })
}

function* productSaga(){
  yield takeLatest('getproduct_1',productList_1)
}

export default productSaga;
