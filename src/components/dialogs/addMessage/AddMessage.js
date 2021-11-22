import React, { createRef } from 'react'

const AddMessage = (props) => {

	let newMessageElement = React.createRef();

	let onAddMessage = () => {
		props.addMessage()
	}

	let onMessageChange = () => {
		let change = newMessageElement.current.value
		props.changeAddMessage(change)
	}

	return (
		<form className="formAddMessage" >
			<textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} style={{ resize: "none" }} className="formAddMessage__input"
				placeholder="Text"
			/>
			<button type='button' onClick={onAddMessage} className="formAddMessage__BtnAdd">Send</button>
		</form >
	)
}

export default AddMessage
