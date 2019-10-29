import Home from '../pages/home'
import User from "../pages/user"
import UserList from "../pages/userList"
import TodoListHomePage from "../pages/todoListHomePage"

const routeConfig = [
	{
		path: "/",
		component: Home,
		exact: true,
	},
	{
		path: "/user",
		component: User,
		routes: [
			{
				path: "/user/userlist",
				component: UserList,
			},
			{
				path: "/user/add",
				component: TodoListHomePage,
			},
		],
	},
]

export default routeConfig