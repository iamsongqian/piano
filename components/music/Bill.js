import { Icon } from "antd"
import SingleBill from './SingleBill'
const Bill = () => {
	return (
		<div className="hot-rc">
			<div className="tab-wrap">
				<div className="rc-logo">
					<div className="rc-logo-inner" />
				</div>
				<a className="rc-link" href="">
					榜单
				</a>
				<div style={{ marginLeft: 517 }}>
					<a className="more-text">更多</a>
					<Icon type="right" className="more-icon" />
				</div>
      </div>
      <div className='bill-list'>
        <SingleBill />
      </div>
		</div>
	)
}
export default Bill