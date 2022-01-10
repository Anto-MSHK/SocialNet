import React from 'react'
import { useMatch } from 'react-router-dom';

export const withURLmatch = (url) => (Component) => {
	const URLComponent = (props) => {
		const match = useMatch(url)
		return <Component {...props} match={match} />
	}
	return URLComponent
}
