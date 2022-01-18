import React, { createRef, useState } from 'react'

const AddMessage = (props) => {

	const [messageText, setMessageText] = useState("")

	let onAddMessage = () => {
		debugger
		props.addMessage(props.match.params.userId, messageText)
		setMessageText("")
		props.setNewContact(null)
	}

	let onMessageChange = (e) => {
		setMessageText(e.target.value)
	}

	return (
		<form className="formAddMessage" >
			<textarea onChange={onMessageChange} value={messageText} style={{ resize: "none" }} className="formAddMessage__input"
				placeholder="Text"
			/>
			<button type='button' onClick={onAddMessage} className="formAddMessage__BtnAdd">Send</button>
		</form >
	)
}

export default AddMessage
