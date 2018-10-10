import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './Store'
import CoinListWrapper from './Containers/CoinListWrapper'
import './App.css'
import 'antd/dist/antd.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<div>
						<CoinListWrapper />
					</div>
				</Provider>
			</div>
		);
	}
}

export default App;
