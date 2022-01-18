import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ContactList from './ContactList';
import { getMyContacts, getMessagesById } from './../../../redux/messagesReducer';
import { withURLmatch } from '../../../hooks/witchURLmatch';

let mapStateToProps = (state) => {
	return { contacts: state.messagesPage.contacts, newContact: state.messagesPage.newContact }
}
export default compose(withURLmatch('/dialogs/:userId/messages'), connect(mapStateToProps, { getMyContacts, getMessagesById }))(ContactList)
