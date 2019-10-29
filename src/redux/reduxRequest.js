import { getListAction, loginAction } from "./actionContext"
import axios from "axios"
import store from "./store"

export const getInitList = () => {
	axios
		.get("https://www.easy-mock.com/mock/5daeb05802e1d2793a62df32/test/list")
		.then(res => {
			const data = res.data.data.list
			store.dispatch(getListAction(data))
		})
}
export const loginRedux = (username) => {
	//发送请求校验
	store.dispatch(loginAction(username))
}