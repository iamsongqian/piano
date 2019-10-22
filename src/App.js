import React from "react"
import "./App.css"
import { Button, Input, List } from "antd"
import "antd/dist/antd.css"
import store from "./redux/store"
import { changeValueAction, addListAction, deleteListAction } from "./redux/actionContext"

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		store.subscribe(this.updateValue)
	}
	updateValue = () => this.setState(store.getState())
	changeValue = e => {
		store.dispatch(changeValueAction(e.target.value))
	}
	addList = () => {
		store.dispatch(addListAction())
	}
	deleteList = key => {
		store.dispatch(deleteListAction(key))
	}
	render() {
		const state = this.state
		return (
			<div className="app">
				<Input
					size="large"
					className="inputText"
					value={state.inputValue}
					onChange={this.changeValue}
				/>
				<Button type="primary" size="large" onClick={this.addList}>
					ADD
				</Button>
				<div className="list">
					<List
						size="default"
						dataSource={state.list}
						renderItem={(item, index) => (
							<List.Item>
								{item}
								<span className="delete" onClick={() => this.deleteList(index)}>
									x
								</span>
							</List.Item>
						)}
						action={<div>123</div>}
						bordered
					/>
				</div>
			</div>
		)
	}
}
