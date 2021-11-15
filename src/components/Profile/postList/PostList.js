import React from 'react'
import AddPost from '../addPost/AddPost'
import Post from './post/Post'

const PostList = (props) => {

	let posts_elements = props.DATAposts.map(post => (<Post text={post.text} likes={post.likes} />))

	return (
		<div className="postList">
			<h1>Posts</h1>

			{posts_elements}

		</div>
	)
}

export default PostList
