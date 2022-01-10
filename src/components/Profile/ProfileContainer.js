import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Profile from './Profile';
import { setUserProfile, setExpectation } from '../../redux/profileReducer';
import { getStatus, updateStatus } from './../../redux/profileReducer';
import { setAuthUser } from "./../../redux/authReducer";
import withAuthRedirect from './../../hooks/withRedirect';
import { withURLmatch } from '../../hooks/witchURLmatch';
class ProfileContainer extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let userId = this.props.myId
		userId = this.props.match ? this.props.match.params.userId : this.props.myId
		this.props.setUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return <Profile {...this.props} />
	}

}

let mapStateToProps = (state) => {
	return {
		userInfo: state.profilePage.userInfo,
		status: state.profilePage.status,
		posts: state.profilePage.posts,
		myId: state.auth.id
	}
}

export default
	compose(
		withAuthRedirect,
		withURLmatch('/profile/:userId/'),
		connect(mapStateToProps, { setUserProfile, setExpectation, getStatus, updateStatus, setAuthUser }))
		(ProfileContainer)
