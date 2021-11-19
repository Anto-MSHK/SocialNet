const ADD_POST = 'ADD-POST'
const CHANGE_ADD_POST = 'CHANGE-ADD-POST'

let profileReducer = (state, action) => {
	switch (action.type) {

		case ADD_POST:
			let newPost = {
				id: 5,
				text: state.newPostText,
				likes: 0
			}
			state.newPostText = ''
			state.posts.push(newPost)
			return state

		case CHANGE_ADD_POST:
			state.newPostText = action.change
			return state

		default:
			return state
	}
}

export const addPostAC = () => ({ type: ADD_POST })
export const changeAddPostAC = (change) => ({ type: CHANGE_ADD_POST, change: change })

export default profileReducer