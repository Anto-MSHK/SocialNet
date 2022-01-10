import React from 'react'
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

let mapStateAuth = (state) => {
	return {
		myId: state.profilePage.myId,
		isAuth: state.auth.isAuth
	}
}

const withAuthRedirect = (Component) => {

	const RedirectComponent = (props) => {
		if (!props.isAuth && props.myId != null)
			return <Navigate to="/login" />
		return <Component {...props} />
	}

	const ConnectRedirectComponent = connect(mapStateAuth)(RedirectComponent)

	return ConnectRedirectComponent
}

export default withAuthRedirect




