import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { changeAddMessage, addMessage } from '../../../redux/messagesReducer';
import AddMessage from './AddMessage';

let mapStateToProps = (state) => {
	return { newMessageText: state.messagesPage.newMessageText }
}

const AddMessageContainer = connect(mapStateToProps, {
	addMessage,
	changeAddMessage
})(AddMessage)

export default AddMessageContainer
