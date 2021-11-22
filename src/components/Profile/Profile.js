import React from 'react'
import AddPost from './addPost/AddPost'
import ProfileInfo from './profileInfo/ProfileInfo'
import PostList from './postList/PostList'

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<AddPost state={props.state} dispatch={props.dispatch} />
			<PostList state={props.state} dispatch={props.dispatch} />
		</div>
	)
}

export default Profile
