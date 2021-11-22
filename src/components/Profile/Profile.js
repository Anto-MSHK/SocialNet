import React from 'react'
import AddPostContainer from './addPost/AddPostContainer';
import ProfileInfo from './profileInfo/ProfileInfo'
import PostList from './postList/PostList'


const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<AddPostContainer store={props.store} />
			<PostList state={props.state.profilePage} />
		</div>
	)
}

export default Profile
