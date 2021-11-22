import React, { createRef } from 'react'
import { changeAddMessageAC, addMessageAC } from './../../../redux/messagesReducer';
import AddMessage from './AddMessage';

const AddMessageContainer = (props) => {

	let state = props.store.getState();

	let onAddMessage = () => {
		props.store.dispatch(addMessageAC())
	}

	let onMessageChange = (change) => {
		props.store.dispatch(changeAddMessageAC(change))
	}

	return (
		<AddMessage addMessage={onAddMessage} changeAddMessage={onMessageChange} newMessageText={state.messagesPage.newMessageText} />
	)
}

export default AddMessageContainer
