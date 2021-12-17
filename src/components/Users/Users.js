import React from 'react'
import UserItem from './UserItem/UserItem'
import preloader from '../../assets/img/interface/preloader.svg'

const Users = (props) => {
	let users_elemets = props.users.map(user => <UserItem state={user} follow={props.toggleFollower} key={user.id} />);

	let pagesCount = Math.ceil(props.totalCount / props.pageSize)
	let pages = [];


	for (let i = 0; i < pagesCount; i++) {
		pages[i] = i + 1;
	}
	return (
		<div className="users">
			<div className="users__head">
				<h1 className="users__title">Users</h1>
				{props.isExpectation && <img className="users__preloader" src={preloader} />}
			</div>

			<div className="users__list">
				{users_elemets}
			</div>
			<ul className="users__page-list">
				{
					pages.map(page => {
						return <li className={`users__page-item ${props.actualPage === page && "active"}`} onClick={() => {
							props.onCurrentPage(page)
						}}> {page}</li>
					})
				}
			</ul>
		</div >
	)
}

export default Users
