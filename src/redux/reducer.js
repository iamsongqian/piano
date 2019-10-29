
const defaultState = {
	inputValue: '',
	list: [],
}
export default (state = defaultState, action) => {
	switch (action.type) {
		case "changeValue":
			return {
				...state,
				inputValue: action.inputValue,
			}
		case "addList":
			return {
				...state,
				inputValue: "",
				list: [...state.list, state.inputValue],
			}
		case "deleteList":
			return Object.assign({}, state, {
				list: state.list.filter((item, index) => index !== action.key),
			})
		case "getList":
			return Object.assign({}, state, { list: [...action.list] })
		case "login":
			return {
				...state,
				username:action.username
			}
		default:
			return state
	}
}
