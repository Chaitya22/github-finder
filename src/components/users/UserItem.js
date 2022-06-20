import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
	const { login, avatar_url } = props.user;

	return (
		<div className='col-4'>
			<div className='card text-center mt-3  '>
				<img src={avatar_url} alt='' className=' mx-auto' style={{ width: '60px', borderRadius: '100%' }} />
				<div className='card-body'>
					<h3>{login}</h3>
					<Link to={`/user/${login}`} className='btn btn-dark btn-sm my-2 px-4'>
						More
					</Link>
				</div>
			</div>
		</div>
	);
};

UserItem.protoType = {
	user: PropTypes.object.isRequired
};

export default UserItem;
