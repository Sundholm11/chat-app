import React, { useState } from 'react'
import { connect } from 'react-redux'

import { newMessage } from '../reducers/messageReducer'

import { Header, Form, Button } from 'semantic-ui-react'

const MessageForm = (props) => {
	const [message, setMessage] = useState('')
	const [user, setUser] = useState('')

	const handleAddMessage = (event) => {
		event.preventDefault()
		const sentMessage = {
			message: message,
			timeStamp: new Date().toLocaleString(),
			user: user
		}
		props.socket.send(sentMessage)
		props.addMessage(sentMessage)
		setMessage('')
		setUser('')
	}

	return (
		<div>
			<Header as="h3">Send message:</Header>
			<Form onSubmit={handleAddMessage}>
				<Form.Group>
					<Form.Field width={11}>
						<label>Message</label>
						<Form.Input 
							value={message} 
							onChange={({target}) => setMessage(target.value)}
							placeholder="Add a message..."
						/>
					</Form.Field>
					<Form.Field width={5}>
						<label>Sent by</label>
						<Form.Input
							value={user}
							onChange={({target}) => setUser(target.value)}
							placeholder="Anonymous by default"
						/>
					</Form.Field>
				</Form.Group>
				<Button type="submit">Send</Button>
			</Form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		socket: state.socket
	}
}

const mapDispachToProps = {
	addMessage: newMessage
}

export default connect(mapStateToProps, mapDispachToProps)(MessageForm)