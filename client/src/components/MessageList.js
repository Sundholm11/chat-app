import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Message from '../components/Message'

import { Segment, Header, Comment, Grid, Divider, Placeholder, Dimmer, Loader } from 'semantic-ui-react'

const MessageList = (props) => {
	const [clientCount, setClientCount] = useState(0)

	const socket = props.socket

	useEffect(() => {
		if (socket !== null) {
			socket.on("clientCount", (count) => {
				setClientCount(count)
			})
		}
	}, [socket])

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
				<Grid columns="equal">
					<Grid.Column>
						<Header as="h2">Chat
							<Header.Subheader>Showing previous messages and real time</Header.Subheader>
						</Header>
					</Grid.Column>
					<Grid.Column textAlign="right">
						{socket === null ? '' : `Currently connected users: ${clientCount}`}
					</Grid.Column>
				</Grid>
				<Divider />
				{props.messages.length === 0 ?
				<Dimmer.Dimmable>
					<Dimmer inverted active>
						<Loader inverted>Loading</Loader>
					</Dimmer>
					<Placeholder fluid>
						<Placeholder.Header image>
								<Placeholder.Line />
								<Placeholder.Line />
						</Placeholder.Header>
						<Placeholder.Header image>
								<Placeholder.Line />
								<Placeholder.Line />
						</Placeholder.Header>
					</Placeholder>
				</Dimmer.Dimmable> :
				props.messages.map(message =>
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
		messages: state.messages,
		socket: state.socket
	}
}

export default connect(mapStateToProps)(MessageList)