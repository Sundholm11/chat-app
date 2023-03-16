import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Message from '../components/Message'

import { Segment, Header, Comment, Grid, Divider, Placeholder, Dimmer, Loader, Button } from 'semantic-ui-react'

const MessageList = (props) => {
	const [clientCount, setClientCount] = useState(0)
    const [loadedMessages, setLoadedMessages] = useState(-10)
    const [lastLoadedMessageTimestamp, setLastLoadedMessageTimestamp] = useState(null)
    const [messagesPreviousLength, setMessagesPreviousLength] = useState(null)

    const socket = props.socket

    const loadMoreMessages = () => {
        if (loadedMessages - 10 > props.messages.length * -1) {
            setLoadedMessages(loadedMessages - 10)
        }
        else {
            setLoadedMessages(props.messages.length * -1)
        }
    }

	useEffect(() => {
		if (socket !== null) {
			socket.on("clientCount", (count) => {
				setClientCount(count)
			})
		}
	}, [socket])

    useEffect(() => {
        if( props.messages.length > 0) {

            // First load
            if( messagesPreviousLength === null ) {
                setLastLoadedMessageTimestamp([...props.messages].reverse()[-loadedMessages - 1].timeStamp)
                setMessagesPreviousLength(props.messages.length)
            }

            // If messages are added
            if( messagesPreviousLength !== props.messages.length && messagesPreviousLength !== null ) {
                setLoadedMessages(loadedMessages - 1)
                setLastLoadedMessageTimestamp([...props.messages].reverse()[-loadedMessages - 1].timeStamp)
                setMessagesPreviousLength(props.messages.length)
            }

            // If more messages are loaded
            if( messagesPreviousLength === props.messages.length ) {
                setLastLoadedMessageTimestamp([...props.messages].reverse()[-loadedMessages - 1].timeStamp)
            }

        }

    }, [props.messages, loadedMessages, messagesPreviousLength])

	return (
		<Segment>
            <Grid stackable columns={2}>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Header as="h2">Chat
                            <Header.Subheader>Showing previous messages and real time</Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        {socket === null ? '' : `Currently connected users: ${clientCount}`}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider />
            <Button size="mini" attached="top" disabled={loadedMessages * -1 >= props.messages.length ? true : false} onClick={() => loadMoreMessages()}>Show more messages</Button>
			<Comment.Group attached="true" style={{ maxWidth: "100%", maxHeight: "65vh", overflowY:"scroll", display: "flex", flexDirection: "column-reverse", marginTop: "0px" }}> 
				{props.messages.length === 0 || lastLoadedMessageTimestamp === null ?
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
				[...props.messages].reverse().map(message =>
                    message.timeStamp >= lastLoadedMessageTimestamp ?
                        <Message
                            key={message.id}
                            message={message}
                            messageAvatar={message.userImage}
                        /> : '')}
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