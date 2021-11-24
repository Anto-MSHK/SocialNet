import React from 'react'
import { connect } from 'react-redux'
import ContactList from './ContactList';

let mapStateToProps = (state) => {
	return { contactsState: state.messagesPage }
}

const ContactListContainer = connect(mapStateToProps)(ContactList)

export default ContactListContainer
