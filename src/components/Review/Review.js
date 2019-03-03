import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Review.css';

// material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Review extends Component {

    state = { submitted: false, }

    // when the submit feedback button is clicked
    onSubmit = () => {

        // Send the full feedback object to the server with axios
        axios.post('/feedback', this.props.feedback)

        .then( () => {
            // redirect the user to the 'feedback submitted' page
            this.setState({submitted: true});

            // clear out the feedback in redux state
            this.props.dispatch({type: 'FEEDBACK_RESET'});
        })

    }


    // Checks the feedback in redux state, and returns true if all feedback is complete.
    allFeedbackComplete = () => {
        if (this.props.feedback.feelings === 0) return false;
        if (this.props.feedback.understanding === 0) return false;
        if (this.props.feedback.support === 0) return false;
        if (this.props.feedback.comments === '') return false;
        return true;
    }


    // If all feedback is complete, renders a functional submit button.
    // otherwise returns a blocked button with 'incomplete'
    renderSubmitButton = () => {
        if (!this.allFeedbackComplete()) {
            return <Button variant="contained" disabled>Incomplete</Button>;
        }
        return <Button variant="contained" color="primary" onClick={this.onSubmit}>Submit</Button>;
    }


    render() {

        // If the feedback submit was successful, redirect us to the thanks page
        if (this.state.submitted) {
            return <Redirect to='/thanks'/>
        }

        // Review of the full feedback thus far. Pulls the values from the feedback object in redux.
        return (
            <div className="Review">
                <Typography variant="h5">Review Your Feedback</Typography>
                <Typography variant="body1">Feelings: {this.props.feedback.feelings}</Typography>
                <Typography variant="body1">Understanding: {this.props.feedback.understanding}</Typography>
                <Typography variant="body1">Support: {this.props.feedback.support}</Typography>
                <Typography variant="body1">Comments: {this.props.feedback.comments}</Typography>
                {this.renderSubmitButton()}
            </div>
        );
    }
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Review);