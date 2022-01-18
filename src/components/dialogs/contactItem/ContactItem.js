import React, { useEffect } from "react"
import { NavLink } from "react-router-dom";
import UserInfo from './../../userInfo/UserInfo';


const ContactItem = (props) => {
	let path = "/dialogs/" + props.id + "/messages";

	return (
		<NavLink to={path} className="contact-item">
			<UserInfo isStatus userName={props.userName} lastActivityTime={props.lastActivityTime} userPhoto={props.photo} type={props.type}/>
		</NavLink>
	)
}
export default ContactItem;