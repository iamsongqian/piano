import { CHANGE_VALUE, ADD_LIST, DELETE_LIST, GET_LIST, LOG_IN } from "./actionTypes"

export const changeValueAction = value => ({
	type: CHANGE_VALUE,
	inputValue: value,
})
export const addListAction = () => ({
	type: ADD_LIST,
})
export const deleteListAction = key => ({
	type: DELETE_LIST,
	key,
})
export const getListAction = list => ({
	type: GET_LIST,
	list,
})
export const loginAction = username => ({
	type: LOG_IN,
	username,
})