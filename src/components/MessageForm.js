import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { newMessage } from '../reducers/messageReducer'
import { validateUsername } from '../utils/validate'
import { messageAvatars } from '../utils/messageAvatars'

import { Label, Header, Form } from 'semantic-ui-react'

const MessageForm = (props) => {
	const [message, setMessage] = useState('')
	const [user, setUser] = useState('')
    const [userImage, setUserImage] = useState('ade')
    const [error, setError] = useState('')

    useEffect(() => {
		setUserImage('ade')
	}, [])

	const handleAddMessage = (event) => {
		event.preventDefault()

        if ( user.length > 15 ) {
            setError('Username too long! Must be less than 15 characters')
            setTimeout(() => { setError('') }, 5000)
            
            return
        }

        if ( !validateUsername(user) ) {
            setError('Username must only contain letters')
            setTimeout(() => { setError('') }, 5000)

            return
        }

        if ( userImage.length === 0 ) {
            setUserImage(messageAvatars[Math.floor(Math.random() * messageAvatars.length)].value)
        }

		const sentMessage = {
			message: message,
			timeStamp: new Date(),
			user: user,
            userImage: `https://semantic-ui.com/images/avatar/large/${userImage}.jpg`
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
					<Form.Field style={{ paddingBottom: "10px" }} width={9}>
						<label>Message</label>
						<Form.Input 
							value={message} 
							onChange={({target}) => setMessage(target.value)}
							placeholder="Add a message..."
                            action="Send"
						/>
					</Form.Field>
					<Form.Field style={{ paddingBottom: "10px" }} width={4}>
						<label>Sent by</label>
						<Form.Input
							value={user}
							onChange={({target}) => setUser(target.value)}
							placeholder="Anonymous by default"
						/>
					</Form.Field>
                    <Form.Field style={{ paddingBottom: "10px" }}>
						<label>Image</label>
						<Form.Select
                            defaultValue={messageAvatars.defaultSelected}
                            options={messageAvatars.options}
							onChange={({ target }) => setUserImage(target.textContent.toLowerCase())}
						/>
					</Form.Field>
				</Form.Group>
                { error.length > 0 ? 
                    <Label basic color="red">{error}</Label> :
                    null
                }
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