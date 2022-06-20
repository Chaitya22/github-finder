import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = (props) => {
	const githubContext = useContext(GithubContext);
	const { users, loading } = githubContext;
	if (loading) {
		return <Spinner />;
	} else {
		return <div className='row'>{users.map((user) => <UserItem key={user.key} user={user} />)}</div>;
	}
};

export default Users;
