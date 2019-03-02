import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    render() {

        console.log(this.props.feedback);

        return (
            <div>
                <h1>Review Your Feedback</h1>
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
