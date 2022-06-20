import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const { showAlert } = alertContext;

	const [ text, setText ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			showAlert('Please Enetr a user name', 'danger');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-group mt-4'>
					<input
						type='text'
						name='text'
						placeholder='Search Users...'
						className='form-control'
						value={text}
						onChange={onChange}
					/>
				</div>
				<button type='submit' values='Search' className='btn btn-dark btn-block '>
					Search
				</button>

				{githubContext.users.length > 0 && (
					<button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
						Clear
					</button>
				)}
			</form>
		</div>
	);
};

export default Search;
