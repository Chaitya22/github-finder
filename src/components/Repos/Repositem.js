import React from 'react';
import PropTypes from 'prop-types';

const Repositem = ({ repo }) => {
	return (
		<div className='card my-2'>
			<h4 className='p-2'>
				<a href={repo.html_url}>{repo.name}</a>
			</h4>
		</div>
	);
};

Repositem.propTypes = {
	repo: PropTypes.object.isRequired
};
export default Repositem;
