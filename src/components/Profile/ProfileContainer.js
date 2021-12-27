import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile';
import { setUserProfile, setExpectation } from '../../redux/profileReducer';
import { useMatch } from 'react-router-dom';
import { setAuthUser } from './../../redux/authReducer';
class ProfileContainer extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : this.props.myId
		this.props.setUserProfile(userId)
	}

	render() {
		return <Profile {...this.props} />
	}

}

const ProfileURLMatch = (props) => {
	const match = useMatch('/profile/:userId/')
	return <ProfileContainer {...props} match={match} />
}

let mapStateToProps = (state) => {
	return {
		userInfo: state.profilePage.userInfo,
		posts: state.profilePage.posts,
		myId: state.auth.id
	}
}

export default connect(mapStateToProps, { setUserProfile, setExpectation, setAuthUser })(ProfileURLMatch)
