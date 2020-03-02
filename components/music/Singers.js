import "../../public/style/components/singer.css"
import { Icon } from "antd"
import { useState, useEffect } from "react"
import Axios from "axios"
const Singers = () => {
  const [singer, setSinger] = useState([])
  useEffect(() => {
    const getData = async () => {
      const result = await Axios(`/artist/list?cat=5001`)
      setSinger(result.data.artists.slice(0, 5))
    }
    getData()
  },[])
	return (
		<div className="singer">
			<div className="singer-top">
				<span>入驻歌手</span>
				<a
					className="singer-click"
					href="https://music.163.com/#/discover/artist/signed/">
					查看全部
					<Icon type="right" style={{ fontSize: 12 }} />
				</a>
			</div>
			<div>
				{singer.map(item => {
					return (
						<a
							key={item.id}
							href={`https://music.163.com/user/home?id=${item.accountId}`}
							className="singer-item">
							<img src={`${item.img1v1Url}?param=62y62`} />
							<div className="singer-dec">
								<span>{item.name}</span>
								<span>no description</span>
							</div>
						</a>
					)
				})}
			</div>
		</div>
	)
}
export default Singers
