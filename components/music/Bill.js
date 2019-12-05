import { Icon } from "antd"
import SingleBill from './SingleBill'
import { useState, useEffect } from "react"
import { URL } from "../../public/utils/requestConfig"
import Axios from "axios"
import '../../public/style/components/bill.css'
const Bill = () => {
	let [upbill, setUpbill] = useState()
	let [newsongbill, setNewsongbill] = useState()
	let [oribill, setOribill] = useState()
	useEffect(() => {
		const getBill = async () => {
			let upResult = await Axios.get(`${URL}/top/list?idx=3`)
			let newResult = await Axios.get(`${URL}/top/list?idx=0`)
			let oriResult = await Axios.get(`${URL}/top/list?idx=2`)
			setUpbill(upResult.data.playlist.tracks.slice(0, 10))
			setNewsongbill(newResult.data.playlist.tracks.slice(0, 10))
			setOribill(oriResult.data.playlist.tracks.slice(0, 10))
		}
		getBill()
	}, [])
	return (
		<div className="hot-rc">
			<div className="tab-wrap">
				<div className="rc-logo">
					<div className="rc-logo-inner" />
				</div>
				<a className="rc-link" href="/music/rank">
					榜单
				</a>
				<div style={{ marginLeft: 517 }}>
					<a className="more-text" href="/music/rank">
						更多
					</a>
					<Icon type="right" className="more-icon" />
				</div>
			</div>
			<div className="bill-list">
				{!!oribill &&
					[upbill, newsongbill, oribill].map((item, index) => {
						return <SingleBill {...item} id={index} key={index} />
					})}
			</div>
		</div>
	)
}
export default Bill