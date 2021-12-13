import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile';
import * as axios from 'axios'
import { setUserProfile, setExpectation } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// this.props.setExpectation(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then((response) => {
				// this.props.setExpectation(false)
				return this.props.setUserProfile(response.data)
			})
	}

	render() {
		return <Profile {...this.props} />
	}

}


let mapStateToProps = (state) => {
	return {
		userInfo: state.profilePage.userInfo,
		posts: state.profilePage.posts
	}
}

export default connect(mapStateToProps, { setUserProfile, setExpectation })(ProfileContainer)
