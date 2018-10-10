import React from 'react'
import { Layout, Row, Col } from 'antd'
import CoinList from '../Components/CoinList.js'

const { Header, Content, Footer } = Layout

class CoinListWrapper extends React.Component {

	render() {
		return (
			<Layout>
				<Header style={{ color: 'white', textAlign: 'center' }}>Crypto Coins List  </Header>
				<Content style={{ padding: '50px 0', backgroundColor: '#fff' }}>
					<Row>
						<Col span={12} offset={6}>
							<CoinList />
						</Col>
					</Row>
				</Content>
				<Footer theme="dark" style={{ textAlign: 'center' }}>
					Coin List Project ©2018 Created by @drenkas
				</Footer>
			</Layout>
		)
	}
}

export default CoinListWrapper
