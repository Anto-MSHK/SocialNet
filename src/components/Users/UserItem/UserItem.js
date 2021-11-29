import React from 'react'

const UserItem = (props) => {

	const follow = () => {
		props.follow(props.state.id);
	}

	return (
		<div className="userItem">
			<img className="userItem__avatar" src="https://i1.sndcdn.com/avatars-000774825631-azr17a-t500x500.jpg" />
			<ul className="userItem__user-info">
				<li><h2>{props.state.name}</h2></li>
				<li><h3>{props.state.status}</h3></li>
				<li><i>City:</i> {props.state.city}</li>
				<li><i>Country:</i> {props.state.country}</li>
			</ul>
			{
				props.state.isFollow
					? <button className="userItem__btn btn-active" onClick={follow}>Подписаться</button>
					: <button className="userItem__btn btn-disactive" onClick={follow}>Отписаться</button>

			}
		</div>
	)
}

export default UserItem
