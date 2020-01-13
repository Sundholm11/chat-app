import React from 'react'

import { Segment, Divider, Comment } from 'semantic-ui-react'

const Message = ({ message, messageAvatar }) => {
	return (
		<div>
			<Comment >
				<Comment.Avatar src={messageAvatar} />
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
	)
}

export default Message