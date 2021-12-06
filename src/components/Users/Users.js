import React from 'react'
import { toggleFollowerAC } from '../../redux/usersReducer';
import UserItem from './UserItem/UserItem'
import * as axios from 'axios'

const Users = (props) => {

	if (props.usersPage.users.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then((response) => {
				return props.setUsers(response.data.items)
			})
	}

	let users_elemets = props.usersPage.users.map(user => <UserItem state={user} follow={props.followed} key={user.id} />);

	return (
		<div className="users">
			<h1 className="users__title">Users</h1>
			<div className="users__list">
				{users_elemets}
			</div>
		</div>
	)
}

export default Users
