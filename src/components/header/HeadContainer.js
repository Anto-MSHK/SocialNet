import React from 'react'
import { connect } from 'react-redux';
import Head from './Head';
import { setAuthUser } from './../../redux/authReducer';

class HeadContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.setAuthUser()
	}

	render() {
		return <Head {...this.props} />
	}
}
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		data: { id: state.auth.id, email: state.auth.email, login: state.auth.login },
		photo: !state.usersPage ? state.usersPage.userInfo.photos.small : null
	}
}
export default connect(mapStateToProps, { setAuthUser })(HeadContainer)
