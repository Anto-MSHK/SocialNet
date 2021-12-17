import React from 'react'
import { connect } from 'react-redux';
import Head from './Head';
import { setAuthUser } from './../../redux/authReducer';
import * as axios from 'axios';

class HeadContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then((response) => {
				let { id, email, login } = response.data.data
				return this.props.setAuthUser(id, email, login)
			})
	}

	render() {
		return <Head {...this.props} />
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		data: { id: state.auth.id, email: state.auth.email, login: state.auth.login }
	}
}
export default connect(mapStateToProps, { setAuthUser })(HeadContainer)
