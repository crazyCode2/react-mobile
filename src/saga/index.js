import { put,takeEvery,fork,all } from 'redux-saga/effects'
import global from './globalSaga'
import bannerSaga from './bannerSaga'
import shortcutSaga from './shortcutSaga'
import productSaga from './productSaga'

// 所有saga的入口配置文件
const config = [
  fork(global),
  fork(bannerSaga),
  fork(shortcutSaga),
  fork(productSaga),
]

export default function* rootSaga(){
  yield all(config)
};