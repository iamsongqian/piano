import { Menu } from "antd"
import Link from "next/link"
import Login from "./Login"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
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
const NoLog = props => {
	return (
		<span className="nolog">
			welcome:{props.name}
			<style jsx>{`
				.nolog {
					
				}
			`}</style>
		</span>
	)
}
const NavList = () => {
	let name = Cookies.get("nickname")
	let [show, setShow] = useState(true)
	useEffect(() => {
		show=setShow(!show)
	},[name])
	return (
		<div className="navList">
			<Menu mode="horizontal" style={{ textAlign: "center" }}>
				{navList.map((item, index) => (
					<Menu.Item key={index}>
						<Link href={item.url}>
							<a style={{ color: "#a11" }}>{item.name}</a>
						</Link>
					</Menu.Item>
				))}
			</Menu>
			{show ? (
				<Login/>
			) : (
				<NoLog name={name} />
			)}
			<style jsx>{`
				.navList {
					display: flex;
					justify-content: center;
					background-color: white;
					align-items: center;
				}
			`}</style>
		</div>
	)
}
export default NavList
