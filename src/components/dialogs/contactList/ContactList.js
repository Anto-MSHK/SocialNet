import React, { useEffect } from 'react'
import ContactItem from '../contactItem/ContactItem'

const ContactList = (props) => {
	let contacts_elements
	useEffect(() => {
		props.getMyContacts()
		props.match != null && props.getMessagesById(props.match.params.userId)
	}, [props.match])

	if (props.contacts != null)
		contacts_elements = props.contacts.map(contact => (<ContactItem userName={contact.userName} id={contact.id} lastActivityTime={contact.lastUserActivityDate} photo={contact.photos.small} type={"contact"} />))

	return (
		<div className="dialogs__contact-list">
			{props.newContact && <ContactItem userName={props.newContact.userName} photo={props.newContact.userPhoto} id={props.newContact.userId} type={"newContact"} />}
			{contacts_elements}

		</div>
	)
}

export default ContactList
