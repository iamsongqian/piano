import React from "react"
import { Provider } from 'react-redux'
import { Divider } from "antd"
import Head from "next/head"
import Header from "../../components/music/Header"
import NavList from "../../components/music/NavList"
import { PersistGate } from "redux-persist/integration/react"
import  {store, persistor } from '../../components/music/redux/store'
import "../../public/style/pages/home.css"


const Music = (props) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Head>
					<title>Music</title>
					<link
						rel="icon"
						href="../../static/image/logo.png"
						type="image/x-icon"
					/>
				</Head>
				<Header />
				<div className="whole" />
				<NavList />
				{props.children}
				<Divider />
				<footer className="footer-style">
					<p className="footer-text">this is footer</p>
				</footer>
			</PersistGate>
		</Provider>
	)
}
export default Music