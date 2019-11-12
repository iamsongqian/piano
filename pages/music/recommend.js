import React from "react"
import Music from "./index"
import Banners from "../../components/music/Banners"
import HotRecommend from "../../components/music/HotRecommend"
import NewAlbum from "../../components/music/NewAlbum"
import Bill from "../../components/music/Bill"
const recommend = () => {
	return (
		<Music>
			<Banners />
			<HotRecommend />
			<NewAlbum />
			<Bill />
		</Music>
	)
}
export default recommend
