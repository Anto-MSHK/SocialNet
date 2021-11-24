import React from 'react'
import AddPostContainer from './addPost/AddPostContainer';
import ProfileInfo from './profileInfo/ProfileInfo'
import PostListContainer from './postList/PostListContainer';


const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<AddPostContainer />
			<PostListContainer />
		</div>
	)
}

export default Profile
