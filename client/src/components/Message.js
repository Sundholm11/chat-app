import React from 'react'

import { Divider, Comment } from 'semantic-ui-react'

const Message = ({ message, messageAvatar }) => {
    const options = { dateStyle: "short", timeStyle: "short" }

	return (
		<div>
			<Comment >
				<Comment.Avatar src={messageAvatar} />
				<Comment.Content style={{ display: "flex" }}>
                    <Comment.Author>{message.user}</Comment.Author>
					<Comment.Metadata>{new Date(message.timeStamp).toLocaleString('fi-FI', options)}</Comment.Metadata>
				</Comment.Content>
                <Comment.Content>
                    <Comment.Text>{message.message}</Comment.Text>
                </Comment.Content>
			</Comment>
			<Divider />
		</div>
	)
}

export default Message