import React, { Fragment } from "react"
import { Button, Input, Modal, Icon } from "antd"
import {loginRedux} from '../redux/reduxRequest'
export default class Login extends React.Component {
	state = {
		username: "",
		visible: false,
	}
	showModal = () => {
		this.setState({
			visible: true,
		})
	}
	onChange = e => {
		const username = e.target.value
		this.setState({
			username,
		})
	}
	handleCancel = () => {
		console.log("Clicked cancel button")
		this.setState({
			visible: false,
		})
  }
  login = () => {
    loginRedux(this.state.username)
    this.setState({
      visible:false
    })
  }
	render() {
		const { visible } = this.state
		return (
			<Fragment>
				<Button type="primary" onClick={this.showModal}>
					Login
				</Button>
				<Modal visible={visible} footer={null} onCancel={this.handleCancel}>
					<div className="inputContainer">
						<Input
							placeholder="Enter your username"
							prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
							allowClear
							size="large"
							onChange={this.onChange}
						/>
						<Input.Password
							placeholder="Enter your password"
							prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
							size="large"
						/>
						<Button>Sign Up</Button>
						<Button onClick={this.login}>Sign In</Button>
					</div>
				</Modal>
			</Fragment>
		)
	}
}
