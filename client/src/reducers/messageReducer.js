import { getAll, addNewMessage } from '../services/messages'

const messageReducer = (state = [], action) => {
	switch(action.type) {
		case 'INIT_MESSAGES':
			return action.data
		case 'NEW_MESSAGE':
			return state.concat(action.data)
		default:
			return state
	}
}

export const initializeMessages = () => {
	return async dispatch => {
		const messages = await getAll()
		dispatch({
			type: 'INIT_MESSAGES',
			data: messages
		})
	}
}

export const newMessage = message => {
	return async dispatch => {
		const newMessage = await addNewMessage(message)
		dispatch({
			type: 'NEW_MESSAGE',
			data: newMessage
		})
	}
}

export default messageReducer