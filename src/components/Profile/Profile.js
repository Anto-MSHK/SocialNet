import React from 'react'
import AddPost from './addPost/AddPost'
import ProfileInfo from './profileInfo/ProfileInfo'
import PostList from './postList/PostList'

const Profile = () => {
	return (
		<div>
			<ProfileInfo />
			<AddPost />
			<PostList />
		</div>
	)
}

export default Profile
