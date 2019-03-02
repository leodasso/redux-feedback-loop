import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Splash extends Component {


	render() {
		return (
			<div>
                <h2>Hello! Let's get started on some feedback.</h2>
                <Link to="/feedback-feelings"><button>Begin</button></Link>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Splash);
