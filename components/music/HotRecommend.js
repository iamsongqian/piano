import React, { useEffect, useState } from "react"
import { Icon } from "antd"
import "../../public/style/pages/recommend.css"
import Axios from "axios"
import { URL } from "../../public/utils/requestConfig"
import SingleSheet from "./SingleSheet"

const list = [
	{ name: "华语" },
	{ name: "流行" },
	{ name: "摇滚" },
	{ name: "民谣" },
	{ name: "电子" },
	{ name: "ACG" },
]
const HotRecommend = () => {
	const [songList, setSongList] = useState([])
	useEffect(() => {
		const getList = async () => {
			const result = await Axios.get(`${URL}/personalized?limit=8`)
			setSongList(result.data.result)
		}
		getList()
	}, [])
	return (
		<div className="hot-rc">
			<div className="tab-wrap">
				<div className="rc-logo">
					<div className="rc-logo-inner" />
				</div>
				<a className="rc-link" href=''>热门推荐</a>
				<div className="tab-list">
					{list.map((item, index) => {
						return (
							<a key={index} href={`https://music.163.com/discover/playlist/?cat=${item.name}`}>
								<li className="list-item">{item.name}</li>
							</a>
						)
					})}
				</div>
				<div className="more">
					<a className="more-text">更多</a>
					<Icon type="right" className="more-icon"/>
				</div>
			</div>
			<div className="rc-list">
				{songList.map((item, index) => {
					return (
						<div key={index}>
							<SingleSheet {...item} />
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default HotRecommend
