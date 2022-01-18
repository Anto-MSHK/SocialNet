import React, { useState, useEffect } from 'react'

export const ProfileStatus = (props) => {

	const [isOpenInput, setIsOpenInput] = useState(false)
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		debugger
		setStatus(props.status)
	}, [props.status])

	const openInput = () => {
		setIsOpenInput(true)
	}

	const closeInput = () => {
		setIsOpenInput(false)
		props.updateStatus(status)
	}

	const changeAddStatus = (e) => {
		setStatus(e.target.value)
	}
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.status !== this.props.status) {
	// 		this.setState({ state: this.props.status })
	// 	}

	// 	// if (prevProps.blocked && !this.props.blocked) {
	// 	// 	debugger
	// 	// 	this.setState({ status: prevState.state })
	// 	// }
	// 	// if (this.props.blocked) {
	// 	// }
	// }

	// state = {
	// 	isOpenInput: false,
	// 	status: this.props.status
	// }

	return (
		<>
			{!props.blocked
				? (!isOpenInput
					? <span onDoubleClick={openInput}><i>Status: </i>{props.status}</span>
					: <input value={status} autoFocus select onBlur={closeInput} onChange={changeAddStatus} type="text" />)
				: (<span><i>Status: </i>{props.status}</span>)
			}
		</>
	)
}

