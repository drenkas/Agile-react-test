import { call, put } from 'redux-saga/effects'
import CoinListTypes from '../Redux/coinList'
import { showNotification } from '../Components/showNotif'
import * as Api from '../api/Api'

function compareCoin(coinA, coinB) {
	return coinA.SortOrder - coinB.SortOrder;
}

export const fetchList = function * (action) {
	try {
		const response = yield call(Api.getFetch, 'https://min-api.cryptocompare.com/data/all/coinlist')
		if (response.status === 200) {
			const list = response.data.Data
			let newList = []
			for (let coin in list) {
				let value = list[coin];
				if (Number(value.SortOrder) <= 20)
					newList.push(value)
			}
			newList.sort(compareCoin)
			yield put(CoinListTypes.fetchListSuccess(newList))
		}
		else {
			let msg = "API error"
		let desc = 'An attempt to contact the API resulted in an error. Try again.\n'
			showNotification('error', msg, desc, () => {}, 2)
			yield put(CoinListTypes.fetchListFailure())
		}
	} catch (error){
		let msg = "API error"
		let desc = 'An attempt to contact the API resulted in an error. Try again.\n'+error
		showNotification('error', msg, desc, () => {}, 2)
		yield put(CoinListTypes.fetchListFailure())
	}
}

