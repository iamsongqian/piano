
const defaultState = {
	inputValue: '',
	list: [],
}
export default (state = defaultState, action) => {
	switch (action.type) {
		case "changeValue":
			return Object.assign({}, state, {
				inputValue: action.inputValue,
			})
		case "addList":
			defaultState.list.push(state.inputValue)
			return Object.assign({}, state, {
				inputValue: "",
				list: defaultState.list,
			})
		case "deleteList":
			defaultState.list.splice(action.key, 1)
			return Object.assign({}, state, {
				list: defaultState.list,
			})
		default:
			return state
	}
}
