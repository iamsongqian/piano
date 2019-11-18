import { Input, Modal } from "antd"
import Router from "next/router"
import "../../public/style/components/search.css"
import { URL } from "../../public/utils/requestConfig"
import Axios from "axios"
import { useState, useRef, useEffect } from "react"

const Search = () => {
	const [show, setShow] = useState(false)
	const [title, setTitle] = useState("")
  const [data, setData] = useState({})
  const inputRef=useRef()
  const searchSuggest = async e => {
    e.persist()
		if (e.target.value) {
			setTitle(e.target.value)
			const result = await Axios.get(
				`${URL}/search/suggest?keywords=${e.target.value}`,
			)
			let list = result.data.result
			if (list && JSON.stringify(list) !== "{}") {
				setData(list)
				setShow(true)
			}
    } else {
      setShow(false)
    }
    inputRef.current.focus()
    e.nativeEvent.stopImmediatePropagation()
	}
	const search = value => {
		//Router.push(`https://music.163.com/#/search/m/?s=${value}&type=1`)
		console.log(Window.href)
	}
	const handleCancel = () => {
		setShow(false)
  }
  useEffect(() => {
    document.onclick = handleCancel
  },[])
	return (
		<div className="search-co">
			<Input.Search
				placeholder="音乐/视频/电台/用户"
				onSearch={value => search(value)}
				onChange={e => searchSuggest(e)}
				className="search-in"
				ref={inputRef}
				onClick={e => searchSuggest(e)}
			/>
			<div className="hei">
				<Modal
          visible={show}
          onCancel={handleCancel}
          mask={false}
          footer={null}
          className="search-modal"
          getContainer={false}
          closable={false}>
					{
						<div>
							<a>搜'{title}‘相关用户</a>
							<div>
								{"songs" in data ? (
									<div className="search-item search-border">
										<p className="search-name">单曲</p>
										<div className="search-context ">
											{data.songs.map(item => {
												return (
													<div key={item.id} className="one-item">
														<span>{item.name}-</span>
														<span>{item.artists[0].name}</span>
													</div>
												)
											})}
										</div>
									</div>
								) : (
									""
								)}
								{"albums" in data ? (
									<div className="search-item search-border">
										<p>专辑</p>
										<div className="search-context">
											{data.albums.map(item => {
												return (
													<div key={item.id} className="one-item">
														<span>{item.name}-</span>
														<span>{item.artist.name}</span>
													</div>
												)
											})}
										</div>
									</div>
								) : (
									""
								)}
								{"playlists" in data ? (
									<div className="search-item search-border">
										<p>歌单</p>
										<div className="search-context">
											{data.playlists.map(item => {
												return (
													<div key={item.id} className="one-item">
														<span>{item.name}</span>
													</div>
												)
											})}
										</div>
									</div>
								) : (
									""
								)}
								{"artists" in data ? (
									<div className="search-item">
										<p>歌手</p>
										<div className="search-context">
											{data.artists.map(item => {
												return (
													<div key={item.id} className="one-item">
														<span>{item.name}</span>
													</div>
												)
											})}
										</div>
									</div>
								) : (
									""
								)}
							</div>
						</div>
					}
				</Modal>
			</div>
		</div>
	)
}
export default Search
