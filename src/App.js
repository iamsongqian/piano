import React from "react"
import routeConfig from "./router/routerConfig"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<nav style={{height:60,backgroundColor:'lightgreen'}}>
					<Link to="/"> home </Link>
					<Link to="/user">user</Link>
				</nav>
				{routeConfig.map((route, key) => {
					if (route.exact) {
						return (
							<Route
								key={key}
								exact
								path={route.path}
								render={props => <route.component {...props} routes={route.routes} />}
							/>
						)
					} else {
						return (
							<Route
								key={key}
								path={route.path}
								render={props => <route.component {...props} routes={route.routes} />}
							/>
						)
					}
				})}
			</Router>
		)
	}
}
