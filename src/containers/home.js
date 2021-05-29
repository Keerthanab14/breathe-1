import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/home.css';
import Count from '../containers/count';

// import Count from './count';

const Home = (props) => {
	const toAnalyze = () => {
		return;
	};

	return (
		<div id="home viewer">
			<div className="custom-container">
				{/* <Count /> */}
				<Link to="/analysis">
					<span className="round-main-btn"> Analysis </span>
				</Link>
				<Count />
			</div>
		</div>
	);
};

const sToP = (state) => ({
	loggedIn: state.login.loggedIn
});

const dToP = (dispatch) => ({
	login: (userData) =>
		dispatch({
			type: 'LOGIN',
			payload: userData
		})
});

export default connect(sToP, dToP)(Home);
