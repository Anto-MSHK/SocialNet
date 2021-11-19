import React, { createRef } from 'react'
import { changeAddMessageAC, addMessageAC } from './../../../redux/messagesReducer';

const AddMessage = (props) => {

	let newMessageElement = React.createRef();

	let onAddMessage = () => {
		props.dispatch(addMessageAC())
	}

	let onMessageChange = () => {
		let change = newMessageElement.current.value
		props.dispatch(changeAddMessageAC(change))
	}

	return (
		<form className="formAddMessage" >
			<textarea ref={newMessageElement} onChange={onMessageChange} value={props.DATAMessages.newMessageText} style={{ resize: "none" }} className="formAddMessage__input"
				placeholder="Text"
			/>
			<button type='button' onClick={onAddMessage} className="formAddMessage__BtnAdd">Send</button>
		</form >
	)
}

export default AddMessage
