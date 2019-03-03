import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    render() {

        // Review of the full feedback thus far. Pulls the values from the feedback object in redux.
        return (
            <div>
                <h3>Review Your Feedback</h3>
                <p>Feelings: {this.props.feedback.feelings}</p>
                <p>Understanding: {this.props.feedback.understanding}</p>
                <p>Support: {this.props.feedback.support}</p>
                <p>Comments: {this.props.feedback.comments}</p>
            </div>
        );
    }
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Review);
