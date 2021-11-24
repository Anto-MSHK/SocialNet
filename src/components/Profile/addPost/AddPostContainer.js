import React from 'react'
import AddPost from './AddPost';
import { connect } from 'react-redux'
import { addPostAC, changeAddPostAC } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	return { newPostText: state.profilePage.newPostText }
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => dispatch(addPostAC()),
		changeAddPost: (change) => dispatch(changeAddPostAC(change))
	}
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer
