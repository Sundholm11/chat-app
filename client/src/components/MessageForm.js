import React, { useState } from 'react'
import { connect } from 'react-redux'

import { newMessage } from '../reducers/messageReducer'

import { Header, Form, Button } from 'semantic-ui-react'

const MessageForm = (props) => {
	const [message, setMessage] = useState('')

	const handleAddMessage = (event) => {
		event.preventDefault()
		props.socket.send({message})
		props.addMessage({message})
		setMessage('')
	}

	return (
		<div>
			<Header as="h3">Send message:</Header>
			<Form onSubmit={handleAddMessage}>
				<Form.Field>
					<input 
						value={message} 
						onChange={({target}) => setMessage(target.value)}
						placeholder="Add a message..."
					/>
				</Form.Field>
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