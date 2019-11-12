import React from "react"
import "../../public/style/components/bill.css"
const SingleBill = props => {
	props = typeof props === "array" ? props : Object.values(props)
	return (
		<div className="single-list">
			{props[10] === 0 ? (
				<div className="single-img">
					<img
						src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
						className="img-item"
					/>
					<a style={{ color: "black" }}>云音乐飙升榜</a>
				</div>
			) : props[10] === 1 ? (
				<div className="single-img">
					<img
						src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100"
						className="img-item"
					/>
					<a style={{ color: "black" }}>云音乐新歌榜</a>
				</div>
			) : props[10] === 2 ? (
				<div className="single-img">
					<img
						src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100"
						className="img-item"
					/>
					<a style={{ color: "black" }}>云音乐原创榜</a>
				</div>
			) : (
				""
			)}
			{props.map((item, index) => {
				return (
					<div
						key={index}
						className="single-item"
						style={{
							backgroundColor: `${index % 2 === 0 ? "#E8E8E8" : "#F4F4F4"}`,
							display:`${typeof(item)==='number'?'none':''}`
						}}>
						<span
							style={{
								color: `${index < 3 ? "red" : "black"}`,
								marginLeft: `${index === 9 ? "22px" : "30px"}`,
								fontSize: 16,
							}}>
							{index + 1}
						</span>
						<a
							className="single-click"
							href={`https://music.163.com/song?id=${item.id}`}>
							{item.name}
						</a>
					</div>
				)
			})}
		</div>
	)
}
export default SingleBill
