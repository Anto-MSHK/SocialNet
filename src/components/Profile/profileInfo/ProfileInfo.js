import React from 'react'
import check_img from '../../../assets/img/interface/check_square_icon.svg'
import cross_img from '../../../assets/img/interface/cross_exit_remove_icon.svg'
import user_default_avatar from '../../../assets/img/interface/userStandart.png'

const ProfileInfo = (props) => {
	return (
		<div className="profileInfo">
			<img src={props.userInfo.photos.small ? props.userInfo.photos.small : user_default_avatar} alt="" className="profileInfo__avatar" />
			<ul className="profileInfo__data">
				<li class="profileInfo__name"><h1>{props.userInfo.fullName}</h1></li>
				<div>
					<li class="profileInfo__city"><i>Looking for a job:</i> {props.userInfo.lookingForAJob
						? <img className="profileInfo__job-look-status" src={check_img} />
						: <img className="profileInfo__job-look-status" src={cross_img} />
					}</li>
					{props.userInfo.lookingForAJob
						&& <li class="profileInfo__age"><i>What work is looking for:</i> {props.userInfo.lookingForAJobDescription}</li>
					}
				</div>
			</ul>
		</div>
	)
}

export default ProfileInfo
