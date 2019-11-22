import { Menu } from "antd"
import Link from "next/link"
import Login from "./Login"
import { useEffect, useState } from "react"
import { connect } from 'react-redux'
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
const NavList = (props) => {
	console.log(props)
	let [url,setUrl]=useState()
	useEffect(() => {
		setUrl(global.location.pathname)
	}, [])
	return (
		<div className="navList">
			<Menu mode="horizontal" style={{ textAlign: "center" }}>
				{navList.map((item, index) => (
					<Menu.Item key={index}>
						<Link href={item.url}>
							<a
								style={{
									color: `${item.url === url ? "red" : "purple"}`,
								}}>
								{item.name}
							</a>
						</Link>
					</Menu.Item>
				))}
			</Menu>
			<Login />
			<p>{props.nickname}</p>
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
export default connect(state=>state)(NavList)