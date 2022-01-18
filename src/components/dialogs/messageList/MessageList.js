import React, { useEffect, useState } from 'react'
import MessageItem from './../dialogItem/DialogItem';

const MessageList = (props) => {
	const [actualContact,  setActualContact] = useState("")

	let dialog_elements = props.messages.dialogs != null && props.messages.dialogs.map(sms => (<MessageItem userName={sms.senderName} message={sms.body} addedTime={sms.addedAt} />))

	return (
		<div div className="dialogs__message-list" >
			

			{dialog_elements}

		</div >
	)

}

export default MessageList
