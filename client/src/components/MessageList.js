import React from 'react'
import { connect } from 'react-redux'

import Message from '../components/Message'

import { Segment, Header, Comment } from 'semantic-ui-react'

const MessageList = (props) => {
	const messageAvatars = [
		"ade",
		"chris",
		"christian",
		"daniel",
		"elliot",
		"helen",
		"jenny",
		"joe",
		"justen",
		"laura"
	]

	return (
		<Segment>
			<Comment.Group style={{ maxWidth: "100%" }}> 
				<Header as="h2" dividing>Chat
					<Header.Subheader>Showing previous messages and real time</Header.Subheader>
				</Header>
				{props.messages.map(message =>
				<Message
					key={message.id}
					message={message}
					messageAvatar={`https://semantic-ui.com/images/avatar/large/${messageAvatars[Math.floor(Math.random() * messageAvatars.length)]}.jpg`}
				/>)}
			</Comment.Group>
		</Segment>
	)
}

const mapStateToProps = (state) => {
	return {
		messages: state.messages
	}
}

export default connect(mapStateToProps)(MessageList)