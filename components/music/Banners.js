import React, { useEffect, useState, useRef } from "react"
import axios from "axios"
import { URL } from "../../public/utils/requestConfig"
import "../../public/style/pages/recommend.css"
import { Carousel, Icon } from "antd"
const Banners = () => {
	const backImg = useRef()
	const [imgList, setImgList] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`${URL}/banner?type=1`)
			setImgList(result.data.banners)
		}
		fetchData()
	}, [])
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
					effect="fade"
					arrows="true"
					afterChange={current => show(current)}>
					{imgList.map((item, index) => {
						return (
							<div>
								<img src={item.pic} className="img-banner" key={index} />
							</div>
						)
					})}
				</Carousel>
				<Icon type="right" theme="outlined" className="click-next" />
			</div>
	)
}
export default Banners
