import React from 'react'
import ContactItem from '../contactItem/ContactItem'

const ContactList = (props) => {

	let contacts_elements = props.contactsState.contacts.map(contact => (<ContactItem userName={contact.name} id={contact.id} />))

	return (
		<div className="dialogs__contact-list">
			<h1>Contacts</h1>

			{contacts_elements}

		</div>
	)
}

export default ContactList
