import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import "../public/style/pages/home.css";
import { Row, Col, Divider } from "antd"
import ArticleLeft from '../components/ArticleList  ';


const Home = () => (
	<div>
		<Head>
			<title>tab1</title>
		</Head>
		<Header />
		<Row justify="center" type="flex" className="whole">
			<Col xs={22} sm={22} md={22} lg={22} xl={12} className="whole-left">
				<ArticleLeft />
			</Col>
			<Col xs={0} sm={0} md={0} lg={0} xl={6} className="whole-right">
				right
			</Col>
    </Row>
    <Divider />
		<footer className="footer-style">
			<p className='footer-text'>this is footer</p>
		</footer>
	</div>
)

export default Home
