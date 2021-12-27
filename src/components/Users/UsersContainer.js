import React from 'react'
import { connect } from 'react-redux'
import Users from './Users';
import { setUsers, toggleFollower, setCurrentPage, setExpectation, setExpectationFollowers } from './../../redux/usersReducer';
class UsersContainer extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.setUsers(this.props.pageSize, this.props.actualPage)
	}

	onCurrentPage = (page) => {
		this.props.setCurrentPage(page)
		this.props.setUsers(this.props.pageSize, this.props.actualPage)
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
		isExpectation: state.usersPage.isExpectation,
		isExpectationFollowers: state.usersPage.isExpectationFollowers
	}
}

export default connect(mapStateToProps, {
	toggleFollower, setUsers, setCurrentPage, setExpectation, setExpectationFollowers
})(UsersContainer)
