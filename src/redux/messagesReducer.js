const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_ADD_MESSAGE = 'CHANGE-ADD-MESSAGE'

let messagesReducer = (state, action) => {
	switch (action.type) {

		case ADD_MESSAGE:
			let newMessage = {
				id: 6,
				name: 'Anton',
				message: state.newMessageText,
			}
			state.newMessageText = ''
			state.dialogs.push(newMessage)
			return state

		case CHANGE_ADD_MESSAGE:  // if (x === 'value2')
			state.newMessageText = action.change
			return state

		default:
			return state
	}
}

export const addMessageAC = () => ({ type: ADD_MESSAGE })
export const changeAddMessageAC = (change) => ({ type: CHANGE_ADD_MESSAGE, change: change })

export default messagesReducer