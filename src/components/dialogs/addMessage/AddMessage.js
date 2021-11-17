import React, { createRef } from 'react'

const AddMessage = (props) => {

	let newMessageElement = React.createRef();

	let onAddMessage = () => {
		let text = newMessageElement.current.value
		props.addMessage()
	}

	let onMessageChange = () => {
		let change = newMessageElement.current.value
		props.changeNewMessage(change)
	}

	return (
		<form className="formAddMessage" >
			<textarea ref={newMessageElement} onChange={onMessageChange} value={props.DATAmessages} style={{ resize: "none" }} className="formAddMessage__input"
				placeholder="Text"
			/>
			<button type='button' onClick={onAddMessage} className="formAddMessage__BtnAdd">Send</button>
		</form >
	)
}

export default AddMessage
