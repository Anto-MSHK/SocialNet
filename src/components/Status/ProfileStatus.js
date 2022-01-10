import React, { Component } from 'react'

export default class ProfileStatus extends Component {
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ state: this.props.status })
		}

		// if (prevProps.blocked && !this.props.blocked) {
		// 	debugger
		// 	this.setState({ status: prevState.state })
		// }
		// if (this.props.blocked) {
		// }
	}

	state = {
		isOpenInput: false,
		status: this.props.status
	}

	openInput = () => {
		this.setState({ isOpenInput: true, status: this.props.status })
	}

	closeInput = () => {

		this.setState({ isOpenInput: false })
		this.props.updateStatus(this.state.status)
	}

	changeAddStatus = (e) => {
		this.setState({ status: e.target.value })
	}

	render() {
		return (
			<>
				{!this.props.blocked
					? (!this.state.isOpenInput
						? <span onDoubleClick={this.openInput}><i>Status: </i>{this.props.status}</span>
						: <input value={this.state.status} autoFocus select onBlur={this.closeInput} onChange={this.changeAddStatus} type="text" />)
					: (<span><i>Status: </i>{this.props.status}</span>)
				}
			</>
		)
	}
}

