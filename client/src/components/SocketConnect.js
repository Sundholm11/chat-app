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
			<div style={{ paddingBottom: "10px" }}>
				<p>Disconnected from the chat</p>
				<Button onClick={props.connect}>Connect</Button>
			</div> :
			<div style={{ paddingBottom: "10px" }}>
				<p>Connected to the chat</p>
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