import React from 'react'
import UserInfo from '../../../userInfo/UserInfo'

const Post = (props) => {
	return (
		<div className="post">
			<div className="post__content">
				<div className="post__info">
					<UserInfo userName="Anton Mashchenko" />
				</div>
				<div className="post__textContent">{props.text}</div>
			</div>
			<div className="post__actions">
				<button className="post__btnDelete btn-disactive"><span>+</span></button>
				<button className="post__btnLike btn-active"><b>{props.likes}</b> likes</button>
			</div>
		</div>
	)
}

export default Post
