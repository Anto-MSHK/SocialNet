const TOGGLE_FOLLOWER = "TOGGLE-FOLLOWER"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

let initialState = {
	users: [],
	totalCount: 0,
	pageSize: 5,
	actualPage: 1,
}

let usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case TOGGLE_FOLLOWER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, isFollow: !user.isFollow }
					} else {
						return user
					}
				})
			}
		case SET_USERS:
			return { ...state, users: [...action.serverUsers.items], totalCount: action.serverUsers.totalCount }
		case SET_CURRENT_PAGE:
			return { ...state, actualPage: action.currentPage }
		default: return state
	}
}
export const toggleFollowerAC = (userId) => ({ type: TOGGLE_FOLLOWER, userId: userId })
export const setUsersAC = (serverUsers) => ({ type: SET_USERS, serverUsers: serverUsers })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })

export default usersReducer