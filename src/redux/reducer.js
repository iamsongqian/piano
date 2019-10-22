
const defaultState = {
	inputValue: '',
	list: [],
}
export default (state = defaultState, action) => {
	switch (action.type) {
		case "CHANGE_VALUE":
			return Object.assign({}, state, {
				inputValue: action.inputValue,
			})
		case "ADD_LIST":
			defaultState.list.push(state.inputValue)
			return Object.assign({}, state, {
				inputValue:'',
				list: defaultState.list,
			})
		default:
			return state
	}
}
