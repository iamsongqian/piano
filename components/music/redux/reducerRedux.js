const defaultState = {
	info: {
		nickname:'未登录'
	},
}
export const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case "UPDATE_INFO":
			return action.info
		default:
			return state.info
	}
}
