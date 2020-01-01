import React from 'react'
import { connect } from 'react-redux'
import Message from './Message'

import { Container, Header, List } from 'semantic-ui-react'

const MessageList = (props) => {
	return (
		<Container>
			<Header as="h2" dividing>Chat history</Header>
			<List relaxed>{props.messages.map(message =>
				<List.Item key={message.id}>
					<List.Icon name="user circle" size="large" verticalAlign="middle"></List.Icon>
					<List.Content>
						<Message message={message} />
					</List.Content>
				</List.Item>
			)}
			</List>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		messages: state.messages
	}
}

export default connect(mapStateToProps)(MessageList)