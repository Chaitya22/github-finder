import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);

	const { user, loading, getUser, getUserRepos, repos } = githubContext;

	useEffect(() => {
		getUserRepos(match.params.login);
		getUser(match.params.login);
		//eslint-disable-next-line
	}, []);

	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = user;

	if (loading) return <Spinner />;

	return (
		<div className='my-4 '>
			<Link to='/' className='btn btn-light mr-2 '>
				Back to search
			</Link>
			Hireable:{' '}
			{hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
			<div className='card my-4'>
				<div className=' row '>
					<div className=' card-body col-6 text-center'>
						<img
							src={avatar_url}
							alt=''
							className='mx-auto'
							style={{ width: '150px', borderRadius: '100%' }}
						/>
						<h1>{name}</h1>
						<p>Location: {location} </p>
					</div>
					<div className='col-6 card-body '>
						{bio && (
							<Fragment>
								<h3>Bio:</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a href={html_url} className='btn btn-dark my-2'>
							{' '}
							Visit Github Profile
						</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Username: {login} </strong>
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Company: {company} </strong>
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Website: {blog} </strong>
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='card text-center mb-3'>
				<div className='card-body'>
					<div className='badge badge-primary mx-2 py-1'>Followers: {followers}</div>
					<div className='badge badge-success mx-2 py-1'>Following: {following}</div>
					<div className='badge badge-danger mx-2 py-1'>Public Repos: {public_repos}</div>
					<div className='badge badge-warning mx-2 py-1'>Public Gists: {public_gists}</div>
				</div>
			</div>
			<Repos repos={repos} />
		</div>
	);
};

export default User;
