import React from "react"
import "./App.css"
import { Button, Input, List } from "antd"
import "antd/dist/antd.css"
import store from "./redux/store"
import axios from "axios"

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		store.subscribe(this.updateValue)
	}
	updateValue = () => this.setState(store.getState())
	changeValue = e => {
		const action = {
			type: "CHANGE_VALUE",
			inputValue: e.target.value,
		}
		store.dispatch(action)
	}
	addList = () => {
		const action = {
			type: "ADD_LIST",
		}
		store.dispatch(action)
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
						renderItem={item => <List.Item>{item}</List.Item>}
						bordered
					/>
				</div>
			</div>
		)
	}
}
