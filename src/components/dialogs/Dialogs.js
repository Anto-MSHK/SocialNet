import React from 'react'
import AddMessage from './addMessage/AddMessage'
import ContactItem from './contactItem/ContactItem'
import MessageItem from './dialogItem/DialogItem'

const Dialogs = (props) => {

	let contacts_elements = props.DATAmessages.contacts.map(contact => (<ContactItem userName={contact.name} id={contact.id} />))
	let dialog_elements = props.DATAmessages.dialogs.map(sms => (<MessageItem userName={sms.name} message={sms.message} />))

	return (
		<div className="dialogs">
			<div className="dialogs__contact-list">
				<h1>Contacts</h1>

				{contacts_elements}

			</div>
			<div className="dialogs__sms-list">
				<h1>Messages</h1>

				{dialog_elements}

				<AddMessage addMessage={props.addMessage} changeNewMessage={props.changeNewMessage} DATAmessages={props.DATAmessages.newMessageText} />
			</div>

		</div>
	)
}

export default Dialogs
