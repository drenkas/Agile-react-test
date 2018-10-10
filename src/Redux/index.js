import { combineReducers } from 'redux'
import { CoinListReducer } from './coinList'

export const reducers = combineReducers({
  coinlist: CoinListReducer
})
