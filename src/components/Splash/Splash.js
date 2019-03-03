import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Splash.css';

// Material UI stuff
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Splash extends Component {


	render() {
		return (
			<Paper className='Splash-paper'>
                <Typography variant="h5">Hello! Let's get started on some feedback.</Typography>
				<br/>
                <Link to="/feelings">
					<Button size="large" variant="outlined" color="primary">Begin</Button>
				</Link>
			</Paper>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Splash);
