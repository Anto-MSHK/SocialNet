import React from 'react'
import iconUserStandart from '../../../assets/img/interface/userStandart.png'
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {

	const follow = () => {
		props.follow(props.state.id);
	}

	return (
		<div className="userItem">
			<div className="userItem__avatar-id">
				<NavLink to={"/profile/" + props.id}>
					<img className="userItem__avatar" src={props.state.photos.small != null ? props.state.photos.small : iconUserStandart} />
					<span className="userItem__id" ><i>id: </i>{props.state.id}</span>
				</NavLink>
			</div>
			<ul className="userItem__user-info">
				<li><h2>{props.state.name}</h2></li>
				<li><h3>{props.state.status}</h3></li>
				{/* <li><i>City:</i> {props.state.city}</li>
				<li><i>Country:</i> {props.state.country}</li> */}
			</ul>
			{
				props.state.isFollow
					? <button className="userItem__btn btn-disactive" onClick={follow}>Отписаться</button>
					: <button className="userItem__btn btn-active" onClick={follow}>Подписаться</button>

			}
		</div>
	)
}

export default UserItem
