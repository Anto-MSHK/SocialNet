import React from 'react'

let AddPost = (props) => {

	let newPostElement = React.createRef();

	const onAddPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	}

	return (
		<form className="formAddPost" >
			<h2 class="formAddPost__title">Add post</h2>

			<textarea ref={newPostElement} style={{ resize: "none" }} className="formAddPost__input"
				placeholder="Text"
			/>
			<button type='button' onClick={onAddPost} className="formAddPost__BtnAdd">Create post</button>
		</form >
	)
}

export default AddPost
