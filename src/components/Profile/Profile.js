import React from 'react'
import AddPostContainer from './addPost/AddPostContainer';
import ProfileInfo from './profileInfo/ProfileInfo'
import PostListContainer from './postList/PostListContainer';

const Profile = (props) => {
	return (
		<div>
			{props.userInfo != null && props.myId != null &&
				<ProfileInfo userInfo={props.userInfo} status={props.status} getStatus={props.getStatus} updateStatus={props.updateStatus} myId={props.myId} />
			}
			<AddPostContainer />
			<PostListContainer />
		</div>
	)
}

export default Profile
