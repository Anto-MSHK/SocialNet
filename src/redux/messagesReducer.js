import { messagesAPI } from './../api/api'

const GET_CONTACTS = 'GET-CONTACTS'
const GET_MESSAGES = 'GET-MESSAGES'
const SET_NEW_CONTACT = 'SET-NEW-CONTACT'

const initialState = {
	contacts: null,
	newContact: null,
	dialogs: null
}

let messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.contacts
			}
		case GET_MESSAGES:
			return {
				...state,
				dialogs: action.messages
			}
		case SET_NEW_CONTACT:
			return {
				...state,
				newContact: action.newContact
			}
		default:
			return state
	}
}

const contactsDidGet = (contacts) => ({ type: GET_CONTACTS, contacts })
const messagesDidGet = (messages) => ({ type: GET_MESSAGES, messages })

export const setNewContact = (newContact) => ({ type: SET_NEW_CONTACT, newContact })

export const getMyContacts = () => (dispatch) => {
	messagesAPI.getMyContacts()
		.then((contacts) => {
			dispatch(contactsDidGet(contacts.data))
		})

}
export const getMessagesById = (userId) => (dispatch) => {
	messagesAPI.getMessagesById(userId)
		.then((messages) => {
			dispatch(messagesDidGet(messages.data.items))
		})
}

export const addMessage = (userId, message) => (dispatch) => {
	messagesAPI.addMessageToUser(userId, message)
		.then(() => {
			dispatch(getMessagesById(userId))
			dispatch(getMyContacts())
		})
}

export default messagesReducer