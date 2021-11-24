import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { changeAddMessageAC, addMessageAC } from '../../../redux/messagesReducer';
import AddMessage from './AddMessage';

let mapStateToProps = (state) => {
	return { newMessageText: state.messagesPage.newMessageText }
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => dispatch(addMessageAC()),
		changeAddMessage: (change) => dispatch(changeAddMessageAC(change))
	}
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default AddMessageContainer
