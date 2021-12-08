import React from 'react'
import { connect } from 'react-redux'
import Users from './Users';
import * as axios from 'axios'
import { setUsersAC, toggleFollowerAC, setCurrentPageAC } from './../../redux/usersReducer';

class UsersContainer extends React.Component {

	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		// if (this.props.users.length === 0) {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.actualPage}`)
			.then((response) => {

				return this.props.setUsers(response.data)
			})
		// }

	}

	onCurrentPage = (page) => {
		// this.props.actualPageCount = page
		this.props.setCurrentPage(page)
		debugger
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
			.then((response) => {
				return this.props.setUsers(response.data)
			})
	}

	render() {
		return <Users
			users={this.props.users}
			actualPage={this.props.actualPage}
			onCurrentPage={this.onCurrentPage}
			totalCount={this.props.totalCount}
			pageSize={this.props.pageSize}
		/>
	}

}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		actualPage: state.usersPage.actualPage,
		totalCount: state.usersPage.totalCount
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		followed: (userId) => dispatch(toggleFollowerAC(userId)),
		setUsers: (serverUsers) => dispatch(setUsersAC(serverUsers)),
		setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
