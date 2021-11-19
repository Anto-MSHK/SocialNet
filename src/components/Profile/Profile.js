import React from 'react'
import AddPost from './addPost/AddPost'
import ProfileInfo from './profileInfo/ProfileInfo'
import PostList from './postList/PostList'

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<AddPost DATAProfile={props.DATAProfile} dispatch={props.dispatch} />
			<PostList DATAProfile={props.DATAProfile} dispatch={props.dispatch} />
		</div>
	)
}

export default Profile
