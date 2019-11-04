import React from "react"
import "../public/style/components/header.css"
import { Row, Col, Menu, Icon ,Dropdown} from "antd"

const Header = () => {
	const menu = (
		<Menu>
			<Menu.Item>
				<a href="/tab1">tab1</a>
			</Menu.Item>
			<Menu.Item>
				<a href="/tab2">tab2</a>
			</Menu.Item>
			<Menu.Item>
				<a href="/tab3">tab3</a>
			</Menu.Item>
		</Menu>
	)
	return (
		<div className="header">
			<Row justify="center" type="flex">
				<Col xs={22} sm={22} md={10} lg={10} xl={10}>
					<span className="header-logo">logo</span>
					<span className="header-text">illustrate text</span>
				</Col>
				<Col xs={0} sm={0} md={13} lg={12} xl={8}>
					<Menu mode="horizontal">
						<Menu.Item key="home">
							<Icon type="home" style={{ fontSize: "20px" }} />
							tab1
						</Menu.Item>
						<Menu.Item key="pic-center">
							<Icon type="pic-center" style={{ fontSize: "20px" }} />
							tab2
						</Menu.Item>
						<Menu.Item key="delete">
							<Icon type="delete" style={{ fontSize: "20px" }} />
							tab3
						</Menu.Item>
						<Menu.Item key="shopping">
							<Icon type="shopping" style={{ fontSize: "20px" }} />
							tab4
						</Menu.Item>
					</Menu>
				</Col>
				<Col xs={1} sm={1} md={0} lg={0} xl={0}>
					<Dropdown overlay={menu}>
						<a className="icon-container">
							<Icon type="menu" />
						</a>
					</Dropdown>
				</Col>
			</Row>
		</div>
	)
}
export default Header