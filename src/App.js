import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import './App.css';
import Search from './components/layouts/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertSate';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route
									exact
									path='/'
									render={(props) => (
										<Fragment>
											<Search />
											<Users />
										</Fragment>
									)}
								/>
								<Route exact path='/about' component={About} />
								<Route excat path='/user/:login' component={User} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
