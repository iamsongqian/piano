import React from "react"
import { Row, Col, Divider } from "antd"
import Head from "next/head"
import Header from "../../components/music/Header"
import NavList from "../../components/music/NavList"
import "../../public/style/pages/home.css"


const Music = (props) => {
	return (
		<div>
			<Head>
				<title>Music</title>
			</Head>
			<Header />
			<div className="whole" />
			<NavList />
			{props.children}
			<Divider />
			<footer className="footer-style">
				<p className="footer-text">this is footer</p>
			</footer>
		</div>
	)
}

export default Music
