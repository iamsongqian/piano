import { Menu } from "antd"
import Link from "next/link"
import { getKeyFromChildrenIndex } from "rc-menu/lib/util"

const navList = [
	{
		name: "推荐",
		url: "/music/recommend",
	},
	{
		name: "排行榜",
		url: "/music/rank",
	},
	{
		name: "歌单",
		url: "/music/songlist",
	},
	{
		name: "歌手",
		url: "/music/artist",
	},
	{
		name: "新碟上架",
		url: "/music/newup",
	},
]
const menuOne = (
	<Menu.Item href="/music/recommend">
		<a>推荐</a>
	</Menu.Item>
)
const NavList = () => {
	return (
		<div>
			<Menu mode="horizontal" style={{ textAlign: "center" }}>
				{navList.map((item, index) => (
					<Menu.Item key={index}>
						<Link href={item.url}>
							<a style={{ color: "#a11" }}>{item.name}</a>
						</Link>
					</Menu.Item>
				))}
			</Menu>
		</div>
	)
}
export default NavList
