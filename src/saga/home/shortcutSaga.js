/**
 * 快捷链接 异步数据
 */
/**
 * put,takeLatest,call,select
 */
import { put,takeLatest,call } from 'redux-saga/effects'
import {getShortcutList} from '../../services/api'

function* getShortcutSagaList(){
  const res = yield call(getShortcutList)

  yield put({
    type:'getShortcutReduxList',
    payload:res.data,
  })
}

function* shortcutSaga(){
  yield takeLatest('getShortcutSagaList',getShortcutSagaList)
}

export default shortcutSaga;
