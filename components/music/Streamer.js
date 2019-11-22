import { useState, useEffect } from "react"
import { URL } from "../../public/utils/requestConfig"
import Axios from "axios"
const Streamer = () => {
  const [dj, setDj] = useState([])
  useEffect(() => {
    const getData = async () => {
      const result = await Axios(`${URL}/dj/toplist/popular?limit=6`)
      setDj(result.data.data.list)
    }
    getData()
  },[])
	return (
		<div className="singer">
			<div className="singer-top">
				<span>热门电台主播</span>
			</div>
			<div>
				{dj.map(item => {
					return (
						<a
							key={item.id}
							href={`https://music.163.com/user/home?id=${item.id}`}
							className="singer-item">
							<img src={`${item.avatarUrl}?param=62y62`} />
							<div className="singer-dec">
								<span>{item.nickName}</span>
								<span>no description</span>
							</div>
						</a>
					)
				})}
			</div>
		</div>
	)
}

export default Streamer

