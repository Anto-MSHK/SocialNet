import React from 'react'

const ProfileInfo = () => {
	return (
		<div className="profileInfo">
			<img src="https://catdogcity.ru/wp-content/uploads/2020/10/449.jpg" alt="" className="profileInfo__avatar" />
			<ul className="profileInfo__data">
				<li class="profileInfo__name"><h1>Anton Mashchenko</h1></li>
				<div>
					<li class="profileInfo__age">Age: 19</li>
					<li class="profileInfo__city">City: Azov</li>
				</div>
			</ul>
		</div>
	)
}

export default ProfileInfo
