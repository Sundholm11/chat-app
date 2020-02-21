import React from 'react'

import { Responsive, Segment, Divider, Comment } from 'semantic-ui-react'

const Message = ({ message, messageAvatar }) => {
	return (
		<div>
			<Comment >
				<Comment.Avatar src={messageAvatar} />
				<Comment.Content>
					<Responsive as={Segment} basic floated="right" minWidth={400}>
						<Comment.Metadata>{new Date(message.timeStamp).toLocaleString()}</Comment.Metadata>
					</Responsive>
					<Responsive as={Segment} basic floated="right" minWidth={350} maxWidth={399}>
						<Comment.Metadata>{new Date(message.timeStamp).toDateString()}</Comment.Metadata>
					</Responsive>
					<Comment.Author>{message.user}</Comment.Author>
					<Comment.Text>{message.message}</Comment.Text>
				</Comment.Content>
			</Comment>
			<Divider />
		</div>
	)
}

export default Message