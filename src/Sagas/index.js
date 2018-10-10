import { all, takeEvery } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { CoinListTypes } from '../Redux/coinList'

/* ------------- Sagas ------------- */

import { fetchList} from './coinList'


export default function * root () {
	yield all([
		takeEvery(CoinListTypes.FETCH_LIST_REQUEST, fetchList),
	])
}