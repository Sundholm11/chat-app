import React from 'react'
import { connect } from 'react-redux'
import Message from './Message'

import { Segment, Header, List, Divider } from 'semantic-ui-react'

const MessageList = (props) => {
	return (
		<Segment>
			<Header as="h2" dividing>Chat
				<Header.Subheader>Showing previous messages and real time</Header.Subheader>
			</Header>
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
		messages: state.messages
	}
}

export default connect(mapStateToProps)(MessageList)