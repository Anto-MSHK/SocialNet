import React from 'react'
import check_img from '../../../assets/img/interface/check_square_icon.svg'
import cross_img from '../../../assets/img/interface/cross_exit_remove_icon.svg'
import user_default_avatar from '../../../assets/img/interface/userStandart.png'
import ProfileStatus from '../../Status/ProfileStatus'

const ProfileInfo = (props) => {
	return (
		<div className="profileInfo" >
			<img src={props.userInfo.photos.small ? props.userInfo.photos.small : user_default_avatar} alt="" className="profileInfo__avatar" />
			<ul className="profileInfo__data">
				<li className="profileInfo__name"><h1>{props.userInfo.fullName}</h1></li>
				<li className="profileInfo__status">
					<ProfileStatus status={props.status} updateStatus={props.updateStatus} blocked={props.userInfo.userId !== props.myId} />
				</li>
				<div>
					<li className="profileInfo__city"><i>Looking for a job:</i>
						<img className="profileInfo__job-look-status" src={props.userInfo.lookingForAJob ? check_img : cross_img} />
					</li>
					{props.userInfo.lookingForAJob
						&& <li className="profileInfo__age"><i>What work is looking for:</i> {props.userInfo.lookingForAJobDescription}</li>
					}
				</div>
			</ul>
		</div >
	)
}

export default ProfileInfo
