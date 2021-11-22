import React from 'react'
import { addPostAC, changeAddPostAC } from '../../../redux/profileReducer';

let AddPost = (props) => {

	let newPostElement = React.createRef();

	const onAddPost = () => {
		props.dispatch(addPostAC())
	}

	let onPostChange = () => {
		let change = newPostElement.current.value
		props.dispatch(changeAddPostAC(change))
	}

	return (
		<form className="formAddPost" >
			<h2 class="formAddPost__title">Add post</h2>

			<textarea ref={newPostElement} style={{ resize: "none" }} className="formAddPost__input"
				placeholder="Text" value={props.state.newPostText} onChange={onPostChange}
			/>
			<button type='button' onClick={onAddPost} className="formAddPost__BtnAdd">Create post</button>
		</form >
	)
}

export default AddPost
