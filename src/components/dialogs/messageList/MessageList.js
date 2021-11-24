import React from 'react'
import MessageItem from './../dialogItem/DialogItem';

const MessageList = (props) => {
	
	let dialog_elements = props.messagesState.dialogs.map(sms => (<MessageItem userName={sms.name} message={sms.message} />))

	return (
		<div div className="dialogs__message-list" >
			<h1>Messages</h1>

			{dialog_elements}

		</div >
	)

}

export default MessageList
