import React from 'react'
import AddMessageContainer from './addMessage/AddMessageContainer';
import ContactItem from './contactItem/ContactItem'
import MessageListContainer from './messageList/MessageListContainer';
import ContactListContainer from './contactList/ContactListContainer';


const Dialogs = (props) => {

	return (
		<div className="dialogs">
			<div className="dialogs__contacts">
				<h1>Contacts</h1>
				<ContactListContainer />
			</div>
			<div className="dialogs__messages">
				<div className="dialogs__message-window">
					<MessageListContainer />
					<AddMessageContainer />
				</div>
			</div>
		</div >
	)
}

export default Dialogs
