import React from "react"
import { connect } from "react-redux"
import { Modal, Button, Input, Icon } from "antd"
import "../../public/style/components/login.css"
import axios from "axios"
import { URL } from "../../public/utils/requestConfig"
import Cookies from "js-cookie"

class Login extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		visible: false,
		phone: "",
		password: "",
		switch: "login",
		logphone: "",
		logpassword: "",
		checkpassword: "",
		checkcode: "",
		nickname: "",
	}
	showModal = () => {
		this.setState({
			visible: true,
			switch: "login",
		})
	}
	handleCancel = () => {
		this.setState({
			visible: false,
		})
	}
	onChangePhone = e => {
		this.setState({ phone: e.target.value })
	}
	onChangePassword = e => {
		this.setState({ password: e.target.value })
	}
	logOnPhone = e => {
		this.setState({ logphone: e.target.value })
	}
	logOnPassword = e => {
		this.setState({ logpassword: e.target.value })
	}
	checkPassword = e => {
		this.setState({ checkpassword: e.target.value })
	}
	onChangeCheckCode = e => {
		this.setState({ checkcode: e.target.value })
	}
	onChangeNickname = e => {
		this.setState({ nickname: e.target.value })
	}
	login = async () => {
		let TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
		const { phone, password } = this.state
		const { saveInfo } = this.props
		if (!TEL_REGEXP.test(phone)) {
			alert("输入正确的号码")
			return false
		}
		try {
			let res = await axios.get(
				`${URL}/cellphone/existence/check?phone=${phone}`,
			)
			if (res.data.exist === -1) {
				alert("该号码未注册")
			} else {
				await axios
					.get(`${URL}/login/cellphone?phone=${phone}&password=${password}`)
					.then(res => {
						switch (res.data.code) {
							case 502:
								alert(res.data.msg)
							case 509:
								alert(res.data.msg)
							case 200:
								saveInfo(res)
								Cookies.set("nickname", res.data.profile.nickname, {
									expires: 15,
									path: "/",
								})
								Cookies.set("avatarUrl", res.data.profile.avatarUrl, {
									expires: 15,
									path: "/",
								})
								this.setState({ visible: false })
						}
					})
			}
		} catch (err) {
			console.log(err)
			alert(err.response.data.msg)
		}
	}
	switchLogon = () => {
		this.setState({ switch: "logon" })
	}
	sendCode = () => {
		const { logphone } = this.state
		axios
			.get(`${URL}/captcha/sent?phone=${logphone}`)
			.catch(err => alert(err.response.data.message))
	}
	logon = async () => {
		const {
			logphone,
			logpassword,
			checkpassword,
			checkcode,
			nickname,
		} = this.state
		let TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
		if (!TEL_REGEXP.test(logphone)) {
			alert("输入正确的号码")
			return false
		} else if (logpassword !== checkpassword) {
			alert("密码不一致")
			return false
		}
		try {
			let result = await axios.get(
				`${URL}/captcha/verify?phone=${logphone}&captcha=${checkcode}`,
			)
			if (result.status === 200) {
				await axios.get(
					`${URL}register/cellphone?phone=${logphone}&password=${logpassword}&captcha=${checkcode}&nickname=${nickname}`,
				)
			}
		} catch (err) {
			alert(err.response.data.message)
		}
	}
	backLogin = () => {
		this.setState({ switch: "login" })
	}
	render() {
		return (
			<div>
				<span onClick={this.showModal}>登录</span>
				<Modal
					footer={null}
					visible={this.state.visible}
					onCancel={this.handleCancel}>
					{this.state.switch === "login" ? (
						<div className="modal-container">
							<span>登录</span>
							<div className="input-container">
								<Input
									size="large"
									placeholder="input phone number"
									allowClear
									onChange={this.onChangePhone}
									className="input-control1"
								/>
								<Input.Password
									className="input-control2"
									size="large"
									placeholder="input password"
									onChange={this.onChangePassword}
								/>
							</div>
							<div>
								<Button onClick={this.login}>登录</Button>
								<Button onClick={this.switchLogon} style={{ marginLeft: 15 }}>
									注册
								</Button>
							</div>
						</div>
					) : (
						<div className="modal-container">
							<span className="back-to-login" onClick={this.backLogin}>
								<Icon type="left" />
								返回登陆
							</span>
							<span style={{ marginBottom: 35 }}>手机号注册</span>
							<div className="input-container">
								手机号:
								<Input
									size="large"
									placeholder="input phone number"
									allowClear
									onChange={this.logOnPhone}
									className="logon-tel"
								/>
								密码:
								<Input.Password
									className="logon-password"
									size="large"
									placeholder="input password"
									onChange={this.logOnPassword}
								/>
								确认密码:
								<Input.Password
									className="check-password"
									size="large"
									placeholder="check password"
									onChange={this.checkPassword}
								/>
								昵称:
								<Input
									className="check-password"
									size="large"
									placeholder="input nickname"
									onChange={this.onChangeNickname}
								/>
								验证码:
								<div className="check-container">
									<Input
										size="large"
										allowClear
										onChange={this.onChangeCheckCode}
										className="check-code"
									/>
									<Button className="send-code" onClick={this.sendCode}>
										<span>发送</span>
									</Button>
								</div>
							</div>
							<div>
								<Button onClick={this.logon}>注册</Button>
							</div>
						</div>
					)}
				</Modal>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		info: state,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		saveInfo: res => dispatch({ type: "UPDATE_INFO", info: res.data.profile }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
