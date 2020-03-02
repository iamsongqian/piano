import React, { useEffect, useState } from "react"
import { Icon, Carousel } from "antd"
import "../../public/style/components/single-album.css"
import Axios from "axios"
import SingleAlbum from './SingleAlbum'
const NewAlbum = () => {
  const [prenew, setPrenew]= useState([])
  const [nextnew, setNextnew] = useState([])
  useEffect(() => {
    const getNew = async () => {
      const result = await Axios(`/album/newest`)
      setPrenew(result.data.albums.slice(0, 5))
      setNextnew(result.data.albums.slice(5, 10))
    }
    getNew()
  },[])
  return (
		<div className="hot-rc">
			<div className="tab-wrap">
				<div className="rc-logo">
					<div className="rc-logo-inner" />
				</div>
				<a className="rc-link" href="">
					新碟上架
				</a>
				<div style={{ marginLeft: 472 }}>
					<a className="more-text">更多</a>
					<Icon type="right" className="more-icon" />
				</div>
			</div>
			<div className="album-wrap">
				<Icon type="left" theme="outlined" />
				<Carousel arrows="true" speed='2000'>
					<div className="album-list">
						{prenew.map((item, index) => {
							return <SingleAlbum {...item} key={index} />
						})}
					</div>
					<div className="album-list">
						{nextnew.map((item, index) => {
							return <SingleAlbum {...item} key={index} />
						})}
					</div>
				</Carousel>
				<Icon type="right" theme="outlined" />
			</div>
		</div>
	)
}
export default NewAlbum