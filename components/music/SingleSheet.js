import react, { useEffect, useState } from "react"
import "../../public/style/pages/recommend.css"
import { Icon } from "antd"

const SingleSheet = props => {
	const [playCount, setPlayCount] = useState(props.playCount)
	useEffect(() => {
		let str = playCount + ""
		str =
			playCount < 100000
				? str.substring(0, 1)
				: playCount < 1000000
				? str.substring(0, 2)
				: playCount < 10000000
				? str.substring(0, 3)
				: playCount < 100000000
				? str.substring(0, 4)
				: str.substring(0, 5)
		setPlayCount(Number(str))
	}, [])
	return (
		<div className="sheet-wrap">
			<a
				href={`https://music.163.com/playlist?id=${props.id}`}
				style={{
					background: `url(${props.picUrl || props.coverImgUrl}?param=140y140)`,
				}}
				className="sheet-icon">
				<div className="play-num">
					<Icon type="customer-service" style={{ marginRight: 5 }} />
					{playCount}万
				</div>
			</a>
			<a className="desc">{props.name}</a>
		</div>
	)
}
export default SingleSheet
