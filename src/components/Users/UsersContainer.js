import React from 'react'
import { connect } from 'react-redux'
import Users from './Users';
import * as axios from 'axios'
import { setUsers, toggleFollower, setCurrentPage, setExpectation } from './../../redux/usersReducer';

class UsersContainer extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.setExpectation(true)
		// if (this.props.users.length === 0) {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.actualPage}`)
			.then((response) => {
				this.props.setExpectation(false)
				return this.props.setUsers(response.data)
			})
		// }

	}

	onCurrentPage = (page) => {
		// this.props.actualPageCount = page
		this.props.setCurrentPage(page)
		this.props.setExpectation(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
			.then((response) => {
				this.props.setExpectation(false)
				return this.props.setUsers(response.data)
			})
	}

	render() {
		return <Users
			{...this.props} onCurrentPage={this.onCurrentPage}
		/>
	}

}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		actualPage: state.usersPage.actualPage,
		totalCount: state.usersPage.totalCount,
		isExpectation: state.usersPage.isExpectation
	}
}

export default connect(mapStateToProps, {
	toggleFollower, setUsers, setCurrentPage, setExpectation
})(UsersContainer)
