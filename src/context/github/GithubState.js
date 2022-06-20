import React, { useReducer } from 'react';
import Axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { SERACH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER } from '../types';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	};

	const [ state, dispatch ] = useReducer(GithubReducer, initialState);

	//Search  Github Users
	const searchUsers = async (text) => {
		setLoading();
		const res = await Axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		dispatch({
			type: SERACH_USERS,
			payload: res.data.items
		});
	};
	//Git single Github users
	const getUser = async (userName) => {
		setLoading();
		const res = await Axios.get(
			`https://api.github.com/users/${userName}?&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		dispatch({
			type: GET_USER,
			payload: res.data
		});
	};

	//Clear Github users
	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	//Get User repsitory
	const getUserRepos = async (userName) => {
		setLoading();
		const res = await Axios.get(
			`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		dispatch({
			type: GET_REPOS,
			payload: res.data
		});
	};

	//Set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				repos: state.repos,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
