import { Icon } from "antd"
import "../../public/style/pages/rank.css"
import { useState, useEffect } from "react"
import Axios from "axios"
import { URL } from "../../public/utils/requestConfig";
const list = {
	"0": "云音乐新歌榜",
	"1": "云音乐热歌榜",
	"2": "网易原创歌曲榜",
	"3": "云音乐飙升榜",
	"4": "云音乐电音榜",
	"5": "UK排行榜周榜",
	"6": "美国Billboard周榜",
	"7": "KTV嗨榜",
	"8": "iTunes榜",
	"9": "Hit FM Top榜",
	"10": "日本Oricon周榜",
	"11": "韩国Melon排行榜周榜",
	"12": "韩国Mnet排行榜周榜",
	"13": "韩国Melon原声周榜",
	"14": "中国TOP排行榜(港台榜)",
	"15": "中国TOP排行榜(内地榜)",
	"16": "香港电台中文歌曲龙虎榜",
	"17": "华语金曲榜",
	"18": "中国嘻哈榜",
	"19": "法国 NRJ EuroHot 30周榜",
	"20": "台湾Hito排行榜",
	"21": "Beatport全球电子舞曲榜",
	"22": "云音乐ACG音乐榜",
	"23": "云音乐说唱榜",
	"24": "云音乐古典音乐榜",
	"25": "云音乐电音榜",
	"26": "抖音排行榜",
	"27": "新声榜",
	"28": "云音乐韩语榜",
	"29": "英国Q杂志中文版周榜",
	"30": "电竞音乐榜",
	"31": "云音乐欧美热歌榜",
	"32": "云音乐欧美新歌榜",
	"33": "说唱TOP榜",
}
const RankItem = props => {
	props = "name" in props ? props : props.ini
  const [id, setId] = useState("3")
  const [song,setSong]=useState()
	useEffect(() => {
		const findId = (obj, val, compare = (a, b) => a === b) =>
			Object.keys(obj).find(k => compare(obj[k], val))
		setId(findId(list, props.name))
	}, [props.name])
  useEffect(() => {
    const getData = async () => {
      let result = await Axios(`${URL}/top/list?idx=${id}`)
      setSong(!!result&&result.data.playlist.tracks)
    }
    getData()
  }, [id])
	const formatDate = time => {
		var data = new Date(time)
		var month = data.getMonth() + 1
		var date = data.getDate()
		return `${month}月${date}日`
	}
	return (
		<div className="rank-item-co">
			<div className="rank-item-top">
				<img src={`${props.coverImgUrl}?param=150y150`} />
				<div className="top-co">
					<p style={{ fontSize: 25 }}>{props.name}</p>
					<span>
						<Icon type="clock-circle" />
            最近更新:{formatDate(props.updateTime)}({props.updateFrequency})
					</span>
				</div>
      </div>
      <div>
        {!!song && song.map(item => {
          console.log(item)
          return (
            <p>{item.name}</p>
          )
        })}
      </div>
		</div>
	)
}
export default React.memo(RankItem)
