const defaultState = {}
const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case "UPDATE_INFO":
			return Object.assign(
				{},
				{ ...state },
				{
					nickname: action.info.nickname,
				},
			)
		default:
			return state
	}
}
export default reducer
