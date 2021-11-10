import React from "react"
import { NavLink } from "react-router-dom";
import UserInfo from './../../userInfo/UserInfo';


const ContactItem = (props) => {
	let path = "/dialogs/" + props.id

	return (
		<NavLink to={path} className="contact-item">
			<UserInfo isStatus userName={props.userName} />
		</NavLink>
	)
}
export default ContactItem;