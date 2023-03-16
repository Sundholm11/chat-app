import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'
import SocketConnect from './components/SocketConnect'

import { connectSocket, disconnectSocket } from './reducers/socketReducer'
import { initializeMessages } from './reducers/messageReducer'

import { Container, Header, Divider } from 'semantic-ui-react'

const App = (props) => {
	useEffect(() => {
		props.initMessages()
	}, [])

	return (
		<Container>
			<Header as="h1" textAlign="center">
				Chat App
				<Header.Subheader>
					Welcome! Connect to chat to start!
				</Header.Subheader>
			</Header>
			<MessageList />
			{props.socket === null ? null :
			<div>
				<MessageForm />
				<Divider />
			</div> }
			<SocketConnect />
		</Container>
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
	initMessages: initializeMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(App)