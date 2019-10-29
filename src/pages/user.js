import React from "react"
// import UserList from '../commpents/User/UserList';
// import UserAdd from '../commpents/User/UserAdd';
import { Route, Link } from "react-router-dom"
import "./styles.css"

const arr = [
	"用户列表",
	"增加用户",
	"增加用户",
	"增加用户",
	"增加用户",
	"增加用户",
	"增加用户",
	"增加用户",
	"增加用户",
	"增加用户",
	"增加用户",
	'1'
]

class User extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className="container">
				<div className="left">
					{this.props.routes.map((item, index) => {
						return (
							<Link to={item.path} className="left-list" key={index}>
								{arr[index]}
							</Link>
						)
					})}
				</div>
				<div className="right">
					{this.props.routes.map((route, index) => {
						console.log('1',route)
						return (
							<Route
								key={index}
								path={route.path}
								render={props => <route.component {...props} routes={route.routes} />}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default User
