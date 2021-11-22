import React from 'react'
import AddPost from './AddPost';
import { addPostAC, changeAddPostAC } from '../../../redux/profileReducer';

let AddPostContainer = (props) => {

	let state = props.store.getState();

	const onAddPost = () => {
		props.store.dispatch(addPostAC())
	}

	let onPostChange = (change) => {
		props.store.dispatch(changeAddPostAC(change))
	}

	return (
		<AddPost AddPost={onAddPost} ChangeAddPost={onPostChange} newPostText={state.profilePage.newPostText} />
	)
}

export default AddPostContainer
