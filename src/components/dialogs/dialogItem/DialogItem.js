import React from "react"
import UserInfo from './../../userInfo/UserInfo';

const MessageItem = (props) => {
	return (
		<div className="sms-item">
			<UserInfo userName={props.userName} />
			<p>
				{props.message}
			</p>
		</div>
	)
}

export default MessageItem;