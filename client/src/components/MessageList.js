import React from 'react'
import { connect } from 'react-redux'

import { Segment, Header, Divider, Comment } from 'semantic-ui-react'

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
				<div key={message.id}>
					<Comment >
						<Comment.Avatar src={`https://semantic-ui.com/images/avatar/large/${messageAvatars[Math.floor(Math.random() * messageAvatars.length)]}.jpg`} />
						<Comment.Content>
							<Segment basic floated="right">
								<Comment.Metadata>{new Date(message.timeStamp).toLocaleString()}</Comment.Metadata>
							</Segment>
							<Comment.Author>{message.user}</Comment.Author>
							<Comment.Text>{message.message}</Comment.Text>
						</Comment.Content>
					</Comment>
					<Divider />
				</div>
				)}
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