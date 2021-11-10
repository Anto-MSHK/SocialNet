import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav className="navigation">
			<div className="navigation__wrapper">
				<ul>
					<li>
						<NavLink to="/profile">
							Profile
						</NavLink>
					</li>
					<li>
						<NavLink to="/dialogs">
							Messages
						</NavLink>
					</li>
					<li>
						<NavLink to="/news">
							News
						</NavLink>
					</li>
					<li>
						<NavLink to="/music">
							Music
						</NavLink>
					</li>
					<li>
						<NavLink to="/settings">
							Settings
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navigation
