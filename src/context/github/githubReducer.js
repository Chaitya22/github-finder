import { SERACH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SERACH_USERS:
			return {
				...state,
				loading: false,
				users: action.payload
			};

		case CLEAR_USERS:
			return {
				users: [],
				loading: false
			};

		case GET_USER:
			return {
				...state,
				loading: false,
				user: action.payload
			};

		case GET_REPOS:
			return {
				...state,
				loading: false,
				repos: action.payload
			};

		case SET_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			break;
	}
};
