import React from "react"
import Music from "./index"
import Banners from "../../components/music/Banners"
import HotRecommend from "../../components/music/HotRecommend"
import { Row, Col } from "antd"
const recommend = () => {
	return (
		<Music>
			<Banners />
			<Row justify="center" type="flex">
				<Col xs={24} sm={24} md={24} lg={17}>
					<HotRecommend />
				</Col>
				<Col xs={0} sm={0} md={0} lg={7}></Col>
			</Row>
		</Music>
	)
}
export default recommend
