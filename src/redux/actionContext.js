import { CHANGE_VALUE, ADD_LIST, DELETE_LIST } from "./actionTypes"
export const changeValueAction = value => ({
	type: CHANGE_VALUE,
	inputValue: value,
})
export const addListAction = () => ({
	type: ADD_LIST,
})
export const deleteListAction = key => ({
	type: DELETE_LIST,
	key
})

