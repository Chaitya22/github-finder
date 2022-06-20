import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
			<h1 className='navbar-brand'>
				<i className={props.icon} /> {props.title}
			</h1>
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item mx-4'>
					<Link className='nav-link' to='/'>
						Home
					</Link>
				</li>
				<li className='nav-item ml-4 mr-5'>
					<Link className='nav-link' to='/about'>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github '
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
