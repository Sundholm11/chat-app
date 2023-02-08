import axios from 'axios'
const baseUrl = '/api/messages'

export const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

export const addNewMessage = async newObject => {
	const response = await axios.post(baseUrl, newObject)
	return response.data
}