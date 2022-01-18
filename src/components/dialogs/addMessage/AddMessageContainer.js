import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withURLmatch } from '../../../hooks/witchURLmatch';
import { addMessage } from '../../../redux/messagesReducer';
import AddMessage from './AddMessage';
import { setNewContact } from './../../../redux/messagesReducer';

let mapStateToProps = (state) => {
	return {}
}

const AddMessageContainer = compose(
	withURLmatch('/dialogs/:userId/messages'),
	connect(mapStateToProps, { addMessage, setNewContact }))(AddMessage)


export default AddMessageContainer
