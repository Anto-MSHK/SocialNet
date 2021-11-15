import React, { createRef } from 'react'

const AddMessage = (props) => {

	let newMessageElement = React.createRef();

	let onAddMessage = () => {
		let text = newMessageElement.current.value;
		props.addMessage(text);
		newMessageElement.current.value = '';
	}

	return (
		<form className="formAddMessage" >
			<textarea ref={newMessageElement} style={{ resize: "none" }} className="formAddMessage__input"
				placeholder="Text"
			/>
			<button type='button' onClick={onAddMessage} className="formAddMessage__BtnAdd">Send</button>
		</form >
	)
}

export default AddMessage