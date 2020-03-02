import Music from "./index"
import { Dropdown,Icon,Button, Card, Tag } from "antd";
import '../../public/style/pages/songlist.css'
import { useEffect, useState } from "react";
import Axios from "axios";
import SingleSheet from "../../components/music/SingleSheet";
const songlist = () => {
	const [cartList, setCartList] = useState()
	const [name, setName] = useState('全部')
	const [playlist,setPlayList]= useState()
	useEffect(() => {
		const getData = async () => {
			let cart = await Axios(`/playlist/catlist`)
			setCartList(cart.data)
		}
		getData()
	}, [])
	useEffect(() => {
		const getList = async () => {
			let result = await Axios(`/top/playlist?limit=60`)
			setPlayList(result.data.playlists)
		}
		getList()
	}, [])
	const selectTag = async item => {
		setName(item.name)
		let result = await Axios(`/top/playlist?limit=60&cat=${item.name}`)
		setPlayList(result.data.playlists)

	}
	const menu = !!cartList && (
		<Card className="tag">
			{cartList.sub.map((item, index) => (
				<Tag onClick={() => selectTag(item)} style={{margin:5}}>{item.name}</Tag>
			))}
		</Card>
	)

	return (
		<Music>
			<div className="sl-co">
				<div className="sl-inn">
					<div className="sl-sle">
						<p style={{ fontSize: 25, margin: 40 }}>{name}</p>
						<Dropdown overlay={menu}>
							<Button>
								选择分类 <Icon type="down" />
							</Button>
						</Dropdown>
					</div>
					<div className="rc-list">
						{!!playlist &&
							playlist.map((item, index) => {
								return (
									<div key={index}>
										<SingleSheet {...item} />
									</div>
								)
							})}
					</div>
				</div>
			</div>
		</Music>
	)
}
export default songlist
