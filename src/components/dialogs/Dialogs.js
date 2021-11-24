import React from 'react'
import AddMessageContainer from './addMessage/AddMessageContainer';
import ContactItem from './contactItem/ContactItem'
import MessageListContainer from './messageList/MessageListContainer';
import ContactListContainer from './contactList/ContactListContainer';


const Dialogs = (props) => {

	return (
		<div className="dialogs">
			<ContactListContainer />
			<div className="dialogs__message-window">
				<MessageListContainer />
				<AddMessageContainer />
			</div>
		</div >
	)
}

export default Dialogs
