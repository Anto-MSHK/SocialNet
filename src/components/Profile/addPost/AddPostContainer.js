import React from 'react'
import AddPost from './AddPost';
import { connect } from 'react-redux'
import { addPost, changeAddPost } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	return { newPostText: state.profilePage.newPostText }
}

const AddPostContainer = connect(mapStateToProps, {
	addPost,
	changeAddPost
})(AddPost)

export default AddPostContainer
