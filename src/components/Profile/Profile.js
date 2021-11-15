import React from 'react'
import AddPost from './addPost/AddPost'
import ProfileInfo from './profileInfo/ProfileInfo'
import PostList from './postList/PostList'

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<AddPost addPost={props.addPost} />
			<PostList DATAposts={props.DATAprofile.posts} />
		</div>
	)
}

export default Profile
