import React from "react"
import "./App.css"
import axios from "axios"
export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			inputValue: "",
			list: [1],
		}
	}
	change = () => {
		const { inputValue, list } = this.state
		this.setState({
			list: [...list, inputValue],
		})
	}
	handle = e => {
		this.setState({
			inputValue: e.target.value,
		})
	}
	decrease = index => {
		const { list } = this.state
		list.splice(index, 1)
		this.setState({
			list,
		})
	}
	componentDidMount() {
		axios
			.get("https://www.easy-mock.com/mock/5da9aed3f4375c1918a3edf6/example/query")
			.then(res => console.log(res))
			.catch(err => console.log(err))
			.finally(console.log(11))
	}
	render() {
		return (
			<div className="app">
				<input value={this.state.inputValue} onChange={this.handle} />
				<button onClick={this.change}>添加</button>
				{this.state.list.map((item, index) => {
					return (
						<ul className="item">
							<li dangerouslySetInnerHTML={{ __html: item }}></li>
							<button onClick={() => this.decrease(index)}>x</button>
						</ul>
					)
				})}
			</div>
		)
	}
}
