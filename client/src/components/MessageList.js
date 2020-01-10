import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Message from './Message'

import { Segment, Header, List, Divider, Grid } from 'semantic-ui-react'

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

	return (
		<Segment>
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
			<List relaxed>{props.messages.map(message =>
				<List.Item key={message.id}>
					<List.Content floated="right" >
						{new Date(message.timeStamp).toLocaleString()}
					</List.Content>
					<List.Icon name="user circle" size="large" verticalAlign="middle"></List.Icon>
					<List.Content>
						<List.Header>{message.user}</List.Header>
						<Message message={message} />
					</List.Content>
					<Divider />
				</List.Item>
			)}
			</List>
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