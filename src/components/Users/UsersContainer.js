import React from 'react'
import { connect } from 'react-redux'
import Users from './Users';
import { toggleFollowerAC } from './../../redux/usersReducer';

let mapStateToProps = (state) => {
	return { usersPage: state.usersPage }
}

let mapDispatchToProps = (dispatch) => {
	return {
		followed: (userId) => dispatch(toggleFollowerAC(userId))
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
