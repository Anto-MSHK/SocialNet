import React from 'react'

const AddPost = () => {
	return (
		<form className="formAddPost" >
			<h2 class="formAddPost__title">Add post</h2>

			<textarea style={{ resize: "none" }} className="formAddPost__input"
				placeholder="Text"
			/>
			<button className="formAddPost__BtnAdd">Create post</button>
		</form >
	)
}

export default AddPost
