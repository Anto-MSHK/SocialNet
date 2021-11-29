const TOGGLE_FOLLOWER = "TOGGLE-FOLLOWER"

let initialState = {
	users: [
		{
			id: 1,
			isFollow: true,
			name: "Chase Frazier",
			status: "Mollit ea est aliquip in do dolor incididunt.",
			city: "Gobjugo",
			country: "Malta"
		},
		{
			id: 2,
			isFollow: false,
			name: "Curtis Phillips",
			status: "Dolore officia minim incididunt aliqua velit velit sint eu dolor.",
			city: "Fuldomdez",
			country: "Belgium"
		},
		{
			id: 3,
			isFollow: false,
			name: "Theresa Hernandez",
			status: "Amet consequat eu reprehenderit ea nisi non et consequat.",
			city: "Nefudnog",
			country: "Laos"
		},
		{
			id: 4,
			isFollow: true,
			name: "Mary Perry",
			status: "Sint aute aute Lorem amet commodo culpa dolore ex nulla.",
			city: "Damwija",
			country: "Macedonia"
		},
		{
			id: 5,
			isFollow: false,
			name: "Brent Wong",
			status: "Culpa sit aute est et ut commodo ad.",
			city: "Unotizti",
			country: "Swaziland"
		},
	]
}
// debugger
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
		default: return state
	}
}
export const toggleFollowerAC = (userId) => ({ type: TOGGLE_FOLLOWER, userId: userId })

export default usersReducer