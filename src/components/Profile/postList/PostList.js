import React from 'react'
import AddPost from '../addPost/AddPost'
import Post from './post/Post'

const PostList = () => {

	let posts_data = [
		{
			id: 1,
			text: 'Hello! How are you?',
			likes: '10'
		},
		{
			id: 2,
			text: 'This is my first post!',
			likes: '8'
		}
	]

	let posts_elements = posts_data.map(post => (<Post text={post.text} likes={post.likes} />))

	return (
		<div className="postList">
			<h1>Posts</h1>

			{posts_elements}

		</div>
	)
}

export default PostList
