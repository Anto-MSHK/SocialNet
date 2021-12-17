import React from 'react'
import iconUserStandart from '../../../assets/img/interface/userStandart.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'

const UserItem = (props) => {

	const follow = () => {
		if (props.state.followed === false) {
			axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.state.id}`, {}, {
				withCredentials: true,
				headers: { 'API-KEY': 'c6caeb8a-704b-4474-b747-3243cd9e421f' }
			})
				.then((response) => {
					if (response.data.resultCode === 0) {
						props.follow(props.state.id)

					}
				})
		} else {
			axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.state.id}`, {
				withCredentials: true,
				headers: { 'API-KEY': 'c6caeb8a-704b-4474-b747-3243cd9e421f' }
			})
				.then((response) => {
					if (response.data.resultCode === 0) {
						props.follow(props.state.id)
					}
				})
		}
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
				props.state.followed
					? <button className="userItem__btn btn-disactive" onClick={follow}>Unsubscribe</button>
					: <button className="userItem__btn btn-active" onClick={follow}>Subscribe</button>

			}
		</div>
	)
}

export default UserItem
