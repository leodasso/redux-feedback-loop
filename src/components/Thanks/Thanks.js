import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Material UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CommentFeedback extends Component {


	render() {

		return (
			<div>
                <Typography variant="h1">Thanks!</Typography>
				<Typography variant="h5">Your feedback was submitted.</Typography>
				<br/>
                <Link to='/'>
					<Button variant="outlined">Submit Another Feedback</Button>
				</Link>
			</div>
            
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(CommentFeedback);
