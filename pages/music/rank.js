import Music from "./index"
import { Layout, Menu } from "antd"
import { useEffect, useState } from "react"
import Axios from "axios"
import { URL } from "../../public/utils/requestConfig"
import "../../public/style/pages/rank.css"
import RankItem from "../../components/music/RankItem"

const { Sider, Content } = Layout
const rank = () => {
	const [list, setList] = useState()
	const [item, setItem] = useState()
	useEffect(() => {
		const getList = async () => {
			let result = await Axios(`${URL}/toplist/detail`)
			setList(result.data.list)
		}
		getList()
	}, [])
	const selectRank = item => {
		setItem(item)
		global.scroll(0, 0)
	}
	RankItem.defaultProps = {
		ini: !!list && list[0],
	}

	return (
		<Music>
			<Layout>
				<Sider className="side-co">
					<Menu defaultSelectedKeys={["0"]}>
						{!!list &&
							list.map((item, index) => {
								return (
									<Menu.Item
										key={index}
										onClick={() => selectRank(item)}
										className="rank-item">
										<img src={`${item.coverImgUrl}?param=40y40`} />
										<div className="list-dec">
											<p>{item.name}</p>
											<p>{item.updateFrequency}</p>
										</div>
									</Menu.Item>
								)
							})}
					</Menu>
				</Sider>
				<Content style={{ backgroundColor: "white" }}>
					<RankItem {...item} />
				</Content>
			</Layout>
		</Music>
	)
}
export default rank
