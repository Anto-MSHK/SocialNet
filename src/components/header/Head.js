import React from 'react'
import { NavLink } from 'react-router-dom'
import user_default_avatar from '../../assets/img/interface/userStandart.png'

const Head = (props) => {

	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="header__logo">
					<img className="header__logo-img" src="https://www.pinclipart.com/picdir/big/566-5668177_globe-logo-clipart.png" alt="" />
					<div>My socialnet</div>
				</div>
				{
					props.isAuth != true
						? <NavLink to="/auth"><div className="header__userInfo">Login</div></NavLink>
						: <div className="header__userInfo"><img className="header__avatar-img" src={props.photo ? props.photo : user_default_avatar} alt="" /><p>{props.data.login}</p></div>
				}
			</div>
		</header>
	)
}

export default Head
