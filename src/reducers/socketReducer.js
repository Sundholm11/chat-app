import socketIOClient from 'socket.io-client'

const socketReducer = (state = null, action) => {
	switch(action.type) {
		case 'CONNECT_SOCKET':
			const socket = socketIOClient(process.env.SOCKET_ENDPOINT)
			return socket
		case 'DISCONNECT_SOCKET':
			state.off()
			state.close()
			return null
		default:
			return state
	}
}

export const connectSocket = () => {
	return {
		type: 'CONNECT_SOCKET'
	}
}

export const disconnectSocket = () => {
	return {
		type: 'DISCONNECT_SOCKET'
	}
}

export default socketReducer