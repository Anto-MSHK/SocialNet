const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_ADD_MESSAGE = 'CHANGE-ADD-MESSAGE'

const initialState = {
	contacts: [
		{
			id: 1,
			name: 'Anton'
		},
		{
			id: 2,
			name: 'Ivan'
		},
		{
			id: 3,
			name: 'Helen'
		},
		{
			id: 4,
			name: 'Stepan'
		},
		{
			id: 5,
			name: 'Maksim'
		}
	],
	dialogs: [
		{
			id: 1,
			name: 'Anton',
			message: "I am so fed in my knowledge that I seem to have a hundred trillion billions of years living on trillions and\
trillions of the same planets like this earth, I absolutely\
clear, and I'm looking for only one - peace, peace and\
Here is this harmony, from confusion with infinitely eternal, from contemplation\
great fractal similarity and from this wonderful unity\
creatures..."
		},
		{
			id: 2,
			name: 'Igor',
			message: "Started..."
		},
		{
			id: 3,
			name: 'Anton',
			message: "And you again with me\
your own here, go fuss further, this is your distribution, it\
Your way and your horizon of knowledge and feeling of your nature, he\
incommensurately chalk compared to mine, do you understand?"
		},
		{
			id: 4,
			name: 'Igor',
			message: "Okay, silently, silently !!!"
		},
		{
			id: 5,
			name: 'Anton',
			message: "I\'m going to admire the universe, and you are walking to be presented in the edges of some,\
That\'s the whole difference, you know, you do not know this eternal endless, you don\'t need it!"
		}
	],
	newMessageText: ''
}

let messagesReducer = (state = initialState, action) => {
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