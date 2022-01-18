import React from 'react'
import user_default_avatar from '../../assets/img/interface/userStandart.png'

const UserInfo = (props) => {
	let comment
	switch (props.type) {
		case "message":
			comment = "Received on"
			break
		case "contact":
			comment = "Was online on"
			break
		case "newContact":
			comment = "Start communication!"
			break
	}
	debugger
	let wasActiveDate = props.lastActivityTime != undefined && (props.lastActivityTime[8] + props.lastActivityTime[9] + "." + props.lastActivityTime[5] + props.lastActivityTime[6] + "." + props.lastActivityTime[0] + props.lastActivityTime[1] + props.lastActivityTime[2] + props.lastActivityTime[3])
	let wasActiveTime = props.lastActivityTime != undefined && (props.lastActivityTime[11] + props.lastActivityTime[12] + ":" + props.lastActivityTime[14] + props.lastActivityTime[15])
	return (
		<div className="userInfo">
			<img className="userInfo__avatar" src={props.userPhoto ? props.userPhoto : user_default_avatar} alt="" />
			<div className="userInfo__data">
				<div className="userInfo__name">{props.userName}</div>
				<div className="userInfo__date-activity"> {comment} {wasActiveDate} {(comment === "Received on" || comment === "Was online on")
					&& "at"} {wasActiveTime} </div>

			</div>
		</div>
	)
}

export default UserInfo
