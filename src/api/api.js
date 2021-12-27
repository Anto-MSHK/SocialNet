import * as axios from "axios"

const instance = axios.create({
	headers: { 'API-KEY': 'c6caeb8a-704b-4474-b747-3243cd9e421f' },
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true
});

export const usersAPI = {
	getUsers: (pageSize, actualPage) => {
		return instance.get(`users?count=${pageSize}&page=${actualPage}`, {
		})
			.then((response) => {
				return response.data
			})
	},

	follow: (follow, userId) => {
		if (follow === false) {
			return instance.post(`follow/${userId}`)
				.then((response) => {
					if (response.data.resultCode === 0) {
						return response.data;
					}
				})
		} else {
			return instance.delete(`follow/${userId}`)
				.then((response) => {
					if (response.data.resultCode === 0) {
						return response.data;
					}
				})
		}
	}
}

export const profileAPI = {
	getProfile: (userId) => {
		return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then((response) => {
				// this.props.setExpectation(false)
				return response.data
			})
	},
	getMyProfile: () => {
		return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
			.then((response) => {
				let { id, email, login } = response.data.data
				return { id, email, login }
			})
	}
}