import React from "react"
import Music from "./index"
import Banners from "../../components/music/Banners"
import HotRecommend from "../../components/music/HotRecommend"
import NewAlbum from "../../components/music/NewAlbum"
import Bill from "../../components/music/Bill"
import Search from "../../components/music/Search"
import { Row, Col } from "antd"
const recommend = () => {
	return (
		<Music>
			<Banners />
			<Row type="flex" justify='center'>
				<Col>
					<HotRecommend />
					<NewAlbum />
					<Bill />
				</Col>
				<Col>
					<Search />
				</Col>
			</Row>
		</Music>
	)
}
export default recommend
