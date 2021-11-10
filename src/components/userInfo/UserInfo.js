import React from 'react'

const UserInfo = (props) => {
	return (
		<div className="userInfo">
			<img className="userInfo__avatar" src="https://catdogcity.ru/wp-content/uploads/2020/10/449.jpg" alt="" />
			<div className="userInfo__data">
				<div className="userInfo__name">{props.userName}</div>
				<div className="userInfo__date-activity">{props.isStatus ? ("was online today") : ("today")}</div>

			</div>
		</div>
	)
}

export default UserInfo
