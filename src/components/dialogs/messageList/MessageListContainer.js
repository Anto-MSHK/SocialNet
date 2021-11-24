import React from 'react'
import MessageList from './MessageList';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return { messagesState: state.messagesPage }
}

const MessageListContainer = connect(mapStateToProps)(MessageList)

export default MessageListContainer
