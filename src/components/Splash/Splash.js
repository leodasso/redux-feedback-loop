import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Material UI stuff
import Typography from '@material-ui/core/Typography';

class Splash extends Component {


	render() {
		return (
			<div>
                <Typography variant="h4">Hello! Let's get started on some feedback.</Typography>
                <Link to="/feelings"><button>Begin</button></Link>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Splash);
