import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import { Redirect } from 'react-router-dom';


class CommentFeedback extends Component {


	render() {

		return (
			<div>
                <h1>Thanks!</h1>
                <Link to='/'><button>Return</button></Link>
			</div>
            
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(CommentFeedback);
