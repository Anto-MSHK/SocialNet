import React from 'react'
import MessageList from './MessageList';
import { connect } from 'react-redux'
import { getMessagesById } from './../../../redux/messagesReducer';


let mapStateToProps = (state) => {
	return { messages: state.messagesPage }
}

const MessageListContainer = connect(mapStateToProps)(MessageList)

export default MessageListContainer
