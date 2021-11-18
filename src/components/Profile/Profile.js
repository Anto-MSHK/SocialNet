import React from 'react'
import AddPost from './addPost/AddPost'
import ProfileInfo from './profileInfo/ProfileInfo'
import PostList from './postList/PostList'

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<AddPost DATAProfile={props.DATAProfile} AddPost={props.AddPost} ChangeAddPost={props.ChangeAddPost} />
			<PostList DATAProfile={props.DATAProfile} />
		</div>
	)
}

export default Profile
