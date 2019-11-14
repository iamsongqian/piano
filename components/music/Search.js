import { Input } from "antd";
import Router from 'next/router'
import '../../public/style/components/search.css'

const Search = () => {
  const searchSuggest = e => {
		console.log(e.target.value)
  }
  const search = value => {
    //Router.push(`https://music.163.com/#/search/m/?s=${value}&type=1`)
    console.log(Window.href)
  }
  return (
		<div className='search-co'>
			<Input.Search
				placeholder="音乐视频/电台/用户"
				onSearch={value=>search(value)}
				onChange={e => searchSuggest(e)}
				className="search-in"
			/>
		</div>
	)
}
export default Search