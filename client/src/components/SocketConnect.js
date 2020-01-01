import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { connectSocket, disconnectSocket } from '../reducers/socketReducer'
import { initializeMessages } from '../reducers/messageReducer'

import { Button } from 'semantic-ui-react'

const SocketConnect = (props) => {
	const socket = props.socket

	useEffect(() => {
		if (socket !== null) {
			socket.on("message", () => {
				props.refreshMessages()
			})
		}
	}, [socket])

	return (
		<div> {socket === null ? 
			<div>
				<p>Disconnected from the server</p>
				<Button onClick={props.connect}>Connect</Button>
			</div> :
			<div>
				<p>Connected to the server</p>
				<Button onClick={props.disconnect}>Disconnect</Button>
			</div>}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		socket: state.socket
	}
}

const mapDispatchToProps = {
	connect: connectSocket,
	disconnect: disconnectSocket,
	refreshMessages: initializeMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(SocketConnect)