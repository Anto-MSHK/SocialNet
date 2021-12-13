import React from 'react'
import AddPostContainer from './addPost/AddPostContainer';
import ProfileInfo from './profileInfo/ProfileInfo'
import PostListContainer from './postList/PostListContainer';


const Profile = (props) => {
	return (
		<div>
			{props.userInfo != null &&
				<ProfileInfo userInfo={props.userInfo} />
			}
			<AddPostContainer />
			<PostListContainer />
		</div>
	)
}

export default Profile
