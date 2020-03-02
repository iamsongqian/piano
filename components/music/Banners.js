import React, { useEffect, useState, useRef } from "react"
import axios from "axios"
import "../../public/style/pages/recommend.css"
import { Carousel, Icon } from "antd"
const Banners = () => {
	const backImg = useRef()
	const [imgList, setImgList] = useState([])
	const fetchData = async () => {
		const result = await axios.get(`/banner?type=1`)
		setImgList(result.data.banners)
		let firstImg = result.data.banners[0].pic
		const rubissh = !!backImg.current.style && backImg.current.style
		rubissh.background = `url(${firstImg}?imageView&blur=40x20)`
		rubissh.backgroundSize = "6000px"
		rubissh.backgroundPosition = "center center"
	}
	useEffect(() => {
		fetchData()
	},[])
	function show(current) {
		const rubissh = backImg.current.style
		let cur = imgList[current].pic
		rubissh.background = `url(${cur}?imageView&blur=40x20)`
		rubissh.backgroundSize = "6000px"
		rubissh.backgroundPosition = "center center"
	}
	return (
		<div className="box" ref={backImg}>
			<Icon type="left" theme="outlined" className="click-pre" />
			<Carousel
				speed="5"
				effect="fade"
				arrows="true"
				autoplay="true"
				easing="linear"
				afterChange={current => show(current)}>
				{imgList.map((item, index) => {
					return (
						<a
							key={index}
							href={
								item.song
									? `https://music.163.com/song?id=${item.song.id}`
									: item.url
									? item.url
									: `https://music.163.com/album?id=${item.targetId}`
							}>
							<img src={item.pic} className="img-banner" />
						</a>
					)
				})}
			</Carousel>
			<Icon type="right" theme="outlined" className="click-next" />
		</div>
	)
}
export default Banners
