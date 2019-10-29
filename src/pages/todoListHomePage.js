import React from "react"
import "../style/todoListHomePage.css"
import { Button, Input, List, Card } from "antd"
import { getInitList } from "../redux/reduxRequest"
import {
	changeValueAction,
	addListAction,
	deleteListAction,
} from "../redux/actionContext"
import { connect } from 'react-redux'
import Login from './login'
import RichText from "./richText"
import { Route, Link } from "react-router-dom"
class TodoListHomePage extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		getInitList()
	}
	render() {
		return (
			<div className="top">
				<Input
					size="large"
					className="inputText"
					value={this.props.inputValue}
					onChange={this.props.changeValue}
				/>
				<Button type="primary" size="large" onClick={this.props.addList}>
					ADD
				</Button>
				<div className="list">
					<List
						size="default"
						dataSource={this.props.list}
						renderItem={(item, index) => (
							<List.Item className="ant-list-item-no-flex">
								{item}
								<span className="delete" onClick={() => this.props.deleteList(index)}>
									x
								</span>
							</List.Item>
						)}
						bordered
					/>
				</div>
				<Card className="cardstyle">username:{this.props.username}</Card>
				<Login />
				<RichText />
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
		inputValue: state.inputValue,
		list: state.list,
		username:state.username
	}
}
const mapDispatchToProps = dispatch => {
	return {
		changeValue(e) {
			dispatch(changeValueAction(e.target.value))
		},
		addList() {
			dispatch(addListAction())
		},
		deleteList(key) {
			dispatch(deleteListAction(key))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoListHomePage)