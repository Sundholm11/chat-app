import axios from 'axios'

export const getAll = async () => {
	const response = await axios.get('/api/messages')
	return response.data
}

export const addNewMessage = async newObject => {
	const response = await axios.post('/api/messages', newObject)
	return response.data
}