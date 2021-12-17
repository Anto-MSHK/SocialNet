import React from 'react'
import { NavLink } from 'react-router-dom'

const Head = (props) => {

	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="header__logo">
					<img className="header__logo-img" src="https://www.pinclipart.com/picdir/big/566-5668177_globe-logo-clipart.png" alt="" />
					<div>My socialset</div>
				</div>
				{
					props.isAuth != true
						? <NavLink to="/auth"><div className="header__userInfo">Login</div></NavLink>
						: <div className="header__userInfo">{props.data.login}</div>
				}
			</div>
		</header>
	)
}

export default Head
