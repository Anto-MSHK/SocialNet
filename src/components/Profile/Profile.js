import React from 'react'
import AddPost from './addPost/AddPost'
import ProfileInfo from './profileInfo/ProfileInfo'
import PostList from './postList/PostList'

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<AddPost newPostText={props.DATAprofile.newPostText} addPost={props.addPost} changeNewPost={props.changeNewPost} />
			<PostList DATAposts={props.DATAprofile.posts} />
		</div>
	)
}

export default Profile
